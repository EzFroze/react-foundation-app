import { type FC, memo, type MutableRefObject, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import styles from "./Page.module.scss";

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo(
  ({ className, children, onScrollEnd }) => {
    const wrapperRef =
      useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
    const triggerRef =
      useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
    });

    return (
      <section
        className={classNames(styles.Page, {}, [className])}
        ref={wrapperRef}
      >
        {children}
        <div ref={triggerRef} />
      </section>
    );
  }
);
