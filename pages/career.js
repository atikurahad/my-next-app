import Link from "next/link";

const Career = () => {
  return (
    <div className="bg-white flex flex-col items-center ">
    <section className=" my-[8%]">
      <h1 className="text-4xl text-center font-extrabold text-blue-600 my-4">JOB POST</h1>
      <p className="border-2 text-center px-24 py-4 my-4 text-xl font-extrabold text-gray-600 ">No job post found</p>

      <Link href={"/home"} className="text-xl font-serif font-extrabold border-2 p-2 bg-black text-white hover:text-blue-900 border-lg ">
      Go to home
      </Link>
    </section>
    </div>
  );
};

export default Career;
