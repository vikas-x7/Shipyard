import React from "react";

function Intro() {
  return (
    <div className="relative w-full  bg-black  flex py-50 pl-20  ">
      <div className="mr-10">
        <h1> Own every moment</h1>
      </div>
      <div className="w-4xl text-4xl flex flex-col gap-y-7">
        <div>
          <h1>
            A brand is made of countless moments: a glance up, a scroll down, a
            long read, a quick like, a human interaction. When you own even the
            smallest detail, you own your narrative. You’re in charge of how
            people experience your brand.
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
            centralized DAM. It’s a canvas for collaboration and a manual for
            creativity. And it’s how leading brands roll out content that turns
            promises into lasting impressions.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Intro;
