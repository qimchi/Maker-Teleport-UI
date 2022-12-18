import { InputNumber } from "antd";
import React from "react";

const AntdNumInput = () => {
  return (
    <InputNumber
      min={1}
      max={10}
      defaultValue={3}
      onChange={() => console.log()}
      bordered={false}
      className="sm:w-1/2"
    />
  );
};

export default AntdNumInput;
