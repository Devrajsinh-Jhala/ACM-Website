import React from "react";
import { Navbar } from "../components";

const HeroSection = () => {
  return (
    <section>
      <Navbar />
      <h1 className="text-blue-500">
        This is the Hero Section. Testing tailwind configuration
      </h1>
    </section>
  );
};

export default HeroSection;
