import React from "react";
import { RxCheck } from "react-icons/rx";
import template from "../assets/Template.png";

const Templates = () => {
  return (
    <div className="flex flex-col items-center justify-center align-middle text-center font-apercu pt-[45px] lg:mx-[135px] border-b border-black border-opacity-10">
      <h1 className="text-indigo-950 text-[56px] font-bold leading-[60px] max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl">
        Multipurpose Website Templates
        <br />
        That boost your sales
      </h1>
      <p class="text-gray-900 opacity-50 pt-4 pb-8 max-lg:text-sm max-sm:text-xs">
        Empowering Your Financial Journey through Customized Asset Management
        Services
      </p>
      <div class="flex justify-between items-center min-w-100 max-sm:w-80 w-[480px]  h-[66px] bg-white rounded-[80px] shadow font-apercu">
        <input
          class="text-gray-900 text-sm w-[340px] h-full rounded-3xl px-2 opacity-40 ml-2 outline-none"
          type="email"
          placeholder="Enter your work email"
        />
        <button
          class="bg-rose-500 rounded-[60px] text-white text-sm font-medium w-[116px] h-11 px-[15px] mr-3 max-sm:m-1 max-sm:h-[58px] max-sm:w-15"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="flex pt-5">
        <RxCheck className="text-green-600" />
        <p class="opacity-40 text-gray-900 text-xs font-normal font-['Apercu']">
          No credit card required
        </p>
      </div>
      <div class="w-full h-full mt-20 flex items-center justify-center max-sm:px-5 max-md:px-10 max-lg:px-10 xl:px-0">
        <img
          src={template}
          className="rounded-t-[30px] border border-x-[10px] border-t-[10px] border-b-0 border-black"
        />
      </div>
    </div>
  );
};

export default Templates;
