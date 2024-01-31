import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import people from "../assets/people.png";

const About = () => {
  return (
    <div className="bg-[#0984E9] flex flex-wrap items-start justify-center align-middle py-[135px] px-[223px] max-lg:px-10 font-ap">
      <div className="flex flex-col flex-start max-xl:items-center px-12 xl:pr-[123px] pb-12">
        <h1 className="text-white text-[56px] font-bold font-apercu leading-[60px] pb-[60px]">
          About our <br />
          company
        </h1>
        <div className="flex text-white items-center font-medium font-['Apercu'] hover:cursor-pointer">
          <p>Learn More</p> <IoIosArrowRoundForward className="size-6" />
        </div>
      </div>
      <p className="text-white font-apercu lg:w-auto max-w-[577px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo
      </p>
      <img alt="/" src={people} className="pt-[101px]" />
    </div>
  );
};

export default About;
