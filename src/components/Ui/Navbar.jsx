import { MdOutlineWatchLater } from "react-icons/md";
import { PiChartLine } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">
            <span className="font-extrabold">Keen</span>Keeper
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>
                <a className="font-medium text-[#64748B] flex gap-2 justify-center items-center">
                  <RiHome2Line />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a className="font-medium text-[#64748B] flex gap-2 justify-center items-center">
                  <MdOutlineWatchLater />
                  Timeline
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a className="font-medium text-[#64748B] flex gap-2 justify-center items-center">
                  <PiChartLine />
                  Stats
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
