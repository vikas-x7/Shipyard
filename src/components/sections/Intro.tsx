import React from "react";

function Intro() {
  return (
    <div className="relative w-full h-screen flex pl-20 z-90 bg-transparent">
      <div className="mr-10 text-white">
        <h1>Own every moment</h1>
      </div>
      <div className="w-4xl text-4xl flex flex-col gap-y-7 text-white">
        <div>
          <h1>
            A brand is made of countless moments: a glance up, a scroll down, a
            long read, a quick like, a human interaction. When you own even the
            smallest detail, you own your narrative. You&apos;re in charge of
            how people experience your brand.
          </h1>
        </div>
        <div>
          <h1>
            Frontify helps global marketing teams orchestrate countless fleeting
            moments to create genuine connections.
          </h1>
        </div>
        <div>
          <h1>
            Everything you need — assets, guidelines, and templates — lives in a
            centralized DAM. It&apos;s a canvas for collaboration and a manual
            for creativity. And it&apos;s how leading brands roll out content
            that turns promises into lasting impressions.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Intro;
