"use client";

import classNames from "classnames";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

function Three() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-1/2 h-1/2 shadow-2xl rounded-2xl p-4 flex flex-col">
        {/* tabs */}
        <ul className="flex p-4 bg-neutral-50 rounded-3xl">
          {tabs.map((item, index) => (
            <>
              <motion.li
                key={item.label}
                onClick={() => setSelectedTab(item)}
                className={classNames(
                  "w-full cursor-pointer text-neutral-700 font-semibold ",
                  {
                    "text-center": index === 1,
                    "text-end": index === 2,
                  }
                )}
              >
                {item.label}{" "}
                {item.label === selectedTab.label && (
                  <motion.div
                    layoutId="underline"
                    className=" mt-2 border-b border-b-blue-500"
                  />
                )}
              </motion.li>
            </>
          ))}
        </ul>

        {/* icons */}

        <div className="flex-1 flex justify-center items-center ">
          {
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center text-[120px]"
              >
                {selectedTab.icon}
              </motion.div>
            </AnimatePresence>
          }
        </div>
      </div>
    </div>
  );
}

export default Three;
