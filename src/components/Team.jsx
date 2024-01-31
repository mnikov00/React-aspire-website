import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/preson2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";
import person7 from "../assets/person7.png";
import person8 from "../assets/person8.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Team = () => {
  return (
    <div className="pb-[120px]">
      <div className="font-apercu flex-wrap flex flex-col text-center pt-[125px]">
        <div className="flex flex-col justify-center items-center pb-[60px]">
          <p className="text-rose-500 text-xs font-medium uppercase bg-rose-500 bg-opacity-10 p-1 w-[88px] h-[25px] rounded-[10px]">
            Our team
          </p>
          <h1 className="text-indigo-950 text-[56px] font-bold leading-[60px] py-5 max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl">
            Meet our dream team
          </h1>
          <p className="text-indigo-950 opacity-50 max-lg:text-sm max-sm:text-xs">
            We're dedicated group of Sed ut perspiciatis unde omnis iste natus
            error sit <br />
            voluptatem accusantium doloremque laudantium
          </p>
        </div>
        {/* people */}

        <div className="flex flex-wrap gap-5 justify-center item">
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person1} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Kristopher A. Davis
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person2} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Maggie W. Roth
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person3} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Anthony N
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person4} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Tony J. Wilcoxen
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person5} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Kristopher A. Davis
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person6} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Maggie W. Roth
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person7} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Anthony N
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[60px]">
            <img alt="/" src={person8} className="rounded-[10px]" />
            <h1 className="text-indigo-950 text-lg font-medium mt-[30px]">
              Tony J. Wilcoxen
            </h1>
            <p className="text-indigo-950 opacity-50">Designation Goes here</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around align-middle bg-neutral-100 rounded-[10px] lg:mx-[160px] max-lg:mx-5">
        <h1 className="text-indigo-950 text-[28px] font-medium pt-[60px] self-start max-md:text-[25px]">
          Join our team
        </h1>
        <div className="flex flex-wrap flex-col text-left leading-tight py-[60px] max-md:px-10  max-lg:px-5">
          <p className="text-indigo-950 opacity-50 self-end lg:w-[670px] lg:h-[57] pb-5 max-md:text-[14px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="flex text-rose-500 font-medium hover:cursor-pointer max-md:text-[14px]">
            <h2>View Current Openings</h2>
            <IoIosArrowRoundForward className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
