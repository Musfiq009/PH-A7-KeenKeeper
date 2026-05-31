import { MdOutlineWatchLater } from "react-icons/md";
import { PiChartLine } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";

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
              <a className="font-medium text-[#64748B]">
                <RiHome2Line />
                Home
              </a>
            </li>
            <li>
              <a className="font-medium text-[#64748B]"><MdOutlineWatchLater />
Timeline</a>
            </li>
            <li>
              <a className="font-medium text-[#64748B]"><PiChartLine />
Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
