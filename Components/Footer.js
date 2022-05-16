import Image from "next/image";
import logo from "../public/Group.svg";

const FooterComponent = () => {
  return (
    <div className="font-poppins flex items-center justify-between py-6 px-40 border-[rgba(142, 153, 175, 0.3)] border-t">
      <div>
        <Image src={logo} alt="firo-logo" />
      </div>
      <span className="text-mygrey text-xs">&copy;Copyright 2022 Firo - All rights reserved</span>
    </div>
  );
};

export default FooterComponent;
