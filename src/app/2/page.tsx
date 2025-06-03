"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Two() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center h-screen w-screen"
          >
            <div className="shadow-2xl p-8 w-1/3 h-[70%] rounded-2xl bg-white flex flex-col items-center justify-center space-y-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Welcome to Motion 101
              </h1>
              <p className="text-gray-600 text-center">
                Explore smooth animations and modern UI components built with
                React and Tailwind CSS.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
              >
                Get Started
              </button>

              <div className="flex-1 bg-neutral-50 rounded-3xl w-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute h-full w-full inset-0 p-8 space-y-4"
                >
                  <p>Easy-to-use animation APIs</p>
                  <p>Customizable UI components</p>
                  <p>Responsive design with Tailwind CSS</p>
                  <p>Modern React best practices</p>
                  <p>Easy-to-use animation APIs</p>
                  <p>Customizable UI components</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Two;
