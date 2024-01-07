import { type ChangeEvent, type FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo(
  ({ className, label, options, value, onChange, readonly }) => {
    const optionsList = useMemo(() => {
      return options.map((option) => (
        <option
          key={option.value}
          className={styles.option}
          value={option.value}
        >
          {option.content}
        </option>
      ));
    }, [options]);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <div className={classNames(styles.Wrapper, {}, [className])}>
        {label ? <span className={styles.label}>{label + ">"}</span> : null}
        <select
          value={value}
          onChange={onChangeHandler}
          className={styles.select}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
