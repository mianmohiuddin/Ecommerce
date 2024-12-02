import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [count,setCount]=useState()
  const handleClick=()=>{
    setCount(count + 1)
  }
  const navigate=useNavigate()
  const handleForgetPassword=()=>{
    navigate("/forgot-pasword")
  }
  return (
    <div className="w-full flex items-center justify-center bg-white  mt-14">
      <div className="w-full flex justify-start items-start gap-16">
        <img
          src="images/SideImage.png"
          alt="image"
          className="w-[750px] h-[720px] pr-6"
        />
        <div className="flex flex-col justify-start items-start bg-white mt-28">
          <div className="">
            <h1 className="text-[36px] font-semibold text-[#000000] leading-7 mt-16">
              Create an account
            </h1>
            <p className="text-[16px] font-normal text-[#000000] leading-6 mt-4">
              Enter your details below
            </p>
            <form className="space-y-4 mt-10 ">
              <div>
                <input
                  type="email"
                  className="w-full p-3 text-[16px] text-[#000000] font-normal border border-gray-300 rounded "
                  placeholder="Email or Phone Number"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full p-3 text-[16px] text-[#000000] font-normal border rounded"
                  placeholder="Password"
                />
              </div>
              <div className="w-full flex gap-20 ">
                <button className="w-[143px] h-[56px] text-[16px] text-center font-normal bg-red-600 text-white border rounded">
                  Log In
                </button>
                <span style={{color:"red",cursor:"pointer"}} onClick={handleForgetPassword} className="text-[16px] font-normal text-center  text-red-500 mt-3">
                  Forget Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
