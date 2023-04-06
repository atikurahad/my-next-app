import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-[#002d72] bg-fixed" >
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
          <Link href={"/"}>
            <section className="flex-1">
              <Image src={"/silken.png"} height={120} width={130} alt='logo'></Image>
            </section>
          </Link>
          <section className="flex">
            <Link
              href={"/home"}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href={"/services"}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Services
            </Link>
            <Link
              href={"/products"}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Products
            </Link>
            <Link
              href={"/contact "}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Contact
            </Link>


            <Link
              href={"/contact "}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Albums
            </Link>

            <Link
              href={"/contact "}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              News
            </Link>


            <Link
              href={"/career"}
              className="text-2xl text-white font-bold m-2 hover:text-blue-400"
            >
              Career
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



//  <div className="navbar bg-base-100">
//    <div className="flex-1">
//      <Link href={"/"}>
//        <Image width={150} height={100} src={"/silken.png"}></Image>
//      </Link>
//    </div>
//    <div className="flex-none">
//      <ul className="menu menu-horizontal px-1">
//        <li>
//          <a>Item 1</a>
//        </li>
//        <li tabIndex={0}>
//          <a>
//            Parent
//            <svg
//              className="fill-current"
//              xmlns="http://www.w3.org/2000/svg"
//              width="20"
//              height="20"
//              viewBox="0 0 24 24"
//            >
//              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//            </svg>
//          </a>
//          <ul className="p-2 bg-base-100">
//            <li>
//              <a>Submenu 1</a>
//            </li>
//            <li>
//              <a>Submenu 2</a>
//            </li>
//          </ul>
//        </li>
//        <li>
//          <a>Item 3</a>
//        </li>
//      </ul>
//    </div>
//  </div>;
