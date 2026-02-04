"use client";

import { projectData } from "@/data/homeData";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoicon } from "@/assets";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = ["All", "Completed", "Ongoing", "Upcoming"];

export default function Projectsec1() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredProjects =
    activeCat === "All"
      ? projectData?.projects
      : projectData?.projects?.filter((pro: any) => pro?.cat === activeCat);

  return (
    <section className="md:p-20 sm:p-12 p-7 bg-gradient-to-b from-white via-zinc-50 to-white relative overflow-hidden">
      {/* Heading */}
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-11 md:mb-16">
        <div className="p-2 rounded-full border-2 border-color2 w-max">
          <Image
            src={logoicon}
            alt="OmEngineers Construction"
            height={200}
            width={200}
            className="h-12 w-12"
          />
        </div>

        {projectData?.title1 && (
          <h4 className="text-color2 text-sm font-bold">
            {projectData.title1}
          </h4>
        )}

        {projectData?.title2 && (
          <h2 className="text-black text-3xl font-medium md:text-6xl max-w-3xl">
            {projectData.title2}
          </h2>
        )}
      </div>

      {/* Category Toggle with Enhanced Design */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-7 py-3 rounded-full border-2 transition-all duration-300 font-semibold text-sm uppercase tracking-wide relative overflow-hidden group
              ${
                activeCat === cat
                  ? "bg-color2 text-white border-color2 shadow-lg shadow-color2/30"
                  : "border-zinc-300 text-zinc-700 hover:border-color2 hover:text-color2 bg-white hover:shadow-md"
              }`}
          >
            <span className="relative z-10">{cat}</span>
            {activeCat !== cat && (
              <span className="absolute inset-0 bg-color2/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            )}
          </button>
        ))}
      </div>

      {/* Slider with Enhanced Cards */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".project-prev",
            nextEl: ".project-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="!pb-16"
        >
          {filteredProjects?.map((pro: any, index: number) => (
            <SwiperSlide key={pro?.id}>
              <Link
                href={`/projects/${pro?.title
                  ?.trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "")}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative md:h-80 h-64 overflow-hidden">
                    <Image
                      src={pro?.img}
                      alt="image"
                      fill
                      className="absolute object-cover duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 z-40">
                      <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                        <h4 className="font2 text-4xl text-white font-extrabold drop-shadow-lg">
                          0{index + 1}
                        </h4>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 z-40">
                      <span className="bg-color2 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {pro?.cat || activeCat}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="sm:text-2xl text-xl font-bold text-black group-hover:text-color2 transition-colors duration-300 mb-3 line-clamp-2">
                      {pro?.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed line-clamp-2">
                      {pro?.para}
                    </p>

                    {/* View More Link */}
                    <div className="mt-4 flex items-center text-color2 font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                      <span>View Details</span>
                      <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="project-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white hover:bg-color2 text-color2 hover:text-white p-4 rounded-full shadow-lg hover:shadow-xl z-20 transition-all duration-300 group border-2 border-color2/20 hover:border-color2"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="project-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white hover:bg-color2 text-color2 hover:text-white p-4 rounded-full shadow-lg hover:shadow-xl z-20 transition-all duration-300 group border-2 border-color2/20 hover:border-color2"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
