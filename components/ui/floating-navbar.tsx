"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex justify-between items-center w-min md:w-full max-w-screen-xl fixed top-5 md:top-10 border border-transparent rounded-2xl bg-sec-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 px-3",
            className
          )}
        >
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="EACC.dev logo"
              className=""
            /> */}
            <h1 className="text-xl font-semibold md:text-2xl">
              Anuj  Bhuyar
            </h1>
          </div>
          <div className="flex space-x-1 md:space-x-4 text-[#404040] hover:text-black mx-4">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="relative flex items-center space-x-2 md:space-x-4 text-sm md:text-base"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <Button className="ml-2 md:ml-4 mb-0 md:mb-0 black-grad-radial shadow-inner border rounded-lg">
            Contact
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
