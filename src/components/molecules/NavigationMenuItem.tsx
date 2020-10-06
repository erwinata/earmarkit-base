import React from "react";
import { classNames } from "utils/classnames";

interface Props {
  data: {
    text: string;
    url: string;
  };
  isActive?: boolean;
}

const style = {
  base:
    "font-semibold uppercase tracking-wider text-xs cursor-pointer opacity-75",
  hover: "transition transform duration-100 hover:opacity-100 hover:scale-105",
  active: "text-primary",
  a: "px-2 py-3",
};

const NavigationMenuItem: React.FC<Props> = (props) => {
  return (
    <li
      className={classNames(
        style.base,
        style.hover,
        props.isActive && style.active
      )}
    >
      <a href={props.data.url} className={style.a}>
        {props.data.text}
      </a>
    </li>
  );
};

export default NavigationMenuItem;
