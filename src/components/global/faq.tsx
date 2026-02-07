"use client";
import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Faq({ data }: any) {
  const [expandedCity, setExpandedCity] = useState<number | null>(1);

  function toggleCity(cityId: number) {
    setExpandedCity(expandedCity === cityId ? null : cityId);
  }

  return (
    <div className="space-y-6 font1">
      {data.map((city: any) => {
        const isOpen = expandedCity === city.id;

        return (
          <div
            key={city.id}
            className={`group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 ${
              isOpen ? "shadow-lg" : "hover:shadow-md"
            }`}
          >
            {/* Question */}
            <div
              onClick={() => toggleCity(city.id)}
              className="flex cursor-pointer items-center justify-between gap-6"
            >
              <h3
                className={`text-lg md:text-2xl font-semibold transition-colors ${
                  isOpen ? "text-color2" : "text-zinc-800"
                }`}
              >
                {city.que}
              </h3>

              <BsArrowUpRightCircleFill
                className={`text-2xl transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 text-color2"
                    : "text-zinc-400 group-hover:text-color2"
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className=" md:text-lg leading-relaxed text-zinc-700">
                  {city.ans}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
