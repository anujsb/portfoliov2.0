import Link from "next/link";
import React from "react";
import Image from "next/image";
const Projects = () => {
  return (
    <div className=" md:mt-20">
      <div className="grid grid-flow-row">
        <div className="grid grid-flow-col grid-cols-4">
          <Link
            href="https://21bubbles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border"
          >
            <Image
              src="/profile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>21bubbles</div>
          </Link>
          <Link href="/" className="border">
            Monk Mode
          </Link>
          <Link
            href="https://broteinbistro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border"
          >
            Brotein Bistro
          </Link>
          <Link href="/" className="border"></Link>
        </div>
        <div className="grid grid-flow-col grid-cols-4">
          <div className="border">1</div>
          <div className="border">2</div>
          <div className="border">3</div>
          <div className="border">4</div>
        </div>
        <div className="grid grid-flow-col grid-cols-4">
          <div className="border">1</div>
          <div className="border">2</div>
          <div className="border">3</div>
          <div className="border">4</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
