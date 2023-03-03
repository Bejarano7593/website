import { RiCheckboxBlankCircleFill, RiCheckboxBlankFill } from "react-icons/ri";
import { GrPlayFill } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiAdobeaftereffects,
} from "react-icons/si";
import { TfiMoreAlt } from "react-icons/tfi";

function SectionOne() {
  return (
    <section className="min-h-[100vh] grid grid-cols-1 xl:grid-cols-8 gap-20 xl:gap-0">
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-20">
        {/*Information*/}
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl xl:text-7xl font-bold  leading-[4rem] xl:leading-[6.5rem]">
            Web design Impactfull digital{" "}
            <span className="text-purple-400 xl:py-2 xl:px-8 xl:-right-10 left-6 px-8 mt-4 border-red-400 border-8 rounded-2xl relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className="text-lg absolute -left-5 -top-5 text-white p-2 bg-orange-400  rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-lg absolute -right-5 -top-5 text-white p-2 bg-orange-400  rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-lg absolute -left-5 -bottom-5 text-white p-2 bg-orange-400  rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-lg absolute -right-5 -bottom-5 text-white p-2 bg-orange-400 rounded-full box-content" />
            </span>
          </h2>
          <span className="font-medium text-xl leading-[2rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            dolorem itaque obcaecati eligendi. Illum exercitationem veritatis
            fuga excepturi corporis deserunt amet ipsam, tempore laborum. Quae
            animi assumenda magni repellendus. Ipsa.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-red-400 text-white py-2 px-8 rounded-xl text-xl hover:bg-red-200">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-6 rounded-xl hover:bg-slate-200">
              <GrPlayFill className="bg-slate-300 rounded-full p-4 text-slate-500 box-content" />
              Watch our <br /> introducction video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="xl:col-span-3 md:col-span-5 flex items-center justify-center relative p-8">
        <div>
          <img
            src="image2.png"
            className="md:w-96 md:h-96 w-72 h-72 object-contain relative right-6"
          />
          <div className="bg-white shadow-2xl rounded-lg py-4 px-8 flex flex-col justify-center max-w-[250px] mx-auto md:relative -top-10">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/free-photo/portrait-smiley-business-man_23-2148514859.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="https://img.freepik.com/premium-photo/confident-handsome-businessman-outdoor_53419-3020.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white -ml-3"
              />
              <img
                src="https://img.freepik.com/premium-photo/businessman-looking-camera_13339-64821.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white -ml-3"
              />
              <img
                src="https://img.freepik.com/premium-photo/young-beautiful-businesswoman_53419-7885.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white -ml-3"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-700">120 + employees</h3>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <AiFillStar className="text-red-400" /> 5.0 (3.1k Reviews)
            </div>
            <div className="-z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="absolute text-red-200 text-8xl left-44 -top-6" />
                <RiCheckboxBlankFill className="absolute left-36 -bottom-10 text-slate-100 text-8xl" />
              </div>
            </div>
          </div>
        </div>
        {/*Icons*/}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-[360px] md:h-[360px] w-[300px] h-[300px] bg-write border-[10px] border-red-200 rounded-full -z-10"></div>
        <div className="absolute items-center justify-center flex xl:gap-4 xl:text-6xl xl:top-[10%] xl:left-[15%] text-4xl -top-12 gap-4 md:-top-10 md:text-5xl">
          <SiAdobeillustrator className="bg-orange-500 text-red-900 rounded-xl " />
          <SiAdobephotoshop className="bg-cyan-600 text-sky-900 rounded-xl " />
          <SiAdobepremierepro className="bg-purple-400 text-purple-900 rounded-xl " />
          <SiAdobexd className="bg-write text-purple-900 rounded-xl " />
          <SiAdobeaftereffects className="bg-indigo-500 text-blue-900 rounded-xl " />
          <TfiMoreAlt className="border-red-200 border-[4px] rounded-xl p-2 bg-slate-100 text-red-300 " />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
