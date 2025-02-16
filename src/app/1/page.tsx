"use client";

import { motion } from "motion/react";

function One() {
  return (
    <div className="h-screen w-full [perspective:1000px] [transform-style:preserve-3d] flex justify-center items-center bg-neutral-800">
      <motion.button
        className="group text-2xl  rounded-3xl px-12 py-4 text-neutral-50 bg-neutral-950 relative "
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
        }}
        style={{
          translateZ: 100,
        }}
      >
        Animate
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent w-3/4 mx-auto"></span>
        <span className="absolute transition-opacity duration-300 ease-in opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent w-3/4 mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}

export default One;
