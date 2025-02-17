import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-screen pt-17 overflow-hidden bg-[#101010]">
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
          <h1 className="text-6xl p-4">
            Own every <br /> moment
          </h1>
        </div>

        <div className="max-w-sm">
          <p>
            The Frontify DAM simplifies brand workflows so marketing teams can
            deliver engaging experiences on a global scale — fast.
          </p>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-white text-black rounded-full">
              Book demo
            </button>
            <button className="border px-4 py-2 rounded-full">
              See the Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
