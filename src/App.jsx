import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Plans from "./components/Plans";
import RegProcess from "./components/RegProcess";
import Partners from "./components/Partners";
import Customers from "./components/Customers";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Test from "./components/Test";

const App = () => {
  return (
    <section className="">
      <title>Home | RegisterKaro - Business Compliance Made Simple</title>
      <meta
        name="description"
        content="India's leading business compliance platform for company registration, tax filing, and legal services"
      />
      <p className="bg-[#154761] text-gray-100 text-[10px] md:text-sm py-1 px-1 text-center">
        We take care of ALL your business compliance needs{" "}
        <span className="font-bold cursor-pointer ">
          Register<span className="text-[#FFA22A]">Karo.</span>{" "}
        </span>
        <span className="">
          We empower SMEs and entrepreneurs on their business journey.
        </span>
      </p>

      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Plans />
      <RegProcess />
      <Partners />
      <Customers />
      <Blog />
      <ContactUs />
      <Footer />
      {/* <Test /> */}
    </section>
  );
};

export default App;
