import React from "react";
import Image from "next/image";

import avatar from "../public/assets/Avatar.svg";
import copyIcon from "../public/assets/Copy.svg";
import shareIcon from "../public/assets/Share.svg";
import ethLogo from "../public/assets/ethereum-eth-logo.png";
import daiLogo from "../public/assets/dai_logo.svg";
import rightArrow from "../public/assets/RightArrow.svg";
import leftArrow from "../public/assets/LeftArrow.svg";

export const ConnectPopupContent = () => {
  const [showTransaction, setShowTransaction] = React.useState(false);

  return (
    <>
      {showTransaction === true ? (
        <div
          className="px-10 py-[33px]"
          style={{ width: "404px", height: "auto" }}
        >
          <button
            onClick={() => setShowTransaction(false)}
            className="border-b border-b-borderColor mb-5 flex pb-4 items-center"
          >
            <Image src={leftArrow} alt="leftArrow" />
            <h2 className="font-inter font-medium text-base text-darkBlack ml-6">
              Transactions
            </h2>
          </button>

          <div>
            <p className="font-inter font-normal text-base text-center text-lightGrey">
              Your Transactions will appear here
            </p>
          </div>
        </div>
      ) : (
        <div
          className="px-10 py-[33px]"
          style={{ width: "404px", height: "430px" }}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex">
              <Image src={avatar} alt="avatar" className="mr-2" />
              <p className="font-inter font-medium text-base">0x81E5...09B8</p>
            </div>

            <div className="flex">
              <button className="mr-[23px] border border-borderColor rounded-[10px] p-[18px]">
                <Image src={copyIcon} alt="copyIcon" />
              </button>
              <button className="border border-borderColor rounded-[10px] p-[18px]">
                <Image src={shareIcon} alt="copyIcon" />
              </button>
            </div>
          </div>
          <div className="border-b border-b-borderColor mb-4">
            <h2 className="font-inter font-medium text-base text-darkBlack mb-5">
              Balance
            </h2>

            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <Image src={ethLogo} alt="ethLogo" width={24} height={24} />
                <h1 className="font-inter font-semibold text-2xl text-darkBlack ml-4">
                  ETH
                </h1>
              </div>
              <h1 className="font-inter font-semibold text-2xl text-lightText">
                0.00
              </h1>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <Image src={daiLogo} alt="daiLogo" width={24} height={24} />
                <h1 className="font-inter font-semibold text-2xl text-darkBlack ml-4">
                  DAI
                </h1>
              </div>
              <h1 className="font-inter font-semibold text-2xl text-lightText">
                0.00
              </h1>
            </div>
          </div>
          <button
            onClick={() => setShowTransaction(true)}
            className="flex justify-between items-center w-full mb-[52px]"
          >
            <h2 className="font-inter font-medium text-base text-darkBlack">
              Transactions
            </h2>
            <Image src={rightArrow} alt="rightArrow" />
          </button>

          <button className="w-full py-[19px] rounded-[10px] bg-darkBtn font-inter font-bold text-base text-white">
            Disconnect Wallet
          </button>
        </div>
      )}
    </>
  );
};
