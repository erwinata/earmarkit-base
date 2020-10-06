import Avatar from "components/atoms/Avatar";
import NavigationMenu from "components/molecules/NavigationMenu";
import SearchBar from "components/molecules/SearchBar";
import React, { useState } from "react";
import UserPopup from "./UserPopup";

const Navbar: React.FC<any> = (props) => {
  const [isUserPopupShown, setIsUserPopupShown] = useState(false);

  const handle = {
    closePopup: () => setIsUserPopupShown(false),
  };

  return (
    <div className="sticky top-0 bg-navbar py-2 w-full text-white z-40">
      <div>
        {isUserPopupShown && <UserPopup closePopup={handle.closePopup} />}
      </div>

      <div className=" flex space-x-2 px-4 justify-between items-center">
        <SearchBar />
        <div className="flex justify-between items-center space-x-4">
          <NavigationMenu />
          <Avatar
            src="/avatar.jpg"
            onClick={() => setIsUserPopupShown(true)}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
