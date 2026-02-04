import React from "react";
import Image from "next/image";
import { banner, banner2, banner3 } from "@/assets";
import Buttonmain from "../global/button";
import { FiCalendar, FiUser } from "react-icons/fi";

export default function Blogs() {

  const data = {
    img2: banner,
    title1: "RECENT UPDATES",
    title2: "Explore The Latest News",
    blog: [
      { 
        img: banner, 
        heading: "Reviving Traditional Architecture With A Modern Twist", 
        text: "Cultural heritage is finding new life in contemporary designs. By incorporating traditional patterns, local craftsmanship, and indigenous materials into modern structures.", 
        date: "May 24, 2025",
        author: "Developer",
        featured: true
      },
      { 
        img: banner2, 
        heading: "Luxury Living Redefined Through Simplicity", 
        date: "June 13, 2025",
        author: "Developer"
      },
      { 
        img: banner3, 
        heading: "The Art Of Designing Timeless Spaces", 
        date: "May 30, 2025",
        author: "Developer"
      }, 
      { 
        img: banner2, 
        heading: "Wellness-Centered Homes For Better Living", 
        date: "May 28, 2025",
        author: "Developer"
      },
    ],
  };

  const featuredPost = data.blog.find(post => post.featured);
  const regularPosts = data.blog.filter(post => !post.featured);

  return (
    <section className="lg:px-28 md:px-20 sm:p-16 px-6 py-8 md:py-24 font1 bg-color1 mx-auto">
      
      {/* Header Section */}
      <div className="mb-12">
        {/* Marquee Badge */}
        <div className="max-w-fit overflow-hidden px-6 py-2.5 rounded-full border-2  mb-6">
          <h4 className="animate-marquee-right text-color2 text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            {data.title1}
          </h4>
        </div>

        {/* Main Heading */}
        <h2 className="text-black font-bold text-3xl md:text-5xl">
          {data.title2}
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        
        {/* Featured Post - Left Side */}
        {featuredPost && (
          <div className="w-full lg:w-[48%] bg-white p-6 rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full h-52 md:h-[300px] rounded-2xl overflow-hidden ">
              <Image
                src={featuredPost.img}
                alt={featuredPost.heading}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="pt-8">
              {/* Date and Author */}
              <div className="flex items-center gap-4 mb-4 text-sm text-color2">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-black font-bold text-xl md:text-2xl mb-4">
                {featuredPost.heading}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {featuredPost.text}
              </p>
            </div>
          </div>
        )}

        {/* Regular Posts - Right Side */}
        <div className="w-full lg:w-[52%] flex flex-col gap-6 ">
          {regularPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 lg:p-4 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="relative w-full sm:w-52 h-48 sm:h-auto rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={post.img}
                  alt={post.heading}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center flex-1">
                {/* Date and Author */}
                <div className="flex items-center gap-4 mb-3 text-xs md:text-sm text-color2">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUser className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-black font-normal text-xl md:text-2xl">
                  {post.heading}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}