import Image from "next/image";
import logo from "../public/firo-logo.png";
import pic from "../public/Group 1009.svg";
import pic2 from "../public/Group 1014.svg";
import pic3 from "../public/woman 3.svg"
import FooterComponent from "../Components/Footer";

const SetUp = () => {
  const array = [
    "Purchasing a Hardware",
    "Storage",
    "Memory",
    "Processing Units",
    "GPU",
    "CPU",
    "Motherboard",
    "Cooling",
    "Power",
    "Your Case",
    "Software",
  ];
  return (
    <div>
      <aside className="h-full fixed top-0 w-1/4 bg-white shadow-lg">
        <div className="flex flex-col pt-8 gap-20 pb-10">
          <div className="self-center">
            <Image src={logo} alt="logo image" />
          </div>
          <div className="flex flex-col px-14 gap-5 font-poppins">
            <div>
              <h2 className="font-semibold text-xl pb-3 w-fit">
                How to build a <br /> mining rig
              </h2>
              <hr className="absolute right-0 w-10/12" />
            </div>
            {array.map((arr, index) => {
              return (
                <div key={index} className="text-sm text-mygrey">
                  <a href="">{arr}</a>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <div className="bg-background w-3/4 float-right">
        <div className="pl-28 pr-36 flex flex-col gap-4 pt-24 font-poppins">
          <h1 className="font-semibold text-3xl text-registerblack">
            Purchasing Hardware
          </h1>
          <p className="text-sm text-mygrey leading-6">
            It’s important to note - you can buy a completely built PC.
          </p>
          <p className="text-sm text-mygrey leading-6">
            Or you can purchase parts separately using a website’s PC builder
            feature. Something like newegg has a complete walk through and you
            can participate in their shuffle program to get hard to find chips.
          </p>
          <p className="text-sm text-mygrey leading-6">
            The biggest thing you’ll want to consider is - what do I want to do
            with this machine?
          </p>
          <p className="text-sm text-mygrey leading-6">
            Will this be used for more than mining? Do I require a lot of
            storage? - do I have a lot of photos or videos? Will I be
            downloading a lot of blockchain data? What about write/read speeds?
            Should I go for a newer hard drive or an older model? Memory,
            processors, power supplies, etc. will all be covered in this
            tutorial. Indeed, this process starts with the following
            questionnaire which assists in hardware selections and basic
            understanding of a computing system.
          </p>
        </div>
        <div className="bg-white w-[85%] mt-16 pl-20 rounded-r-3xl">
          <Image src={pic} alt="some picture" />
        </div>

        <div className="pl-28 pr-36 flex flex-col gap-4 pt-24 font-poppins">
          <h1 className="font-semibold text-3xl text-registerblack">Storage</h1>
          <p className="text-sm text-mygrey leading-6">
            The first question you need to answer is: how much storage do you
            need? These days, it&apos;s possible to have over a hundred 5
            terabyte+ drives controlled by the same computer. So feel free to
            think big if you can afford it! For crypto purposes, I can tell you
            the Ergo blockchain required to run the Ergo wallet is currently at
            about 15 gigabytes.
          </p>
          <p className="text-sm text-mygrey leading-6">
            The second question to ask is: how fast do I need this storage to
            be? When you ask this question, keep this in mind - your system is
            only as fast as your worst bottleneck across all components. In
            other words, if you had the world&apos;s fastest hard drive, it
            doesn’t matter if the system’s processor can’t keep up. When it
            comes to hard drive speed, a general rule of thumb is that a
            magnetic drive is slower than a solid state drive. And a solid state
            drive is slower than an m2 solid state drive.
          </p>
          <p className="text-sm text-mygrey leading-6">
            Presently, blockchain and blockchain wallet software require good
            read/write speed in order to download and sync a fresh copy of the
            blockchain, or else you spend weeks trying to sync. Once the chain
            is synced however, magnetic drives are sufficient to download new
            blocks and run the chain.
          </p>
        </div>
        <div className="bg-background w-[85%] mt-16 pl-20 rounded-r-3xl">
          <Image src={pic2} alt="some picture" />
        </div>
      </div>
      <div className="pl-28 pr-36 flex py-20 font-poppins bg-background">
        <div>
          <h2>Memory</h2>
          <p>
            The next system component to consider is memory. Memory is faster
            than hard drive storage, but is temporary in nature. Think of it as
            a cache for programs loaded from the hard drive. The Ergo blockchain
            requires at least 4gb of memory to download and sync, but benefits
            from 8gb. When it comes to memory size, think “as much as I can fit
            and afford”.
          </p>
          <p>
            As far as types, a general rule of thumb is: the higher the DDR, the
            faster it is. I.e. DDR3 is faster than DDR2. DDR5 is faster than
            DD4. Again, if you select a fast m2 solid state drive hard drive,
            your system will be degraded if you pair it with a slow DD2 set of
            memory sticks.
          </p>
          <p>
            The amount of sticks you may purchase depends on the motherboard you
            select in a few steps. However, you’ll want to select a few more
            components before you choose a motherboard to tie it all together!
          </p>
        </div>
        <div>
          <Image src={pic3} alt="Woman picture"/>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
