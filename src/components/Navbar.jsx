import { useState } from "react";

//Icons
import { FaBattleNet } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start xl:p-4 p-2 z-50 border-b border-red-200">
      <div className="xl:w-1/12 text-center flex items-center justify-start ">
        <h1 className="text-2xl text-center font-bold left-12 relative">
          Logo
        </h1>
        <span className="text-4xl text-red-200 absolute left-4 top-3 xl:left-6 xl:top-6 ">
          <FaBattleNet />
        </span>
      </div>
      <nav
        className={`fixed w-[90%] bg-white md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center font-semibold text-2xl text-purple-600 gap-2 transition-all duration-500 z-50`}
      >
        <a href="#" className="hover:bg-red-200 hover:text-white text-black py-2 px-6 rounded-md">
          Home
        </a>
        <a href="#" className="hover:bg-red-200 hover:text-white text-black py-2 px-6 rounded-md">
          About Us
        </a>
        <a href="#" className="hover:bg-red-200 hover:text-white text-black py-2 px-6 rounded-md">
          Contact
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <GrClose /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
