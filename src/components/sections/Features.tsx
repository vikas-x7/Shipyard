/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

function Features() {
  const features = [
    {
      image:
        "https://i.pinimg.com/1200x/17/01/af/1701af3d5c48c7e1b37850042375cefb.jpg",

      title: "Digital asset management — but better",
      desc: "More than just a storage solution, our DAM system helps you build a foundation for creative collaboration and brand consistency.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/17/01/af/1701af3d5c48c7e1b37850042375cefb.jpg",

      title: "Digital asset management — but better",
      desc: "More than just a storage solution, our DAM system helps you build a foundation for creative collaboration and brand consistency.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/17/01/af/1701af3d5c48c7e1b37850042375cefb.jpg",

      title: "Digital asset management — but better",
      desc: "More than just a storage solution, our DAM system helps you build a foundation for creative collaboration and brand consistency.",
    },
  ];

  return (
    <div className="bg-[#F0F0EB] relative p-7 py-10 font-outfit">
      <div className="py-30">
        <h1 className="flex text-md">
          <GoDotFill size={23} />
          Features
        </h1>

        <p className="text-8xl mt-6 font-playfairDisplay">
          Scale your brand with <br /> powerful tools — all in <br /> one place
        </p>

        <button className="mt-10 flex items-center">
          Explore product overview <IoIosArrowRoundForward size={30} />
        </button>
      </div>

      <div className="flex justify-between p-4">
        <div className="text-7xl sticky top-24 self-start w-4xl text-black/20 font-playfairDisplay">
          <h1>DAM</h1>
          <h1>Guidelines</h1>
          <h1>Templates</h1>
        </div>

        <div className="flex flex-col gap-y-7">
          {features.map((item, index) => (
            <div
              key={index}
              className="max-w-6xl overflow-hidden  border border-black/10 p-5 rounded-xl"
            >
              <div className="relative overflow-hidden  p-10 bg-[#C4C4C4] flex items-center justify-center rounded-2xl">
                <img className="w-90 object-cover r" src={item.image} alt="" />
              </div>

              <div className="px-2 pt-6 space-y-3">
                <div className="text-[17px] font-semibold text-[#111110]">
                  {item.title}
                </div>

                <div className="text-black/70 leading-relaxed">{item.desc}</div>

                <div className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
