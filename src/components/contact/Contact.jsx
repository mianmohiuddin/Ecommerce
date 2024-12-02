import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center  bg-white mt-10">
      <div className="w-[86%] flex justify-between p-8 mt-10">
        <div className="w-[340px] h-[420px] flex flex-col border-[2px] p-7">
          <div className="flex gap-3">
            <img
              src="images/icons7.png"
              alt=""
              className="w-[35px] h-[35px] "
            />
            <h1 className="text-[16px] font-medium text-black leading-6 mt-2">
              Call to us{" "}
            </h1>
          </div>
          <p className="text-[14px] font-normal text-black leading-4 mt-4">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-[14px] font-normal text-black leading-4 mt-8">
            Phone: +8801611112222
          </p>
          <div className="w-[250px] text-black border mt-10"></div>

          <div className="flex gap-3 mt-5">
            <img
              src="images/icons8.png"
              alt=""
              className="w-[35px] h-[35px] "
            />
            <h1 className="text-[16px] font-medium text-black leading-6 mt-2">
              Write to us{" "}
            </h1>
          </div>
          <p className="text-[14px] font-normal text-black leading-4 mt-4">
            Fill out our form and we will contact
            <br />
            you within 24 hours.
          </p>
          <p className="text-[14px] font-normal text-black leading-4 mt-4">
            Emails: customer@exclusive.com
          </p>
          <p className="text-[14px] font-normal text-black leading-4 mt-4">
            Emails: support@exclusive.com
          </p>
        </div>
        {/* right */}
        <div className="w-[700px] h-[420px] border-[2px] flex flex-col  bg-white">
          <div className="flex  mt-4 gap-4 p-7">
            <input
              text=""
              className="w-[200px]  p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
              placeholder="Name"
            />
            <input
              text=""
              className="w-[200px]  p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
              placeholder="Your Email"
            />

            <input
              text=""
              className="w-[200px]  p-3 text-[16px] text-[#000000] font-normal bg-[#F5F5F5] rounded"
              placeholder="Your Phone"
            />
          </div>
          <div className="p-8 flex flex-col justify-end items-end  ">
          <textarea
            className=" w-[635px] h-[180px] p-1 text-[14px] text-black  font-normal bg-[#F5F5F5] rounded"
            placeholder="Your Message "
            />
            <button className="w-[190px] h-[56px] text-[16px] font-normal bg-red-600 text-white mt-3">Send message</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
