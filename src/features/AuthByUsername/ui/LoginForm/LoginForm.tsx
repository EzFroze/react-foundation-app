import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  type ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers: initialReducers });

  const dispatch = useAppDispatch();

  const { username, password, isLoading, errorI18nKey } =
    useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback<() => void>(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t("loginFormTitle")}></Text>
      {errorI18nKey ? (
        <Text text={t(errorI18nKey)} theme={TextTheme.ERROR} />
      ) : null}
      <Input
        type="text"
        className={styles.input}
        placeholder={t("loginFormUserNameInput")}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={styles.input}
        placeholder={t("loginFormUserPasswordInput")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={styles.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={handleLoginClick}
        disabled={isLoading}
      >
        {t("login")}
      </Button>
    </div>
  );
});

export default LoginForm;
