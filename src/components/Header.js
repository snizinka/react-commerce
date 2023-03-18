import React from "react"
import { logo } from "../assets";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
            <img className="w-28" src={logo} alt="OSKANS" />
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default Header;
