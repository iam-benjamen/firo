import Image from "next/image";
import logo from "../public/firo-logo.png";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex justify-around font-poppins items-center h-24 border-b border-[rgba(142, 153, 175, 0.3)]">
      <div>
        <Link href={""}>
          <Image src={logo} alt="firo logo" />
        </Link>
      </div>
      <ul className=" flex text-sm gap-12 items-center h-full">
        <li className="text-mygrey py-9 active:text-black active:border-b-4 hover:text-black hover:border-b-4 border-red-800 cursor-pointer">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-mygrey">
          <Link href={"/about"}>
            <a className="active:text-black visited:border-b-4 border-blue-100">
              How to mine Firo
            </a>
          </Link>
        </li>
        <li className="text-mygrey">
          <Link href={"/setup"}>How to set up a mining rig </Link>
        </li>
        <li className="text-mygrey">
          <Link href={"/faq"}>FAQ</Link>
        </li>
        <li className="cursor-pointer text-registerblack rounded-full border border-registerblack py-4 px-10 hover:bg-black hover:text-white">
          <button className="">Register</button>
        </li>
      </ul>
    </div>
  );
};
