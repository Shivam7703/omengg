"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Projectslider() {
  const uniqueId = "pro123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      524: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };
  return (
    <section className=" lg:px-28 md:px-20 sm:px-14 p-6 relative ">
      <div className="w-full flex flex-wrap justify-between items-end !gap-y-4 mb-10 md:mb-16">
        <div className="max-w-[760px] space-y-7">
          {projectData?.title1 && (
            <h4 className=" border text-color2  pl-2 pr-5 font-bold text-sm rounded-full py-2 w-max">
              ● &nbsp; OTHER PROJECTS
            </h4>
          )}
          {projectData?.title2 && (
            <h2 className="text-black font-medium  text-4xl md:text-6xl ">
              {projectData?.title2}
            </h2>
          )}
        </div>
        <div className="flex gap-4">
          <div
            className={`${uniqueId}-prev bg-white p-3 border hover:bg-color2 hover:text-white text-black `}
          >
            <FaArrowLeftLong className="!text-xl font-bold" />
          </div>
          <div
            className={`${uniqueId}-next  p-3 bg-white border hover:bg-color2 hover:text-white text-black `}
          >
            <FaArrowRightLong className="!text-xl font-bold" />
          </div>
        </div>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full sm:mb-12 mx-auto p-5 ${uniqueId}`}
      >
        {" "}
        {projectData?.projects?.map((pro: any) => (
          <SwiperSlide key={pro.id} className="w-full text-left">
            <Link
              href={`/projects/${pro?.title
                ?.trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")}`}
              className="block group/card"
            >
              <div className="relative md:h-80 h-64 w-full rounded-3xl overflow-hidden bg-zinc-900 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700">
                {/* Background Image with parallax effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={pro?.img}
                    alt={pro?.title || "Project image"}
                    className="w-full object-cover h-full scale-105 group-hover/card:scale-125 transition-transform duration-[1.2s] ease-out brightness-90 group-hover/card:brightness-100"
                  />
                </div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" />

                {/* Colored accent gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                {/* Glossy shine effect */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/card:left-[100%] transition-all duration-[1.5s] ease-out" />
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 z-30 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl ring-2 ring-white/30 ring-offset-2 ring-offset-transparent" />
                </div>

                {/* Content Container */}
                <div className="absolute z-40 w-full h-full sm:p-8 p-6 flex flex-col justify-between">
                  {/* Top Section - Optional badge or category */}
                  <div className="flex justify-end">
                    <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover/card:opacity-100 transform translate-y-[-10px] group-hover/card:translate-y-0 transition-all duration-500 delay-100">
                      <span className="text-xs text-white font-medium">
                        {pro.cat}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section - Title and CTA */}
                  <div className="transform group-hover/card:translate-y-[-8px] transition-transform duration-500">
                    {/* Animated underline decoration */}
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4 transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />

                    <div className="flex gap-4 w-full justify-between items-end">
                      <div className="flex-1">
                        <h2 className="sm:text-3xl text-2xl font-bold leading-tight text-white drop-shadow-2xl mb-2 transform group-hover/card:translate-x-1 transition-transform duration-300">
                          {pro.title}
                        </h2>

                        {/* Subtitle appears on hover */}
                        <p className="text-sm text-zinc-300 font-light opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 delay-150">
                          Explore this project
                        </p>
                      </div>

                      {/* Animated Icon Button */}
                      <div className="relative flex-shrink-0">
                        {/* Pulsing background circle */}
                        <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover/card:opacity-20 scale-100 group-hover/card:scale-150 transition-all duration-500" />

                        <div className="relative bg-white rounded-full p-2 shadow-lg group-hover/card:shadow-2xl transform group-hover/card:scale-110 transition-all duration-300">
                          <BsArrowUpRightCircleFill className="text-color2 text-xl sm:text-2xl group-hover/card:rotate-45 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Progress bar animation */}
                    <div className="mt-4 h-0.5 w-full bg-white/10 rounded-full overflow-hidden opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200">
                      <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover/card:w-full transition-all duration-[1.5s] ease-out" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 z-30 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-bl-[100px]" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projectslider;
