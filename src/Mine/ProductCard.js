import React from "react";

const ProductCard = ({ img, title, description }) => {
  return (
    <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className=" sellingCard rounded relative">
        <img src={img} alt="img" className="object-cover rounded md:w-[15rem] w-[8rem]  md:h-60" />
      </div>
      {/* <h2 className=" xl:text-xl text-base  font-medium md:w-[15rem] w-[8rem] ">
        {title}
      </h2>
      <h2 className=" text-[#6d6a6a] text-xs md:w-[15rem]	 w-[8rem]   ">
        {description}
      </h2> */}
    </div>
  );
};

export default ProductCard;