import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <h1 className="text-4xl text-center font-bold text-yellow-400">
        I am from about
      </h1>

      {/* <div className="btn-group btn-group-vertical"> */}
        <button className="btn btn-active">
          <Link href={"/profile"} >
            Profile
          </Link>
        </button>
      {/* </div> */}
    </div>
  );
};

export default About;
