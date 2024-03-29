import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "./Mine/CollectionPage";
import Home from "./components/Home/Home";
import ProductPage from "./Mine/ProductPage";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CollectionPage" element={<CollectionPage />} />
          <Route path="/ProductPage/:categoryId" element={<ProductPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
