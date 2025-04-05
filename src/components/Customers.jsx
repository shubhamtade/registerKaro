import React, { useState, useEffect } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Customer from "../assets/customer.png";
import Customer1 from "../assets/customer2.png";
import BG from "../assets/customerBG.png";

const Customers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Elrafact Technology Solutions",
      role: "",
      content:
        "Team Register Karo helped our company incorporated into MCA. Team was very professional and cooperative. Response to all our doubts were cleared well. I would like to thank Mr.Bhuvan & Register Karo Team.",
      image: Customer,
      link: "https://goo.gl/maps/LkJuMn7P83Ay74Tu7",
      rating: 5,
    },
    {
      id: 2,
      name: "Venu Gopal",
      role: "",
      content:
        "One of my friend suggested me to go with RegisterKaro for my Company Registration. I have no idea about Company registration process, documents required and other details involved. RegisterKaro Team guided me very well during my Pvt Ltd Company registration.",
      image: Customer,
      link: "https://goo.gl/maps/ggdSisMZxDJpfmwh7",
      rating: 5,
    },
    {
      id: 3,
      name: "Trinity Finserv LLP",
      role: "",
      content:
        "Great experience to have associated with REGISTER KARO team. All documentations for registration was done online with prompt updates. Thanks to entire team, especially Priyanka mam, for personally updating me and Himanshi for coordinating.",
      image: Customer,
      link: "https://goo.gl/maps/da8FnA2MXUK614L17",
      rating: 5,
    },
    {
      id: 4,
      name: "Jagan prakash",
      role: "",
      content:
        "I am extremely satisfied with RegisterKaro team efforts towards my incorporation of my company. These guys are really amazing no words can describe their wonderful service & strongly recommend for aspiring entrepreneurs.",
      image: Customer,
      link: "https://goo.gl/maps/d1DhR3hp3s2Jsa1r8",
      rating: 5,
    },
    {
      id: 5,
      name: "Roja Patil",
      role: "",
      content:
        "Team Register Karo helped our company incorporated into MCA. Team was very professional and cooperative. Response to all our doubts were cleared well.",
      image: Customer,
      link: "https://goo.gl/maps/tJNqPwoAU6AfVwDu5",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section
      className="flex justify-center items-center min-h-[500px] py-12 px-4"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hear What Our <span className="text-[#FFA22A]">Customers</span> Have
            To Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RegisterKaro is used by tens of thousands of founders to start,
            manage, and grow their business
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Stats Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg">
              <h3 className="text-5xl font-bold text-[#FFA22A] mb-2">
                20,000+
              </h3>
              <p className="text-xl font-medium text-gray-800 mb-6">
                Happy Customers
              </p>
              <p className="text-gray-600 mb-6">
                We are one of India's highest rated service provider, known for
                completing business incorporations and compliance services in
                record time.
              </p>
              <p className="text-sm text-gray-500">
                <strong>
                  RegisterKaro is a startup India registered company
                </strong>
              </p>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="lg:w-2/3">
            <div
              className="relative bg-white bg-opacity-80 rounded-xl shadow-lg p-8"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Testimonial Content */}
              <div className="mb-6 min-h-[200px]">
                <div className="flex items-center mb-4">
                  <img
                    src={Customer1}
                    alt="Google Review"
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Posted on</p>
                    <h3 className="text-xl font-bold">Google</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      <a
                        href={testimonials[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FFA22A] transition-colors"
                      >
                        {testimonials[currentIndex].name}
                      </a>
                    </h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full flex justify-center items-center bg-gray-100 hover:bg-[#FFA22A] hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowCircleLeftOutlinedIcon size={24} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-[#FFA22A]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full flex justify-center items-center bg-gray-100 hover:bg-[#FFA22A] hover:text-white transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowCircleRightOutlinedIcon size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
