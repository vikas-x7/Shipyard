import Link from "next/link";
import "../../styles/animation.css";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineBorderInner } from "react-icons/ai";

function Navbar() {
  const items = [
    "The future of brand operations is here: Watch the latest product keynote",
    "The future of brand operations is here: Watch the latest product keynote",
    "The future of brand operations is here: Watch the latest product keynote",
  ];
  return (
    <>
      <div className="grid gap-3 p-4 px-7 font-outfit">
        <div className="h-9 bg-[#B60AE3] rounded-md overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-marquee gap-x-50">
            {[...items, ...items].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-normal transition-all duration-300 ease-in-out text-white/90 text-[14px] hover:border-b border-white/90 cursor-pointer"
              >
                {text}
                <FaArrowRight />
              </span>
            ))}
          </div>
        </div>

        <div className=" text-black  flex items-center justify-between ">
          <div className="flex items-center gap-6 pl-6 px-9 text-[#111110] text-[14px] font-medium bg-white py-7 h-10 rounded-md">
            <div>
              <Link href="/">
                <AiOutlineBorderInner size={25} />
              </Link>
            </div>
            <div className="flex gap-16">
              <button>Product </button>
              <button>Learn</button>
              <button>Agencies</button>
            </div>
          </div>

          <div className="flex items-center gap-9 pr-4 px-5 bg-white py-7 h-10 rounded-md  text-[14px] font-medium">
            <button>Pricing </button>
            <button>Eng</button>
            <div className="flex gap-3">
              <button className="border p-2 px-4 rounded-3xl font-light transition-all duration-300 ease-in-out text-black border-black/50 hover:bg-[#B60AE3] hover:text-white cursor-pointer ">
                Login
              </button>
              <button className="border p-2 px-4 rounded-3xl font-light transition-all duration-300 ease-in-out bg-black text-white hover:bg-[#B60AE3] hover:text-white cursor-pointer">
                Book demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
