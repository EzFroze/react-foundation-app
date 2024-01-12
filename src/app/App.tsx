import { userActions } from "entities/User";
import { getUserInited } from "entities/User/model/selectors/getUserInited/getUserInited";
import React, { type FC, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

export const App: FC = () => {
  const { theme } = useTheme();

  const dispacth = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispacth(userActions.initAuthData());
  }, [dispacth]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  );
};
