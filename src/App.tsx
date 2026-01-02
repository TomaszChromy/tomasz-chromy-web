import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages for code-splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
    <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uslugi/:serviceSlug" element={<ServicePage />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/diensten/:serviceSlug" element={<ServicePage />} />
          {/* Blog list pages */}
          <Route path="/wiedza" element={<BlogPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/kennis" element={<BlogPage />} />
          {/* Blog article pages */}
          <Route path="/blog/:articleSlug" element={<ArticlePage />} />
          <Route path="/wiedza/:articleSlug" element={<ArticlePage />} />
          <Route path="/kennis/:articleSlug" element={<ArticlePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
