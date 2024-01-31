import React from "react";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import icon4 from "../assets/Icon4.svg";

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-[120px] pb-[160px] font-apercu">
      <h1 className="text-indigo-950 text-[56px] font-bold font-apercu leading-[60px] pb-[79px] max-md:text-4xl max-sm:text-3xl">
        Our 12 years of together have given <br />
        us much to be proud of
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="rounded-[10px] w-[280px] h-[287px] flex flex-col items-start justify-center bg-neutral-100">
          <img alt="/" src={icon1} className="pl-10" />
          <h1 className="text-indigo-950 text-[40px] font-bold mt-4 pl-10">
            50M+
          </h1>
          <p className="text-indigo-950 mt-2 opacity-50 px-10 text-left">
            Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur
          </p>
        </div>
        <div className="rounded-[10px] w-[280px] h-[287px] flex flex-col items-start justify-center bg-neutral-100">
          <img alt="/" src={icon2} className="pl-10" />
          <h1 className="text-indigo-950 text-[40px] font-bold mt-4 pl-10">
            $100M
          </h1>
          <p className="text-indigo-950 mt-2 opacity-50 px-10 text-left">
            Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam
          </p>
        </div>
        <div className="rounded-[10px] w-[280px] h-[287px] flex flex-col items-start justify-center bg-neutral-100">
          <img alt="/" src={icon3} className="pl-10" />
          <h1 className="text-indigo-950 text-[40px] font-bold mt-4 pl-10">
            30%
          </h1>
          <p className="text-indigo-950 mt-2 opacity-50 pl-10 text-left">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam
          </p>
        </div>
        <div className="rounded-[10px] w-[280px] h-[287px] flex flex-col items-start justify-center bg-neutral-100">
          <img alt="/" src={icon4} className="pl-10" />
          <h1 className="text-indigo-950 text-[40px] font-bold mt-4 pl-10">
            60+
          </h1>
          <p className="text-indigo-950 mt-2 opacity-50 px-10 text-left">
            Magni dolores eos qui ratione voluptatem sequi nesciunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
