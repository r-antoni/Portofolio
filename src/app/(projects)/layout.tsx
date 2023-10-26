"use client";

import Button from "@/components/shared/button";
import Logo from "@/components/shared/logo";
import Link from "next/link";

export default function ProjectLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="fixed top-0 flex justify-between items-center w-full h-20 bg-background py-3 pr-10 shadow-xl">
        <Logo />
        <Link href="/">
          <Button title="Home" textSize="text-sm" />
        </Link>
      </div>
      {children}
    </>
  );
}
