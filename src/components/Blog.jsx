import React, { useState, useEffect } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Punishable Offences Under FSSAI: Know the Rules",
      date: "April 03, 2025 at 11:00 AM",
      author: "Jai Raj",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/04/FSSAI-Violations.png",
      link: "post/fssai-offences-penalties-india",
    },
    {
      id: 2,
      title: "BIS certification for Medical devices: A step-by-step guide",
      date: "April 03, 2025 at 10:31 AM",
      author: "Shaggun V Singh",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/04/BIS-certification-for-Medical-devices.png",
      link: "post/bis-certification-medical-devices",
    },
    {
      id: 3,
      title:
        "One Person Company Can Be Registered As? Exploring OPC Structures and Requirements!",
      date: "March 29, 2025 at 09:36 AM",
      author: "Om Adesh Ghai",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/One-person-company-can-be-registered-as.webp",
      link: "post/one-person-company-registration-types",
    },
    {
      id: 4,
      title: "Understanding Compliance for Private Limited Companies in India",
      date: "March 29, 2025 at 08:26 AM",
      author: "Muskaan Hiran",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/Private-Limited-Company-1.webp",
      link: "post/compliance-private-limited-company",
    },
    {
      id: 5,
      title: "Government Schemes for Startups in India",
      date: "March 29, 2025 at 07:41 AM",
      author: "Komal Sharma",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/Government-Scheme.webp",
      link: "post/government-schemes-startups-india",
    },
    {
      id: 6,
      title: "Government Schemes for Startups in India",
      date: "March 29, 2025 at 07:41 AM",
      author: "Komal Sharma",
      image:
        "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/Government-Scheme.webp",
      link: "post/government-schemes-startups-india",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 2 : 1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= blogPosts.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0
        ? blogPosts.length - itemsPerSlide
        : prevIndex - itemsPerSlide
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
  }, [currentIndex, isAutoPlaying, itemsPerSlide]);

  const visiblePosts = blogPosts.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <section className="py-20 bg-[#EFF4FF] relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-[#FFA22A] px-4 py-1 rounded-full text-sm font-medium mb-3">
            LATEST BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on business registration,
            compliance, and more
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-[#FFA22A] hover:text-white"
          >
            <ArrowCircleLeftOutlinedIcon fontSize="large" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-[#FFA22A] hover:text-white"
          >
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </button>

          {/* Visible Posts */}
          <div
            className={` px-5 grid gap-8 ${
              itemsPerSlide === 2 ? "md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                className="transition-all duration-500 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#FFA22A] transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-sm font-medium text-gray-700">
                    Written by {post.author}
                  </p>
                  <a
                    href={post.link}
                    className="inline-block mt-4 text-[#FFA22A] font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(blogPosts.length / itemsPerSlide),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerSlide)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === i * itemsPerSlide
                    ? "bg-[#FFA22A]"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#FFA22A]/80 text-white rounded-lg font-medium hover:bg-[#FFA22A] transition-colors shadow-md"
          >
            View All Articles
            <ArrowCircleRightOutlinedIcon className="ml-2" fontSize="small" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
