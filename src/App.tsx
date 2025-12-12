import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uslugi/:serviceSlug" element={<ServicePage />} />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
        <Route path="/diensten/:serviceSlug" element={<ServicePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
