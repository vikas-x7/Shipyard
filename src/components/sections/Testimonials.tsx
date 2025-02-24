import React from "react";

function Testimonials() {
  return (
    <div className="relative bg-[#F0F0EB] text-black font-outfit px-9">
      <div className="flex flex-col gap-y-9 px-4 md:px-0">
        <h1>Testimonials</h1>
        <p className="text-4xl md:text-8xl font-serif">
          Real stories and <br /> remarkable results
        </p>
        <p>Browse all customer stories</p>
      </div>

      <div className="py-9 px-4 md:px-0">
        <div className="bg-[#F0F0EB] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT CARD */}
            <div className="bg-[#E1E1DB] rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>G2 rating</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  G2
                </div>
              </div>

              <div className="flex items-end gap-2">
                <div className="text-6xl md:text-[120px] leading-none font-light">4.5</div>
                <div className="text-2xl md:text-3xl mb-3 md:mb-6">/5</div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#E1E1DB] rounded-2xl p-12 flex flex-col justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <span>☀️</span>
                <span>Skyscanner</span>
              </div>

              <div className="text-3xl leading-snug font-serif mt-10">
                “We&apos;ve seen the company and our external partners adopt
                Frontify instantly. We&apos;ve achieved operational efficiencies
                in our first few months after launch — we no longer get
                bombarded with questions about hex codes and branded decks.”
              </div>

              <div className="mt-10 text-sm text-black/60">
                – Carla Sandhu, Global Head of Design Operations at Skyscanner
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F0EB] mt-9 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-[#e9e8e3] rounded-2xl p-8 flex flex-col justify-between">
              <div className="text-blue-600 font-semibold">Telefónica</div>

              <div className="text-6xl md:text-[120px] leading-none font-light">
                717<span className="text-3xl md:text-5xl align-top">K</span>
              </div>

              <div className="flex items-center justify-between text-sm text-black/60">
                <span>Assets managed in the DAM</span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  →
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#e9e8e3] rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  OMR rating
                </span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs">
                  OMR
                </span>
              </div>

              <div className="flex items-end gap-2">
                <div className="text-6xl md:text-[120px] leading-none font-light">4.6</div>
                <div className="text-2xl md:text-3xl mb-3 md:mb-6">/5</div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#e9e8e3] rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex items-center gap-2 font-semibold text-red-600">
                BOSCH
              </div>

              <div className="text-6xl md:text-[120px] leading-none font-light">
                &gt;2<span className="text-3xl md:text-5xl align-top">M</span>
              </div>

              <div className="flex items-center justify-between text-sm text-black/60">
                <span>Page views per year</span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  →
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* LARGE QUOTE */}
            <div className="col-span-1 md:col-span-2 bg-[#e9e8e3] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
              <div className="text-2xl">Mercedes-Benz</div>

              <div className="text-3xl leading-snug font-serif mt-10">
                “The roll-out of Frontify was a success. The platform is very
                intuitive and easy to use, which makes it easy for people to get
                started using it.”
              </div>
            </div>

            {/* SMALL METRIC */}
            <div className="bg-[#e9e8e3] rounded-2xl p-10 flex flex-col justify-between">
              <div className="text-blue-900 font-semibold text-2xl">
                DATACOM
              </div>

              <div className="text-6xl md:text-[120px] leading-none font-light">
                3<span className="text-3xl md:text-5xl align-top">+</span>
                <span className="text-2xl md:text-4xl ml-2">hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
