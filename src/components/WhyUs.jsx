import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhyUsImg from "../assets/why_us_image.png";
import WhyUsBg from "../assets/why_bg.svg";

const WhyUs = () => {
  return (
    <section className="py-16 bg-[#EFF4FF] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section - Improved for mobile */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <div className="relative w-full max-w-md h-[600px] ">
              <img
                src={WhyUsBg}
                alt="Background pattern"
                className="absolute w-full h-full object-contain"
              />
              <img
                src={WhyUsImg}
                alt="Why choose RegisterKaro"
                className="absolute w-full h-full object-contain"
                style={{ transform: "translateY(5%)" }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-[#FFA22A]">Choose RegisterKaro</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our All-In-One Platform and team of experts will guide you through
              every step and ensure your business starts the right way in record
              time.
            </p>

            <div className="space-y-4">
              {[
                "Affordable pricing with no hidden costs",
                "Compliance ensured by industry experts",
                "Simplified process with dedicated support",
                "On-time service with 99% success rate",
                "Instant response to all your queries",
              ].map((item, index) => (
                <div key={index} className="flex items-center ">
                  <CheckCircleOutlineIcon className="h-5 w-5 text-[#FFA22A] mr-3" />

                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center px-6 py-3 bg-[#FFA22A] text-white rounded-md hover:bg-primary-dark transition-all font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowForwardIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
