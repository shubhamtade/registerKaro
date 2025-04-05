import React from "react";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <PinDropOutlinedIcon className="text-orange-500" size={24} />,
      title: "Main Office",
      content:
        "Safe Ledger Private Limited\n#101, Oxford Towers, 139, HAL Old Airport Rd\nKodihalli, Bengaluru, Karnataka 560008",
    },
    {
      icon: <LocalPhoneOutlinedIcon className="text-orange-500" size={24} />,
      title: "Make a call",
      content: "Phone: +91 84477 46183",
    },
    {
      icon: <AccessTimeOutlinedIcon className="text-orange-500" size={24} />,
      title: "Working Hours",
      content: "Monday-Friday: 9:00 AM - 6:00 PM\nSaturday-Sunday: Holiday",
    },
    {
      icon: <DraftsOutlinedIcon className="text-orange-500" size={24} />,
      title: "Send an email",
      content: "support@registerkaro.in\nadmin@registerkaro.in",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-[#FFA22A] px-4 py-1 rounded-full text-sm font-medium mb-3 ">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Get in Touch With Us
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                {contactInfo.map((item, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 mt-1 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ffdcaf] group-hover:text-white transition">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && (
                      <hr className="my-6 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h3>
                <form
                  onSubmit={() => alert("Thank You!!!")}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="SingleLine"
                      maxLength="255"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-1 focus:ring-[#FFA22A] focus:border-[#FFA22A]  transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        maxLength="255"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-1 focus:ring-[#FFA22A] focus:border-[#FFA22A] transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength="10"
                        minLength="10"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-1 focus:ring-[#FFA22A] focus:border-[#FFA22A] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      maxLength="65535"
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-1 focus:ring-[#FFA22A] focus:border-[#FFA22A] transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FFA22A] hover:bg-[#FFA22A] text-white font-medium rounded-lg transition-colors duration-200 shadow-md"
                  >
                    <span>Send Now</span>
                    <SendOutlinedIcon className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
