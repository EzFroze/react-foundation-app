import { profileReducer } from "entities/Profile";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  type ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  useDynamicModuleLoader({ reducers: initialReducers });

  return (
    <div className={classNames("", {}, [className])}>{t("pageProfile")}</div>
  );
};

export default ProfilePage;
