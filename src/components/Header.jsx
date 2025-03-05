import React from "react";
import group from "../assets/Group.png";
import sort from "../assets/Iconly.png";
import user from "../assets/user.png";
import vector from "../assets/Vector.png";
import icon from "../assets/Icon.png";
import light from "../assets/light-mode.png";

const Header = () => {
  return (
    <div className="flex w-full h-[66px] self-center bg-black gap-10 nd:gap-20 justify-between items-center px-8 py-8 max-[580px]:gap-2">
      <div className="flex items-center gap-4 max-[580px]:hidden">
        <img src={group} alt="" className="w-[35px] h-[35px]" />
        <p className="text-white font-semibold text-[24px] hidden nd:block">
          To-Do List
        </p>
      </div>

      <div className="flex flex-1 w-full items-center gap-4">
        <input
          type="text"
          placeholder="search"
          className="flex bg-[url('../assets/search-icon.png')] border border-border-color rounded-[12px] w-full h-[35px] bg-black-light"
        />
        <div className="flex bg-black-light w-[35px] h-[35px] items-center justify-center rounded-[8px] border border-border-color max-[380px]:hidden">
          <img src={sort} alt="" className="object-contain w-[24px] h-[24px]" />
        </div>
      </div>

      <div className="flex items-center gap-4 nd:gap-14">
        <div className="flex flex-1 gap-2 items-center max-[580px]:hidden">
          <span className="text-white hidden nd:block">Light</span>
          <div className="flex items-center gap-2 justify-center w-[69px] h-[32px] bg-gray-dark rounded-[18px] relative">
            <img src={icon} alt="" className="w-[20px] h-[20px]" />
            <img src={light} alt="" className="w-[20px] h-[20px]" />
            <div className="bg-magenta-light rounded-[25px] w-[26px] h-[26px] absolute z-10 right-1 left-1"></div>
          </div>
          <span className="text-white hidden nd:block">Dark</span>
        </div>
        <div className="flex flex-1 gap-2 items-center">
          <div>
            <img
              src={user}
              alt=""
              className="rounded-[14px] w-[40px] h-[40px]"
            />
          </div>
          <span className="text-white hidden nd:block">Harsh</span>
        </div>
        <div>
          <img src={vector} alt="" className="w-[35px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
