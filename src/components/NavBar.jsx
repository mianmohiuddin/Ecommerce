import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-white  flex justify-center  items-center gap-28 pr-14 mt-4">
      <h1 className="text-[24px] font-bold leading-6 text-[#000000] ">
        {" "}
        Exclusive
      </h1>
      <div className=" flex gap-10 pl-14">
        <Link to="/Home">
          <span className="text-[16px] leading-6 font-normal text-[#000000]">
            Home
          </span>
        </Link>
        <Link to="/Contact">
          <span className="text-[16px] leading-6 font-normal text-[#000000]">
            Contact
          </span>
        </Link>
        <Link to="/About">
          <span className="text-[16px] leading-6 font-normal text-[#000000]">
            About
          </span>
        </Link>
        <Link to="/SignUp">
          <span className="text-[16px] leading-6 font-normal text-[#000000]">
            SignUp
          </span>
        </Link>
      </div>

      <div className="flex items-center  text-[12px] leading-6 text-[#000000] gap-4">
        <input
          type="text"
          placeholder="What are you looking for?                ⌕ "
          className=" gap-8 rounded-[4px] pl-4 bg-[#F5F5F5] w-[243px] h-[38px] "
        />
        <Link to="/Wishlist">
          <img
            src="images/icon2.png"
            alt="icon"
            className="w-[30px] object-cover"
          />
        </Link>
        <Link to="/Pro">
          <img
            src="images/icon5.png"
            alt="icon"
            className="w-[30px] object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
