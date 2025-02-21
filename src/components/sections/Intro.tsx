import React from "react";
import { GoDotFill } from "react-icons/go";

function Intro() {
  const paragraphs = [
    `A brand is made of countless moments: a glance up, a scroll down, a
    long read, a quick like, a human interaction. When you own even the
    smallest detail, you own your narrative. You're in charge of
    how people experience your brand.`,

    `Frontify helps global marketing teams orchestrate countless fleeting
    moments to create genuine connections.`,

    `Everything you need — assets, guidelines, and templates — lives in a
    centralized DAM. It's a canvas for collaboration and a manual
    for creativity. And it's how leading brands roll out content
    that turns promises into lasting impressions.`,
  ];

  return (
    <div className="relative w-full h-[150vh] flex pl-20 z-90 bg-transparent">
      <div className="mr-10 text-white/90">
        <div className="flex items-center font-outfit">
          <GoDotFill />
          <h1>Own every moment</h1>
        </div>
      </div>

      <div className="w-5xl text-[45px] leading-12 flex flex-col gap-y-7 text-[#898985] font-tomorrow">
        {paragraphs.map((text, index) => (
          <div key={index}>
            <h1>{text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
