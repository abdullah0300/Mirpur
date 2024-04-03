import React from "react";
import carousel1 from "../../../assets/images/carousel/carousel-1.png";
import carousel2 from "../../../assets/images/carousel/carousel-2.png";
import MainBtn from "../../shared/MainBtn";

const HeroSection = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel md:mb-[3rem] mb-[1rem] slide "
      data-bs-ride="carousel"
    >

      <div className=" carousel-inner ">
        <div className="carousel-item active relative  ">
          <img src='https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-074238_002.jpeg?updatedAt=1711593823158' alt="Hero Image" width="1600" height="900" className="md:mt-[0rem] mt-[4rem]" />

    
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
