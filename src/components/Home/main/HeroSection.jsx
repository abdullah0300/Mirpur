import React from "react";
import carousel1 from "../../../assets/images/carousel/carousel-1.png";
import carousel2 from "../../../assets/images/carousel/carousel-2.png";
import MainBtn from "../../shared/MainBtn";

const HeroSection = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel mb-[3rem] slide "
      data-bs-ride="carousel"
    >

      <div className=" carousel-inner ">
        <div className="carousel-item active relative  ">
          <img src='https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-074238_002.jpeg?updatedAt=1711593823158' alt="Hero Image" width="1600" height="900" className="md:mt-[0rem] mt-[4rem]" />

          {/* <div className=" relative w-full flex flex-col gap-4 justify-center items-center text-white h-full text-center md:px-0 px-4">
            <h2 className=" md:text-5xl text-3xl font-medium leading-snug">
              Happiness comes in the boxof Jewellery
            </h2>
            <p className=" md:text-xl text-base font-extralight">
              Our full range of Asian ,Indian and Pakistani Bridal Jewellery
            </p>
            <MainBtn />
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
