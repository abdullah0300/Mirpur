import React from "react";

const ProductCard = ({ img, title, description }) => {
  return (
    <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className=" sellingCard relative">
        <img src={img} alt="img" className=" md:w-[15rem] w-[8rem]  md:h-60" />
        {/* <div className=" sellingCard-hover-div">
          <p className="w-full text-center text-sm font-semibold uppercase">Add To Cart</p>
        </div> */}
      </div>
      <h2 className=" xl:text-xl text-base  font-medium  ">
        {title}
      </h2>
      <h2 className=" xl:text-xl text-base  font-medium  ">
        {description}
      </h2>
      {/* <span className=" xl:text-base text-sm text-primaryColor">FROM</span> */}
    </div>
  );
};

export default ProductCard;