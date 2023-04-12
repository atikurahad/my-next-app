import Head from "next/head";

const About = () => {


  return (
    <div className="bg-white">
      <Head>
        <title>About page</title>
      </Head>

      <div className="">
        <div className="grid">

        </div>
      </div>

      <div className="flex flex-auto justify-center">
        <button className=" text-white bg-black font-bold text-xl  my-10  py-8 px-24 hover:text-yellow-500">
          Our Major Customers
        </button>
      </div>
      <div className="py-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 mx-auto justify-items-center mt-5 ">
          <section className="border-double border-4 border-sky-500">
            <img src="mk-jumbd.jpg" alt="" />
          </section>
          <section className="border-double border-4 border-sky-500">
            <img src="mk-denim.jpg" alt="" />
          </section>
          <section className="border-double border-4 border-sky-500">
            <img src="mk-oo.jpg" alt="" />
          </section>
          <section className="border-double border-4 border-sky-500">
            <img src="mk-limonda.jpg" alt="" />
          </section>
        </div>
      </div>

      {/* <div className="btn-group btn-group-vertical"> */}
    </div>
  );
};

export default About;
