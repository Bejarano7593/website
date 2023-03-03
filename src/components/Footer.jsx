import { FaBattleNet, FaTiktok } from "react-icons/fa";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiTelegramLine,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-slate-700 p-8 xl:py-20 xl:px-44 md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/*Logo*/}
        <div className="w-1/12 relative">
          <h1 className="text-2xl font-bold p-1 text-white md:px-10">Logo</h1>
          <span className="text-4xl text-red-200">
            <FaBattleNet className="absolute md:-left-2 -left-10 top-1" />
          </span>
        </div>
        {/*Social Media */}
        <nav className="flex items-center gap-4">
          <a
            href=""
            className="block text-2xl text-white p-2 bg-red-400 rounded-full hover:bg-red-300"
          >
            <RiFacebookFill />
          </a>
          <a
            href=""
            className="block text-2xl text-white p-2 bg-red-400 rounded-full hover:bg-red-300"
          >
            <RiInstagramLine />
          </a>
          <a
            href=""
            className="block text-2xl text-white p-2 bg-red-400 rounded-full hover:bg-red-300"
          >
            <RiWhatsappLine />
          </a>
          <a
            href=""
            className="block text-2xl text-white p-2 bg-red-400 rounded-full hover:bg-red-300"
          >
            <RiTelegramLine />
          </a>
          <a
            href=""
            className="block text-2xl text-white p-2 bg-red-400 rounded-full hover:bg-red-300"
          >
            <FaTiktok />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg text-white font-bold">Company</h3>
        <nav className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-between px-4">
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">About</a>
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">Press</a>
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">Investors</a>
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">Events</a>
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">Term of use</a>
          <a href="" className="text-gray-300 hover:text-gray-100 hover:border-b-2">Pripacy policy</a>
          <button
              type="submit"
              className="text-lg font-semibold py-2 px-6 bg-red-400 text-white rounded-xl hover:bg-red-300"
            >
              Contact Us
            </button>
        </nav>
      </div>
      <div className="xl:mt-20 mt-10">
        <p className="text-gray-300 text-center">
          © TbDev 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
