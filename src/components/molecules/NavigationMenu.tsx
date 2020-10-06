import React from "react";
import NavigationMenuItem from "./NavigationMenuItem";

const NavigationMenu: React.FC<any> = (props) => {
  const navigationList = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Workspace",
      url: "/workspace",
    },
    {
      text: "Invoice",
      url: "/invoice",
    },
    {
      text: "Profile",
      url: "/profile",
    },
    {
      text: "Messages",
      url: "/messages",
    },
    {
      text: "External Link",
      url: "https://google.com",
    },
  ];

  return (
    <ul className="flex space-x-2">
      {navigationList.map((item) => {
        return <NavigationMenuItem data={item} />;
      })}
    </ul>
  );
};

export default NavigationMenu;
