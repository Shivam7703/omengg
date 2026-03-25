"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Servicedata } from "@/data/homeData";

// Type definition updated to match your new structure
type ServiceItem = {
  title: string;
  text: string;
  img: any;
  imgs: any[];
  icon: React.ReactNode;
};

export default function ProjectGallery() {
  const data: ServiceItem[] = Servicedata.service;
  
  // Default to the first service title
  const [activeFilter, setActiveFilter] = useState<string>(data[0]?.title || "");

  // Filter based on selected Service Title
  const activeService = data.find((item) => item.title === activeFilter);
  const displayImages = activeService ? activeService.imgs : [];

  return (
    <div className="xl:px-28 md:px-20 font1 sm:p-16 bg-white p-6 relative">
      <div className="w-full text-center flex flex-col items-center gap-6 mb-10">
        <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 text-color2">
          <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            Our Services & Projects
          </h4>
        </div>

        <h2 className="font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto">
          {Servicedata.title2}
        </h2>
      </div>

      {/* Filter Tabs - Horizontal Scrollable Container */}
      <div className="w-full overflow-x-auto pb-4 no-scrollbar">
        <div className="flex items-center justify-start md:justify-center gap-3 w-max mx-auto px-4">
          {data.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveFilter(item.title)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap
                ${
                  activeFilter === item.title
                    ? "bg-color2 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:text-color2 border border-transparent"
                }`}
            >
              {activeFilter !== item.title && (
                <span className="w-1.5 h-1.5 rounded-full bg-color2"></span>
              )}
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Description of Selected Service */}
      {/* {activeService && (
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto animate-fadeIn">
          {activeService.text}
        </p>
      )} */}

      {/* Masonry Grid for Images */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 min-h-[400px] mt-8 md:mt-12">
        {displayImages.map((imgSrc, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-gray-200 animate-fadeIn"
          >
            <Image
              src={imgSrc}
              alt={`${activeFilter} image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder="blur" // Optional: if using static imports
              blurDataURL="data:image/png;base64,..." // Optional
            />
            
            {/* Overlay on Hover */}
            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 bg-black/20 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {displayImages.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No images found for this category.
        </div>
      )}
    </div>
  );
}