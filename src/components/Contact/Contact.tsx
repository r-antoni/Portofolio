"use client";
import React from "react";
import BackgroundCircles from "../Hero/components/BackgroundCircles";
import HelloButton from "./components/HelloButton";
import Social from "./components/Social";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center max-w-7xl h-screen gap-10 py-10 xl:py-32"
    >
      <BackgroundCircles />
      <div className="flex flex-col items-center gap-5 z-50 tracking-wide">
        <p className="text-2xl text-greentext font-semibold flex items-center tracking-wide">
          04.<span className="text-white"> What&apos;s Next ?</span>
        </p>
        <h2 className="text-4xl font-semibold text-greentext">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nostrum accusamus at porro aliquam nisi
          facilis tempora nihil adipisci? Totam omnis laudantium necessitatibus sint eligendi repudiandae, sunt quasi
          voluptas dicta.
        </p>
        <HelloButton />
      </div>
      <div>
        <Social />
      </div>
    </section>
  );
};

export default Contact;
