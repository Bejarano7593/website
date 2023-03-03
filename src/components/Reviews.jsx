import { CgChevronDoubleRight, CgChevronDoubleLeft } from "react-icons/cg";

function Reviews() {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h2 className="font-bold text-4xl text-center">
        Lest´s hear what they says
      </h2>
      <div className="flex justify-center gap-4">
        <span className="text-red-400 text-2xl md:text-[44px] relative md:-top-4">
          <CgChevronDoubleLeft />
        </span>
        <p className="max-w-2xl text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          perferendis repudiandae error excepturi debitis quas, et ad
          aspernatur. Qui alias quis unde beatae natus voluptas dolorum tenetur
          rerum error? Molestiae.
        </p>
        <span className="text-red-400 text-2xl md:text-[44px] relative md:-top-4">
          <CgChevronDoubleRight />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          <img
            src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full  "
          />
          <img
            src="https://img.freepik.com/premium-photo/young-girl-is-standing-leaning-table-office_88135-1539.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full  "
          />
          <img
            src="https://img.freepik.com/free-photo/cute-girl-beige-shirt-touching-glasses-holding-laptop-with-smile_197531-6704.jpg"
            className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-red-300 p-1 bg-white"
          />
          <img
            src="https://img.freepik.com/free-photo/young-business-man-talking-phone-working-computer_1303-25412.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full  "
          />
          <img
            src="https://img.freepik.com/premium-photo/portrait-successful-leader_109710-668.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full  "
          />
        </div>
        <div>
          <h3 className="text-center md:text-[24px] font-bold text-gray-800">Ricky April</h3>
          <p className="text-center md:text-[20px] text-gray-500">Founder of Varibo</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
