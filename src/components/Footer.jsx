import React from "react";
import FirstPart from "./Footer/FirstPart";
import SecondPart from "./Footer/SecondPart";
import LastPart from "./Footer/LastPart";

const Footer = () => {
  return (
    <footer className="bg-[#0C1321] text-gray-100 w-full py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FirstPart />
        <SecondPart />
        <LastPart />
      </div>
    </footer>
  );
};

export default Footer;
