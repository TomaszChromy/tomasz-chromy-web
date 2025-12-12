import React from "react";
import SEOHead from "../components/SEOHead";
import { Hero } from "../components/Hero";
import About from "../components/About";
import { ForWhom } from "../components/ForWhom";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      <About />
      <ForWhom />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;

