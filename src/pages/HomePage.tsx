import React, { Suspense, lazy } from "react";
import SEOHead from "../components/SEOHead";
import { Hero } from "../components/Hero";

// Lazy load sections below the fold for better LCP
const About = lazy(() => import("../components/About"));
const ForWhom = lazy(() => import("../components/ForWhom").then(m => ({ default: m.ForWhom })));
const Services = lazy(() => import("../components/Services"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Process = lazy(() => import("../components/Process"));
const Pricing = lazy(() => import("../components/Pricing"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const FAQ = lazy(() => import("../components/FAQ"));
const Newsletter = lazy(() => import("../components/Newsletter"));
const Blog = lazy(() => import("../components/Blog"));
const Contact = lazy(() => import("../components/Contact"));

// Minimal skeleton for sections
const SectionSkeleton = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ForWhom />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default HomePage;

