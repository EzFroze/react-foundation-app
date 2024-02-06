import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { type FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation("profile");

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onClickEditProfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onClickCancelEditProfile = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onsClickSaveProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t("profileTitle")} />
      {canEdit ? (
        readonly ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onClickEditProfile}
          >
            {t("profileEdit")}
          </Button>
        ) : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={styles.editBtn}
              onClick={onClickCancelEditProfile}
            >
              {t("profileEditCancel")}
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={onsClickSaveProfile}>
              {t("profileEditSave")}
            </Button>
          </>
        )
      ) : null}
    </div>
  );
};
