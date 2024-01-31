import React from "react";
import { RxCheck } from "react-icons/rx";

const Action = () => {
  return (
    <div className="flex flex-col items-center justify-center align-middle text-center font-apercu pt-[45px] lg:mx-[135px] border-b border-black border-opacity-10 bg-[#0984E9] rounded-[10px] mb-[25px] max-lg:mx-5">
      <h1 className="text-white text-[56px] font-bold leading-[60px] max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl">
        Get started with Aspire today
      </h1>
      <p class="text-white pt-4 pb-8 max-lg:text-sm max-sm:text-xs">
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
          class="bg-rose-500 rounded-[60px] text-white text-sm font-medium w-[116px] h-11 px-[15px] mr-3"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="flex pt-5">
        <RxCheck className="text-white" />
        <p class="text-white text-xs font-normal font-['Apercu']">
          No credit card required
        </p>
      </div>
      <div class="w-full h-full mt-20 flex items-center justify-center max-sm:px-5 max-md:px-10 max-lg:px-10 xl:px-0"></div>
    </div>
  );
};

export default Action;
