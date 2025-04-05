import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../assets/logo.png";

const FirstPart = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      {/* Brand Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="RegisterKaro" className="h-10 w-10" />
          <span className="text-2xl font-bold">
            <span className="text-orange-400">Register</span>Karo
          </span>
        </div>
        <p className="text-gray-400">
          India's leading business compliance platform for company registration,
          tax filing, and legal services.
        </p>
        <div className="flex space-x-4">
          <FacebookIcon className="text-gray-300 hover:text-gray-100 cursor-pointer" />
          <TwitterIcon className="text-gray-300 hover:text-gray-100 cursor-pointer" />
          <LinkedInIcon className="text-gray-300 hover:text-gray-100 cursor-pointer" />
          <InstagramIcon className="text-gray-300 hover:text-gray-100 cursor-pointer" />
        </div>
      </div>

      {/* Services Links */}
      <div>
        <h3 className="text-lg text-[#FFA22A] font-semibold mb-4">Services</h3>
        <ul className="space-y-3">
          {[
            "Company Registration",
            "GST Registration",
            "Trademark Registration",
            "Compliance Services",
            "FSSAI License",
          ].map((service, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-lg text-[#FFA22A] font-semibold mb-4">Company</h3>
        <ul className="space-y-3">
          {["About Us", "Careers", "Blog", "Contact Us", "Testimonials"].map(
            (link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg text-[#FFA22A] font-semibold mb-4">Contact</h3>
        <address className="not-italic text-gray-400 space-y-3">
          <p>
            #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru,
            Karnataka - 560008
          </p>
          <p>
            <a
              href="mailto:support@registerkaro.in"
              className="text-white/90 hover:text-[#FFA22A] transition-colors"
            >
              support@registerkaro.in
            </a>
          </p>
          <p>
            <a
              href="tel:+918447746183"
              className="text-white/90 hover:text-[#FFA22A] transition-colors"
            >
              +91 84477 46183
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default FirstPart;
