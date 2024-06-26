import { type MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  wrapperRef,
  callback,
  triggerRef,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (!callback) {
      return;
    }

    const options = {
      root: wrapperElement,
      rootMargin: "1px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
