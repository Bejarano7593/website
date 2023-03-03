import { HiMail } from "react-icons/hi";
import { RiBarcodeLine, RiSmartphoneFill, RiMacFill } from 'react-icons/ri'
import { CgIfDesign } from 'react-icons/cg'

function Services() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20 p-8 xl:p-20">
      <div className="flex flex-col gap-4 md:px-20 md:py-8 md:items-center xl:items-start justify-center xl:px-36">
        <h2 className="md:text-[40px] text-3xl font-bold">How me can help you?</h2>
        <p className="md:text-[20px] text-[15px] text-gray-500">
          Follow our news letter. We willregulay update our latest project and
          availability
        </p>
        <form className="w-full">
          <div className="relative">
            <HiMail className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-2xl" />
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-200 py-4 pl-10 pr-32 rounded-xl w-full outline-none text-gray-600 xl:text-[18px] text-sm"
              placeholder="Enter you email address"
            />
            <button
              type="submit"
              className="absolute text-lg font-semibold py-2 px-6 bg-red-400 text-white rounded-xl right-2 top-1/2 -translate-y-1/2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {/*Services*/}
      <div className="grid grid-cols-1 md:grid-cols-2 -mt-5 gap-8">
        <div className="flex flex-col items-center gap-1 shadow-lg p-4 rounded-lg bg-gray-50">
            <RiBarcodeLine className="text-4xl p-2 bg-gray-300 text-red-400 rounded-lg box-content"/>
            <h3 className="text-[20px] font-bold text-gray-800">UX/UI Design</h3>
            <p className="text-gray-500 flex text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, quidem.</p>
        </div>
        <div className="flex flex-col items-center gap-1 shadow-lg p-4 rounded-lg bg-gray-50">
            <CgIfDesign className="text-4xl p-2 bg-gray-300 text-red-400 rounded-lg box-content"/>
            <h3 className="text-[20px] font-bold text-gray-800">Logo Branding</h3>
            <p className="text-gray-500 flex text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, labore?</p>
        </div>
        <div className="flex flex-col items-center gap-1 shadow-lg p-4 rounded-lg bg-gray-50">
            <RiSmartphoneFill className="text-4xl p-2 bg-gray-300 text-red-400 rounded-lg box-content"/>
            <h3 className="text-[20px] font-bold text-gray-800">App Design</h3>
            <p className="text-gray-500 flex text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro.</p>
        </div>
        <div className="flex flex-col items-center gap-1 shadow-lg p-4 rounded-lg bg-gray-50">
            <RiMacFill className="text-4xl p-2 bg-gray-300 text-red-400 rounded-lg box-content"/>
            <h3 className="text-[20px] font-bold text-gray-800">Website Design</h3>
            <p className="text-gray-500 flex text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
