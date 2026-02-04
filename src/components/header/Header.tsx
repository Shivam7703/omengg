"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu} from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { BiSolidPhoneCall } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { MdAttachEmail,  } from "react-icons/md";
import { FaClockRotateLeft,  FaLocationDot } from "react-icons/fa6";
import { social } from "@/data/homeData";
import Buttonmain from "../global/button";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Split the pathname and get the last part
    const lastSegment = pathname?.split("/").filter(Boolean).pop();

    let path = `/${lastSegment || "home"}`;
    // Store the last word (segment) in the state
    setActiveItem(path);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="h-32 md:h-36 w-full bg-color1"></div>
      <header
        className={`fixed top-0 left-0 w-screen z-50 transition-all font1 duration-300 
        ${isVisible ? "translate-y-0 bg-color1" : "-translate-y-full bg-white"}`}
      ><div className="bg-black text-white p-3 flex justify-between font2 items-center lg:px-20">
          <div className="flex md:gap-4 text-sm">
           
            <a
              className="flex items-center  hover:scale-105 duration-300"
              href="mailto:info@omengg.com"
            >
              <MdAttachEmail className=" text-lg mr-2" />
             <p className="max-lg:hidden">info@omengg.com</p> 
            </a>
            <div className="h-6 w-[1px] bg-white/60"></div>
            <a
              className="flex items-center  hover:scale-105 duration-300"
              href="https://maps.app.goo.gl/EXvkuirmkyZ6pW5x7" target="_blank" rel="noopener noreferrer"
            >
              <FaLocationDot className=" text-lg mr-2" />
             <p className="max-lg:hidden">201-A Elegant House 
28-A Kipawa ,india
</p> 
            </a>
          </div>


           <div className="flex md:gap-4 text-sm">
            <a
              className="flex items-center  hover:scale-105 duration-300"
              href="mailto:info@omengg.com"
            >
              <FaClockRotateLeft className=" text-lg mr-2" />
             <p className="max-lg:hidden">Hours: Mon-Fri: 9.00 am - 6.00 pm</p> 
            </a>
            <div className="h-6 w-[1px] bg-white/60"></div>
            <div
              className="flex items-center gap-x-6"
            >
             {social?.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300 text-xl hover:text-color2">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:py-7  items-center justify-between  h-24  px-5 py-3 lg:px-20">
          <Link href={header?.href || "/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-[25vw] max-w-40 my-2 object-contain "
            />
          </Link>
          <Menu
            navItemsArray={navItems}
            activeItemId={activeItem}
            onTop={isAtTop}
            onItemClick={handleNavItemClick}
          />
          <RightSide onTop={isAtTop} />
        </div>

        {/* Mobile Section */}
        <div
          className={`flex md:hidden w-screen items-center  justify-between h-20 px-3 bg-color1`}
        >
          <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
            <Link href={header?.href || "/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[110px] object-contain"
              />
            </Link>
            {isMobileMenuOpen ? (
              <VscChromeClose
                onClick={handleMobileMenu}
                className="text-black"
              />
            ) : (
              <IoMenu onClick={handleMobileMenu} className="text-black" />
            )}
          </div>
          {/* <RightSide /> */}
        </div>

        {/* Mobile Menu */}

        <div
          className={`fixed h-screen left-0 top-20  md:hidden bg-white overflow-x-hidden duration-300 transition-all ${isMobileMenuOpen ? "!w-[88%]" : "!w-0"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

function RightSide(onTop: any) {
  return (
    <div className="flex gap-6">

<a href={"/"} className="w-max">
  <div className="flex gap-2 group relative text-zinc-800 hover:text-color2 items-center flex-row h-full">
                   <BiSolidPhoneCall className=" text-5xl p-3 group-hover:bg-zinc-800 text-white bg-color2 duration-200 rounded-full" />
                              <p className="text-lg">+91 1234566770</p>
                 </div>
</a>


<Buttonmain text={"get a quote"} href={"tel:+911234566770"} />        
</div>
  );
}
