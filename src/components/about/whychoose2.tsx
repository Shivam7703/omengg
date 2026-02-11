"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { bhk, banner } from "@/assets";
import Buttonmain from "../global/button";

export default function WhyChoose2() {
  var data = {
    img1: bhk,  
    img2: banner,
    title1: "Why Choose Us",
    title2: "We Are The Best Builder in Delhi",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    count: [
      {
        number: "25+",
        text: "Years of Experience"
      },
      {
        number: "100+",
        text: "Projects Completed"
      },
      {
        number: "50+",
        text: "Happy Clients"
      },
      {
        number: "25+",
        text: "Years of Experience"
      }
    ]
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-20 sm:p-16 px-7 py-11 max-w-[1850px] font1 bg-white mx-auto flex gap-y-7 flex-wrap justify-between overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[30%] w-full h-full relative group overflow-hidden rounded-2xl"
      >
        <Image
          src={data.img1}
          alt="About"
          className="rounded-2xl duration-500 shadow-lg w-full h-full border-8 border-white object-cover group-hover:scale-110 group-hover:brightness-110 transition-all ease-in-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 duration-500 transition-all ease-in-out rounded-2xl"></div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[69%] w-full flex flex-col gap-7 md:gap-12"
      >
        {/* Top Section with Content and Image */}
        <div className="flex w-full flex-wrap items-stretch justify-between gap-y-6">
          <div className="md:w-[48%] md:pl-8 h-max w-full space-y-4">
            <div className="max-w-40 overflow-hidden py-2 rounded-full border-2">
              <h4 className="animate-marquee-right text-color2 text-xs min-w-max sm:!text-sm">
                {data.title1}
              </h4>
            </div>
            <h2 className="inline-block text-3xl text-zinc-800 font-semibold md:text-4xl">
              {data.title2}
            </h2>
            <p className="!mb-7 md:text-lg text-zinc-600 font-medium">
              {data.para}
            </p>
            <Buttonmain text={"Know more"} href={"/"} />
          </div>
          <div className="md:w-[48%] h-[360px] w-full relative group overflow-hidden rounded-2xl">
            <Image
              src={data.img2}
              alt="About"
              className="rounded-2xl duration-500 shadow-lg w-full h-full border-8 border-white object-cover group-hover:scale-110 group-hover:brightness-110 transition-all ease-in-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 duration-500 transition-all ease-in-out rounded-2xl"></div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 grid-cols-2 w-full">
          {data.count.map((item, index) => (
            <div
              key={index}
              className="md:border-r-2 border-color2/60 p-2 last:border-none sm:px-8 transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold md:text-5xl text-black mb-2">
                {item.number}
              </h3>
              <p className="text-sm md:text-base text-zinc-500">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}