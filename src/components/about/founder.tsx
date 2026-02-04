"use client";

import React from "react";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { BsAward } from "react-icons/bs";
import { ceo } from "@/assets";

export default function CEOMessage() {
  return (
    <section className="md:p-20 sm:p-12 p-7 bg-gradient-to-b from-white via-zinc-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-color2/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-color2/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-color2/10 px-6 py-2 rounded-full mb-4">
            <IoRocketSharp className="text-color2 text-xl" />
            <span className="text-color2 text-sm font-bold uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-black mb-3">
            Message from Founder
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Leading with vision, building with excellence
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* CEO Image Section */}
            <div className="lg:col-span-2 relative">
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                {/* Replace with actual CEO image */}
                <Image
                  src={ceo} // Replace with actual image path
                  alt="CEO"
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* CEO Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <BsAward className="text-color2 text-3xl" />
                    <div className="h-12 w-1 bg-color2"></div>
                    <div>
                      <h3 className="text-2xl font-bold">Sandeep Soni </h3>
                      <p className="text-zinc-200 text-sm">
                        Founder, OmEngineers
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="bg-white/20 backdrop-blur-md hover:bg-color2 p-3 rounded-full transition-all duration-300 border border-white/30"
                    >
                      <FaLinkedin className="text-white text-lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/OmEngineers.contracts?igsh=MXh6Y2Q5dWJ6c3pzOA=="
                      className="bg-white/20 backdrop-blur-md hover:bg-color2 p-3 rounded-full transition-all duration-300 border border-white/30"
                    >
                      <FaInstagram className="text-white text-lg" />
                    </a>
                    <a
                      href="mailto:info@OmEngineers.construction"
                      className="bg-white/20 backdrop-blur-md hover:bg-color2 p-3 rounded-full transition-all duration-300 border border-white/30"
                    >
                      <HiOutlineMail className="text-white text-lg" />
                    </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 bg-color2 p-4 rounded-2xl shadow-lg">
                  <FaQuoteLeft className="text-white text-3xl" />
                </div>
              </div>
            </div>

            {/* Message Content Section */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="mb-6">
                <FaQuoteLeft className="text-color2/20 text-6xl" />
              </div>

              {/* Message */}
              <div className="space-y-6 text-zinc-700 leading-relaxed">
                <p className="text-lg md:text-xl font-medium text-black">
                  Welcome to a legacy built on trust, experience, and
                  transformation.
                </p>

                <p>
                  With nearly three decades of distinguished experience in the
                  real estate and construction industry, Mr. Sandeep Soni,
                  Founder of OmEngineers, stands among the foremost developers
                  of South Delhi. Over the course of his career, he has
                  successfully delivered nearly 200 construction sites,
                  encompassing collaborative developments, outright projects,
                  and comprehensive turnkey executions.
                </p>

                <p>
                  His work has been instrumental in shaping South Delhi’s prime
                  residential character, complemented by select commercial
                  developments and turnkey projects across Delhi NCR. Each site
                  reflects a deep understanding of location, scale, and
                  longevity, attributes that have positioned OmEngineers as a
                  trusted and enduring name within the region’s most discerning
                  circles.
                </p>

                <p>
                  Mr. Soni’s leadership is defined by precision, discretion, and
                  an unwavering commitment to quality. His approach emphasises
                  enduring value over immediacy, resulting in developments that
                  remain relevant, resilient, and respected over time.
                </p>

                <div className="pt-6 border-t-2 border-color2/20 mt-8">
                  <p className="font-semibold text-black italic">
                    "Under his stewardship, OmEngineers continues to advance
                    with a clear and purposeful vision, constructing estates and
                    legacy, and contributing meaningfully to the architectural
                    and urban fabric of the capital."
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-color2 to-transparent"></div>
                  <div>
                    <p className="font-bold text-2xl text-black font2">
                      Sandeep Soni
                    </p>
                    <p className="text-sm text-zinc-500 uppercase tracking-wide">
                      Founder, OmEngineers
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-color2 mb-1">30+</p>
                  <p className="text-sm text-zinc-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-color2 mb-1">150+</p>
                  <p className="text-sm text-zinc-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-color2 mb-1">98%</p>
                  <p className="text-sm text-zinc-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
