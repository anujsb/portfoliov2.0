import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
const Projects = () => {
  return (
    <div className=" md:mt-20">
      <div className="grid grid-flow-row gap-2">
        <div className="grid grid-flow-col grid-cols-4 gap-2 what">
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

          <CardSpotlight className=" p-6 col-span-2 text-center flex flex-col justify-center items-center opacity-75 hover:opacity-100 ">
            <Link
              href="https://21bubbles.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" relative "
            >
              <h1 className="text-4xl font-semibold">21bubbles</h1>
              <p className="text-xl mt-2">Ai Automation Agency</p>

              <video
                width="500"
                height="500"
                preload="none"
                autoPlay
                muted
                loop
                className="mt-24 shadow-inner"
              >
                <source src="/21bubbles-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Link>
          </CardSpotlight>
          <CardSpotlight className=" p-6 col-span-2 text-center flex flex-col justify-center items-center opacity-75 hover:opacity-100">
            <Link
              href="https://21bubbles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative view"
            >
              {/* <div className=""> */}
              <h1 className="text-4xl font-semibold">Brotein Bistro</h1>
              <p className="text-xl mt-2">Subscription Platform</p>
              {/* </div> */}

              <Image
                src="/broteinbistro.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mt-24 rounded-xl"
              />
            </Link>
          </CardSpotlight>
        </div>
        <div className="grid grid-flow-col grid-cols-4">
          <div className="border border-stone-600">1</div>
          <div className="border border-stone-600">2</div>
          <div className="border border-stone-600">3</div>
          <div className="border border-stone-600">4</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
