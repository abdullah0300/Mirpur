import React from "react";
import banner1 from "../../../assets/images/banner/banner-1.png";
import SecondaryBtn from "../../shared/SecondaryBtn";
import "./banner.css";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[500px] mt-[5rem]">
      <div className="md:ml-[12rem] absolute md:w-[45%] w-full md:h-[500px] h-[440px] bg-[#D4BAA3] flex flex-col md:justify-center justify-end gap-2 px-14 text-white md:mt-5 mt-16 md:pb-0 pb-12">
        {/* <span className=" text-[#CD885F] xl:text-xl md:text-lg text-sm">
          Stunning Jewels
        </span> */}
        <h3 className="xl:text-6xl text-black md:text-5xl text-2xl royal" >About us</h3>
        <p className=" text-[#636161] xl:text-lg md:text-base text-xs md:w-[96%] md:mb-0 mb-4">
          At Mirpur Jewellers Derby, we celebrate the fusion of tradition and craftsmanship, offering a captivating array
          of timeless jewellery pieces. From stunning necklaces to intricately crafted earrings and bangles, each creation
          is a testament to our dedication to excellence and sophistication.<span className="hidden"> Discover the perfect blend of tradition
            and modernity wi  th Mirpur Jewellers Derby,
            where every piece is imbued with beauty, grace, and unparalleled craftsmanship.</span>
        </p>
        <Link to='./CollectionPage'><button className=' text-center w-[8rem] bg-[#f8f9fa] px-[20px] py-[10px] text-black text-xl hover:text-[#fff] hover:bg-white transition-all duration-300 ease-in-out transform-gpu hover:scale-105 group'>
          <span className='transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]'>
            View All
          </span>
        </button></Link>
      </div>
      <div className=" md:w-1/2  w-[20rem] md:mr-10 md:h-[600px] md:-mt-[5rem] md:h-66 h-[15rem] md:right-0 justify-center  right-[15%] bannerImg flex transition-transform duration-300 ease-in-out transform hover:scale-105">
        <video autoPlay muted loop >
          <source src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/WhatsApp%20Video%202024-03-22%20at%2018.50.10_89636daf.mp4?updatedAt=1711120396635" type="video/mp4" className="" />
          Your browser does not support the video tag.
        </video>      </div>
    </section>
  );
};

export default BannerSection;
