import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-5 mt-5 mx-12">
        <section>
          <div className="h-[24rem] w-[20rem] bg-[#f3f3f3]">
            <img
              className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto"
              src="http://silkensewing.com/assets/img/mission-vision/mission.png"
              alt="vision"
            />
            <h1 className="text-3xl text-center text-[#040F2E] font-bold">
              Our Mission
            </h1>
            <p className="text-xl text-center text-gray-600">
              Silken Sewing is committed to deliver highest level of service,
              quality & value to it's customer through a responsible business
              operation which ensures fair treatment to all employees,
              community, environment & stakeholders.
            </p>
          </div>
        </section>

        <section>
          <div className="h-[24rem] w-[20rem] bg-[#f3f3f3]">
            <img
              className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto"
              src="http://silkensewing.com/assets/img/mission-vision/mission.png"
              alt="vision"
            />
            <h1 className="text-3xl text-center text-[#040F2E] font-bold">
              Our Vision
            </h1>
            <p className="text-xl text-center text-gray-600">
              To be one of the most regarded RMG operations in Bangladesh
            </p>
          </div>
        </section>

        <section>
          <div className="h-[24rem] w-[20rem] bg-[#f3f3f3]">
            <img
              className="h-[5rem] w-[5rem] bg-black rounded-full mx-auto"
              src="http://silkensewing.com/assets/img/mission-vision/mission.png"
              alt="vision"
            />
            <h1 className="text-3xl text-center text-[#040F2E] font-bold">
              Our Values
            </h1>
            <p className="text-xl text-center text-gray-600">
              Better Quality Product Better Working Condition Competitive Prices
              Long Term Loyalty of Customer Positive & Can do Approach Meet
              Deadline Meet Global Standard
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
