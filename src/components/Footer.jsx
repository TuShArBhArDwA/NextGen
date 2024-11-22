import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-neutral-900 text-white">
      <div className="max-w-screen-lg mx-auto">
        {/* Facebook Statement */}
        <div className="mb-5">
          <h3 className="font-bold text-gray-400 text-base mb-2">
            Facebook Statement
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, this site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-gray-700 h-px w-full my-5" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-3 md:mb-0">
            ©2024 NextGen. All Rights Reserved.
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <span>Privacy Policy</span>
            <span className="mx-1">|</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
