import React from "react";

const LastPart = () => {
  return (
    <div className="border-t border-[#FFA22A] pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">
          © {new Date().getFullYear()} RegisterKaro. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {["Terms", "Privacy", "Cookies"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
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
