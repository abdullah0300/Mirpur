import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "./Mine/CollectionPage";
import Home from "./components/Home/Home";
import ProductPage from "./Mine/ProductPage";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Mine/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={<Home />}
         
          />
          <Route
            path="Contact"
            element={<Contact />}
            title="Contact Us - Mirpur Jewellers Derby"
            description="Contact Mirpur Jewellers Derby for inquiries, appointments, and more. We're here to assist you with any questions regarding our exquisite jewellery collection."
          />
          <Route
            path="CollectionPage"
            element={<CollectionPage />}
            title="Collections - Mirpur Jewellers Derby"
            description="Explore our diverse collections at Mirpur Jewellers Derby, featuring stunning necklaces, earrings, bangles, and more. Discover elegance and sophistication in every piece."
          />
          <Route
            path="/ProductPage/:categoryId"
            element={<ProductPage />}
            title="Product Page - Mirpur Jewellers Derby"
            description="Browse through our exquisite jewellery collection on the product page at Mirpur Jewellers Derby. Find the perfect necklace, earring, or bangle to elevate your style."
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
