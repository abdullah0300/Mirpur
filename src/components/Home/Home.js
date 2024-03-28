import React from "react";
import HeroSection from "../../components/Home/main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";
import Footer from "../../components/shared/Footer";
import Modal from "../../components/Home/User/Modal";
import WhatsAppButton from "../../Whatsapp";
import LastBanner from "../../components/Home/Last Banner/LastBanner";
const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BannerSection />
      <BestSellingSection />
      <LastBanner />
      <WhatsAppButton />
      <Footer />
      <Modal />
    </>
  );
};

export default index;
