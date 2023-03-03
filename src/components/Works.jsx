function Works() {
  return (
    <div className="xl:p-20 p-8">
      <div className="mb-8">
        <h2 className="text-[40px] font-bold leading-[3rem] mb-6">
          We create world-class digital products
        </h2>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim laborum
          sunt doloremque autem odio optio perspiciatis animi, ab voluptatum
          laboriosam voluptatibus ex at et obcaecati veritatis. Sint nisi eum
          id!
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <img src="designapp.png" className="w-full rounded-3xl" />
          <p className="text-gray-500 mt-2">App Design - June 20, 2022</p>
          <h3 className="text-xl font-bold text-gray-700">Movie App</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod
            rem ratione voluptatem, quibusdam nemo eligendi, laborum porro
            dolore harum molestias! Ea rerum illum a pariatur fugiat autem
            cupiditate libero!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col shadow-lg rounded-xl">
            <img src="work1.png" className="w-full h-60 rounded-xl object-cover shadow-xl"/>
            <p className="text-gray-500 xl:px-4 py-2 px-4">App Design - June 20, 2022</p>
            <h3 className="text-xl font-bold xl:px-4 py-2 px-4 text-gray-700">Movie App</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl">
            <img src="works2.png" className="w-full h-60 rounded-xl object-cover shadow-xl"/>
            <p className="text-gray-500 xl:px-4 py-2 px-4">App Design - June 20, 2022</p>
            <h3 className="text-xl font-bold xl:px-4 py-2 px-4 text-gray-700">Movie App</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl">
            <img src="works3.jpg" className="w-full h-60 rounded-xl object-cover shadow-xl"/>
            <p className="text-gray-500 xl:px-4 py-2 px-4">App Design - June 20, 2022</p>
            <h3 className="text-xl font-bold xl:px-4 py-2 px-4 text-gray-700">Movie App</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl">
            <img src="works4.jpg" className="w-full h-60 rounded-xl object-cover shadow-xl"/>
            <p className="text-gray-500 xl:px-4 py-2 px-4">App Design - June 20, 2022</p>
            <h3 className="text-xl font-bold xl:px-4 py-2 px-4 text-gray-700">Movie App</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
