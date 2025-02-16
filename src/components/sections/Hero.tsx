import React from "react";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-between h-full">
        <div>
          <h1 className=" text-6xl">
            Own every <br /> moment
          </h1>
        </div>
        <div className="w-70 mr-22.5">
          <p className="text-justify">
            The Frontify DAM simplifies brand workflows so marketing teams can
            deliver engaging experiences on a global scale — fast.
          </p>
          <div className="mt-4 flex gap-3 justify-between ">
            <button className="px-4 py-2 bg-white text-black border rounded-4xl">
              Book demo
            </button>
            <button className="border px-2 py-2  rounded-4xl">
              See the Platform{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
