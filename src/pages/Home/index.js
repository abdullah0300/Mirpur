import React from "react";
import HeroSection from "../../components/Home/main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";
import BlogSection from "../../components/Home/blogs/BlogSection";
import Footer from "../../components/shared/Footer";
import ArticleSection from "../../components/Home/artictles/ArticleSection";
import ShopSection from "../../components/Home/shop/ShopSection";
import TestinomialSection from "../../components/Home/Testinomials/TestinomialSection";
import Modal from "../../components/Home/User/Modal";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BannerSection />
      <BestSellingSection />
      <Footer />
      <Modal />
    </>
  );
};

export default index;
