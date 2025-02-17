import Link from "next/link";
import { BiScatterChart } from "react-icons/bi";
import "../../styles/animation.css";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="grid gap-3 p-4 fixed z-90">
        <div className="h-9 bg-[#B60AE3] rounded-[5px] flex items-center overflow-hidden">
          <p className="ticker-text text-white font-semibold text-[12px] flex gap-50">
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              The future of brand operations is here: Watch the latest product
              keynote <FaArrowRight />
            </span>
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              The future of brand operations is here: Watch the latest product
              keynote <FaArrowRight />
            </span>
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              The future of brand operations is here: Watch the latest product
              keynote <FaArrowRight />
            </span>
          </p>
        </div>

        <div className=" text-black  flex items-center justify-between ">
          <div className="flex items-center gap-9 pl-6  px-9 bg-[#B8B8B4] py-7 h-10 rounded-[5px]">
            <Link href="/" className="text-[30px]">
              <BiScatterChart />
            </Link>
            <button>Product </button>
            <button>Learn</button>
            <button>Agencies</button>
          </div>

          <div className="flex items-center gap-8 pr-4 px-9 bg-[#B8B8B4] py-7 h-10 rounded-[5px] ">
            <button>Pricing </button>
            <button>Eng</button>
            <button>Login</button>
            <button>Book demo</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
