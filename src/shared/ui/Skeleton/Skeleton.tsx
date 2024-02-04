import { type FC } from "react";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = memo(
  ({ className, width = "100%", height = "50px", borderRadius = "0px" }) => {
    const inlineStyles = {
      "--skeleton-width": width,
      "--skeleton-height": height,
      "--skeleton-border-radius": borderRadius,
    };

    return (
      <div
        className={classNames(styles.Skeleton, {}, [className])}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
        style={inlineStyles}
      ></div>
    );
  }
);
