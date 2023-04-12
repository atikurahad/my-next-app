import Head from "next/head";

const About = () => {


  return (
    <div className="bg-white">
      <Head>
        <title>About page</title>
      </Head>

      <p className="text-center text-4xl font-extrabold text-black py-12 font-serif">
        Numbers Of Employee
      </p>

      <section className="text-xl  font-bold text-black text-center py-10 bg-[#a8d46a] mx-12 rounded-2xl">
        <ul>
          <li className="py-4">
            • Our Total Existing Employee 215. Target employee 435 (By March
            2023).
          </li>
          <li className="py-4">
            • Out of 215 employee, 176 is the worker and 39 staff.
          </li>
          <li className="py-4">
            • About 70% workers are female and 30% are male.
          </li>
        </ul>
      </section>
      <div className="">
        <p className="text-4xl text-center font-bold text-black py-10">
          Membership
        </p>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
          <section className="border-double shadow-2xl border-4 border-sky-500 ">
            <img className="h-48 w-96" src="mk-member-1.jpg" alt="" />
          </section>

          <section className="border-double border-4 shadow-2xl border-sky-500">
            <img className="h-48 w-96" src="mk-member-2.jpg" alt="" />
          </section>

          <section className="border-double border-4 shadow-2xl border-sky-500">
            <img className="h-48 w-96" src="mk-member-3.jpg" alt="" />
          </section>

          <section className="border-double shadow-2xl border-4 border-sky-500">
            <img className="h-48 w-96" src="mk-member-4.jpg" alt="" />
          </section>
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
