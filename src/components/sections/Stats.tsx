/* eslint-disable @next/next/no-img-element */
import React from "react";

function Stats() {
  return (
    <div className="bg-[#F0F0EB] text-black relative ">
      <img
        src="https://media.ffycdn.net/eu/weare/YF1sAKAunuZPqu8bTMqL.png?mod=v1/max=2400"
        alt=""
      />
      <img
        src="https://media.ffycdn.net/eu/weare/YVpWBRf2GQC3UVkKPuGW.gif"
        alt=""
      />

      <div className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start mt-20 md:mt-50 pb-23 px-4">
        <div className="w-full md:col-span-7">
          <div className="text-5xl md:text-[110px] leading-[0.95] font-serif">
            Amplify your <br /> brand vision
          </div>
        </div>

        <div className="w-full md:col-span-5 flex flex-col gap-6 pt-6">
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
