'use client'
import Image from "next/image";
import HomePage from "./home/page";
import FarmChain from "./components/farmchain2";
import HeroPage from "./hero-section/page";
import FeaturePage from "./feature-section/page";
import TestimonialPage from "./testimonials-section/page";
import PricingPage from "./pricing-section/page";


export default function Home() {
  return (
    <>
      <HeroPage/>
      <FeaturePage/>
      <TestimonialPage/>
      <PricingPage/>

      {/* <HomePage/> */}

      {/* <FarmChain /> */}
    </>
  );
}

