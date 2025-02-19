import React from "react";

function Footer() {
  return (
    <div className="bg-[#0b0b0b] text-white px-16 py-24 relative">
      <div className="text-lg font-serif mb-16">
        Brand news straight to your inbox:
      </div>

      <div className="text-[96px] font-serif text-white/30 leading-none mb-6">
        Your email
      </div>

      <div className="border-t border-white/70 mb-10"></div>

      <div className="text-lg mb-14 cursor-pointer">Submit →</div>

      <div className="text-sm text-white/70 mb-24">
        By subscribing you agree to our{" "}
        <span className="underline cursor-pointer">TOS</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </div>

      <div className="flex justify-between items-center text-sm text-white/80">
        <div>© 2026 Frontify AG</div>

        <div className="flex gap-16">
          <div className="underline cursor-pointer">Privacy policy</div>
          <div className="underline cursor-pointer">Cookie policy</div>
          <div className="underline cursor-pointer">Imprint</div>
          <div className="underline cursor-pointer">
            Website terms of service
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
