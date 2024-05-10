import { Suspense } from "react";
import OxAuth from "./OxAuth";

const Navbar = () => {
  return (
    <>
      <div className="px-3 mx-2 flex justify-between items-center gap-4">
        <div>
          <img
            src="https://www.franklintempleton.com/assets/images/logos/FT_logo_pos_RGB@2x.png"
            alt="logo"
            className="w-[190px] h-[36px]"
          />
        </div>
        <div className="my-4 flex justify-end items-center">
          <a href="" className="text-[#1446e1] text-[13px] py-1">
            <p className="px-2 border-r-[1px] ">Individual Investor</p>
          </a>
          <a href="" className="text-[#1446e1] text-[13px] py-1">
            <p className="px-2 border-r-[1px] ">About Us</p>
          </a>
          <a href="" className="text-[#1446e1] text-[13px] py-1">
            <p className="px-2 border-r-[1px] ">Contact Us</p>
          </a>
          <a href="" className="text-[#1446e1] text-[13px] py-1 px-2">
            Accounts
          </a>
          <button className="text-white bg-[#3769ff] text-[14px] px-4 py-3 ml-4">
            <Suspense fallback={<div>Loading...</div>}>
              <OxAuth />
            </Suspense>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mx-5">
        <div className="flex items-center">
          <a
            href=""
            className="text-[#1446e1] text-[16px] font-semibold py-2 px-3"
          >
            Investments
          </a>
          <a
            href=""
            className="text-[#1446e1] text-[16px] font-semibold py-2 px-3"
          >
            Managers
          </a>
          <a
            href=""
            className="text-[#1446e1] text-[16px] font-semibold py-2 px-3"
          >
            Insights
          </a>
          <a
            href=""
            className="text-[#1446e1] text-[16px] font-semibold py-2 px-3"
          >
            Planning & Learning
          </a>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search Franklin Templeton"
            className="text-[#595959] bg-white border-gray-500 border-[1px] px-4 py-2 w-[280px] outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
