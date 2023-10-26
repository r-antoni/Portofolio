"use client"

import Image from "next/image";

import { Carousel } from 'flowbite-react';

import {p1} from "../../../../public/assets";
import Button from "@/components/shared/button";

const Attendify = () => {

  return (
    <div className="flex flex-col pt-40 items-center w-full h-screen bg-background">
      <div className='w-3/4 h-3/4 lg:w-1/2 lg:h-1/2'>
        <Carousel className='' slideInterval={5000}>
          <Image src={p1} alt="Attendify Preview" />
          <Image src={p1} alt="Attendify Preview" />
          <Image src={p1} alt="Attendify Preview" />
          <Image src={p1} alt="Attendify Preview" />
          <Image src={p1} alt="Attendify Preview" />
        </Carousel>
      </div>
      <div className="flex flex-col w-full text-center lg:text-start lg:w-1/2 px-10 lg:px-0  lg:pt-10 gap-5 text-white">
          <h2 className="text-2xl font-bold uppercase">Attendify</h2>
          <h4>
            Status: <Button title="In Progress" textSize="text-xs" />
          </h4>
          <h3>Tech Stack</h3>
          <ul className="flex lg:flex-row gap-3 justify-center lg:justify-start">
            <li>
              <Button title="React JS" textSize="text-xs" />
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
            Attendify is an attendance management app with role based authorization. At its core Attendify is a simple
            CRUD app with a main purpose of being an activity management and monitoring tool.
          </p>
          <div className="flex justify-center items-center pb-5">
            <a href="https://attendify.netlify.app/">
              <Button title="Visit Website" textSize="text-sm" />
            </a>
          </div>
        </div>
    </div>
  );
};

export default Attendify;
