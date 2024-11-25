"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const videoFrame = document.getElementById("frame");

      if (videoFrame) {
        gsap.set(videoFrame, {
          clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
          borderRadius: "0% 0% 40% 10%",
        });
        gsap.from(videoFrame, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0% 0% 0% 0%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: videoFrame,
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    }
  }, []);
  return (
    <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-400">
      {/* {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          https://uiverse.io/G4b413l/tidy-walrus-92
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )} */}
      <div
        id="frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 bg-red-300 text-8xl text-white">
          Developer
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10 bg-red-800">
            <h1 className="special-font hero-heading text-blue-100 text-8xl">
              Full Stack
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button id="watch-trailer" title="Watch trailer" />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black text-8xl">
        Developer
      </h1>
    </div>
  );
};

export default Hero;
