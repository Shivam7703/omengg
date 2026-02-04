"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  sliderText } from "@/utils/motion";
import { sliderContent } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong, FaCircleChevronRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Buttonmain from "../global/button";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay,  EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className=" lg:px-16 w-full  mx-auto bg-color1 relative">
      <Swiper {...swiperOptions} className="">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden lg:rounded-[50px]">
            <HomeBannerCard
              img={item?.img}
              title={item?.title}
              welcome={item?.welcome}
              btntext={item?.btntext}
              para={item?.para}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next absolute z-30 p-3 bg-white hover:bg-color2 hover:text-white text-black !left-36 !bottom-32  max-md:!hidden`}
      >
        <FaArrowRightLong className="!text-xl font-bold"/>
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 bg-white p-3 hover:bg-color2 hover:text-white text-black !left-24 !bottom-32  max-md:!hidden`}
      >
        <FaArrowLeftLong className="!text-xl font-bold"/>
      </div>
    </section>
  );
}

function HomeBannerCard({
  img, 
  title,
  para,
  welcome,
  btntext,
}: any) {
  return (
    <div className="relative w-full overflow-hidden font1 text-white md:h-[98vh] min-h-[520px]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

      <div className="absolute top-0 left-0 items-center w-full h-full z-10 flex gap-y-10 lg:p-24 sm:p-12 p-7 justify-end ">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, delay: 0.2 }}
          className="flex h-max w-full flex-col max-w-[570px] border rounded-2xl bg-color1 max-md:text-center justify-center gap-3 md:gap-6 p-6 md:p-9 max-md:items-center"
        >
<div className=" max-w-40 overflow-hidden py-2 rounded-full border-2">
    <h4 className=" animate-marquee-right text-color2 text-xs min-w-max sm:!text-sm ">
      {welcome}
    </h4>
</div>
          <h1 className="inline-block text-3xl text-zinc-800 font-semibold md:text-4xl ">
            {title} 
          </h1>
          <p className=" !mb-7 md:text-lg text-zinc-600 font-medium ">{para}</p>
         <Buttonmain text={btntext} href={"/"} />        
        </motion.div>
      
      </div>
    </div>
  );
}

