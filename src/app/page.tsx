import AboutSection from "@/components/home/AboutSection";
import { aboutdata, howwork, ourService } from "@/data/homeData";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/global/Contdown";
import BannerSlider from "@/components/home/HomeBanner";
import ServiceSlider from "@/components/home/services";
import Testimonials from "@/components/global/testimonial";
import { countDown } from "@/data/homeData";
import Craft from "@/components/home/crafting";
import HowweWork from "@/components/home/workprocess";
import WhyChoose from "@/components/home/whychoose";
import Project from "@/components/home/projects";
import Homeoxes from "@/components/home/boxes";
import WorkProcess from "@/components/home/workprocess";
import Latest from "@/components/home/latest";

export default function Home() {
  return (
    <>
      <BannerSlider/>
      <Homeoxes/>
      <AboutSection/>
      <ServiceSlider/>
      <WorkProcess/>
      <WhyChoose/>
      <Latest/>
      <Project/>
      <Blogs/>
      
      {/* <CountDown data={countDown}/> */}
      {/* <Craft/> */}
      {/* <HowweWork aboutdata={howwork}/> */}
      {/* <ServiceSlider  data={ourService}/> */}
      {/* <WhyChoose/> */}
      {/* <Testimonials/> */}
      {/* <Project/> */}

      {/* <Blogs/> */}
    </>
  );
}
