/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

function Features() {
  return (
    <div className="bg-[#F0F0EB] relative p-7 py-10 font-outfit">
      <div className=" py-30">
        <h1 className=" flex text-md">
          <GoDotFill size={23} />
          Features
        </h1>
        <p className="text-8xl mt-6 font-tomorrow">
          Scale your brand with <br /> powerful tools — all in <br /> one place
        </p>
        <button className="mt-10 flex items-center ">
          Explore product overview <IoIosArrowRoundForward size={30} />
        </button>
      </div>
      <div className="flex justify-between p-4 ">
        <div className="text-7xl sticky top-24 self-start w-4xl">
          <h1>DAM</h1>
          <h1>Guidelines</h1>
          <h1>Templates</h1>
        </div>

        <div className="flex flex-col gap-y-7">
          <div className="max-w-6xl  overflow-hidden bg-[#f6f5f1] border p-3 ">
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="w-full h-125 object-cover"
                src="https://i.pinimg.com/1200x/17/01/af/1701af3d5c48c7e1b37850042375cefb.jpg"
                alt=""
              />

              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>

              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/10 backdrop-blur text-sm">
                Marketing
              </div>
            </div>

            <div className="px-2 pt-6 space-y-3">
              <div className="text-xl font-semibold">
                Digital asset management — but better
              </div>

              <div className="text-black/70 leading-relaxed">
                More than just a storage solution, our DAM system helps you
                build a foundation for creative collaboration and brand
                consistency.
              </div>

              <div className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                Learn more <span>→</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl  overflow-hidden bg-[#f6f5f1] border p-3">
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="w-full h-125 object-cover"
                src="https://i.pinimg.com/1200x/74/03/43/740343b04d3be26544d6b5eea89afb8e.jpg"
                alt=""
              />

              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>

              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/10 backdrop-blur text-sm">
                Marketing
              </div>
            </div>

            <div className="px-2 pt-6 space-y-3">
              <div className="text-xl font-semibold">
                Digital asset management — but better
              </div>

              <div className="text-black/70 leading-relaxed">
                More than just a storage solution, our DAM system helps you
                build a foundation for creative collaboration and brand
                consistency.
              </div>

              <div className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                Learn more <span>→</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl  overflow-hidden bg-[#f6f5f1] border p-3">
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="w-full h-125 object-cover"
                src="https://i.pinimg.com/1200x/17/01/af/1701af3d5c48c7e1b37850042375cefb.jpg"
                alt=""
              />

              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                ✓
              </div>

              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/10 backdrop-blur text-sm">
                Marketing
              </div>
            </div>

            <div className="px-2 pt-6 space-y-3">
              <div className="text-xl font-semibold">
                Digital asset management — but better
              </div>

              <div className="text-black/70 leading-relaxed">
                More than just a storage solution, our DAM system helps you
                build a foundation for creative collaboration and brand
                consistency.
              </div>

              <div className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                Learn more <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
