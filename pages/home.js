import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>I am from home</h1>
      <Link href={"/profile"}>
        Profile
      </Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default Home;
