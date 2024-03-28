import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "./Mine/CollectionPage";
import Home from "./components/Home/Home";
import ProductPage from "./Mine/ProductPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CollectionPage" element={<CollectionPage />} />
        <Route path="ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
