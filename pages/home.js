import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        <section>
          <div className="h-[22rem] w-[15rem] bg-[#f3f3f3]">
            <img className="h-[8rem] w-[5rem]]"
              src="http://silkensewing.com/assets/img/mission-vision/mission.png"
              alt="vision"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, maxime?
            </p>
            <button>Click</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
