"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { about2, about3, about8, banner, banner2, banner3 } from "@/assets";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Interior Architecture",
    "Residential Architecture",
    "Sustainable Design",
    "Urban Planning"
  ];

  const data = [
    {
      img: about2,
      title: "Project title",
      category: "Interior Architecture"
    },
    {
      img: about2,
      title: "Project title",
      category: "Residential Architecture"
    },
    {
      img: about3,
      title: "Project title",
      category: "Sustainable Design"
    },
    {
      img: about8,
      title: "Project title",
      category: "Urban Planning"
    },
    {
      img: banner,
      title: "Project title",
      category: "Interior Architecture"
    },
    {
      img: banner2,
      title: "Project title",
      category: "Residential Architecture"
    },
    {
      img: about2,
      title: "Project title",
      category: "Sustainable Design"
    },
    {
      img: about8,
      title: "Project title",
      category: "Urban Planning"
    },
    {
      img: banner3,
      title: "Space & Structure",
      category: "Interior Architecture",
    },
   
  ];

  const filteredData = activeFilter === "All" 
    ? data 
    : data.filter(item => item.category === activeFilter);

  return (
    <div className="xl:px-28 md:px-20 font1 sm:p-16 bg-white p-6 relative">
      <div className="w-full text-center flex flex-col items-center gap-6 mb-10">
        {/* Badge with Animated Text */}
        <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 text-color2">
          <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            Projects 
          </h4>
        </div>

        {/* Main Heading */}
        <h2 className="font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto">
          Our Excellent Efforts
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
              ${
                activeFilter === category
                  ? "bg-color2 text-white"
                  : "bg-transparent text-gray-700 hover:text-color2"
              }`}
          >
            {activeFilter !== category && (
              <span className="w-1.5 h-1.5 rounded-full bg-color2"></span>
            )}
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
              <div className="absolute opacity-0 group-hover:opacity-100 inset-0 bg-black/40 flex items-end p-6 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}