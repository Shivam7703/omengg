import React from "react";
import Image from "next/image";
import { banner } from "@/assets";
import Buttonmain from "../global/button";

function WhyChoose() {

  const data = {
    img2: banner,
    title1: "WHy Choose us",
    title2: "lorem ipsum dolor sit amet consectetur.",
    para:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: [
    { heading: "10+", text: "Tasks Completed" },
    { heading: "500+", text: "Projects Completed" },
    { heading: "300+", text: "Satisfied Clients" },
    ],
  };

  return (
    <section className="lg:px-28 md:px-20 sm:p-16 px-6 py-8 md:py-24 max-w-[1580px] font1 bg-white mx-auto">
      <div className="flex flex-wrap justify-between gap-y-12 items-stretch">
        
        {/* Content Section - Enhanced */}
        <div className=" md:w-[48%] w-full  space-y-6 ">
          
          {/* Marquee - Keep same as requested */}
          <div className="max-w-40 overflow-hidden px-4 py-2 rounded-full border-2">
            <h4 className="animate-marquee-right text-color2 text-xs min-w-max sm:text-sm">
              {data.title1}
            </h4>
          </div>

          {/* Main Heading - Enhanced */}
          <h2 className="text-black font-semibold text-3xl md:text-5xl">
            {data.title2}
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            {data.para}
          </p>
 {/* Divider - Enhanced */}
            <div className="w-full h-[2px] bg-gradient-to-r from-color2/30 via-color2 to-color2/30" />
          {/* Tabs - Premium Design */}
          <div className="grid grid-cols-3 !my-8">
            {data.count.map((item, index) => (
            <div key={index} className=" md:border-r-2 border-color2/60 p-2 last:border-none sm:px-8  transition-shadow duration-300">
              <h3 className="text-2xl font-bold md:text-3xl  text-black mb-2">{item.heading}</h3>
              <p className="text-sm md:text-base  text-zinc-500">{item.text}</p>
            </div>
            ))}
            </div>
           <Buttonmain text={"Explore More"} href={"/about"} />        
        </div>
         {/* Image Section - Enhanced */}
        <div className=" md:w-[48%] w-full h-full  group">
          <div className="relative w-full h-full overflow-hidden rounded-3xl md:h-[550px] shadow-xl">
            <Image
              src={data.img2}
              alt="About"
              priority
              className="object-cover transition-transform duration-700 h-full w-full group-hover:scale-110"
            />
            {/* Gradient Overlay */}
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;