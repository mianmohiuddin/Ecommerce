import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 flex flex-col justify-center items-center mt-20">
      <div className="px-28 flex justify-between gap-20">
        {/* Exclusive Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-[24px] font-bold leading-6 mt-5">Exclusive</h2>
          <p className="text-[20px] font-semibold leading-6 mt-2">Subscribe</p>
          <p className="text-[16px] font-normal mt-2">
            Get 10% off your first order
          </p>
          <div className=" w-[218px] h-[48px] flex  items-center border border-white mt-4">
            <input
              type="email"
              placeholder="Enter your email   ⇒"
              className="bg-black text-white px-4 py-2 outline-none"
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-[20px] font-semibold leading-7 mt-5">Support</h2>
          <p className="text-[14px] font-normal mt-3">
            111 Bijoy sarani,Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>

          <p className="text-[16px] font-normal mt-2">exclusive@gmail.com</p>
          <p className="text-[16px] font-normal mt-1">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-[20px] font-semibold leading-7 mt-5">Account</h2>
          <Link 
          to="/My Account">
          <p className="text-[16px] font-normal mt-2">My Account</p></Link>
          <p className="text-[16px] font-medium mt-2">Login / Register</p>
          <Link 
          to="/Cart">
          <p className="text-[16px] font-normal mt-3">Cart</p></Link>
         <Link 
         to="/Wishlist">
          <p className="text-[16px] font-normal mt-4">Wishlist</p></Link>   
          <Link 
          to="/Shop">
          <p className="text-[16px] font-normal mt-2">Shop</p></Link>
        </div>

        {/* Quick Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mt-5">Quick Link</h2>
          <p className="text-[16px] font-normal mt-2">Privacy Policy</p>
          <p className="text-[16px] font-normal mt-2">Terms Of Use</p>
          <p className="text-[16px] font-normal mt-3">FAQ</p>
          <Link 
          to="/Contact">
          <p className="text-[16px] font-normal mt-4">Contact</p></Link>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-[20px] font-bold leading-7 mt-5">Download App</h2>
          <p className="text-[14px] font-normal mt-4">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center mt-2">
            <img
              src="images/Qrcode 1.png"
              alt="QR Code"
              className="w-15 h-15 mr-4"
            />
            <div className="flex flex-col gap-2">
              <img
                src="images/GooglePlay.png"
                alt="Google Play"
                className="w-30"
              />
              <img src="images/appstore.png" alt="App Store" className="w-30" />
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <a href="#" className="text-white text-lg">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-lg">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-lg">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-lg">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full border text-slate-50 pr-6 mt-24"></div>

      <div className="text-center text-gray-500 text-[16px] mt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
export default Footer;
