import Image from "next/image"
import img from "../public/Group 1095.svg"
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
      </div>
      <div className="pt-14">
        <Image src={img} alt="faq image"/>
      </div>
    </div>
  );
};

export default FaqPage;
