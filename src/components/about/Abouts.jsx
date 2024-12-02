import React from "react";

function about() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center bg-white mt-10">
      <div className="w-[86%] flex p-10">
      <h1 className="text-[16px] text-black font-normal"> Home / About</h1></div>
      <div className="w-full flex  justify-center items-center mt-16">
        <div className="w-full flex flex-col mb-16  pl-36">
          <h1 className="text-[54px] leading-10 text-black">Our Story</h1>
          <p className="text-[16px] text-black font-normal leading-6 mt-5">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            <br />
            makterplace with an active presense in Bangladesh. Supported <br />
            by wide range of tailored marketing, data and service solutions,3
            <br />
            Exclusive has 10,500 sallers and 300 brands and serves
            <br />
            millioons customers across the region. <br />
            Exclusive has more than 1 Million products to offer, growing at a
            <br />
            very fast. Exclusive offers a diverse assotment in categories
            <br />
            ranging from consumer.
          </p>
        </div>

        <img
          src="images/shopingpic.png"
          alt="image"
          className="w-[837px] h-[460px] pr-6"
        />
      </div>

      <div className="flex flex-wrap gap-6 mt-10 ">
        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-8">
          <img
            src="images/Services4.png"
            alt="jkn"
            className="w-16 h-16 mb-2"
          />
          <p className="text-[32px] text-[#000000]  font-semibold">10.5k</p>
          <h1 className="text-[16px] text-[#000000]">
            Sallers active our sites
          </h1>
        </div>
        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-red-600 shadow-sm  overflow-hidden relative mt-8">
          <img
            src="images/Services4.png"
            alt="jkn"
            className="w-16 h-16 mb-2"
          />
          <p className="text-[32px] text-[#000000]  font-semibold">10.5k</p>
          <h1 className="text-[16px] text-[#000000]">
            Sallers active our sites
          </h1>
        </div>
        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-8">
          <img
            src="images/Services4.png"
            alt="jkn"
            className="w-16 h-16 mb-2"
          />
          <p className="text-[32px] text-[#000000]  font-semibold">10.5k</p>
          <h1 className="text-[16px] text-[#000000]">
            Sallers active our sites
          </h1>
        </div>
        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-8">
          <img
            src="images/Services4.png"
            alt="jkn"
            className="w-16 h-16 mb-2"
          />
          <p className="text-[32px] text-[#000000]  font-semibold">10.5k</p>
          <h1 className="text-[16px] text-[#000000]">
            Sallers active our sites
          </h1>
        </div>
      </div>
    </div>
  );
}

export default about;
