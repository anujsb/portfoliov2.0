import React from "react";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = [
    "Websites",
    "Automations",
    "Softwares",
    "AI_Solutions",
  ];

  return (
    <div className="flex px-4 md:mt-20 p-4 md:p-16 lg:p-24">
      <h1 className="text-3xl md:text-5xl lg:text-8xl font-semibold leading-snug md:leading-tight lg:leading-none">
        Your Go-To Expert <br />
        for <FlipWords words={words} /> <br />
      </h1>
    </div>
  );
};

export default Hero;
