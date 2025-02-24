"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/animation.css";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineBorderInner } from "react-icons/ai";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    "The future of brand operations is here: Watch the latest product keynote",
    "The future of brand operations is here: Watch the latest product keynote",
    "The future of brand operations is here: Watch the latest product keynote",
  ];

  return (
    <>
      <div className="grid gap-3 p-2 px-4 md:p-4 md:px-7 font-outfit bg-[#101010] relative z-50">
        <div className="h-9 bg-[#B60AE3] rounded-md overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-marquee gap-x-50">
            {[...items, ...items].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-normal transition-all duration-300 ease-in-out text-white/90 text-[14px] hover:border-b border-white/90 cursor-pointer"
              >
                {text}
                <FaArrowRight />
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between text-black">
          <div className="flex items-center gap-6 pl-6 px-9 text-[#111110] text-[14px] font-medium bg-white py-7 h-10 rounded-md">
            <div>
              <Link href="/">
                <AiOutlineBorderInner size={25} />
              </Link>
            </div>
            <div className="flex gap-16">
              <button>Product </button>
              <button>Learn</button>
              <button>Agencies</button>
            </div>
          </div>

          <div className="flex items-center gap-9 pr-4 px-5 bg-white py-7 h-10 rounded-md text-[14px] font-medium">
            <button>Pricing </button>
            <button>Eng</button>
            <div className="flex gap-3">
              <button className="border p-2 px-4 rounded-3xl font-light transition-all duration-300 ease-in-out text-black border-black/50 hover:bg-[#B60AE3] hover:text-white cursor-pointer ">
                Login
              </button>
              <button className="border p-2 px-4 rounded-3xl font-light transition-all duration-300 ease-in-out bg-black text-white hover:bg-[#B60AE3] hover:text-white cursor-pointer">
                Book demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between bg-white p-3 px-5 rounded-md text-black">
          <Link href="/">
            <AiOutlineBorderInner size={25} />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white mt-1 rounded-md flex flex-col items-center gap-4 py-6 text-black font-medium shadow-lg"
            >
              <button className="hover:text-[#B60AE3] transition-colors">Product</button>
              <button className="hover:text-[#B60AE3] transition-colors">Learn</button>
              <button className="hover:text-[#B60AE3] transition-colors">Agencies</button>
              <button className="hover:text-[#B60AE3] transition-colors">Pricing</button>
              <button className="hover:text-[#B60AE3] transition-colors">Eng</button>
              <div className="w-full h-[1px] bg-gray-200 my-2"></div>
              <div className="flex flex-col gap-3 w-3/4">
                <button className="border p-2 px-4 rounded-3xl text-center border-black/50 hover:bg-[#B60AE3] hover:text-white transition-all">
                  Login
                </button>
                <button className="bg-black text-white p-2 px-4 rounded-3xl text-center hover:bg-[#B60AE3] transition-all">
                  Book demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
