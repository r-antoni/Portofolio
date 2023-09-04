"use client";
import React from "react";
import Logo from "./components/Logo";
import Resume from "./components/Resume";
import MobileNav from "./components/Mobile/MobileNav";

const Header = () => {
  return (
    <div className="w-full h-20 sticky top-0 xl:top-5 z-[60] bg-background shadow-2xl xl:shadow-none xl:bg-transparent mb-10">
      <div className="flex justify-between items-center mx-auto md:max-w-[96%] h-full">
        <Logo />
        <Resume />
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
