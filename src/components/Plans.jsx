import React from "react";
import BG from "../assets/blue_bg.png";

const Plans = () => {
  return (
    <div
      className="flex justify-center items-center h-[500px]"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      Plans
    </div>
  );
};

export default Plans;
