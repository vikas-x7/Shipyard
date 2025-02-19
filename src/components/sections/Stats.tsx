/* eslint-disable @next/next/no-img-element */
import React from "react";

function Stats() {
  return (
    <div className="bg-[#f6f5f1] text-black px-16 py-24 relative">
      <img
        src="https://media.ffycdn.net/eu/weare/YF1sAKAunuZPqu8bTMqL.png?mod=v1/max=2400"
        alt=""
      />
      <img
        src="https://media.ffycdn.net/eu/weare/YVpWBRf2GQC3UVkKPuGW.gif"
        alt=""
      />
      <div className="text-sm flex items-center gap-2 mb-20 cursor-pointer">
        <span>Explore all resources</span>
        <span>→</span>
      </div>

      <div className="border-t border-black/80 mb-20"></div>

      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-7">
          <div className="text-[110px] leading-[0.95] font-serif">
            Amplify your <br /> brand vision
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-6 pt-6">
          <div className="text-lg leading-relaxed max-w-md">
            Drive brand consistency, collaboration, and efficiency — with
            Frontify.
          </div>

          <div className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-full bg-black text-white text-sm cursor-pointer">
            Book demo
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
