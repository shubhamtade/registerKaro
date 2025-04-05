import React from "react";

const LastPart = () => {
  return (
    <div className="border-t border-[#FFA22A] pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-[14px] md:text-[16px]  text-center md:text-left">
          © {new Date().getFullYear()} - Safe Ledger Private Limited. All rights
          reserved. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {["Terms", "Privacy", "Cookies"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#FFA22A]/80 hover:text-[#FFA22A] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPart;
