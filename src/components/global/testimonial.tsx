"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
       import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  const uniqueId = "test123";

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

      724: {
        slidesPerView: 2,
      },
       1124: {
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
    <section className="lg:px-20 sm:p-16 p-6 relative bg-color1 font1">
      <div className="w-full flex flex-wrap justify-between items-end !gap-y-4 mb-10 md:mb-16">
        <div className="max-w-[760px] space-y-7">
   <div className="relative overflow-hidden px-6 py-2.5 w-40 rounded-full border-2 text-color2">
          <h4 className="animate-marquee-right text-xs  sm:text-sm font-semibold tracking-wider uppercase">
{testimonialData?.title1 || "Testimonials"}          </h4>
        </div>

        {/* Main Heading */}
        <h2 className="font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto">
      {"Valued Testimonials from Our Clients"}    </h2>
        </div>
        <div className="flex gap-4">
          <div
            className={`${uniqueId}-prev bg-white p-4 rounded-full border hover:bg-color2 hover:text-white text-black `}
          >
            <FaArrowLeftLong className="!text-xl font-bold" />
          </div>
          <div
            className={`${uniqueId}-next  p-4 rounded-full bg-white border hover:bg-color2 hover:text-white text-black `}
          >
            <FaArrowRightLong className="!text-xl font-bold" />
          </div>
        </div>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full  mx-auto p-5 ${uniqueId}`}
      >
        {" "}

{testimonialData?.testimonials?.map((cards: any) => (
  <SwiperSlide
    key={cards.id}
    className="mb-12 w-full text-left p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden"
  >
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl -z-0"></div>
    
    <div className="w-full h-full group relative z-10">
      {/* Quote Icon Top */}
      <div className="flex items-start justify-between mb-4">
        <FaQuoteLeft className="text-yellow-400/30 text-4xl sm:text-5xl group-hover:text-yellow-400/50 transition-colors duration-300" />
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
          ★★★★★
        </h3>
      </div>

      {/* Testimonial Text */}
      <div className="relative">
        <p className="font-medium text-sm text-zinc-700 !leading-relaxed pb-6 mb-6 border-b border-zinc-200 group-hover:text-zinc-900 transition-colors duration-300">
          {cards.text}
        </p>
        <FaQuoteRight className="absolute -bottom-7 -right-4 text-yellow-400/30 text-4xl sm:text-6xl group-hover:text-yellow-400/50 transition-colors duration-300" />
      </div>

      {/* Client Info */}
      <div className="flex gap-4 w-max items-center mt-6">
        <div className="relative overflow-hidden h-12 w-12  rounded-full ring-4 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all duration-500">
          <Image
            src={cards.img}
            alt={cards.title}
            className="transition-all duration-500 w-full h-full rounded-full object-cover group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold font2 text-color2 group-hover:text-yellow-500 transition-colors duration-300">
            {cards.title}
          </h3>
          <p className="text-zinc-500 text-xs font-medium">
            Happy Client
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
}
