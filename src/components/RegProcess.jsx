import React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const RegProcess = () => {
  const complianceItems = [
    "Monthly GST filings - Rs.10,000",
    "Quarterly TDS filings - Rs.5,000",
    "Board Minutes preparation - Rs.1,000",
    "Annual AOC 4 filing - Rs.2,000",
    "Annual MGT-7 filing - Rs.2,000",
    "DIR 3KYC for all directors - Rs.3,000",
    "Bookkeeping and Accounting - Rs.5,000",
    "Payroll compliance - Rs.5,000",
    "Leave Management - Rs.2,000",
    "Financial Preparation and Audit support - Rs.4,000",
    "Annual General Meeting Minutes - Rs.1,000",
    "Maintenance of Statutory Registers - Rs.1,000",
    "Income Tax Return filing for the Company - Rs.4,000",
    "Income Tax Return filing of Directors and Shareholders - Rs.4,000",
    "INC 20A filing - Rs.1,000",
    "ADT 1 filing - Rs.1,000",
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-700">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-gray-700 font-bold leading-snug">
            <span className="text-[#FFA22A]">Grow</span> Your Business instead
            of Complex <br className="hidden md:block" />
            <span className="text-[#FFA22A]">Registration</span> processes and
            leave it to <span className="text-[#FFA22A]">us</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Compliance Items */}
          <div className="lg:w-1/2 relative">
            <h3 className="text-xl font-semibold text-center mb-6">
              With other service providers, you would have to pay for each
              compliance filing individually!
            </h3>

            {/* Badge */}
            <div className="absolute top-20 md:top-10 -right-2 bg-[#FFA22A] rounded-full h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shadow-lg z-10">
              <span className="font-bold text-base md:text-lg text-white">
                51k
              </span>
              <div className="absolute -top-1 -right-1 text-green-600">
                <PlusIcon />
              </div>
              <div className="absolute bottom-0 right-6 text-green-600">
                <PlusIcon />
              </div>
              <div className="absolute bottom-0 right-0 text-green-600">
                <PlusIcon />
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-md p-4 md:p-6 max-h-[400px] overflow-y-auto custom-scroll"
              style={{
                scrollbarWidth: "none", // For Firefox
              }}
            >
              <style>
                {`
      .custom-scroll::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Edge */
      }
    `}
              </style>
              {complianceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start py-3 border-b last:border-b-0 gap-2"
                >
                  <CheckOutlinedIcon
                    className="text-green-600 mt-1"
                    fontSize="small"
                  />
                  <p className="text-gray-800 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RegisterKaro Section */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-center mb-6 ">
              Or <span className="text-[#FFA22A]">you could</span>
            </h3>

            <div className="bg-white rounded-xl shadow-md overflow-hidden h-[90%] flex flex-col">
              <div className="p-6 border-b">
                <div className="flex items-center justify-center">
                  <CheckOutlinedIcon className="text-green-600 mr-2" />
                  <span className="font-medium text-lg">Use RegisterKaro</span>
                </div>
              </div>

              <div className="bg-green-100 p-6 sm:p-8 flex-grow flex flex-col justify-center items-center text-center">
                <p className="text-gray-800 mb-6 text-base sm:text-lg">
                  Get all your <strong>Compliance</strong> done with the help of{" "}
                  <strong>Industry Experts</strong> and channelize that precious
                  time to grow your <strong>business</strong>.
                </p>

                <button className="bg-[#FFA22A] hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center cursor-pointer">
                  Get Started!
                  <ArrowCircleRightOutlinedIcon
                    className="ml-2"
                    fontSize="small"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default RegProcess;
