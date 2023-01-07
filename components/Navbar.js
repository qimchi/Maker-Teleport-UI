import Image from "next/image";
import React from "react";

import Logo from "../public/assets/Logo.svg";
import WalletIcon from "../public/assets/ConnetWalletIcon.svg";

import AntdSelect from "./AntdSelect";
import { Popover } from "antd";
import { ConnectPopupContent } from "./ConnectPopupContent";

const Navbar = () => {
  return (
    <div
      className="px-8 py-5 flex justify-between items-center navbar bg-white"
      style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Image src={Logo} alt="Logo" />
      <div className="flex justify-between items-center">
        <AntdSelect defaultValue="Ethereum" style={{ width: "167px" }} />

        <Popover
          placement="bottomRight"
          showArrow={false}
          content={<ConnectPopupContent />}
          trigger="click"
        >
          <button className="px-[18px] py-[19px] text-base rounded-3xl bg-green text-white  ml-8 h-11 flex items-center">
            <Image src={WalletIcon} alt="WalletIcon" className="mr-2" />
            Connect Wallet
          </button>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
