"use client";

import Logo from "@/components/shared/logo";
import MobileNav from "@/components/homepage/mobile-nav";
import Resume from "@/components/homepage/resume";

type Props = {

};

const Header = (props: Props) => {
  return (
    <div className="w-full h-20 sticky top-0 xl:top-5 z-[60] bg-background shadow-2xl xl:shadow-none xl:bg-transparent mb-10">
      <div className="flex justify-between items-center mx-auto md:max-w-[96%] h-full">
        <Logo />
        <Resume />
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;