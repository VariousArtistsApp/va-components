import React, { useState, CSSProperties, SVGAttributes } from "react";
import classNames from "classnames";
import { Icon, Props } from "react-feather";

import Clear from "../../../assets/Clear";
import styles from "./TextInput.module.scss";

export enum InputVariant {
  large = "large",
  medium = "default",
  small = "small",
}

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  variant: InputVariant;
  initialValue?: string | number;
  placeholder?: string;
  classNamePrefix?: string;
  className?: string;
  isClearable?: boolean;
  label?: string;
  name?: string;
  icon?: string;
  value?: string | number;
  error?: string;
  style?: CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Text: React.FC<TextInputProps> = ({
  initialValue,
  placeholder,
  variant,
  icon,
  label,
  name,
  value,
  error,
  isClearable,
  onChange,
  onFocus,
  onBlur,
  style,
  className,
  classNamePrefix,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    initialValue ? initialValue : ""
  );

  console.log(error);

  const clear = () => {
    setCurrentValue("");
  };

  const Icon: Icon = icon
    ? require("react-feather/dist/icons/" + icon).default
    : null;

  const iconOptions: Props = {};
  const clearOptions: SVGAttributes<SVGElement> = {};
  switch (variant) {
    case InputVariant.large:
      iconOptions.size = 24;
      clearOptions.height = 24;
      clearOptions.width = 24;
      break;
    case InputVariant.medium:
      iconOptions.size = 20;
      clearOptions.height = 20;
      clearOptions.width = 20;
      break;
    case InputVariant.small:
      iconOptions.size = 16;
      clearOptions.height = 16;
      clearOptions.width = 16;
      break;
  }

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[variant],
        className,
        classNamePrefix + "--wrapper"
      )}
      style={style}
    >
      {label ? (
        <div
          className={classNames(
            styles.label,
            styles[variant],
            classNamePrefix + "--label"
          )}
        >
          {label}
        </div>
      ) : null}
      <div
        className={classNames(
          styles.container,
          styles[variant],
          classNamePrefix + "--container",
          {
            [styles.focused]: focused,
            [styles.invalid]: error,
          }
        )}
      >
        {icon ? (
          <Icon
            {...iconOptions}
            className={classNames(styles.icon, classNamePrefix + "--icon")}
          />
        ) : null}
        <input
          type="text"
          name={name}
          value={value ?? currentValue}
          placeholder={placeholder}
          className={classNames(styles.input, classNamePrefix + "--input")}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            if (onChange) onChange(e);
          }}
          onFocus={(e) => {
            setFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            if (onBlur) onBlur(e);
          }}
          {...rest}
        />
        {isClearable && currentValue && currentValue !== "" && (
          <Clear
            className={classNames(styles.clear, classNamePrefix + "--clear")}
            viewBox="0 0 24 24"
            onClick={clear}
            {...clearOptions}
          />
        )}
      </div>
      <div
        className={classNames(
          styles.error,
          classNamePrefix + "--validation-message"
        )}
      >
        {error && error.length > 0 && error}
      </div>
    </div>
  );
};

Text.defaultProps = {
  variant: InputVariant.medium,
  classNamePrefix: "text-input",
};

export default Text;
