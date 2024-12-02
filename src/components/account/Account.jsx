import React from "react";

const Account = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center bg-white mt-10">
      <div className="w-[86%] flex justify-between p-8">
        <h1 className="text-[14px] font-normal text-black ">
          Home / My Account
        </h1>
        <div className="flex pr-2 gap-1">
          <p className="text-[14px] font-normal text-black">Welcome !</p>
          <p className="text-[14px] font-normal text-red-600 ">MD Prime</p>
        </div>
      </div>
      <div className="w-[86%] flex  justify-between">
        <div className="w-[86%] flex flex-col">
          <div className="flex flex-col p-8">
            <h2 className="text-[16px] text-black  leading-6 font-medium">
              Manage My Account
            </h2>
            <p className="text-[16px] text-red-500 leading-6 font-normal pl-6 mt-4">
              My Profile
            </p>
            <p className="text-[16px] text-black leading-6 font-normal pl-6 mt-3">
              Address Book
            </p>
            <p className="text-[16px] text-black leading-6 font-normal pl-6 mt-3">
              My Payment Options
            </p>
          </div>
          <div className="flex flex-col pl-8 mt-8">
            <h2 className="text-[16px] text-black  leading-6 font-medium">
              My Orders
            </h2>
            <p className="text-[16px] text-red-500 leading-6 font-normal pl-6 mt-4">
              My Returns
            </p>
            <p className="text-[16px] text-black leading-6 font-normal pl-6 mt-3">
              My Cancellations
            </p>
          </div>
          <div className="flex flex-col pl-8 mt-8">
            <h2 className="text-[16px] text-black  leading-6 font-medium">
              My WishLists
            </h2>
          </div>
        </div>

        <div className="w-[890px] h-[610px] flex flex-col border-[2px] mt-10">
          <h1 className="text-[20px] font-medium text-red-500 p-6">
            Edit Your Profile
          </h1>

          <div className="flex  gap-6 text-black px-12 mt-5">
            <div className="flex flex-col">
              <label className="text-[16px] font-medium mb-1">First Name</label>
              <input
                text=""
                className="w-[250px] p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-medium mb-1">Last Name</label>
              <input
                text="Last Name"
                className="w-[250px] p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="mohiuddin"
              />
            </div>
          </div>
          <div className="flex px-12 mt-3 gap-6">
            <div className="flex flex-col ">
              <label className="text-[16px] font-medium mb-1">Last Name</label>
              <input
                text="Last Name"
                className="w-[250px] p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="mohiuddin"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-medium mb-1">Last Name</label>
              <input
                text="Last Name"
                className="w-[250px] p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="mohiuddin"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col px-12 mt-4">
              <label className="text-[16px] font-medium mb-1">
                Password changes
              </label>
              <input
                text="Last Name"
                className="w-full p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="Current Password"
              />
            </div>
            <div className="flex flex-col px-12 mt-4">
              <input
                text="Last Name"
                className="w-full p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="New Password"
              />
            </div>
            <div className="flex flex-col px-12 mt-4">
              <input
                text="Last Name"
                className="w-full p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="flex justify-end items-end p-7">
            <span className="text-[16px] p-4 font-normal text-black items-center justify-center">Cancel</span>
          <button className="w-[190px] h-[56px] text-[16px] font-normal bg-red-600 text-white mt-3">Save Changes </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
