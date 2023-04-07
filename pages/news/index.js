import Link from "next/link";
import React from "react";
import News3 from "../News3";

const News = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 justify-items-center items-center">
          <section
            className="h-[34rem] w-[28rem] border shadow-2xl p-5 my-10
        "
          >
            <img className="h-48 w-full p-2" src={"news1.jpg"} alt="" />
            <Link
              href={"/home"}
              className="hover:text-blue-700 text-4xl text-gray-700 font-bold my-2"
            >
              Silken Sewing is going to invest $9mn in Jamalpur economic zone
            </Link>
            <p
              className="text-black text-center text-xl font-bold my-2
          "
            >
              Silken Sewing is going to invest $9mn in Jamalpur economic zone...
            </p>

            <button
              onClick={<News3 />}
              className="btn bg-sky-600 text-white mx-auto  p-4"
            >
              Read more
            </button>
          </section>

          <section
            className="h-[34rem] w-[28rem] border shadow-2xl p-5 my-10
        "
          >
            <img className="h-48 w-full p-2" src={"news2.jpg"} alt="" />
            <Link
              href={"/home"}
              className="hover:text-blue-700 text-4xl text-gray-700 font-bold my-2"
            >
              Building a bond with workers: The Silken Sewing way
            </Link>
            <p
              className="text-black text-center text-xl font-bold my-2
          "
            >
              When Omar Faruq was a schoolboy, he visited the Silken Sewing Ltd
              - a readymade garment factory located in Gazipur – holding his
              father's hand....
            </p>

            <button
              onClick={<News3 />}
              className="btn bg-sky-600 text-white mx-auto p-4"
            >
              Read more
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
