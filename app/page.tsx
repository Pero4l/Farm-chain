'use client'
import FarmChain from "./components/farmchain2";
import HeroPage from "./hero-section/page";
import FeaturePage from "./feature-section/page";
import TestimonialPage from "./testimonials-section/page";
import PricingPage from "./pricing-section/page";
import CtaPage from "./cta-section/page";


export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden">
      <HeroPage/>
      <FeaturePage/>
      <TestimonialPage/>
      <PricingPage/>
      <CtaPage/>


      {/* <FarmChain /> */}


       <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      </div>
    </>
  );
}

