import React, { type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={classNames(styles.Icon, {}, [className])}></Svg>;
};
