"use client";
import React, { useState } from "react";
import Image from "next/image";
import { banner, banner2, banner3, banner4 } from "@/assets";
import Buttonmain from "../global/button";

function AboutSection() {
  const [value, setValue] = useState(0);

  const data = {
    img2: banner,
    title1: "WHO ARE WE",
    title2: "Best Builders In Delhi NCR",
    vision: [
  {
    heading: "Our Vision",
    text: "Leading innovative, sustainable infrastructure development supporting India’s future growth responsibly.",
    img: banner3,
    pointers: [
      "Innovation-driven engineering",
      "Sustainable infrastructure focus",
      "Long-term national impact",
      "Future-ready development",
    ],
  },
  {
    heading: "Our Mission",
    text: "Delivering safe, precise infrastructure through ethical practices and modern project management.",
    img: banner4,
    pointers: [
      "Precision engineering",
      "Safety-first execution",
      "Ethical work culture",
      "Timely project delivery",
    ],
  },
  {
    heading: "Our Values",
    text: "Building trust through honesty, teamwork, safety, and consistent quality delivery.",
    img: banner2,
    pointers: [
      "Honest communication",
      "Team-driven approach",
      "Safety at every stage",
      "Reliable project outcomes",
    ],
  },
],

  };

  return (
    <section className="lg:px-28 md:px-20 sm:p-16 px-6 py-8 bg-color1 mx-auto">
      <div className="flex flex-wrap justify-between gap-y-12">
        
        {/* Image Section - Enhanced */}
        <div className=" md:w-[49%] w-full min-h-[500px] md:min-h-[600px] relative group">
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={data.img2}
              alt="About"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
          </div>

          {/* Experience Badge - Enhanced */}
          <div className="absolute z-20 bottom-6 left-6 md:bottom-8 md:left-8">
            <div className="backdrop-blur-xl bg-color2/95 text-white rounded-2xl p-5 md:p-6 shadow-2xl border border-white/20 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-br from-white to-white/70 bg-clip-text">
                42+
              </h3>
              <p className="text-sm md:text-base text-white/90 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Content Section - Enhanced */}
        <div className=" md:w-[47%] w-full md:py-6 space-y-6 md:space-y-8">
          
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

          {/* Tabs - Premium Design */}
          <div className="flex flex-wrap gap-2 md:gap-8 mx-auto w-fit ">
            {data.vision.map((item, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`relative rounded-full py-2 sm:px-4 px-3 capitalize transition-all duration-300 font-medium sm:text-base text-sm font1 overflow-hidden group
                  ${
                    value === index
                      ? "bg-color2 text-white shadow-lg shadow-color2/30 scale-105"
                      : "bg-white text-zinc-700 hover:text-color2 hover:shadow-md border border-gray-200"
                  }`}
              >
                <span className={`relative z-10 flex items-center gap-2 ${value === index ? 'font-semibold' : ''}`}>
                  <span className={`inline-block w-2 h-2 rounded-full transition-all duration-300 ${
                    value === index ? 'bg-white' : 'bg-color2'
                  }`} />
                  {item.heading}
                </span>
                {value !== index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-color2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Divider - Enhanced */}
          <div className="relative">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-color2/60 to-transparent" />
          </div>

          {/* Active Content - Premium Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-6">
              
              {/* Image */}
              <div className="relative w-full sm:w-40 h-56 b flex-shrink-0 rounded-xl overflow-hidden shadow-lg group/img">
                <Image
                  src={data.vision[value].img}
                  alt={data.vision[value].heading}
                  fill
                  className="object-cover w-full transition-transform duration-500 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-color2/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 font2">
                <h3 className="text-2xl md:text-3xl font1 text-zinc-900 capitalize">
                  {data.vision[value].heading}
                </h3>
                
                <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                  {data.vision[value].text}
                </p>

                {/* Pointers - Enhanced */}
                <ul className="space-y-1 ">
                  {data.vision[value].pointers.map((point, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 text-zinc-700 group/item"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-color2 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="text-sm md:text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

<Buttonmain text={"Learn More"} href={"/about-us"} />        
        </div>
      </div>
    </section>
  );
}

export default AboutSection;