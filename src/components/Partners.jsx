import React from "react";
import { useRef, useEffect } from "react";
import HP from "../assets/logos/hp.png";
import Huawei from "../assets/logos/huawei.png";
import Adobe from "../assets/logos/adobe.png";
import Amazon from "../assets/logos/amazon.png";
import AMD from "../assets/logos/amd.png";
import Dell from "../assets/logos/dell.png";
import Google from "../assets/logos/google.png";
import Lee from "../assets/logos/lee.png";
import McDonald from "../assets/logos/mcdonald.png";
import Slack from "../assets/logos/slack.png";
import Target from "../assets/logos/target.png";

const Partners = () => {
  const partners = [
    { name: "Adobe", logo: Adobe },
    { name: "Amazon", logo: Amazon },
    { name: "AMD", logo: AMD },
    { name: "Dell", logo: Dell },
    { name: "Google", logo: Google },
    { name: "HP", logo: HP },
    { name: "Huawei", logo: Huawei },
    { name: "Lee", logo: Lee },
    { name: "McDonald's", logo: McDonald },
    { name: "Slack", logo: Slack },
    { name: "Target", logo: Target },
  ];

  // Duplicate the partners array to create seamless looping
  const doublePartners = [...partners, ...partners];
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Simple animation for the marquee effect
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;
    let startTime = null;
    const duration = 20000; // 20 seconds for one loop
    const distance = marquee.scrollWidth / 2;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress >= 1) {
        startTime = timestamp;
        marquee.scrollLeft = 0;
      } else {
        marquee.scrollLeft = progress * distance;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-20 bg-[#EFF4FF]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            We <span className="text-[#FFA22A]">partner</span> with the best,
            <br />
            so your business flows{" "}
            <span className="text-[#FFA22A]">seamlessly</span>.
          </h1>
          <p className="text-lg text-gray-500">
            Your business needs numerous expertise, and that's why we provide
            you the best services with industry leaders.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#EFF4FF] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#EFF4FF] to-transparent z-10"></div>

          {/* Marquee */}
          <div
            ref={marqueeRef}
            className="flex overflow-x-auto py-6 hide-scrollbar"
          >
            <div className="flex space-x-8 px-4">
              {doublePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl shadow-lg p-2 w-24 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105 "
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Partners;
