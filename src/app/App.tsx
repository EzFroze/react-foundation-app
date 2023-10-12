import { userActions } from "entities/User";
import React, { type FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

export const App: FC = () => {
  const { theme } = useTheme();

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(userActions.initAuthData());
  }, [dispacth]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
