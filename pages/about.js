import Head from "next/head";

const About = () => {


  return (
    <div className="bg-white">
      <Head>
        <title>About page</title>
      </Head>

      {/* <div className="flex  justify-center	items-center	py-4">
        <img src="circle_left.png" alt="" />
        <span className="text-2xl text-blue-900 font-bold mx-2 ">ABOUT US</span>
        <img src="circle_right.png" alt="" />
      </div> */}

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 items-center mx-[12rem] my-4">
        {/* <section className="mx-5">
          <h1 className="text-3xl text-black  font-bold">
            SILKEN SEWING - to be one of the most regarded RMG operations in
            Bangladesh
          </h1>
          <p className="text-gray-600">
            SILKEN SEWING has started its journey in 2008 in a small scale knit
            apparel manufacturing with the vision of having one of the regarded
            & trusted home for the Apparel manufacturing in the world. It has
            been setup by highly educated and well –experienced entrepreneur
            with excellent track record of Industrial Management. It is managed
            by highly qualified & experienced personnel. Today, we consider
            ourselves as one of the rapid growing company of having more than
            2000 family members with the annual turnover of $25 million It has
            further diversified & expending its production range towards the
            Outerwear & Sportswear areas & will start our outerwear unit by
            2021. Silken has its own design team in UK who continuously provides
            design & development supports to the customer. Silken Sewing is
            committed to deliver highest level of service, quality & value to
            its customer through a responsible business operation which ensures
            fair treatment to all employees, Community, environments &
            Stakeholders. We believe that our employee are our greatest asset
            and invest in their welfare and development during & beyond time
            they work for us. Silken also has taken some CSR initiatives as a
            Corporate Social responsibility like Sky`s the Limit, Healthy Child
            Wealthy Bangladesh.
          </p>
          <article className=" flex items-center justify-center">
            <img
              className="h-[8rem] w-[8rem]"
              src="12-years-logo.jpg"
              alt="logo"
            />
            <button className="btn bg-sky-500 btn-wide text-white">
              Read More
            </button>

          </article>
        </section> */}


        <section className="my-8">
          <img src="http://silkensewing.com/assets/img/XsLkbpn_d.webp" alt="" />
        </section>
      </div>


      <div className="flex flex-auto justify-center">
        <button className=" text-white bg-black font-bold text-xl  my-10  py-8 px-24 hover:text-yellow-500">
          Our Major Customers
        </button>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 mx-auto items-center mt-5">
          <section>
            <img src="ethical.png" alt="" />
          </section>
          <section>
            <img src="second.jpg" alt="" />
          </section>
          <section>
            <img src="third.png" alt="" />
          </section>
          <section>
            <img src="fourth.png" alt="" />
          </section>

        </div>
      </div>

      {/* <div className="btn-group btn-group-vertical"> */}
    </div>
  );
};

export default About;
