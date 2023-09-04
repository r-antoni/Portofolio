"use client";
import React from "react";
import BackgroundCircles from "../Shared/BackgroundCircles";
import HelloButton from "./components/HelloButton";
import Text from "./components/Text";
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center max-w-7xl h-screen gap-10 px-5 py-32">
      <BackgroundCircles />
      <div className="flex flex-col items-center gap-5 z-50 tracking-wide">
        <p className="text-2xl text-greentext font-semibold flex items-center tracking-wide">
          04.<span className="text-white"> What&apos;s Next ?</span>
        </p>
        <Text />
        <HelloButton />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
