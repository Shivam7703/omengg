"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Servicedata as data } from "@/data/homeData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Buttonmain from "../global/button";

export default function ServiceSlider() {
 
  return (
    <section className="lg:p-12 bg-color1 font1 relative overflow-hidden">
      {/* Background Decorative Elements */}
      
      <div className="max-w-[1600px] lg:rounded-[60px] bg-zinc-800 mx-auto p-7 py-12 md:p-12 lg:px-20 relative z-10">
        {/* Heading Section */}
        <div className="w-full text-center flex flex-col items-center gap-6 mb-6 md:mb-16">
          {/* Badge with Animated Text */}
          <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm">
            <h4 className="animate-marquee-right text-white text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
              {data.title1}
            </h4>
          </div>

          {/* Main Heading */}
          <h2 className="text-white font-bold text-3xl  md:text-5xl max-w-5xl mx-auto ">
            {data.title2}
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative pb-8 md:pb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={32}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className=""
          >
            {data?.service?.map((service, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/services/${service?.title
                    ?.trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}`}
                  className="group block h-full py-4"
                >
                  {/* Card with Thick White Border */}
                  <div className="relative h-full bg-white rounded-2xl p-4 md:p-3 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-40 md:h-64 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={service?.img}
                        alt={service?.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Icon Badge - Bottom Right */}
                      
                    </div>

                    {/* Content Section */}
                    <div className="px-4 pb-2 relative">
                      <div className="absolute text-3xl rounded-full p-3 bg-color1 group-hover:bg-color2 group-hover:text-white transition-all shadow-lg text-color2 -top-12  right-5 z-10">
                        {service?.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-color2 transition-colors duration-300">
                        {service?.title}
                      </h3>
                      <div className="bg-color2 h-px w-full my-3 md:my-4"></div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-5 md:mb-6 line-clamp-3">
                        {service?.text}
                      </p>

                      {/* View Details Button */}
                      <div className="inline-flex items-center gap-2 text-black group-hover:text-color2 font-semibold text-sm md:text-base transition-all duration-300">
                        <span>View Details</span>
                        <div className="w-8 h-8 md:w-9 md:h-9 text-white text-2xl rounded-full bg-black group-hover:bg-color2 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <IoIosArrowRoundForward />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="service-prev absolute top-1/2 -left-6 md:-left-10 shadow-lg transform -translate-y-1/2 bg-color1 hover:bg-color2 text-black hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full z-30 transition-all duration-300 text-3xl flex items-center justify-center"
            aria-label="Previous slide"
          >
            <IoIosArrowRoundBack />
          </button>

          <button
            className="service-next absolute top-1/2 -right-6 md:-right-10 shadow-lg transform -translate-y-1/2 bg-color1 hover:bg-color2 text-black hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full z-30 transition-all duration-300 text-3xl flex items-center justify-center"
            aria-label="Next slide"
          >
                                  <IoIosArrowRoundForward />

          </button>

        </div>
        <div className="w-max mx-auto">         <Buttonmain text={"All Services"} href={"/services"} />        
        </div>
      </div>

    </section>
  );
}