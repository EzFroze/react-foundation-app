import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
// import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
// import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileLoading);
  // const errorI18nKey = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("profileTitle")} />
        <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
          {t("profileEdit")}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t("profileEditName")}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("profileEditLastname")}
          className={styles.input}
        />
      </div>
    </div>
  );
};
