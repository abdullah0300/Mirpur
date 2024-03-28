import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "./CollectionPage";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CollectionPage" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
