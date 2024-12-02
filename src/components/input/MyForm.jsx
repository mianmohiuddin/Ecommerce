import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
const MyForm = () => {
  return (
    <div className="w-full flex justify-start items-start bg-white mt-10 pl-20">
      <div className="flex gap-24">
        <form className="w-[470px] h-[766px]  bg-white p-4 rounded pl-8">
          <h2 className="text-[32px] font-bold mb-6 text-start mt-5">
            Billing Details
          </h2>

          <div className="mb-4">
            <label className="block text-black font-medium mb-2">
              First Name
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Company Name<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Street Address<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Apartment, floor, etc. (optional)
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Town/City*<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Phone Number*<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Email<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        <div className="w-[527px] h-[500px]  border-[2px] mt-36 ">
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3">
              <div className="flex gap-4 mt-2">
                <img src="images/product.png" className="w-12" />
                <p>LCD Monitor</p>
              </div>
              <p>$1750</p>
            </div>
            <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3">
              <div className="flex gap-4 mt-2">
                <img src="images/prdouctlcd.png" className="w-12" />
                <p>H1 Gamepad</p>
              </div>
              <p>$1150</p>
            </div>
            <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3 mt-2">
              <p>SubTotal</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3 mt-1">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between w-full underline text-[16px] text-black font-medium p-3 mt-1">
              <p>Total</p>
              <p>$1750</p>
            </div>
          </div>
          <div className="flex  underline text-[16px] text-black font-medium p-3 ">
              <div className="flex justify-between gap-4">
              <FaRegCircle />
                <p className=" flex">Bank</p>
                <SiVisa />
              </div>
             
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
