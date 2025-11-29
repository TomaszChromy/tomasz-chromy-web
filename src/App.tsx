import React from "react";
import Layout from "./components/Layout";

import { Hero } from "./components/Hero";
import { ForWhom } from "./components/ForWhom";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <ForWhom />
      <Services />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default App;
