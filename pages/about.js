import logo from "../public/firo-logo.png";
import Image from "next/image";

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
        <div className="pl-28 pr-52 flex flex-col gap-4 pt-24 font-poppins">
          <h1 className="font-semibold text-3xl text-registerblack">What is Firo?</h1>
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
      </div>
    </div>
  );
};

export default AboutPage;
