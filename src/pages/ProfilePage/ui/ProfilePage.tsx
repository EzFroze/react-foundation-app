import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { type FC, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
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
  useDynamicModuleLoader({ reducers: initialReducers });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={classNames("", {}, [className])}>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
