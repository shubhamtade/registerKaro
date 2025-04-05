import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/hero_image.png";
import BgImage from "../assets/hero_bg.jpg"; // Add a soft, professional background image

const Counter = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-lg text-center w-40"
  >
    <div className="text-3xl font-extrabold text-[#FFA22A]">{value}+</div>
    <div className="text-sm text-gray-700 font-medium">{label}</div>
  </motion.div>
);

const Hero = () => {
  const [counters, setCounters] = useState({
    businesses: 0,
    clients: 0,
    professionals: 0,
  });

  useEffect(() => {
    const targetValues = {
      businesses: 500,
      clients: 20000,
      professionals: 200,
    };
    const duration = 2000;
    const increment = 30;

    const updateCounter = (key, endValue) => {
      let currentValue = 0;
      const step = Math.ceil(endValue / (duration / increment));
      const timer = setInterval(() => {
        currentValue += step;
        if (currentValue >= endValue) {
          currentValue = endValue;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: currentValue }));
      }, increment);
    };

    Object.entries(targetValues).forEach(([key, endValue]) =>
      updateCounter(key, endValue)
    );
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-orange-100 overflow-hidden">
      <div className="bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-14 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-[#154761]/70 mb-2">
              We take care of ALL your business compliance needs
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#154761] block">Business Compliance</span>
              <span className="text-[#FFA22A] block">Made Simple</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
              India's leading platform for company registration, tax filing, and
              legal compliance. Trusted by 20,000+ businesses across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="bg-[#154761] hover:bg-[#123B5B] text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
              >
                Start Your Business
              </a>
              <a
                href="#"
                className="border-2 border-[#154761] text-[#154761] hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center">
            <motion.img
              src={HeroImg}
              alt="Business professionals"
              className="w-full max-w-sm rounded-2xl shadow-2xl border-1 border-gray-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute -bottom-10 md:-bottom-5 -left-2 md:left-0 flex gap-2 md:gap-6">
              <Counter
                value={counters.businesses}
                label="Businesses Incorporated"
              />
              <Counter
                value={counters.professionals}
                label="Experts Onboarded"
              />
            </div>
            <div className="absolute -top-10 right-4 md:right-0">
              <Counter
                value={counters.clients.toLocaleString()}
                label="Happy Clients"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
