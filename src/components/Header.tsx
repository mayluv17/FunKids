import star_icon from "assets/star.svg";
import burger from "assets/Icons/burger.svg";
// import { useState } from "react";

interface headerProps {
  toggleMenu: () => void;
}

const Header = ({ toggleMenu }: headerProps) => {
  return (
    <div className="flex justify-between items-center h-[118px] bg-lemon px-6">
      <div className="text-white flex font-Itim w-9">
        <img
          className="w-8 mr-4"
          src={burger}
          alt="menu_icon"
          onClick={toggleMenu}
        />
        <div className="block">
          <span className="text-3xl">Moi!</span>
          <p className="text-l leading-3">Ibrahim</p>
        </div>
      </div>
      <div className="text-white w-9 items-center flex mr-8 font-Itim">
        <img src={star_icon} className="mr-2" />
        {"192"}
      </div>
    </div>
  );
};

export default Header;
