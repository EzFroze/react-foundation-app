import { getUserAuthData } from "entities/User";
import React, { type FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { type SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, {
        [styles.collapsed]: collapsed,
      })}
    >
      <item.Icon className={styles.icon} />
      {/* i18next-extract-disable-next-line */}
      <span className={styles.link}>{t(item.textKey)}</span>
    </AppLink>
  );
});
