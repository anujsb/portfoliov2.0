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
    <div className="flex px-4 mt-26 md:mt-52 my-52 items-center justify-between">
      <h1 className="text-3xl md:text-5xl lg:text-8xl font-semibold leading-snug md:leading-tight lg:leading-none">
        Your Go-To Expert <br />
        for <FlipWords className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" words={words} /> <br />
      </h1>
    </div>
  );
};

export default Hero;
