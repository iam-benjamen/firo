import Image from "next/image";
import img from "../public/Group 1095.svg";
import { Disclosure } from "@headlessui/react";
import disIcon from "../public/Subtract.svg";

const FaqPage = () => {
  return (
    <div className="flex h-max pl-36 pr-40 items-center justify-center bg-background">
      <div className="w-1/2 flex flex-col gap-5">
        <h2 className="font-semibold text-4xl font-poppins">
          Frequently <br /> Asked Question
        </h2>
        <p className="text-xs text-mygrey w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          cursus at elementum dui tellus, cras a, in semper. Eget cursus urna,
          amet, eleifend vel. Lorem ac leo mi, erat quam diam nulla.
        </p>
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between px-8 py-2 border border-[#1B1A3F] rounded-full font-poppins w-3/4">
            Is mining passive?
            <Image src={disIcon} alt="disclosure icon" />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 w-10/12 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            consequatur eligendi hic minus, provident officiis.
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between px-8 py-2 border border-[#1B1A3F] rounded-full font-poppins w-3/4">
            How can I start?
            <Image src={disIcon} alt="disclosure icon" />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 w-10/12 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            consequatur eligendi hic minus, provident officiis.
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="pt-14">
        <Image src={img} alt="faq image" />
      </div>
    </div>
  );
};

export default FaqPage;
