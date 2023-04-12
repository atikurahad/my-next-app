import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import Testimonial from "./components/Testimonial";
import ContactBg from "./components/ContactBg";
import About from "./about";
import Services from "./services";


const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[50.6rem] carousel rounded-box ">
        <div className="carousel-item w-full">
          <img
            src={"caru3.png"}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={"caru1.jpg"}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={"caru2.jpg"}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>

      <div className="bg-white">
        {" "}
        <p className="  py-8 text-center text-black text-4xl font-semibold">
          Our Aims{" "}
        </p>
        <div className="grid grid-cols-2 gap-4 justify-center items-center mx-[5rem]">
          <p className="bg-[#70ad46] text-center text-white text-xl font-mono font-bold p-4 ">
            <strong>MK ATTIRE LTD</strong>. is a textile factory specialized in
            designing and manufacturing of first quality, sophisticated men,
            women and kid’s garments made by high quality knitted fabrics. We
            have niche capabilities in manufacturing and supply private label
            T-shirts, polo shirts, sweatshirts, hoodies, Boxers as well as
            Lingerie Items also. We strive for excellence from the selection of
            raw material to creating the finished product.
          </p>

          <div className="card-body items-center text-center">
            <p className="bg-[#70ad46] h-full text-center text-white text-xl font-mono font-bold p-4 ">
              <strong>MK ATTIRE LTD</strong>. aims to be a cut above the rest by
              exceeding international norms and standards by putting the
              environment first, and by establishing the best possible work
              environment for every single employee.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <About />
    </>
  );
};

export default Home;
