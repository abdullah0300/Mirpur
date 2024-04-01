import React from "react";

const SellingCard = ({ img, title }) => {
  return (
    <div className="mb-5 flex flex-col  gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className=" sellingCard rounded relative">
        <img src={img} alt=" img" className="rounded w-[15rem] h-60" />
        {/* <div className=" sellingCard-hover-div">
          <p className="w-full text-center text-sm font-semibold uppercase">Add To Cart</p>
        </div> */}
      </div>
      {/* <h2 className=" xl:text-xl text-base font-medium mx-auto text-left">
        {title}
      </h2> */}
      {/* <span className=" xl:text-base text-sm text-primaryColor">FROM</span> */}
    </div>
  );
};

export default SellingCard;
