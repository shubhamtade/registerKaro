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

const App = () => {
  return (
    <section className="">
      <title>Home | RegisterKaro - Business Compliance Made Simple</title>
      <meta
        name="description"
        content="India's leading business compliance platform for company registration, tax filing, and legal services"
      />

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
    </section>
  );
};

export default App;
