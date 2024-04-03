import React from "react";
import banner1 from "../../../assets/images/banner/banner-1.png";
import SecondaryBtn from "../../shared/SecondaryBtn";
import "./banner.css";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[500px] md:mt-[6rem] mt-[11rem]">
      <div className="md:ml-[12rem] absolute md:w-[45%] w-full md:h-[500px] h-[440px] bg-[#D4BAA3] flex flex-col md:justify-center justify-end gap-2 px-14 text-white md:mt-5 mt-16 md:pb-0 pb-12">
        {/* <span className=" text-[#CD885F] xl:text-xl md:text-lg text-sm">
          Stunning Jewels
        </span> */}
        <h3 className="xl:text-6xl text-black md:text-5xl text-2xl royal" >About us</h3>
        <p className=" text-[#636161] xl:text-lg md:text-base text-xs md:w-[96%] md:mb-0 mb-4">
          Mirpur Jewellers, a longstanding cornerstone in Derby's vibrant community, has been illuminating lives for over three decades with its exquisite array of jewellery. Renowned for our unparalleled expertise and impeccable service, we pride ourselves on offering the widest range of 22ct jewellery, catering to every occasion and taste, from opulent bridal sets to elegant daily accessories. Our commitment to diversity extends to our extensive collection of silver jewellery, boasting the largest selection in the region. From sophisticated men's silver jewellery to enchanting women's silver rings, anklets, and bracelets, each piece reflects timeless elegance and unparalleled craftsmanship. At Mirpur Jewellers, we don't just sell jewellery; we curate unforgettable experiences, marking life's precious moments with enduring beauty and grace.<span className="hidden"> Discover the perfect blend of tradition
            and modernity wi  th Mirpur Jewellers Derby,
            where every piece is imbued with beauty, grace, and unparalleled craftsmanship.</span>
        </p>

      </div>
      <div className=" md:w-1/2  w-[20rem] md:mr-10 md:h-[600px] md:-mt-[5rem] -mt-[9rem] md:h-66 h-[15rem] md:right-0 justify-center  right-[15%] bannerImg flex transition-transform duration-300 ease-in-out transform hover:scale-105">
        <video autoPlay muted loop >
          <source src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/WhatsApp%20Video%202024-03-22%20at%2018.50.10_89636daf.mp4?updatedAt=1711120396635" type="video/mp4" className="" />
          Your browser does not support the video tag.
        </video>      </div>
    </section>
  );
};

export default BannerSection;
