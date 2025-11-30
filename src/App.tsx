import React from "react";
import Layout from "./components/Layout";

import { Hero } from "./components/Hero";
import About from "./components/About";
import { ForWhom } from "./components/ForWhom";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
