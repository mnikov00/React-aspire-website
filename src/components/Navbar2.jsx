import React from "react";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineLine } from "react-icons/ai";

const Menu = () => (
  <div className="flex text-center text-gray-900 gap-[40px] font-medium">
    <p>Product</p>
    <p>Pricing</p>
    <p>Company</p>
    <p>Resources</p>
    <p>Contact</p>
  </div>
);

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle border-b py-[35px] mx-[135px] shrink-0 mb-8">
      <img className="h-full" alt="/" src={logo} />
      <Menu />
      <div className="flex font-medium text-center justify-center align-middle font-['Apercu'] space-x-4">
        <p>Login</p>
        <button className="px-[15px] py-1 bg-rose-500 rounded-[60px]  items-start gap-2.5 inline-flex text-white text-sm font-medium">
          Get Started
        </button>
      </div>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div>
        <ul>{/* <Menu /> */}</ul>
      </div>
    </div>
  );
};

export default Navbar;
