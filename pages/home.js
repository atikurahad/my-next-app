import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="h-[full] bg-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-5 py-[5rem] mx-12">
          <section className="my-2">
            <div className="h-[24rem] w-[20rem] bg-[#f3f3f3]">
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
            <div className="h-[24rem] w-[20rem] bg-[#f3f3f3]">
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
            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem]"
                src="./certification.png"
                alt=""
              />
              <p className="text-4xl font-bold text-blue-500">30+</p>
              <p>Our Partners</p>
            </section>

            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem]"
                src="./certification.png"
                alt=""
              />
              <p>30+</p>
              <p>Our Partners</p>
            </section>

            <section className="flex-auto">
              <img
                className="h-[5rem] w-[5rem] m-[1.9rem]"
                src="./certification.png"
                alt=""
              />
              <p>30+</p>
              <p>Our Partners</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
