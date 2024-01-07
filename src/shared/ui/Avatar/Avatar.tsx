import { type FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
  className,
  src,
  size = 100,
  alt,
}) => {
  const inlineStyles = useMemo(() => {
    return {
      "--avatar-width": `${size}px`,
      "--avatar-height": `${size}px`,
    };
  }, [size]);

  return (
    <img
      src={src}
      alt={alt}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-expect-error
      style={inlineStyles}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};
