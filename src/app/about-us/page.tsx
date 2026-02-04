import Bestchoice from '@/components/about/bestchoice'
import CEOMessage from '@/components/about/founder'
import Mission from '@/components/about/mission'
import Visionary from '@/components/about/visionary'
import WhyChoose2 from '@/components/about/whychoose2'
import Banner from '@/components/global/banner'
import CountDown from '@/components/global/Contdown'
import Testimonials from '@/components/global/testimonial'
import AboutSection from '@/components/home/AboutSection'
import { aboutBanner, aboutdata2, countDown } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>
<AboutSection/>
<Visionary/>
{/* <CountDown data={countDown}/> */}
{/* <Mission/> */}
{/* <CEOMessage/> */}
{/* <Bestchoice/> */}
<WhyChoose2/>
      <Testimonials/>

    </>
  )
}

export default page
