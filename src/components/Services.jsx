import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../assets/services/1.png";
import img2 from "../assets/services/2.png";
import img3 from "../assets/services/3.png";
import img4 from "../assets/services/4.png";

const Services = () => {
  const services = [
    {
      title: "Company Formation",
      icon: img1, // Directly referencing the imported image
      description: "Private, Public, OPC, LLP and more",
    },
    {
      title: "Compliance Services",
      icon: img2, // Directly referencing the imported image
      description: "Annual filings, audits, and more",
    },
    {
      title: "Tax & GST Compliance",
      icon: img3, // Directly referencing the imported image
      description: "Registration, returns, and filings",
    },
    {
      title: "Intellectual Property",
      icon: img4, // Directly referencing the imported image
      description: "Trademarks, copyrights, patents",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FFA22A]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your business compliance needs, from
            startup to scale-up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group border border-gray-100"
            >
              <div className="p-6">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ffdcaf] group-hover:text-white transition">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-[#FFA22A] font-medium group-hover:text-primary-dark transition"
                >
                  Learn more
                  <ArrowForwardIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#FFA22A] text-[#FFA22A] rounded-md hover:bg-gray-50 transition font-medium"
          >
            Explore All Services
            <ArrowForwardIosIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
