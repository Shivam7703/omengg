import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { logoicon } from "@/assets";
function Bestchoice() {
  return (
    <section className="static-bg  md:py-16 sm:py-12 py-7 ">
      <div className="w-full text-center flex flex-col items-center gap-y-4 mb-9 md:mb-14">
        <div className="p-2 rounded-full border-2 border-color2 w-max">
          <Image
            src={logoicon}
            alt="OmEngineers Construction"
            height={200}
            width={200}
            className="h-12 w-12"
          />
        </div>
        <h4 className="text-color2 text-sm font-bold">Your Best Choice</h4>
      </div>
      <Marquee className="w-full h-full" speed={120} pauseOnHover={true}>
        <h2 className="text-7xl sm:!text-[135px] !font-thin text-white !uppercase">
          &nbsp;Creating &nbsp; Estates &nbsp; & &nbsp; Legacy &nbsp; ◉ &nbsp;
        </h2>
      </Marquee>
    </section>
  );
}

export default Bestchoice;
