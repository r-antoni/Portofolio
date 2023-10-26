"use client"

import Image from "next/image";

import { Carousel } from 'flowbite-react';

import {p2} from "../../../../public/assets";
import Button from "@/components/shared/button";

const Globetix = () => {
  return (
<div className="flex flex-col pt-40 items-center w-full h-screen bg-background">
      <div className='w-3/4 h-3/4 lg:w-1/2 lg:h-1/2'>
        <Carousel className='' slideInterval={5000}>
          <Image src={p2} alt="Globetix Preview" />
          <Image src={p2} alt="Globetix Preview" />
          <Image src={p2} alt="Globetix Preview" />
          <Image src={p2} alt="Globetix Preview" />
          <Image src={p2} alt="Globetix Preview" />
        </Carousel>
      </div>
      <div className="flex flex-col w-full text-center lg:text-start lg:w-1/2 px-10 lg:px-0  lg:pt-10 gap-5 text-white">
          <h2 className="text-2xl font-bold uppercase">Globetix</h2>
          <h4>
            Status: <Button title="In Progress" textSize="text-xs" />
          </h4>
          <h3>Tech Stack</h3>
          <ul className="flex lg:flex-row gap-3 justify-center lg:justify-start">
          <li>
              <Button title="React JS" textSize="text-xs" />
            </li>
            <li>
              <Button title="Next JS" textSize="text-xs" />
            </li>
            <li>
              <Button title="Tailwind CSS" textSize="text-xs" />
            </li>
            <li>
              <Button title="Express JS" textSize="text-xs" />
            </li>
            <li>
              <Button title="MySQL" textSize="text-xs" />
            </li>
            <li>
              <Button title="Netlify" textSize="text-xs" />
            </li>
          </ul>
          <p className="pt-5 pb-10">
             GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is
            created using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment
            checkout.
          </p>
          <div className="flex justify-center items-center pb-5">
          <a href="https://globetix.vercel.app/">
              <Button title="Visit Website" textSize="text-sm" />
            </a>
          </div>
        </div>
    </div>
  );
};

export default Globetix;
