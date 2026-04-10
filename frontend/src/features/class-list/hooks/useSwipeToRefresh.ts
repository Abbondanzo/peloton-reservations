import { useEffect, useMemo, useRef } from "react";

// Raw drag distance required to trigger a refresh
const REFRESH_THRESHOLD = 150;
// Maximum visual travel of the spinner (rubber-band damping)
const MAX_TRAVEL = 60;

interface Options {
  refresh: () => Promise<void>;
}

const getScrollTop = () =>
  document.documentElement.scrollTop || document.body.scrollTop;

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
    if (!requiresSwipeToRefresh) return;

    let touchStartY = 0;
    let pulling = false;
    let shouldRefresh = false;
    let isRefreshing = false;

    const resetSpinner = (animated: boolean) => {
      const el = spinnerRef.current;
      if (!el) return;
      el.style.transition = animated
        ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease"
        : "none";
      el.style.transform = "";
      el.style.opacity = "0";
    };

    const touchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      pulling = false;
      shouldRefresh = false;
    };

    const touchMove = (e: TouchEvent) => {
      if (isRefreshing) return;
      // Only engage pull-to-refresh when the page is scrolled to the very top
      if (getScrollTop() > 0) return;

      const delta = e.touches[0].clientY - touchStartY;
      if (delta <= 0) {
        if (pulling) {
          pulling = false;
          shouldRefresh = false;
          resetSpinner(false);
        }
        return;
      }

      pulling = true;
      shouldRefresh = delta >= REFRESH_THRESHOLD;

      // Rubber-band: fast at first, decelerates toward MAX_TRAVEL
      const progress = Math.min(delta / REFRESH_THRESHOLD, 1);
      const travel = MAX_TRAVEL * (1 - Math.pow(1 - progress, 2));
      const opacity = Math.pow(progress, 0.5);
      const angle = Math.floor(progress * 270);

      const el = spinnerRef.current;
      if (el) {
        el.style.transition = "none";
        el.style.transform = `translateY(${travel}px) rotate(${angle}deg)`;
        el.style.opacity = String(Math.min(opacity, 1));
      }
    };

    const touchEnd = () => {
      if (!pulling) return;
      pulling = false;

      if (shouldRefresh && !isRefreshing) {
        shouldRefresh = false;
        isRefreshing = true;

        const el = spinnerRef.current;
        if (el) {
          el.classList.add("animate");
          // Hold spinner in place while refreshing
          el.style.transition = "none";
          el.style.transform = `translateY(${MAX_TRAVEL}px)`;
          el.style.opacity = "1";
        }

        refresh().finally(() => {
          isRefreshing = false;
          const el = spinnerRef.current;
          if (el) {
            el.classList.remove("animate");
            resetSpinner(true);
          }
        });
      } else {
        shouldRefresh = false;
        resetSpinner(true);
      }
    };

    const touchCancel = () => {
      pulling = false;
      shouldRefresh = false;
      resetSpinner(false);
    };

    const el = swipeRef.current;
    el?.addEventListener("touchstart", touchStart, { passive: true });
    el?.addEventListener("touchmove", touchMove, { passive: true });
    el?.addEventListener("touchend", touchEnd, { passive: true });
    el?.addEventListener("touchcancel", touchCancel, { passive: true });

    return () => {
      el?.removeEventListener("touchstart", touchStart);
      el?.removeEventListener("touchmove", touchMove);
      el?.removeEventListener("touchend", touchEnd);
      el?.removeEventListener("touchcancel", touchCancel);
    };
  }, [refresh, requiresSwipeToRefresh]);

  return { swipeRef, spinnerRef };
};
