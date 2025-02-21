import React from "react";
import { CiLock } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuBlocks, LuBoxes } from "react-icons/lu";

function Process() {
  const items = [
    {
      icon: <CiLock />,
      title: "The impact of consistency",
      desc: `A consistent brand drives trust and recognition, which directly
      translates to stronger customer loyalty and higher revenue. With
      centralized guidelines, assets, and templates, Frontify ensures
      all marketing materials — from global campaigns to local market
      adaptation — stay on brand.`,
    },
    {
      icon: <IoExtensionPuzzleOutline />,
      title: "The magic of collaboration",
      desc: `Great brand experiences happen when teams work together. With
      Frontify, marketers and designers can access the assets and
      workflows to create, review, and iterate in real time. Teams align
      faster, decide with confidence, and keep projects moving forward
      through clear feedback and approvals.`,
    },
    {
      icon: <LuBlocks />,
      title: "The power of efficiency",
      desc: `Time spent searching for files, checking guidelines, or
      retrofitting designs is revenue lost. Frontify streamlines brand
      operations by putting the relevant tools in everyone’s hands.
      Marketing teams can move quickly, agencies can plug into your
      brand ecosystem, and designers can focus on high-value creativity.`,
    },
  ];

  return (
    <div className="relative font-outfit bg-[#F0F0EB]">
      <div className="p-7">
        <h1 className="flex items-center">
          <GoDotFill size={23} /> The Frontify factor
        </h1>
      </div>

      <div className="px-7 ">
        <div className="grid grid-cols-3 gap-10  border-b border-black/80 py-28">
          {items.map((item, index) => (
            <div key={index} className="px-3 ">
              <div className="w-10 h-10 mb-7 rounded-lg bg-black/5 flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <div className="text-xl font-semibold text-[#111110] mb-3">
                  {item.title}
                </div>
                <div className="text-[16px] leading-relaxed text-black/90">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
