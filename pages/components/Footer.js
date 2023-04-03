import Link from "next/link";

const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div className="bg-[url('http://silkensewing.com/assets/img/bg/footer_bg.png')] ">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-[12rem]  justify-start ">
            <section className="my-12">
              <h1 className="text-2xl text-white font-bold ">Contact</h1>
              <article className="flex mt-10">
                <img
                  className="h-[3rem] w-[2.5rem] mb-[1.25rem]"
                  src="customer-service.png"
                  alt="contact"
                />
                <span className="flex flex-col	ml-2">
                  <p className="font-bold text-white">+88 02 48964132</p>
                  <p className="font-bold text-white">+88 02 8933290</p>
                </span>
              </article>

              <article className="flex items-center">
                <img
                  className="h-[3rem] w-[2.5rem] mb-[1.25rem]"
                  src="envelope.png"
                  alt="email"
                />
                <p className="font-bold text-white ml-2  ">
                  info@silkensweing.com
                </p>
              </article>

              <article className="flex">
                <img
                  className="h-[3rem] w-[2.5rem] mb-[1.25rem]"
                  src="bangladesh.png"
                  alt="location"
                />
                <span className="flex flex-col ml-2 p-2">
                  <p className="text-white font-bold">House# 02,Road# 20/A,</p>
                  <p className="text-white font-bold">Sector# 03, Uttara</p>
                </span>
              </article>
            </section>

            <section>
              <h1 className="text-2xl text-white font-bold my-12 hover:font-mono">
                Our Links
              </h1>
              <div className="flex flex-col text-xl font-bold my-2 text-white">
                <Link
                  className="hover:text-blue-600 hover:font-mono"
                  href={"/home"}
                >
                  Home
                </Link>
                <Link
                  className="hover:text-blue-600 hover:font-mono"
                  href={"/contact"}
                >
                  Contact
                </Link>
                <Link
                  className="hover:text-blue-600 hover:font-mono"
                  href={"/about"}
                >
                  About
                </Link>
                <Link
                  className="hover:text-blue-600 hover:font-mono"
                  href={"/career"}
                >
                  Career
                </Link>
              </div>
            </section>

            <section className="">
              <h1 className="text-2xl text-white font-bold my-12">
                Subscribe To Our News Letter
              </h1>
              <div className="mt-[2rem]">
                <p className="text-white font-bold">
                  You can get our monthly newsletter by subscribing here.
                </p>
                <input
                  className="py-[0.5rem] px-[2.5rem] bg-white mt-2"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id=""
                />
              </div>
            </section>
          </div>{" "}
          <span className=""></span>
          <p className=" text-center  font-mono text-xl mt-2 pb-[3rem] divide-y divide-blue-200">
            &copy; 2023 Silken Sewing Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
