import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className=" relative flex justify-center items-center">
      <div className="absolute border border-[#858585] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-pulse mt-52" /> */}
      <div className="absolute border border-[#f0ec00] rounded-full h-[300px] w-[300px] animate-pulse mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52" />
    </div>
  );
};

export default BackgroundCircles;
