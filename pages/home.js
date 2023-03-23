import Link from "next/link";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="h-[full] bg-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-5 py-[5rem] mx-12">
          <section className="my-2">
            <div className="h-[24rem] w-[20rem] p-4 bg-[#f3f3f3]">
              <img
                className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto "
                src="http://silkensewing.com/assets/img/mission-vision/mission.png"
                alt="vision"
              />
              <h1 className="text-3xl text-center text-[#040F2E] font-bold">
                Our Mission
              </h1>
              <p className="text-xl text-center text-gray-800 font-semibold">
                Silken Sewing is committed to deliver highest level of service,
                quality & value to it's customer through a responsible business
                operation which ensures fair treatment to all employees,
                community, environment & stakeholders.
              </p>
            </div>
          </section>

          <section>
            <div className="h-[24rem] w-[20rem] p-4 bg-[#f3f3f3]">
              <img
                className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto"
                src="http://silkensewing.com/assets/img/mission-vision/vision.png"
                alt="vision"
              />
              <h1 className="text-3xl text-center text-[#040F2E] font-bold">
                Our Vision
              </h1>
              <p className="text-xl text-center text-gray-800 font-semibold">
                To be one of the most regarded RMG operations in Bangladesh
              </p>
            </div>
          </section>

          <section>
            <div className="h-[24rem] w-[20rem] p-4 bg-[#f3f3f3]">
              <img
                className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto"
                src="http://silkensewing.com/assets/img/mission-vision/values.png"
                alt="vision"
              />
              <h1 className="text-3xl text-center text-[#040F2E] font-bold font-poppins">
                Our Values
              </h1>
              <p className="text-xl text-center text-gray-800 font-semibold">
                Better Quality Product Better Working Condition Competitive
                Prices Long Term Loyalty of Customer Positive & Can do Approach
                Meet Deadline Meet Global Standard
              </p>
            </div>
          </section>
        </div>

        <div className="h-[17rem] bg-[url('http://silkensewing.com/assets/img/count/count-bg.jpg')]">
          <div className="flex mx-[12rem]">
            <section className="flex-auto justify-center	items-center	">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem] mx-auto"
                src="./partner.png"
                alt=""
              />
              <p className="text-4xl font-bold text-blue-500 text-center">
                30+
              </p>
              <p className="text-center font-bold text-white text-[1rem] my-2">
                Our Partners
              </p>
            </section>

            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem] mx-auto"
                src="./experience.png"
                alt=""
              />
              <p className="text-4xl font-bold text-blue-500 text-center">
                12+
              </p>
              <p className="text-center font-bold text-white text-[1rem] my-2">
                Years Of Experience
              </p>
            </section>

            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem] mx-auto"
                src="./pick-up-truck.png"
                alt=""
              />
              <p className="text-center text-4xl font-bold text-blue-500">
                70000000+
              </p>
              <p className="text-center font-bold text-white text-[1rem] my-2">
                Total Shipment
              </p>
            </section>

            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem] mx-auto"
                src="./partner (2).png"
                alt=""
              />
              <p className="text-center text-4xl font-bold text-blue-500">8</p>
              <p className="text-center font-bold text-white text-[1rem] my-2">
                Total Certificates
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className="bg-white my-5">
        <div className="flex  justify-center	items-center	">
          <img src="circle_left.png" alt="" />
          <span className="text-2xl text-blue-900 font-semibold ">
            OUR SERVICES
          </span>
          <img src="circle_right.png" alt="" />
        </div>

        <div className="grid grid-cols-3">
          <div>
            <div className="card w-[18rem] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="printing.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <img
                    className="card-title h-48 w-[15rem]"
                    src="printing.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-2xl text-center font-bold  text-white">
                  Printing
                </h2>
              </div>
            </div>
          </div>


          <div>
            <div className="card w-[18rem] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="printing.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <img
                    className="card-title h-48 w-[15rem]"
                    src="printing.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-2xl text-center font-bold  text-white">
                  Printing
                </h2>
              </div>
            </div>
          </div>



          <div>
            <div className="card w-[18rem] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="printing.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <img
                    className="card-title h-48 w-[15rem]"
                    src="printing.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-2xl text-center font-bold  text-white">
                  Printing
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
