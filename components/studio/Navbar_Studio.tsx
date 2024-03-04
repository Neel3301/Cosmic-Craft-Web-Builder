"use client";

// fonts
import { salsa, titillium_Web } from "@/assets/Fonts";

// icons
import {
  CaretDownIcon,
  DesktopIcon,
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  MobileIcon,
  ReadIcon,
  SignoutIcon,
  UserIcon,
} from "@/assets/Svgs";
import use_Model_Store_Studio from "@/store/studio/Model_Store_Studio";
import Image from "next/image";

// global
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

// main
const Navbar_Studio = () => {
  const [studioPageSliderOnOpen] = use_Model_Store_Studio((s) => [
    s.studioPageSliderOnOpen,
  ]);
  const [isNavbarVisible, setIsNavbarVisible] = use_Model_Store_Studio((s) => [
    s.isNavbarVisible,
    s.setIsNavbarVisible,
  ]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F9") {
        setIsNavbarVisible();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavbarVisible, setIsNavbarVisible]);

  return (
    <header
      style={{ display: isNavbarVisible ? "block" : "none" }}
      className={`flex w-full min-w-[1200px] flex-col items-center justify-center`}
    >
      <nav
        className={`flex h-[70px] w-full max-w-[1536px] items-center justify-between gap-[24px] border-b-2 border-[#f2f2f2] px-[24px]`}
      >
        {/* title  */}
        <Link
          href={`/`}
          className={`${salsa.className} block text-[28px] font-extrabold`}
        >
          Cosmic Craft
        </Link>

        {/* links  */}
        <div className={`flex h-full items-center justify-center`}>
          {/* Hire a Professional */}
          <div
            className={`${titillium_Web.className} h-full border-l-2 border-[#f2f2f2] `}
          >
            <div
              className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] font-semibold hover:text-main`}
            >
              <EmailIcon classname="h-[24px] w-[24px] fill-[#464646]" />
              <Link href={`/`}>Hire a Professional</Link>
            </div>
          </div>
          {/* View Documentation */}
          <div
            className={`${titillium_Web.className} h-full border-l-2 border-[#f2f2f2] `}
          >
            <div
              className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] font-semibold hover:text-main`}
            >
              <ReadIcon classname="h-[21px] w-[21px] fill-[#464646]" />
              <Link href={`/`}>View Documentation</Link>
            </div>
          </div>
        </div>
        {/* flex - 1  */}
        <div className={`flex-1`} />
        {/* icons  */}
        <LinkedInIcon classname={`h-[26px] w-[26px] cursor-pointer`} />
        <InstagramIcon classname={`h-[26px] w-[26px] cursor-pointer`} />
        <div
          className={`${titillium_Web.className} h-full border-l-2 border-r-2  border-[#f2f2f2]  `}
        >
          <Link
            href={`/`}
            className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] hover:text-main`}
          >
            <Image
              src="/github.gif"
              alt="a"
              height={32}
              width={32}
              unoptimized
            />
            <span className={`text-[16px] font-semibold`}>
              Contribute / Get Project Code
            </span>
          </Link>
        </div>
        <Button
          className={`rounded-full bg-main px-[22px] py-[18px] text-[16px] text-white hover:bg-main/75`}
        >
          <Link href={`#`}>Publish</Link>
        </Button>
      </nav>

      {/* bottom  */}
      <nav
        className={`flex h-[50px] w-full max-w-[1536px] items-center justify-between gap-[24px] border-b-2 border-[#f2f2f2]  px-[24px]`}
      >
        {/* page  */}
        <div
          onClick={studioPageSliderOnOpen}
          className={`flex h-full w-[250px] text-[16px] hover:text-main ${titillium_Web.className} items-center justify-around border-r-2 border-[#f2f2f2]  font-normal`}
        >
          <div className={`flex items-center justify-center gap-[12px]`}>
            <span>Page :</span>
            <span>Home</span>
          </div>
          <CaretDownIcon classname={`h-[18px] w-[18px]`} />
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
        {/* Devices  */}
        <div className={`flex items-center justify-center gap-[18px]`}>
          <div
            className={`flex cursor-pointer items-center justify-center gap-[4px]`}
          >
            <DesktopIcon classname={`h-[48px]  w-[48px]`} />
            <span className={`text-[12px] text-[#484848]`}>Desktop</span>
          </div>
          <div
            className={`flex cursor-pointer items-center justify-center gap-[2px]`}
          >
            <MobileIcon classname={`h-[30px] w-[30px]`} />
            <span className={`text-[12px] text-[#484848]`}>Mobile</span>
          </div>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
        {/* See Preview */}
        <Link
          href={`/`}
          className={`${titillium_Web.className} pr-[24px] text-[16px] text-main`}
        >
          See Preview
        </Link>
      </nav>
    </header>
  );
};

export default Navbar_Studio;
