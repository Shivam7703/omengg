import React from "react";
import Image from "next/image";
import Gallery from "../project/gallery";

function Servicemain({ title, para, imgss }: any) {
  return (
    <section className="space-y-8 text-zinc-700">
      {/* Title Section */}
      <div className="space-y-3">
        <h2 className="text-black text-4xl font-semibold leading-tight md:text-6xl max-w-3xl">
          {title}
        </h2>

        {/* Gradient underline */}
        <span className="block h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-transparent" />

      </div>

      {/* Image Card */}
        <div className="max-w-7xl mx-auto">
            <Gallery imgs={imgss} />
          </div>
        {/* Overlay */}

      {/* Description */}
      <p className="max-w-3xl sm:text-xl font1 leading-relaxed text-zinc-800">
        {para}
      </p>
    </section>
  );
}

export default Servicemain;
