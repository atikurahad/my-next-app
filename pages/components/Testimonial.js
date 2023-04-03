
const Testimonial = () => {
  return (
    <div className="bg-white h-[48rem]">
      <div className="">
        <div className="flex  justify-center	items-center	py-4">
          <img src="circle_left.png" alt="" />
          <span className="text-4xl text-blue-900 font-bold mx-2 my-4 ">
            TESTIMONIAL
          </span>
          <img src="circle_right.png" alt="" />
        </div>
        <h1
          className="text-2xl font-bold text-center
        text-black"
        >
          What Our Client Say
        </h1>

        <div className="shadow-2xl w-[920px] h-[420px] mx-auto p-8 my-10">
          <img
            className="h-[5.3rem] w-[5rem] mx-auto"
            src={"quote.png"}
            alt=""
          />
          <p className="text-center text-black font-serif font-bold my-4">
            The team at Silken have always been willing to learn new things,
            participate in innovative projects and implement new systems and
            approaches to improve the factory and engage their workers. Over the
            last few years we have seen them adopt new ways of working and
            develop mechanisms to better support their workers, strengthening
            our relationship and showcasing their commitment to sustainability.
          </p>

          <section className="flex justify-center items-center">
            <img
              className="h-[6.5rem] w-[6.5rem] border rounded-full"
              src={"client.jpg"}
              alt=""
            />
            <p className="text-black  font-bold ml-2">THE VERY GROUP</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
