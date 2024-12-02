import React, { useState } from "react";

function DropDown() {
  const [isWomensOpen, setIsWomensOpen] = useState(false);
  const [isMensOpen, setIsMensOpen] = useState(false);

  return (
    <div className="w-[86%] flex flex-col sm:flex-row justify-center mt-10 gap-6 sm:gap-20 pr-4 sm:pr-9">
      <div className="flex flex-col justify-center items-start">
        <div className="w-full flex gap-3">
          <span className="text-[16px] font-normal leading-6 mb-2">
            Women's 
          </span>
          <div className="text-[16px] font-bold text-black mb-2">
            <button
              onClick={() => setIsWomensOpen(!isWomensOpen)}
              className="text-left border-red-700 "
            >
              {isWomensOpen ? "v" : ">"}
            </button>
            {isWomensOpen && (
              <div className="p-2 z-10 absolute w-[100px] border border-gray-3">
                <ul>
                  <li className="p-1">Option 1</li>
                  <li className="p-1">Option 2</li>
                  <li className="p-1">Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex gap-3">
          <span className="text-[16px] font-normal leading-6 mb-2">
            Men's 
          </span>
          <div className="text-[16px] font-bold text-black">
            <button
              onClick={() => setIsMensOpen(!isMensOpen)}
              className="text-left border-red-700"
            >
              {isMensOpen ? "v" : ">"}
            </button>
            {isMensOpen && (
              <div className="p-2 z-10 absolute w-[100px] border border-gray-300 bg-red-500">
                <ul>
                  <li className="p-1">Option 1</li>
                  <li className="p-1">Option 2</li>
                  <li className="p-1">Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <span className="text-[16px] font-normal leading-6 mb-2">
          Electronics
        </span>
        <span className="text-[16px] font-normal leading-6 mb-2">
          Home & Lifestyle
        </span>
        <span className="text-[16px] font-normal leading-6 mb-2">Medicine</span>
        <span className="text-[16px] font-normal leading-6 mb-2">
          Sports & Outdoor
        </span>
        <span className="text-[16px] font-normal leading-6 mb-2">
          Baby's & Toys
        </span>
        <span className="text-[16px] font-normal leading-6 mb-1">
          Groceries & Pets
        </span>
        <span className="text-[16px] font-normal leading-6">
          Health & Beauty
        </span>
      </div>
      <div className="w-full sm:w-[817px] mt-6 sm:mt-0">
        <div className="bg-[#000000] text-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 p-4 sm:p-0">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex gap-4 items-center mb-3">
              <img
                src="images/iphonepic.png"
                alt="iphn"
                className="w-[40px] h-[49px]"
              />
              <h2 className="text-[16px] font-semibold leading-6 mt-3">
                iPhone 14 Series
              </h2>
            </div>
            <p className="text-[32px] sm:text-[48px] font-normal leading-10">
              Up to 10%
            </p>
            <p className="text-[32px] sm:text-[48px] font-normal leading-10 mt-2 sm:mt-4">
              off Voucher
            </p>
            <button className="w-[90px] sm:w-[113px] text-[14px] sm:text-[16px] font-normal leading-6 mt-6 sm:mt-8 underline">
              Shop Now →
            </button>
          </div>
          <img
            src="images/iphone.png"
            alt="iPhone 14"
            className="w-[250px] sm:w-[420px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
