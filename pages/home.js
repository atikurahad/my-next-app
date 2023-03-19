import Link from "next/link";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>I am from home</h1>
      <Link href={"/profile"}>
        Profile
      </Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default Home;
