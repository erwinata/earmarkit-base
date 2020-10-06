import React from "react";
import { classNames } from "utils/classnames";

interface Props {
  src: string;
  alt?: string;
  onClick?: () => void;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "x2l" | "x3l";
}

const style = {
  base: "rounded-full",
  size: {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    base: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
    x2l: "w-48 h-48",
    x3l: "w-64 h-64",
  },
};

const Avatar: React.FC<Props> = (props) => {
  const config = {
    size: props.size || "base",
  };

  return (
    <div onClick={props.onClick}>
      <img
        src={props.src}
        alt={props.alt || "Avatar"}
        className={classNames(style.base, style.size[config.size])}
      />
    </div>
  );
};

export default Avatar;
