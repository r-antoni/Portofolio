"use client";

import Button from "@/components/shared/button";
import BackgroundCircles from "@/components/shared/circle";
import SocialItem from "@/components/shared/social-item";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center max-w-7xl h-screen gap-10 px-5 py-32">
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
        <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank" className="py-5">
          <Button title="Say Hello" textSize="text-base"></Button>
        </a>
        <div className="hidden md:inline-flex xl:hidden justify-center items-center w-full py-12 gap-5 text-greentext">
          <SocialItem />
        </div>
      </div>
    </section>
  );
};

export default Contact;
