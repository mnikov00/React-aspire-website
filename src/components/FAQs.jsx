import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const FAQs = () => {
  return (
    <div className="font-apercu flex flex-wrap flex-col justify-center items-center bg-neutral-100 py-[120px] ">
      <h1 className="text-indigo-950 text-center text-[56px] font-bold leading-[60px] pb-5 max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl">
        Frequently asked questions
      </h1>
      <p className="text-gray-900 opacity-50 pb-[60px] max-lg:text-sm max-sm:text-xs">
        We have put together some commonly asked questions
      </p>
      <div className="flex flex-wrap gap-5 justify-center pb-5">
        <div className="flex justify-between items-center text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">Smod tempor incididunt ut labore et dolore</h2>
          <FaAngleDown className="mr-5" />
        </div>
        <div className="flex justify-between text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">Ut enim ad minim veniam</h2>
          <FaAngleDown className="mr-5" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center pb-5">
        <div className="flex justify-between items-center text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">Quis nostrud exercitation ullamco laboris</h2>
          <FaAngleDown className="mr-5" />
        </div>
        <div className="flex justify-between text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">Wisi ut aliquip ex ea commodo consequat</h2>
          <FaAngleDown className="mr-5" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center pb-5">
        <div className="flex justify-between items-center text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">
            Woluptate velit esse cillum dolore eu fugiat nulla
          </h2>
          <FaAngleDown className="mr-5" />
        </div>
        <div className="flex justify-between text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">Duis aute irure dolor in reprehenderi</h2>
          <FaAngleDown className="mr-5" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center pb-5">
        <div className="flex justify-between items-center text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">
            Excepteur sint occaecat cupidatat non proiden
          </h2>
          <FaAngleDown className="mr-5" />
        </div>
        <div className="flex justify-between text-indigo-950 text-lg font-medium bg-white rounded-[10px] py-6 w-[480px] max-sm:text-sm max-sm:w-[350px]">
          <h2 className="ml-5">
            Excepteur sint occaecat cupidatat non proident
          </h2>
          <FaAngleDown className="mr-5" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
