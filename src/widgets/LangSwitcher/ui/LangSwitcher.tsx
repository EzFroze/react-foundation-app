import { type FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
      <Button
        onClick={toggle}
        className={classNames("", {}, [className])}
        theme={ButtonTheme.CLEAR}
      >
        {short ? t("shortLanguage") : t("language")}
      </Button>
    );
  }
);
