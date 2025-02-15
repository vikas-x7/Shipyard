import Link from "next/link";
import { BiScatterChart } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="grid gap-3">
        <div className="h-9 bg-[#B60AE3] rounded-[5px] flex items-center">
          <p className="text-white text-[14px]">
            The future of brand operations is here: Watch the latest product
            keynote.
          </p>
        </div>

        <div className="bg-[#B8B8B4] rounded-[5px] flex items-center justify-between px-9 py-7 h-10">
          <div className="flex items-center gap-12 ">
            <Link href="/" className="text-[30px]">
              <BiScatterChart />
            </Link>
            <button>Product </button>
            <button>Learn</button>
            <button>Agencies</button>
          </div>

          <div className="flex items-center gap-8 ">
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
