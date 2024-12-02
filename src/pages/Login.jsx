import React, { useState } from "react";
const Login = () => {
  const [count,setCount]=useState()
  const handleClick=()=>{
    setCount(count + 1)
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
            <h1 className="text-[36px] font-semibold text-[#000000] leading-7">
              Create an account
            </h1>
            <p className="text-[16px] font-normal text-[#000000] leading-6 mt-2">
              Enter your details below
            </p>
            <form className="space-y-4 mt-5 ">
              <div>
                <input
                  type="text"
                  className="w-full p-3 text-[16px] text-[#000000] font-normal border border-gray-300 rounded"
                  placeholder="Name"
                />
              </div>
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
              <button onClick={handleClick} className="w-full text-[16px] font-normal bg-red-500 text-white py-3 rounded border">
                Create Account
              </button>

              <button onClick={handleClick} className="w-full text-[16px] font-normal flex justify-center items-center bg-white text-black py-3 rounded border">
                <img
                  src="images/Google.png"
                  alt="im"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>
              <p onClick={handleClick} className="text-[16px] font-normal text-center text-[#000000] mt-6">
                Already have account?
                <span onCLick={handleClick} className="text-[#000000] text-[16px] font-medium hover:underline">
                  {" "}
                  Log in
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
