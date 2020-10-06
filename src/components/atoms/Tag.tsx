import React from "react";
import { classNames } from "utils/classnames";

interface Props {
  onClick?: () => void;
  color?: "normal" | "primary" | "secondary" | "muted" | "danger" | "success";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "x2l" | "x3l";
  className?: string;
}

const style = {
  base: "rounded-full px-4 py-2",

  color: {
    normal: "bg-button",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    muted: "bg-muted text-white",
    danger: "bg-red-600 text-white",
    success: "bg-green-600 text-white",
  },
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

const Tag: React.FC<Props> = (props) => {
  const config = {
    color: props.color || "normal",
    size: props.size || "base",
  };

  return (
    <button
      className={classNames(
        props.className,
        style.base,
        style.color[config.color],
        style.size[config.size]
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Tag;
