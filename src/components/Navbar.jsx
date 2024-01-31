import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Menu = () => (
  <div className="lg:flex hidden text-center text-gray-900 gap-[40px] font-apercu font-medium">
    <p className="cursor-pointer">Product</p>
    <p className="cursor-pointer">Pricing</p>
    <p className="cursor-pointer">Company</p>
    <p className="cursor-pointer">Resources</p>
    <p className="cursor-pointer">Contact</p>
  </div>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between align-middle border-b py-[35px] mx-[135px] max-md:mx-[90px] max-sm:mx-10 shrink-0 mb-8">
      <img className="h-full" alt="/" src={logo} />
      <Menu />
      <div className="flex space-between justify-center align-middle space-x-4 font-apercu font-medium max-md:hidden">
        <p className="cursor-pointer">Login</p>
        <button className="px-[15px] py-1 bg-rose-500 rounded-[60px]  items-start gap-2.5 inline-flex text-white text-sm font-medium">
          Get Started
        </button>
      </div>
      <div onClick={handleNav} className="sm:block lg:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="h-full cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="h-full cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[45%] border-r h-full text-center text-gray-900 font-apercu font-medium lg:hidden bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <img className="inline-block pt-9" alt="/" src={logo} />
        <ul className="pt-12">
          <p className="border-b cursor-pointer py-2">Product</p>
          <p className="border-b cursor-pointer py-2">Pricing</p>
          <p className="border-b cursor-pointer py-2">Company</p>
          <p className="border-b cursor-pointer py-2">Resources</p>
          <p className="max-md:border-b cursor-pointer py-2">Contact</p>
          <p className="border-b cursor-pointer md:hidden py-2">Login</p>
          <button className="px-[15px] py-2 bg-rose-500 rounded-[60px]  items-start gap-2.5 md:hidden inline-flex text-white text-sm font-medium">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
