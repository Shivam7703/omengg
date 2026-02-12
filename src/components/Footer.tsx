"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiWhatsappFill } from "react-icons/ri";
import { logo2 as logo, logo as logo2 } from "@/assets";
import Buttonmain from "./global/button";

export default function Footer({ footer }: any) {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        className="w-max fixed bottom-8 z-50 right-3 rounded-full bg-white"
        href="#"
      >
        <RiWhatsappFill className="text-5xl text-green-600" />
      </a>

      {/* Book Site Visit Button */}
      <div
        style={{
          padding: "7px 10px 23px",
          transform: "rotate(-90deg)",
          right: "10px",
          top: "35vh",
          zIndex: 40,
          width: "200px",
          transformOrigin: "right center",
        }}
        className="cursor-pointer rounded-lg  text-white hover:bg-black fixed text-center bg-color2 font-medium text-lg"
        onClick={toggleForm}
      >
        Book A Site Visit
      </div>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed top-0 left-0 z-[230] font1 flex flex-col items-center justify-center bg-black/70"
          style={{ width: "100vw", height: "104vh" }}
        >
          <div
            className="text-white mb-2 cursor-pointer border-2 border-white rounded-full px-3 py-1"
            onClick={toggleForm}
          >
            ✕
          </div>
          <form
            className="bg-zinc-100 p-7 rounded-lg shadow-lg w-[90vw] max-w-[600px]"
            action={"/contact.php"}
            method="POST"
          >
            <div className="flex items-center justify-between mb-5">
              <Image
                src={logo2}
                alt="OmEngineers"
                width={150}
                height={80}
                className="mr-3 w-[25vw] max-w-[150px]"
              />
              <h2 className="text-xl sm:text-2xl text-color2 font-bold w-max">
                Book A Site Visit
              </h2>
            </div>

            <div className="w-full flex flex-wrap gap-y-3 justify-between">
              <input
                type="text"
                required
                name="name"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Name"
              />
              <input
                type="email"
                required
                name="email"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Email"
              />
              <input
                type="number"
                required
                name="phone"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Contact No."
              />
              <textarea
                rows={3}
                name="message"
                className="w-full shadow-lg p-3 rounded-md bg-white text-zinc-700 text-base"
                placeholder="Your Query"
              ></textarea>
              <button
                type="submit"
                className="bg-color2 hover:bg-black transition duration-300 text-white font-bold py-3 px-6 rounded-lg mt-2"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer Section */}
      <footer className="md:px-20 sm:p-16 sm:pb-8 p-6 w-full z-20 text-white footer-bg relative">
        <div className="flex flex-wrap p-5 pb-3 mb-4 md:mb-12 border-b border-white gap-4 sm:py-9 justify-between w-full max-w-[1380px] mx-auto items-center">
        <div className="md:w-[45%] w-full">    <h2 className=" font-semibold text-3xl md:text-5xl">
Register our newsletter, And stay in touch
        </h2>
</div>

<div  className="md:w-[45%] w-full">
        <div className="relative w-full mb-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full  rounded-full bg-transparent
                   border border-white/50
                   pl-6 py-4 pr-[190px] text-white placeholder-white/70
                   focus:outline-none focus:border-white
                   transition"
          />

          <button
            type="button"
            className="absolute top-1/2 right-1 -translate-y-1/2
                   py-4 px-8 rounded-full bg-white
                   text-color2 font-medium text-sm
                   transition hover:bg-color2 hover:text-white duration-200"
          >
            Subscribe Now
          </button>
        </div>
        </div>

        </div>
        <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 gap-8 lg:grid-cols-12">
          {/* Logo and About */}
          <div className="col-span-3 md:px-5 pb-4">
            <Image
              src={logo}
              alt="logo"
              className="w-full max-w-[80vw] object-contain"
              width={150}
              height={50}
            />
            <p className="w-full text-base mt-3 text-white">{footer?.text}</p>
<div className="scale-[0.9] -ml-4 mt-8">
          <Buttonmain text={"Request consultation"} href={"/contact-us"} />        
</div>
          </div>

          {/* Link Sections */}
          {[footer?.list1, footer?.list2].map((list, idx) => (
            <div key={idx} className="col-span-3 md:px-5 flex flex-col gap-y-3">
              <h5 className="my-2 text-base md:text-xl capitalize font1 pb-2 font-semibold">
                {list?.title}
              </h5>
              <ul className="space-y-2 md:space-y-4">
                {list?.links?.map((d: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={`/${d?.href?.replace(/^\/+/, "")}`}
                      className="text-base text-white hover:text-color2 duration-300"
                    >
                      - {d?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-3 md:px-5 flex flex-col space-y-3">
            <h5 className="my-2 text-base md:text-xl capitalize font1 pb-2 font-semibold">
              Contact Us
            </h5>
            <p className="text-base text-white">
              <strong>Phone: </strong>{" "}
              <a href="tel:+919667622285">+91 9667622285</a>
            </p>
            <p className="text-base text-white">
              <strong>E-mail: </strong>{" "}
              <a href="mailto:info@OmEngineers.construction">
                info@OmEngineers.construction
              </a>
            </p>
            <p className="text-base text-white capitalize leading-relaxed">
              <strong>Address: </strong>
              <a href="https://www.google.com/maps/place/OmEngineers/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
                2nd Floor, M Block Market, Greater Kailash 2, M 32, W Block Rd,
                New Delhi, Delhi 110048
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex border-t max-sm:mt-4 border-white sm:pt-9 pt-5 text-center">
          <p className="w-max mx-auto text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-color2 transition-all font-semibold cursor-pointer">
              <a href="https://skywarddigitalsolutions.com">
                Skyward Digital Solutions
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
