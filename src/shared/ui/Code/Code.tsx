import { type FC, memo, useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./Code.module.scss";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={styles.copyButton}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
