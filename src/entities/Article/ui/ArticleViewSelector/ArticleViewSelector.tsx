import { type FC, memo } from "react";
import ListIcon from "shared/assets/icons/list.svg";
import TiledIcon from "shared/assets/icons/tiled.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleView } from "../../model/types/article";
import styles from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  ({ className, view, onViewClick }) => {
    const onClick = (newView: ArticleView) => {
      return () => {
        onViewClick?.(newView);
      };
    };

    return (
      <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((type) => (
          <Button
            key={type.view}
            theme={ButtonTheme.CLEAR}
            onClick={onClick(type.view)}
          >
            <Icon
              Svg={type.icon}
              className={classNames("", {
                [styles.selected]: type.view === view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
