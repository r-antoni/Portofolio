"use client";

import Button from "@/components/shared/button";
import Logo from "@/components/shared/logo";
import Link from "next/link";

export default function ProjectLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-background">
      <div className="flex justify-between items-center w-full h-full py-4 pr-10 shadow">
        <Logo />
        <Link href="/">
          <Button title="Back" textSize="text-sm" />
        </Link>
      </div>
      {children}
    </div>
  );
}
