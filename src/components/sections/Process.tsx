import React from "react";
import { CiLock } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";

function Process() {
  return (
    <div className="relative border border-b-black ">
      <div className="bg-[#f6f5f1] px-20 py-24">
        <div className="grid grid-cols-3 gap-20">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center text-black">
              <CiLock />
            </div>
            <div className="text-xl font-semibold text-black/70">
              The impact of consistency
            </div>
            <div className="text-[15px] leading-relaxed text-black/80">
              A consistent brand drives trust and recognition, which directly
              translates to stronger customer loyalty and higher revenue. With
              centralized guidelines, assets, and templates, Frontify ensures
              all marketing materials — from global campaigns to local market
              adaptation — stay on brand.
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center text-black">
              <IoExtensionPuzzleOutline />
            </div>
            <div className="text-xl font-semibold text-black/70">
              The magic of collaboration
            </div>
            <div className="text-[15px] leading-relaxed text-black/80">
              Great brand experiences happen when teams work together. With
              Frontify, marketers and designers can access the assets and
              workflows to create, review, and iterate in real time. Teams align
              faster, decide with confidence, and keep projects moving forward
              through clear feedback and approvals.
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center text-black">
              <LuBoxes />
            </div>
            <div className="text-xl font-semibold text-black/70">
              The power of efficiency
            </div>
            <div className="text-[15px] leading-relaxed text-black/80">
              Time spent searching for files, checking guidelines, or
              retrofitting designs is revenue lost. Frontify streamlines brand
              operations by putting the relevant tools in everyone’s hands.
              Marketing teams can move quickly, agencies can plug into your
              brand ecosystem, and designers can focus on high-value creativity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
