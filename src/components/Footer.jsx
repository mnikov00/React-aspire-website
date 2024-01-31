import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#00063E] text-white pb-[120px]">
      <div className="flex justify-between flex-wrap font-apercu pt-[120px] pb-[60px] border-b border-opacity-10 border-white max-lg:mx-8 mx-[230px]">
        <div className="flex flex-col flex-wrap">
          <h1 className="text-lg font-medium pb-2">Company</h1>
          <p className="opacity-50 font-light leading-10">
            About <br />
            Pricing
            <br />
            Jobs
            <br />
            Blog
            <br />
            Careers
          </p>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-lg font-medium pb-2">Product</h1>
          <p className="opacity-50 font-light leading-10">
            Sales software
            <br />
            Features
            <br />
            Privacy and security
            <br />
            Marketplace <br />
            API
          </p>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-lg font-medium pb-2">Help Center</h1>
          <p className="opacity-50 font-light leading-10">
            Community
            <br />
            Knowledge Base
            <br />
            Academy
            <br />
            Support
          </p>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-lg font-medium pb-2">Download</h1>
          <p className="opacity-50 font-light">
            Join millions of people who build a
            <br /> fully integrated sales and maketing
            <br /> solution.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between pt-[50px] max-lg:mx-8 mx-[230px]">
        <h1>Copyright @2023 Aspire. All Rights Reserved.</h1>
        <h1>Terms & Conditions ~ Privacy Policy</h1>
      </div>
    </div>
  );
};

export default Footer;
