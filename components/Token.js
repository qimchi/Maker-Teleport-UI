import React from "react";
import Image from "next/image";

import transfer from "../public/assets/transfer.svg";
import downArrow from "../public/assets/downArrow.svg";
import daiLogo from "../public/assets/dai_logo.svg";
import i_mark from "../public/assets/i_mark.svg";
import closeIcon from "../public/assets/CrossIcon.svg";

import AntdSelect from "./AntdSelect";
import { Input, Modal, Select, Switch, Tooltip } from "antd";
import SwitchModal from "./SwitchModal";
import TeleportModal from "./TeleportModal";

const selectAfter = (
  <Select
    suffixIcon={
      <div>
        <Image src={downArrow} alt="downArrow" />
      </div>
    }
    defaultValue="DAI"
    style={{ width: "114px" }}
  >
    <Select.Option value="DAI">
      <div className="flex font-medium text-base text-darkBlack">
        <Image src={daiLogo} alt="daiLogo" className="mr-2" /> DAI
      </div>
    </Select.Option>
    <Select.Option value=".dai">
      <div className="flex font-medium text-base text-darkBlack">
        <Image src={daiLogo} alt="daiLogo" className="mr-2" /> DAI
      </div>
    </Select.Option>
  </Select>
);

const tooltipText = (
  <div>
    <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] pb-2 mb-2">
      <p className="font-normal text-xs text-black mr-10 font-inter">
        Expected Output
      </p>
      <h2 className="font-bold text-xs text-black font-inter">100.02 DAI</h2>
    </div>
    <div className="flex justify-between items-center mb-2">
      <p className="font-normal text-xs text-black mr-10 font-inter">
        Min. Recieved
      </p>
      <h2 className="font-bold text-xs text-black font-inter">100.02 DAI</h2>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-normal text-xs text-black mr-10 font-inter">
        Bridge Fee
      </p>
      <h2 className="font-bold text-xs text-black font-inter">0.93 DAI</h2>
    </div>
  </div>
);

const Token = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [switchModal, setSwitchModal] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setSwitchModal(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSwitchModal(false);
  };

  return (
    <>
      <div className="px-10 py-5 flex justify-center items-center mt-[59px] lg:mb-0 mb-10">
        <div className="border border-solid border-[#E0E0E0] p-4 rounded-[10px] md:w-[464px] w-full bg-white">
          <div className="relative">
            <div className="bg-borderColor rounded-2xl p-4 mb-2">
              <AntdSelect defaultValue="Optimism" style={{ width: "167px" }} />
              <Input
                placeholder="0.00"
                addonAfter={selectAfter}
                className="my-2"
              />
              <div className="flex items-center justify-end">
                <p className="m-0 mr-2 font-bold text-base">Balance: 100</p>
                <span className="text-green font-bold text-base">MAX</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => setSwitchModal(true)}
                className="p-[14px] rounded-[10px] bg-white absolute top-[165px] left-[46%] w-11 h-11"
              >
                <Image src={transfer} alt="transfer" />
              </button>
            </div>

            <div className="bg-borderColor rounded-2xl p-4 mb-[15px]">
              <AntdSelect defaultValue="Ethereum" style={{ width: "167px" }} />
              <Input
                placeholder="0.00"
                addonAfter={selectAfter}
                className="my-2"
              />
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Tooltip
                    placement="bottomLeft"
                    title={tooltipText}
                    color={"#fff"}
                  >
                    <Image src={i_mark} alt="i_mark" />
                  </Tooltip>
                  <span className="font-semibold text-xs text-darkBlack ml-[9px]">
                    0.089 DAI
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-xs text-darkBlack">
                    0.089 DAI
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-7 flex justify-between items-center">
              <div className="flex">
                <p className="font-semibold text-base mr-2 text-darkBlack">
                  Mint DAI using Relayer
                </p>
                <Image src={i_mark} alt="i_mark" />
              </div>
              <Switch
                onChange={(checked) => {
                  console.log(`switch to ${checked}`);
                }}
              />
            </div>
            <div className="flex item-center">
              <button
                onClick={showModal}
                className="bg-green px-3 rounded-[10px] font-medium text-base text-white h-14 w-full"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>

      <TeleportModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />

      <SwitchModal
        switchModal={switchModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Token;
