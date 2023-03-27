
const Services = () => {
  return (
    <div>
      <section className="bg-white  py-[8rem]">
        <div className="flex  justify-center	items-center	py-4">
          <img src="circle_left.png" alt="" />
          <span className="text-2xl text-blue-900 font-bold mx-2 ">
            OUR SERVICES
          </span>
          <img src="circle_right.png" alt="" />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4">
          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="printing.jpg"
                alt="Printing"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Printing
              </h2>
            </div>
          </div>
          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="kninting.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Kniting
              </h2>
            </div>
          </div>

          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="woven.png"
                alt="Woven"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Woven Garments
              </h2>
            </div>
          </div>

          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img className="h-[18rem] w-[18rem]" src="knit.jpg" alt="knit" />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Knit Garments
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
