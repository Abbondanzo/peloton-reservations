import { useEffect, useMemo, useRef } from "react";

// Amount of pixels to drag from the top to trigger a refetch
const REFRESH_THRESHOLD = 200;

interface Options {
  refresh: () => Promise<void>;
}

/**
 * iOS disables swipe-to-refresh on PWAs added to the home screen, so we have to compute it ourselves.
 */
export const useSwipeToRefresh = ({ refresh }: Options) => {
  const swipeRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  const requiresSwipeToRefresh = useMemo(() => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !!(navigator as any).standalone ||
      window.matchMedia("(display-mode: standalone)").matches ||
      process.env.NODE_ENV === "development"
    );
  }, []);

  useEffect(() => {
    if (!requiresSwipeToRefresh) return () => {};
    const currentRef = swipeRef.current;
    const currentSpinnerRef = spinnerRef.current;
    const spinnerHeight = currentSpinnerRef
      ? currentSpinnerRef.getBoundingClientRect().height
      : 100;
    let touchStartY = 0;
    let shouldRefresh = false;
    const touchStart = (event: TouchEvent) => {
      touchStartY =
        event.touches[0].clientY + document.documentElement.scrollTop;
    };
    const touchMove = (event: TouchEvent) => {
      const touchY = event.touches[0].clientY;
      const touchDiff = touchY - touchStartY;
      if (touchDiff >= 0) {
        const opacity = Math.pow(Math.min(touchDiff / REFRESH_THRESHOLD, 1), 2);
        const angle = Math.floor((touchDiff / REFRESH_THRESHOLD) * 360);
        if (currentSpinnerRef) {
          currentSpinnerRef.style.transform = `translateY(${Math.min(
            touchDiff,
            spinnerHeight + 8
          )}px) rotate(${angle}deg) `;
          currentSpinnerRef.style.opacity = `${opacity}`;
        }
      }
      shouldRefresh = touchDiff > REFRESH_THRESHOLD;
    };
    const touchEnd = () => {
      if (shouldRefresh) {
        shouldRefresh = false;
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
    };
  }, [refresh, requiresSwipeToRefresh]);

  return { swipeRef, spinnerRef };
};
