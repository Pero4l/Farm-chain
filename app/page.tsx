'use client'
import Image from "next/image";
import HomePage from "./home/page";
import FarmChain from "./components/farmchain2";
import HeroPage from "./hero-section/page";
import FeaturePage from "./feature-section/page";


export default function Home() {
  return (
    <>
      <HeroPage/>
      <FeaturePage/>

      <HomePage/>

      {/* <FarmChain /> */}
    </>
  );
}

