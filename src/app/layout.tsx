import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "R-Antoni Portofolio",
  description:
    "A portofolio website created by Reindra Bachtiar Antoni to showcase things that he built and provide details to future employer",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
