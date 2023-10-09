import React, {
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus,
    onSelect,
    autoFocus = false,
    ...otherProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);

    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    const onSelectHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setCaretPosition(event.target.selectionStart ?? 0);
      onSelect?.(event);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setCaretPosition(event.target.value.length);
    };

    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder ? (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        ) : null}
        <div className={styles.caretWrapper}>
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeHandler}
            className={styles.input}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            onSelect={onSelectHandler}
            {...otherProps}
          />
          {isFocused ? (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 11.2}px` }}
            />
          ) : null}
        </div>
      </div>
    );
  }
);
