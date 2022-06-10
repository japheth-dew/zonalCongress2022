import React from "react";
import rcf_logo from "../images/rcf_logo.png";

const Header = () => {
  return (
    <div className=" bg-blue-500 w-full p-5 md:px-10">
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold ">
          <img className="md:w-[3rem] w-[2rem]" src={rcf_logo} alt="rcf logo" />
          <p>
            RCF 2022 <br /> Zonal Congress
          </p>
        </div>
        <div className="text-right">
          <div>
            <p className="font-semibold text-[11px] ">THEME:</p>
            <p className="font-bold text-[2rem] md:text-[4rem] text-blue-900 leading-10">
              ADVANCE
            </p>
          </div>
          <div>
            <p className="font-semibold text-[1.3rem] md:text-[2rem]">
              TESTIMONIES
            </p>
            <p className="md:text-[1rem] text-[13px] text-white">...share with us what the Lord has done for You.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
