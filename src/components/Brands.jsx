import React from "react";
import clickUpLogo from "../assets/ClickUpLogo.png";
import dropBoxLogo from "../assets/dropBoxLogo.png";
import segmentLogo from "../assets/segmentLogo.png";
import freshBooksLogo from "../assets/freshBooksLogo.png";
import gitHubLogo from "../assets/gitHubLogo.png";

const Brands = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full pb-[120px]">
      <h1 className="text-indigo-950 text-[22px] font-medium font-apercu pt-24 pb-14">
        Trusted by 1000K plus customers
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-24 h-full">
        <img
          src={clickUpLogo}
          className="w-[137px] h-full"
          alt="ClickUp Logo"
        />
        <img
          src={dropBoxLogo}
          className="w-[137px] h-full"
          alt="Dropbox Logo"
        />
        <img
          src={segmentLogo}
          className="w-[137px] h-full"
          alt="Segment Logo"
        />
        <img
          src={freshBooksLogo}
          className="w-[137px] h-full"
          alt="FreshBooks Logo"
        />
        <img src={gitHubLogo} className="w-[137px] h-full" alt="GitHub Logo" />
      </div>
    </div>
  );
};

export default Brands;
