import React from "react";

function Arrivals() {
  return (
    <div className="w-[86%] flex flex-col items-center bg-white mt-16 pl-9">
      <div className="w-full flex  gap-4 ">
        <img src="images/Rectangle17.png" alt="" className="w-[14px] " />
        <h1 className=" text-[16px] font-medium text-[#DB4444]">Featured</h1>
      </div>
      <div className="w-full flex flex-col mt-4">
        <h2 className="text-[36px] text-[#000000] font-semibold leading-8">
          New Arrival
        </h2>
      </div>
      {/* left */}
      <div className="w-full flex gap-7 mt-8">
        <div className="w-[510px] h-[540px] bg-black flex justify-center items-center relative ">
          <img
            src="images/arrival.png"
            alt="PlayStation 5"
            className="w-[430px] h-[460px] "
          />
          <div className="absolute text-white bottom-16 items-center left-14">
            <h3 className="text-[24px] leading-7 flex gap-2 font-semibold">
              PlayStation 5
            </h3>
            <p className="text-[16px] font-medium leading-7 text-gray-300 ">
              Black and White version of the PS5
              <br /> coming out on sale.
            </p>
            <a href="#" className="text-white underline mt-4">
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Section  */}
        <div className=" flex flex-col">
          <div className="w-[570px] h-[284px] flex relative ">
            <img
              src="images/girl.png"
              alt="Women's Collection"
              className="w-[530px] h-[284px] object-cover"
            />
            <div className="absolute bottom-6 left-7">
              <h3 className="text-[24px] font-semibold text-white leading-6 mb-4">
                Women s Collections
              </h3>
              <p className="text-[16px] font-medium text-gray-300">
                Featured woman collections that give
                <br /> you another vibe.
              </p>
              <a href="#" className="text-white underline mt-4">
                Shop Now
              </a>
            </div>
          </div>
          {/* Bottom  */}
          <div className="flex gap-3 mt-2 ">
            {/* Speakers Card */}
            <div className=" w-[260px] h-[240px] flex justify-center items-center relative bg-black mt-2">
              <img
                src="images/speakrs.png"
                alt="Speakers"
                className="w-[180px] h-[200px]"
              />
              <div className="absolute bottom-8 left-4 ">
                <h3 className="text-[24px] text-white font-semibold">
                  Speakers
                </h3>
                <p className="text-[16px] font-medium text-gray-300">
                  Amazon wireless speakers
                </p>
                <a href="#" className="text-white underline">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Perfume Card */}
            <div className=" w-[260px] h-[240px] flex justify-center items-center relative bg-black mt-2">
              <img
                src="images/perfume.png"
                alt="Speakers"
                className="w-[180px] h-[200px]"
              />
              <div className="absolute bottom-8 left-4 ">
                <h3 className="text-[24px] text-white font-semibold">
                  Perfume
                </h3>
                <p className="text-[16px] font-normal text-gray-300">
                GUCCI INTENSE OUD EDP
                </p>
                <a href="#" className="text-white underline">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
