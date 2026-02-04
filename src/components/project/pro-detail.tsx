import React from "react";
import Gallery from "./gallery";
import Projectslider from "./Projectslider";
import Proform from "./Proform";
function Projectdetail({ data }: any) {
  return (
    <>
      <div className="lg:px-28 md:p-20 sm:p-16 p-7">
        <h1 className=" font-medium text-3xl sm:text-6xl">
          {data?.title}
        </h1>
       
        <div className="flex flex-wrap gap-4 justify-between max-w-3xl my-6">
          {data?.detail?.map((card: any, index: number) => (
            <div className="" key={index}>
              <h4 className="text-zinc-600 text-xs sm:text-sm">
                {card?.heading}
              </h4>
              <h5 className="text-zinc-950 text-base sm:text-lg ">
                {card?.info}
              </h5>
            </div>
          ))}
        </div>
        <Gallery />
        <div className="max-w-7xl space-y-4">
          <h2 className=" font-medium text-3xl sm:text-4xl">
            Description
          </h2>
          {data?.para?.map((paragraph: string, index: number) => (
            <p className="text-zinc-600" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Projectslider /> 
      <Proform />
    </>
  );
}
export default Projectdetail;
