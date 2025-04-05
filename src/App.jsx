import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Plans from "./components/Plans";

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
    </section>
  );
};

export default App;
