"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Monk Mode", link: "/features" },
    { name: "WMS", link: "/pricing" },
    // { name: "Documentation", link: "/documentation" },
    // { name: "Blog", link: "/blog" },
    // { name: "Security", link: "/security" },
  ];

  return (
    <div className=" w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
