import Image from "next/image";
import React from "react";

import Logo from "../public/assets/Logo.svg";
import AntdSelect from "./AntdSelect";

const Navbar = () => {
  return (
    <div className="md:px-32 px-10 py-5 flex justify-between items-center navbar">
      <Image src={Logo} alt="Logo" />
      <div className="lg:flex justify-between items-center hidden">
        <ul className="flex items-center list-none">
          <li className="mr-12 font-bold text-lg cursor-pointer">Teleport</li>
          <li className="mr-12 text-lg cursor-pointer">Community</li>
          <li className="mr-12 text-lg cursor-pointer">Vote</li>
        </ul>

        <AntdSelect defaultValue="Ethereum" style={{ width: "169px" }} />

        <button className="px-4 py-2 text-base rounded-lg bg-[#1AAB9B] text-white font-GTWalsheimPro ml-8 h-11">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
