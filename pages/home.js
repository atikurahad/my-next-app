import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import Testimonial from "./components/Testimonial";


const Home = () => {
  return (
    <>


      <div className="h-[full] bg-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4 py-[5rem] mx-12">
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




      <section className="bg-white  py-[8rem]">
        <div className="flex  justify-center	items-center	py-4 my-4">
          <img src="circle_left.png" alt="" />
          <span className="text-4xl text-blue-900 font-bold mx-2  ">
            OUR SERVICES
          </span>
          <img src="circle_right.png" alt="" />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4">
          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="printing.jpg"
                alt="Printing"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Printing
              </h2>
            </div>
          </div>
          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="kninting.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Kniting
              </h2>
            </div>
          </div>

          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img
                className="h-[18rem] w-[18rem]"
                src="woven.png"
                alt="Woven"
              />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Woven Garments
              </h2>
            </div>
          </div>

          <div className="card w-[18rem] h-[18rem] shadow-xl">
            <figure>
              <img className="h-[18rem] w-[18rem]" src="knit.jpg" alt="knit" />
            </figure>
            <div className="p-4">
              <h2 className=" text-center text-xl font-bold text-gray-700">
                Knit Garments
              </h2>
            </div>
          </div>
        </div>
      </section>


        <Testimonial />

       {/* for carousel */}

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



      {/* <section className="bg-white">
        <div className="carousel rounded-box ">
          <div className="carousel-item">
            <img
              src={"/car1.jpg"}
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src={"car2.jpg"}
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;

