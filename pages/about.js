import logo from "../public/firo-logo.png";
import Image from "next/image";
import ref1 from "../public/Group 968.svg";
import blog1 from "../public/blog/Rectangle 490.svg";
import blog2 from "../public/blog/Rectangle 491.svg";
import blog3 from "../public/blog/image 4.svg";
import arrow from "../public/blog/Arrow 5.svg";
import chipset from "../public/Group 929.svg";
import dashboard from "../public/Dashboard 1.svg";
import FooterComponent from "../Components/Footer";
import vectors from "../public/jSDK.svg";

const AboutPage = () => {
  return (
    <div>
      <aside className="h-full fixed top-0 w-1/4 bg-white shadow-lg">
        <div className="flex flex-col pt-8 gap-20">
          <div className="self-center">
            <Image src={logo} alt="logo image" />
          </div>
          <div className="flex flex-col px-14 gap-5 font-poppins">
            <div>
              <h2 className="font-semibold text-xl pb-3 w-fit">
                How to mine Firo
              </h2>
              <hr className="absolute right-0 w-10/12" />
            </div>
            <div className="text-sm text-mygrey">
              <a href="">What is Firo?</a>
            </div>
            <div className="text-sm text-mygrey">
              <a href="">Firo Mining Chipset</a>
            </div>
            <div className="text-sm text-mygrey">
              <a href=""> Best Firo mining software and Firo wallet</a>
            </div>
            <div className="text-sm text-mygrey">
              <a href="">Viewing your Firo mining dashboard</a>
            </div>
          </div>
        </div>
      </aside>
      <div className="bg-background w-3/4 float-right">
        <div className="pl-28 pr-36 flex flex-col gap-4 pt-24 font-poppins">
          <h1 className="font-semibold text-3xl text-registerblack">
            What is Firo?
          </h1>
          <p className="text-sm text-mygrey leading-6">
            The Firo Platform is blockchain technology with an advanced feature
            set. It takes some of both Bitcoin and Ethereum’s features and
            builds upon them by improving decentralization, providing easier
            smart contracts, and providing a unique feature known as “storage
            rent”. It also supports asset management for assets such as NFTs and
            supports oracle data pools
          </p>
          <p className="text-sm text-mygrey leading-6">
            The platform is run by an impressive support and development team.
            It was co-founded by Alexander Chepurnoy, PHD (kushti) and Dmitry
            Meshkov who met at Chainlink.com, a blockchain oracle data company.
            Together, they badge over 20 years of blockchain experience and the
            additional team members hold scholarly accolades in: AI,
            cryptocurrency, and compiler research. It has a blooming Discord,
            Telnet, Wechat, and Reddit community; an active YouTube channel; and
            comprehensive documentation.
          </p>
          <p className="text-sm text-mygrey leading-6">
            Total supply is capped at under 100 million, of which half has
            already been mined. Current price is: $1.23. Block time is around 2
            minutes and currently 66 firo is created on each block.
          </p>
          <p className="text-sm text-mygrey leading-6">
            It’s secured by a unique crypto hashing algorithm known as
            Autolykos2. Autolykos2 was designed to be run on average graphics
            processing chips (GPUs) and promotes decentralization by resisting
            Application Specific Integrated Circuit (ASIC) mining and mining
            pool dominance.
          </p>
        </div>
        <div className="bg-white w-[85%] mt-16 pl-20 rounded-r-3xl">
          <Image src={ref1} alt="some picture" />
        </div>
        <div className="font-poppins pl-20 pt-14 w-[80%]">
          <h2 className="font-semibold text-2xl pb-6">Blog</h2>
          <div className="flex gap-2">
            <div className="flex flex-col rounded-3xl w-[16rem] bg-white shadow-lg pb-4">
              <div className="self-center pt-2">
                <Image src={blog1} alt="blog image1" />
              </div>
              <div className="px-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Blog Article 1</h3>
                <p className="text-mygrey text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla.
                </p>
                <div className="flex gap-2 cursor-pointer">
                  <Image src={arrow} alt="arrow icon" />
                  <p className="text-sm font-semibold">Read More</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-3xl w-[16rem] bg-white shadow-lg pb-4">
              <div className="self-center pt-2">
                <Image src={blog2} alt="blog image1" />
              </div>
              <div className="px-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Blog Article 2</h3>
                <p className="text-mygrey text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla.
                </p>
                <div className="flex gap-2 cursor-pointer">
                  <Image src={arrow} alt="arrow icon" />
                  <p className="text-sm font-semibold">Read More</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-3xl w-[16rem] bg-white shadow-lg pb-4">
              <div className="self-center pt-2">
                <Image src={blog3} alt="blog image1" />
              </div>
              <div className="px-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Blog Article 3</h3>
                <p className="text-mygrey text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla.
                </p>
                <div className="flex gap-2 cursor-pointer">
                  <Image src={arrow} alt="arrow icon" />
                  <p className="text-sm font-semibold">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-registerblack mt-20 py-20 pl-24 font-poppins flex">
          <div className="text-white">
            <h2 className="text-3xl font-semibold">New to Mining?</h2>
            <p className="text-xs pt-2">
              Please read our mining rig guide for a complete tutorial on how to
              put together
              <br /> a Firo mining setup
            </p>
            <button className="w-max text-white rounded-full border border-white py-4 px-9 mt-5">
              Read More
            </button>
          </div>
        </div>
        <div className="flex pt-20 pl-20 font-poppins bg-white">
          <div className="w-1/2">
            <h2 className="font-semibold text-2xl pb-4">
              Firo Mining Chipsets
            </h2>
            <div className="flex flex-col w-[90%] gap-4">
              <p className="text-mygrey text-xs">
                If you’re new to Firo mining, check out our Firo GPU comparison
                guide to find the best Firo mining chipset. We also have a list
                of motherboards.
              </p>
              <p className="text-mygrey text-xs">
                You’ll need a chip with at least 2.5GB of memory on it, though
                4GB is recommended.
              </p>
              <p className="text-mygrey text-xs">
                {" "}
                If you do any graphics heavy processing such as gaming or video
                editing, chances are you already have a chipset that’s able to
                mine. Conversely, if you buy a GPU mining chipset, you’ll be
                equipped for some rad gaming.
              </p>
              <p className="text-mygrey text-xs">
                You may have trouble finding a particular GPU. Please sign up
                for our giveaways or visit our list of recommended vendors for
                the best prices available on Firo GPUs.
              </p>
            </div>
            <button className="w-max text-registerblack rounded-full border border-registerblack py-4 px-10 mt-5">
              Read an Article
            </button>
          </div>
          <div>
            <Image src={chipset} alt="chipset mining image" />
          </div>
        </div>
        <div className="flex pt-16 pb-20 pl-20 font-poppins bg-background flex-col">
          <h2 className="font-semibold text-3xl">
            Best Firo mining software and Firo wallet
          </h2>
          <p className="font-normal text-sm text-mygrey pt-8 pr-28">
            Once you have your mining hardware available, you’ll want to get a
            Firo Wallet. We recommend the platform’s desktop wallet. Next,
            select your mining server from the following list:
          </p>
          <div className="flex flex-col gap-3 pt-7 pb-10">
            <div className="bg-background rounded-full flex py-2 w-5/6 pl-10 pr-16 justify-between items-center">
              <span className="text-mygrey py-2">Location</span>
              <span className=" text-mygrey text-sm pl-12">Server</span>
              <span className="text-mygrey text-sm pl-12">Port</span>
              <span className="text-mygrey text-sm ">SSL Port</span>
            </div>
            <div className="shadow-md bg-white rounded-full flex py-2 w-5/6 pl-3 pr-16 divide-x justify-between items-center">
              <button className="bg-[#c10b25] bg-opacity-10 rounded-full text-[#C10B25] font-semibold py-2 w-36">
                Americas
              </button>
              <span className="text-sm pl-12">am.nextpool.org</span>
              <span className="text-sm pl-12">8888</span>
              <span className="text-sm pl-12">8889</span>
            </div>
            <div className="shadow-md bg-white rounded-full flex py-2 w-5/6 pl-3 pr-16 divide-x justify-between items-center">
              <button className="bg-[#77CBD8] bg-opacity-10 rounded-full text-[#77CBD8] font-semibold py-2 w-36">
                Europe
              </button>
              <span className="text-sm pl-12">eu.nextpool.org</span>
              <span className="text-sm pl-12">8888</span>
              <span className="text-sm pl-12">8889</span>
            </div>
            <div className="shadow-md bg-white rounded-full flex py-2 w-5/6 pl-3 pr-16 divide-x justify-between items-center">
              <button className="bg-[#FEC562] bg-opacity-10 rounded-full text-[#FEC562] font-semibold py-2 w-36">
                Asia
              </button>
              <span className="text-sm pl-12">as.nextpool.org</span>
              <span className="text-sm pl-12">8888</span>
              <span className="text-sm pl-12">8889</span>
            </div>
          </div>
          <p className="text-mygrey text-xs pr-28">
            Write down your selected server and download a miner. Both sbminer
            or lolminer come with good software and guides, but there are many
            available options.
          </p>
        </div>
        <div className="pl-20 font-poppins bg-white pt-14 pb-16">
          <h2 className="font-semibold text-2xl">
            Viewing your Firo mining dashboard
          </h2>
          <p className="pt-4 pb-10 text-xs text-mygrey w-3/4">
            You’ll want to watch your miner’s performance! The mining pool
            dashboard monitors each worker’s performance and history, detailing
            the exact Firo rewards you receive daily.
          </p>
          <Image alt="dashboard" src={dashboard} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
