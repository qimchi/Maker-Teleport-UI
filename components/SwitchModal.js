import { Modal } from "antd";
import Image from "next/image";
import React from "react";

import closeIcon from "../public/assets/CrossIcon.svg";
import arbitrumLogo from "../public/assets/arbitrumLogo.png";
import starknetLogo from "../public/assets/starknetLogo.png";
import switchIcon from "../public/assets/SwitchIcon.svg";

const SwitchModal = ({ switchModal, handleOk, handleCancel }) => {
  return (
    <Modal
      open={switchModal}
      closeIcon={
        <div className="flex justify-center items-center">
          <Image src={closeIcon} alt="closeIcon" />
        </div>
      }
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{ padding: "20px" }}
      width={544}
    >
      <div className="bg-[#FFE7AE] rounded-xl py-[49px] px-[86px] flex justify-between items-center mb-4">
        <Image src={starknetLogo} alt="starknetLogo" width={64} height={64} />
        <Image src={switchIcon} alt="switchIcon" />
        <Image src={arbitrumLogo} alt="arbitrumLogo" width={64} height={64} />
      </div>
      <p className="font-inter text-[#96999C] font-normal text-base mb-[52px]">
        It seems your wallet is running on a different network from the
        application. Please manually change the network in your wallet or you
        can click the button below
      </p>
      <button className="w-full py-[19px] rounded-[10px] bg-darkBtn font-inter font-bold text-base text-white">
        Switch to Arbitrum One
      </button>
    </Modal>
  );
};

export default SwitchModal;
