import React from "react";
import { classNames } from "utils/classnames";

interface Props {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  type?: "text" | "password" | "numeric";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "x2l" | "x3l";
  className?: string;
  noStyle?: boolean;
}

const style = {
  base: "border border-level-3 rounded px-2 py-2",
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    x2l: "text-2xl",
    x3l: "text-3xl",
  },
};

const Input: React.FC<Props> = (props) => {
  const config = {
    size: props.size || "base",
  };

  const handle = {
    onInputChange: (e: any) => {
      props.onChange(e.target.name, e.target.value);
    },
  };

  return (
    <input
      className={classNames(
        props.className,
        !props.noStyle && style.base,
        style.size[config.size]
      )}
      autoFocus={props.autoFocus}
      value={props.value}
      name={props.name}
      onChange={handle.onInputChange}
      placeholder={props.placeholder}
      type={props.type || "text"}
    />
  );
};

export default Input;
