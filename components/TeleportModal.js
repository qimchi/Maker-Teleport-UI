import { Modal, Timeline } from "antd";
import Image from "next/image";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import closeIcon from "../public/assets/CrossIcon.svg";
import shareIcon from "../public/assets/Share.svg";

const TeleportModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      open={isModalOpen}
      closeIcon={
        <div className="flex justify-center items-center">
          <Image src={closeIcon} alt="closeIcon" />
        </div>
      }
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{ padding: "22px" }}
      width={670}
    >
      <h2 className="font-inter font-semibold text-[28px] mb-4">
        Teleportion Initiated
      </h2>
      <p className="text-darkBlack font-normal text-base mb-8">
        It seems your wallet is running on a different network from the
        application. Please manually change the network in your wallet or you
        can click the button below
      </p>

      <div>
        <div className="flex items-center p-6 bg-[#F3FBFA] rounded-2xl mb-6">
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-green mr-6"></div>
            <div className="h-[72px] w-[1px] bg-[#D9D9D9] absolute mt-4 left-[11px]"></div>
          </div>
          <LoadingOutlined
            style={{
              fontSize: "40px",
              color: "#1AAB9B",
              fontWeight: "bold",
            }}
          />
          <div className="ml-6">
            <h2 className="font-inter font-bold text-xl text-darkBlack">
              Burning on L2 Network
            </h2>
            <a className="flex text-black hover:text-black items-center font-inter font-normal text-lg">
              tx id:{" "}
              <span className="text-green font-medium ml-1 mr-2">
                0x27ede...7858
              </span>{" "}
              <Image src={shareIcon} alt="shareIcon" width={12} height={12} />
            </a>
          </div>
        </div>
        <div className="flex items-center p-6 mb-6">
          <div className="relative">
            <div className="w-6 h-6 rounded-full border-green border mr-6"></div>
            <div className="h-[72px] w-[1px] bg-[#D9D9D9] absolute mt-4 left-[11px]"></div>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#C8CBCD]"></div>
          <div className="ml-6">
            <h2 className="font-inter font-bold text-xl text-darkBlack">
              Validating transaction
            </h2>
          </div>
        </div>
        <div className="flex items-center p-6 mb-6">
          <div className="relative">
            <div className="w-6 h-6 rounded-full border-green border mr-6"></div>
            <div className="h-[72px] w-[1px] bg-[#D9D9D9] absolute mt-4 left-[11px]"></div>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#C8CBCD]"></div>
          <div className="ml-6">
            <h2 className="font-inter font-bold text-xl text-darkBlack">
              Minting on L1 Network
            </h2>
          </div>
        </div>
        <div className="flex items-center p-6 mb-6">
          <div className="relative">
            <div className="w-6 h-6 rounded-full border-green border mr-6"></div>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#C8CBCD]"></div>
          <div className="ml-6">
            <h2 className="font-inter font-bold text-xl text-darkBlack">
              Validating transaction
            </h2>
          </div>
        </div>
      </div>

      {/* <Timeline dot={dotIcon}>
        <Timeline.Item>
          <div className="flex items-center p-6 bg-[#F3FBFA] rounded-2xl">
            <LoadingOutlined
              style={{
                fontSize: "40px",
                color: "#1AAB9B",
                fontWeight: "bold",
              }}
            />
            <div className="ml-6">
              <h2 className="font-inter font-bold text-xl text-darkBlack">
                Burning on L2 Network
              </h2>
              <p>
                tx id: <span>0x27ede...7858</span>
              </p>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div className="flex items-center p-6">
            <div className="w-14 h-14 bg-[#C8CBCD] rounded-full"></div>
            <div className="ml-6">
              <h2 className="font-inter font-bold text-xl text-darkBlack">
                Validating transaction
              </h2>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div className="flex items-center p-6">
            <div className="w-14 h-14 bg-[#C8CBCD] rounded-full"></div>
            <div className="ml-6">
              <h2 className="font-inter font-bold text-xl text-darkBlack">
                Minting on L1 Network
              </h2>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div className="flex items-center p-6">
            <div className="w-14 h-14 bg-[#C8CBCD] rounded-full"></div>
            <div className="ml-6">
              <h2 className="font-inter font-bold text-xl text-darkBlack">
                Validating transaction
              </h2>
            </div>
          </div>
        </Timeline.Item>
      </Timeline> */}
    </Modal>
  );
};

export default TeleportModal;
