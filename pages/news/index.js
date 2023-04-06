import Link from 'next/link';
import React from 'react';
import News3 from '../News3';

const News = () => {
  return (
    <div className="bg-white">
      <h1> I am from news</h1>
      <div className="grid lg:grid-cols-2">
        <section
          className="h-[28rem] w-[28rem] border shadow-2xl
        "
        >
          <img className="h-48 w-full p-2" src={"news1.jpg"} alt="" />
          <Link
            href={"/home"}
            className="hover:text-blue-700 text-xl font-bold"
          >
            Silken Sewing is going to invest $9mn in Jamalpur economic zone
          </Link>
          <p>
            Silken Sewing is going to invest $9mn in Jamalpur economic zone...
          </p>

          <button
            onClick={<News3 />}
            className="btn bg-sky-600 text-white mx-auto"
          >
            Read more
          </button>
        </section>

        <section
          className="h-[28rem] w-[28rem] border shadow-2xl
        "
        >
          <img className="h-48 w-full p-2" src={"news2.jpg"} alt="" />
          <Link
            href={"/home"}
            className="hover:text-blue-700 text-xl font-bold"
          >
            Building a bond with workers: The Silken Sewing way
          </Link>
          <p>
            When Omar Faruq was a schoolboy, he visited the Silken Sewing Ltd -
            a readymade garment factory located in Gazipur – holding his
            father's hand....
          </p>

          <button
            onClick={<News3 />}
            className="btn bg-sky-600 text-white mx-auto"
          >
            Read more
          </button>
        </section>
      </div>
    </div>
  );
};

export default News;
