import Image from "next/image";
import React from "react";

import Logo from "../public/assets/Logo.svg";
import WalletIcon from "../public/assets/ConnetWalletIcon.svg";

import AntdSelect from "./AntdSelect";

const Navbar = () => {
  return (
    <div
      className="px-8 py-5 flex justify-between items-center navbar bg-white"
      style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Image src={Logo} alt="Logo" />
      <div className="lg:flex justify-between items-center hidden">
        {/* <ul className="flex items-center list-none">
          <li className="mr-12 font-bold text-lg cursor-pointer">Teleport</li>
          <li className="mr-12 text-lg cursor-pointer">Community</li>
          <li className="mr-12 text-lg cursor-pointer">Vote</li>
        </ul> */}

        <AntdSelect defaultValue="Ethereum" style={{ width: "167px" }} />

        <button className="px-[18px] py-[19px] text-base rounded-3xl bg-[#1AAB9B] text-white  ml-8 h-11 flex items-center">
          <Image src={WalletIcon} alt="WalletIcon" className="mr-2" />
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
