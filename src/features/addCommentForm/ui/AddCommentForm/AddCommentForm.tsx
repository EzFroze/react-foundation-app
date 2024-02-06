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
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import {
  addCommentFormSliceActions,
  addCommentFormSliceReducer,
} from "../../model/slices/addCommentFormSlice";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormSliceReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo(
  ({ className, onSendComment }) => {
    useDynamicModuleLoader({ reducers });

    const { t } = useTranslation("article");

    const text = useSelector(getAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormSliceActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text ?? "");
      onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <div className={classNames(styles.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t("enterComment")}
          value={text}
          onChange={onCommentTextChange}
          className={styles.input}
        />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t("sendComment")}
        </Button>
      </div>
    );
  }
);

export default AddCommentForm;
