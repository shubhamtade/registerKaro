import React from "react";
import BG from "../assets/blue_bg.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const VerticalDivider = () => (
  <div className="hidden lg:block w-px bg-gray-300 mx-2" />
);
const HorizontalDivider = () => (
  <hr className="lg:hidden w-full border-t border-gray-300 my-2" />
);

const PlanCard = ({ title, description, employeeRange, link }) => (
  <div className="flex-1 p-4">
    <h5 className="text-lg font-bold mb-3">{title}</h5>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <p className="font-bold">
        Number of employees <br />
        {employeeRange}
      </p>
      <a
        href={link}
        className="text-[#FFA22A]/70 hover:text-[#FFA22A] duration-300"
        aria-label={`Link to ${title}`}
      >
        <ArrowCircleRightOutlinedIcon fontSize="large" />
      </a>
    </div>
  </div>
);

const Plans = () => {
  return (
    <div
      className="flex justify-center items-center min-h-[500px] py-12 px-4"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          {/* Main Plans Card */}
          <div className="w-full lg:w-8/12 bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col lg:flex-row gap-6 text-gray-700">
            <PlanCard
              title="Small business & Startup Accounts"
              description="Make sure your business meets its statutory requirements."
              employeeRange="0 - 10"
              link="/private-limited-company-registration"
            />
            <VerticalDivider />
            <HorizontalDivider />
            <PlanCard
              title="Growing Business Package"
              description="Additional support to help you reach your business goals."
              employeeRange="11 - 50"
              link="/private-limited-company-registration"
            />
            <VerticalDivider />
            <HorizontalDivider />
            <PlanCard
              title="Scale-Up Company Offer"
              description="Compliance, reporting & analysis of business performance."
              employeeRange="50+"
              link="/private-limited-company-registration"
            />
          </div>

          {/* Side Card */}
          <div className="flex flex-col justify-between w-full lg:w-3/12 bg-[#FFA22A] text-white rounded-xl shadow-lg p-6 h-68">
            <div>
              <h5 className="text-2xl font-bold mb-3">Setting up a business</h5>
              <p className="mb-6 text-xl">
                Make sure your business meets its statutory requirements.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Company Formation Services</p>
              <a
                href="/private-limited-company-registration"
                className="text-white hover:text-gray-200"
                aria-label="Link to Company Formation Services"
              >
                <ArrowCircleRightOutlinedIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
