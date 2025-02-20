import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-154 overflow-hidden bg-[#101010]">
      <video
        className="fixed w-full h-full object-cover z-0"
        preload="metadata"
        muted
        loop
        autoPlay
        playsInline
        src="https://res.cloudinary.com/dyv9kenuj/video/upload/v1770732487/22d7fbc7-2c17a5b1_yw79vd.mp4"
      />

      <div className="relative z-10 flex items-center justify-between h-full text-white">
        <div>
          <h1 className="text-6xl p-7 font-tomorrow">
            Own every <br /> moment
          </h1>
        </div>

        <div className="max-w-85 text-justify p-7 mr-15">
          <p>
            The Frontify DAM simplifies brand workflows so marketing teams can
            deliver engaging experiences on a global scale — fast.
          </p>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-white text-black rounded-full font-light transition-all duration-300 ease-in-out  hover:bg-[#B60AE3] hover:text-white cursor-pointer">
              Book demo
            </button>
            <button className="border px-4 py-2 rounded-full font-light transition-all duration-300 ease-in-out  hover:bg-[#B60AE3] hover:text-white hover:border-black cursor-pointer">
              See the Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
