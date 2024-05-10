import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-200 text-[16px] p-6">
        This website is intended for residents of the United States.
      </div>
      <div className="p-6 flex justify-evenly items-start text-[#1446e1] gap-10 flex-wrap">
        <div>
          <h5 className="text-sm mb-4 font-semibold">Investments</h5>
          <ol className="text-xs flex flex-col gap-2">
            <li>Investment Options</li>
            <li>Investment Resources</li>
            <li>Our Capabilities</li>
          </ol>
        </div>
        <div>
          <h5 className="text-sm mb-4 font-semibold">Insigths</h5>
          <ol className="text-xs flex flex-col gap-2">
            <li>Latest Insigths</li>
            <li>Investments Ideas</li>
            <li>Anatomy of Recession</li>
          </ol>
        </div>
        <div>
          <h5 className="text-sm mb-4 font-semibold">Planning and Learning</h5>
          <ol className="text-xs flex flex-col gap-2">
            <li>Planning For</li>
            <li>Learning About Investing</li>
          </ol>
        </div>
        <div>
          <h5 className="text-sm mb-4 font-semibold">Accounts</h5>
          <ol className="text-xs flex flex-col gap-2">
            <li>Accounts Dashboard</li>
            <li>Accounts Service Support</li>
            <li>Open an Account</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-start items-center flex-wrap gap-4 p-6">
        <a href="" className="text-[#3769ff] text-xs">
          Careers
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Help
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Site Usage
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Privacy Notice
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Anti-Corruption Policy
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Terms of Use
        </a>
        <a href="" className="text-[#3769ff] text-xs">
          Connect with Us
        </a>
      </div>
      <div className="bg-[#3769ff] flex justify-between items-center p-6 text-white h-[100px]">
        <p className="text-[12px]">
          Copyright © 2024 Franklin Templeton. All Rights Reserved.
        </p>
        <img
          src="https://www.franklintempleton.com/assets/images/logos/FT_logo_pos_RGB@2x.png"
          alt="logo"
          className="w-[190px] h-[36px]"
        />
      </div>
    </div>
  );
};

export default Footer;
