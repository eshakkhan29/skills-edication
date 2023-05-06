import Link from "next/link";
import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import Image from "next/image";

const Header = () => {
  return (
    <div className="my-[50px] flex items-center justify-between">
      {/* site logo */}
      <div>
        <Link href="/">
          <div className="w-[163px] h-[48px]">
            <div className="relative w-full h-full">
              <Image
                className="object-cover"
                priority
                src="/images/logo/logo-dark.png"
                fill
                alt="site-logo"
              ></Image>
            </div>
          </div>
        </Link>
      </div>
      {/* main menu */}
      <div className="flex gap-x-[38px] items-center">
        <Link
          className="hover:text-[#F66962] text-lg text-[#3A3A3A] duration-100"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-[#F66962] text-lg text-[#3A3A3A] duration-100"
          href="/course"
        >
          Course
        </Link>
        <Link
          className="hover:text-[#F66962] text-lg text-[#3A3A3A] duration-100"
          href="/about-us"
        >
          About us
        </Link>
        <Link
          className="hover:text-[#F66962] text-lg text-[#3A3A3A] duration-100"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="hover:text-[#F66962] text-lg text-[#3A3A3A] duration-100"
          href="/contact"
        >
          Contact
        </Link>
        <div className="w-[21px] h-[21px] cursor-pointer">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              priority
              src="/images/icon/search.svg"
              fill
              alt="search-icon"
            ></Image>
          </div>
        </div>
      </div>
      {/* menu button */}
      <div className="flex gap-x-[47px] items-center">
        <div className="w-[22px] h-[25px] cursor-pointer">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              priority
              src="/images/icon/shopping-icon.svg"
              fill
              alt="shopping-icon"
            ></Image>
          </div>
        </div>
        <PrimaryBtn>Sign up</PrimaryBtn>
      </div>
    </div>
  );
};

export default Header;
