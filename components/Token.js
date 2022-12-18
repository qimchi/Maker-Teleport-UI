import React from "react";
import Image from "next/image";

import ActivityIcon from "../public/assets/activity.svg";
import SearchIcon from "../public/assets/setting.svg";
import TransferIcon from "../public/assets/transfer.svg";
import WalletIcon from "../public/assets/wallet.svg";

import AntdSelect from "./AntdSelect";
import AntdNumInput from "./AntdNumInput";
import { Input } from "antd";

const Token = () => {
  return (
    <div className="md:px-32 px-10 py-5 flex justify-center items-center mt-20 lg:mb-0 mb-10">
      <div className="border border-solid border-[#E0E0E0] p-5 rounded-[10px] md:w-[464px] w-full">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <h2 className="font-medium text-2xl mr-4">Token</h2>
            <AntdSelect defaultValue="Ethereum" />
          </div>
          <div className="flex items-center">
            <button className="mr-5">
              <Image src={ActivityIcon} alt="ActivityIcon" />
            </button>
            <button>
              <Image src={SearchIcon} alt="SearchIcon" />
            </button>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h2 className="font-medium text-xs mb-1 h-7">From</h2>
            <div className="flex items-center border border-solid border-[#E0E0E0] rounded-[10px]">
              <AntdSelect
                defaultValue="Optimism"
                bordered={false}
                style={{ width: "165px" }}
              />
              <AntdNumInput />
              <button className="ml-2 uppercase font-bold text-xs leading-7">
                Max
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-10" />
            <button className="border border-solid border-[#E0E0E0] rounded-[10px] p-[14px]">
              <Image src={TransferIcon} alt="TransferIcon" />
            </button>
            <h2 className="font-medium text-xs mb-1 h-7">Balance: 0.00</h2>
          </div>

          <div className="mb-8">
            <h2 className="font-medium text-xs mb-1 h-7">To</h2>
            <div className="flex items-center border border-solid border-[#E0E0E0] rounded-[10px]">
              <AntdSelect
                defaultValue="Starknet"
                bordered={false}
                style={{ width: "165px" }}
              />
              <AntdNumInput />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-medium text-xs mb-1 h-7">Recipient Address</h2>
            <Input
              style={{ height: 44, borderRadius: "10px", fontWeight: 500 }}
              placeholder="0x..."
            />
          </div>

          <div className="flex item-center">
            <button className="bg-[#1AAB9B] px-3 rounded-md font-medium text-base text-white h-11 w-full mr-2">
              Teleport
            </button>
            {/* <button className="bg-[#1AAB9B] p-3 rounded-md h-11">
              <Image src={WalletIcon} alt="WalletIcon" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
