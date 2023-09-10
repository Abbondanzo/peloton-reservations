import { useEffect, useRef } from "react";

// Amount of pixels to drag from the top to trigger a refetch
const REFRESH_THRESHOLD = 100;

interface Options {
  refresh: () => Promise<void>;
}

export const useSwipeToRefresh = ({ refresh }: Options) => {
  const swipeRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = swipeRef.current;
    const currentSpinnerRef = spinnerRef.current;
    const spinnerHeight = currentSpinnerRef
      ? currentSpinnerRef.getBoundingClientRect().height
      : 100;
    let touchStartY = 0;
    let shouldRefresh = false;
    let animationTimeout: number | undefined;
    const touchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };
    const touchMove = (event: TouchEvent) => {
      const touchY = event.touches[0].clientY;
      const touchDiff = touchY - touchStartY;
      if (touchDiff >= 0) {
        const angle = Math.floor((touchDiff / REFRESH_THRESHOLD) * 360);
        if (currentSpinnerRef) {
          currentSpinnerRef.style.transform = `translateY(${Math.min(
            touchDiff,
            spinnerHeight + 8
          )}px) rotate(${angle}deg) `;
        }
      }
      shouldRefresh = touchDiff > REFRESH_THRESHOLD && window.scrollY === 0;
    };
    const touchEnd = () => {
      if (shouldRefresh) {
        if (currentSpinnerRef) {
          currentSpinnerRef.classList.add("animate");
        }
        refresh().finally(() => {
          if (currentSpinnerRef) {
            currentSpinnerRef.style.transform = ``;
            currentSpinnerRef.classList.remove("animate");
          }
        });
      } else {
        if (currentSpinnerRef) {
          currentSpinnerRef.style.transform = ``;
        }
      }
    };
    currentRef?.addEventListener("touchstart", touchStart);
    currentRef?.addEventListener("touchmove", touchMove);
    currentRef?.addEventListener("touchend", touchEnd);
    return () => {
      currentRef?.removeEventListener("touchstart", touchStart);
      currentRef?.removeEventListener("touchmove", touchMove);
      currentRef?.removeEventListener("touchend", touchEnd);
      clearTimeout(animationTimeout);
    };
  }, [refresh]);

  return { swipeRef, spinnerRef };
};
