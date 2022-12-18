import { Select } from "antd";
import Image from "next/image";
import React from "react";

import downArrow from "../public/assets/downArrow.svg";
import ethLogo from "../public/assets/ethereum-eth-logo.png";
import opLogo from "../public/assets/op-logo.png";
import arbitrumLogo from "../public/assets/arbitrumLogo.png";
import starknetLogo from "../public/assets/starknetLogo.png";

const AntdSelect = ({ bordered, style, defaultValue }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      suffixIcon={
        <div>
          <Image src={downArrow} alt="downArrow" />
        </div>
      }
      bordered={bordered}
      defaultValue={defaultValue}
      onChange={handleChange}
      options={[
        {
          label: <h2 className="font-medium text-xs">Select a Network</h2>,
          options: [
            {
              value: "Ethereum",
              label: (
                <div className="flex items-center">
                  <Image src={ethLogo} alt="ethLogo" className="mr-2 w-6 h-6" />
                  <h2 className="font-medium text-base">Ethereum</h2>
                </div>
              ),
            },
            {
              value: "Optimism",
              label: (
                <div className="flex items-center">
                  <Image src={opLogo} alt="opLogo" className="mr-2 w-6 h-6" />
                  <h2 className="font-medium text-base">Optimism</h2>
                </div>
              ),
            },
            {
              value: "Arbitrum",
              label: (
                <div className="flex items-center">
                  <Image
                    src={arbitrumLogo}
                    alt="arbitrumLogo"
                    className="mr-2 w-6 h-6"
                  />
                  <h2 className="font-medium text-base">Arbitrum</h2>
                </div>
              ),
            },
            {
              value: "Starknet",
              label: (
                <div className="flex items-center">
                  <Image
                    src={starknetLogo}
                    alt="starknetLogo"
                    className="mr-2 w-6 h-6"
                  />
                  <h2 className="font-medium text-base">Starknet</h2>
                </div>
              ),
            },
          ],
        },
      ]}
      style={style}
    />
  );
};

export default AntdSelect;
