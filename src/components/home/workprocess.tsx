"use client";
import React from "react";
import { FaWpforms } from "react-icons/fa";
import { GiDeadEye } from "react-icons/gi";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";

export default function WorkProcess() {
  const data = [
  {
    icon: <FaWpforms />,
    heading: "Planning & Assessment",
    text: "Understanding project requirements, site conditions, timelines, and execution feasibility thoroughly.",
  },
  {
    icon: <MdOutlineSettings />, 
    heading: "Design & Engineering",
    text: "Developing precise engineering designs aligned with safety standards and project goals.",
  },
  {
    icon: <MdOutlineEngineering />,
    heading: "Execution & Supervision",
    text: "Executing construction activities with strict supervision, safety compliance, and quality control.",
  },
  {
    icon: <LuHandshake />,
    heading: "Completion & Handover",
    text: "Final inspections, documentation, and smooth project handover within committed timelines.",
  },
];

  return (
    <section className=" lg:px-20 sm:p-12 p-7 bg-color1 mx-auto font1">
      {/* Heading Section */}
        <div className="w-full text-center flex flex-col items-center gap-6 mb-6 md:mb-16">
          {/* Badge with Animated Text */}
          <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 text-color2">
            <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
              Work Process
            </h4>
          </div>

          {/* Main Heading */}
          <h2 className=" font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto ">
              Clear process with expert execution and guaranteed success
          </h2>
        </div>

      <div className=" gap-y-8 p-3 py-7 md:!py-12 flex flex-wrap items-stretch w-full">
        {data.map((card: any , index:number) => (
          <div
            key={index}
            className="lg:w-1/4 sm:w-1/2 w-full text-center space-y-6 px-5 group relative"
          >
            <div className="absolute h-px w-full bg-gradient-to-r from-color2/30 via-color2 to-color2/30 top-[29%] left-0"></div>
            <div className="text-5xl md:text-6xl p-7 w-max  rounded-full mx-auto bg-white group-hover:bg-color2 text-black group-hover:text-white  duration-200 relative ">
              {card?.icon}
              <div className="absolute bottom-1/4 -right-7 group-hover:bg-white bg-color2 group-hover:text-black  text-white rounded-full w-12 h-12 flex items-center text-lg justify-center">0{index+1}</div>
            </div>
            <h2 className=" text-2xl duration-200 font-medium  group-hover:text-color2 ">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base font-medium text-zinc-500">
              {card?.text}
            </p>
          </div>
        ))}
        <div className="flex mx-auto justify-center text-black items-center  gap-4 mt-5">
          <p className="bg-black text-white p-3 rounded-md">Hire Us</p><p>Let’s collaborate to build something extraordinary.<a className="border-b-2 hover:text-color2 border-black" href="tel:+912444455567"> Have a Project in Mind?</a>

</p>
        </div>
      </div>
    </section>
  );
}
