import Head from "next/head";
import Image from "next/image";
import mainImage from "../public/Group 8.svg";
import searchbtn from "../public/circle2017.svg";
import FooterComponent from "../Components/Footer";

export default function Home() {
  return (
    <div className="bg-background bg-no-repeat bg-[url(../public/Vector.svg)] bg-[bottom_left] flex justify-evenly items-center h-screen font-poppins ">
      <div className="flex flex-col gap-4 ">
        <h2 className="text-registerblack text-5xl font-semibold">
          Hook - Mine the <br /> next big coin!
        </h2>
        <p className="text-mygrey text-sm">Find out more</p>
        <label className="relative">
          <input
            type="search"
            placeholder="Miner address"
            className="w-96 py-4 rounded-full border border-mygrey pl-8 mt-4 mb-5"
          />
          <span className="cursor-pointer absolute right-6 top-9 inset-y-0">
            <Image src={searchbtn} alt="search button" />
          </span>
        </label>
        <button className="w-max text-registerblack rounded-full border border-registerblack py-4 px-10">
          Start Now
        </button>
      </div>
      <div>
        <Image src={mainImage} alt="just some random image" />
      </div>
    </div>
  );
}
