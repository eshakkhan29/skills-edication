import React from "react";

const PrimaryBtn = ({children}) => {
  return (
    <button className="border-0 outline-0 text-lg font-medium bg-[#F66962] text-white py-[17px] px-[32px] rounded-[5px]">
      {children}
    </button>
  );
};

export default PrimaryBtn;
