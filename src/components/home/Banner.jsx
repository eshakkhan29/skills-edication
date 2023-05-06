import Image from "next/image";
import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";

const Banner = () => {
  return (
    <div className="py-[50px] flex items-center gap-x-[60px]">
      {/* banner text */}
      <div>
        <h1 className="text-[64px] font-bold text-[#3A3A3A] leading-[77px]">
          Grow your <span className="bg-[#F66962] text-white">skills</span>
          <br /> by <span className="text-[#F66962]">learning</span>
        </h1>
        <p className="mt-5 text-lg font-normal text-[#3A3A3A] leading-[150%]">
          It is a long established fact that a reader will be distracted by the{" "}
          <br />
          read more-or-less normal distribution of letters, as opposed to <br />
          using 'Content here, making it look like readable English
        </p>
        <div className="flex flex-col gap-y-[20px] mt-8">
          <div className="flex gap-x-[22px]">
            <div className="w-[30px] h-[30px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  priority
                  src="/images/icon/check-mark.svg"
                  fill
                  alt="check-mark"
                ></Image>
              </div>
            </div>
            <p className="text-[24px] font-medium text-[#3A3A3A]">
              E-books resource
            </p>
          </div>
          <div className="flex gap-x-[22px]">
            <div className="w-[30px] h-[30px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  priority
                  src="/images/icon/check-mark.svg"
                  fill
                  alt="check-mark"
                ></Image>
              </div>
            </div>
            <p className="text-[24px] font-medium text-[#3A3A3A]">
              Provided Video
            </p>
          </div>
          <div className="flex gap-x-[22px]">
            <div className="w-[30px] h-[30px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  priority
                  src="/images/icon/check-mark.svg"
                  fill
                  alt="check-mark"
                ></Image>
              </div>
            </div>
            <p className="text-[24px] font-medium text-[#3A3A3A]">
              Connected with experts
            </p>
          </div>
        </div>
        <div className="mt-[50px] flex items-center gap-x-[30px]">
          <PrimaryBtn>Start learn now</PrimaryBtn>
          <div className="bg-[#F66962] w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-pointer">
            <div className="w-[24px] h-[24px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  priority
                  src="/images/icon/video.svg"
                  fill
                  alt="site-logo"
                ></Image>
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium text-[#3A3A3A]">Watch video</p>
        </div>
      </div>
      {/* banner image */}
      <div className="relative">
        <div className="w-[435px] h-[492px]">
          <div className="w-full h-full relative">
            <Image
              className="object-cover"
              priority
              src="/images/hero.png"
              fill
              alt="site-logo"
            ></Image>
          </div>
        </div>
        <div className="mt-[33px] flex gap-x-[12px] items-center justify-center">
          <div className="bg-[#DEDEDE] w-[8.5px] h-[8.5px] rounded-full cursor-pointer"></div>
          <div className="bg-[#F66962] w-[10px] h-[10px] rounded-full cursor-pointer"></div>
          <div className="bg-[#DEDEDE] w-[8.5px] h-[8.5px] rounded-full cursor-pointer"></div>
        </div>
        <div className="absolute bottom-[75px] -left-[58px] ps-[14px] pr-[30px] py-[10px] flex items-center gap-x-[15px] shadow-[0px_13px_31px_rgba(153,153,153,0.23)] bg-white rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                priority
                src="/images/icon/membership.svg"
                fill
                alt="site-logo"
              ></Image>
            </div>
          </div>
          <p className="text-[14px] font-normal text-[#3A3A3A] leading-[130%]">
            Permanent <br /> Membership
          </p>
        </div>
      </div>
      {/* banner log */}
      <div className="flex flex-col gap-y-[34px] pr-[40px] ps-[12px]">
        <div className="bg-white shadow-[0px_4px_16px_rgba(197,197,197,0.2)] px-[21px] py-[10px] flex items-center gap-x-[10px] rounded-[5px]">
          <h2 className="text-2xl font-semibold text-[#3A3A3A] border-b border-[#F66962]">
            01
          </h2>
          <p className="text-sm font-normal text-[#3A3A3A] leading-[17px]">
            100+ <br /> courses
          </p>
        </div>
        <div className="bg-white shadow-[0px_4px_16px_rgba(197,197,197,0.2)] px-[21px] py-[10px] flex items-center gap-x-[10px] rounded-[5px]">
          <h2 className="text-2xl font-semibold text-[#3A3A3A] border-b border-[#F66962]">
            02
          </h2>
          <p className="text-sm font-normal text-[#3A3A3A] leading-[17px]">
            50+ <br /> Expert
          </p>
        </div>
        <div className="bg-white shadow-[0px_4px_16px_rgba(197,197,197,0.2)] px-[21px] py-[10px] flex items-center gap-x-[10px] rounded-[5px]">
          <h2 className="text-2xl font-semibold text-[#3A3A3A] border-b border-[#F66962]">
            03
          </h2>
          <p className="text-sm font-normal text-[#3A3A3A] leading-[17px]">
            Lifetime <br /> access
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
