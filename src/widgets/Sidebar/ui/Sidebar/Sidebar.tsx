import React, { type FC, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { sidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  /** Дополнительный класс на корневой элемент */
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        square
        size={ButtonSize.L}
        data-testid="toggle-button"
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
});
