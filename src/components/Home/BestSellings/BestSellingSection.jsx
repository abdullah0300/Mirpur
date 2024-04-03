import React from "react";
import SellingCard from "./SellingCard";
import { bestSelling } from "../../../data/BestSelling";
import { Link } from "react-router-dom";
import MainBtn from "../../shared/MainBtn";

const BestSellingSection = () => {
  return (
    <>
      <div className=" flex flex-col text-left  md:mt-[3rem] gap-8 md:px-[60px] px-[16px] my-10">
        {/* HEADINGS SECTION */}
        <div className=" flex flex-col gap-1 text-left">

          <h3 className="md:text-4xl text-2xl text-[#b1704b] mb-2  md:mt-5  text-left">
            We can create your imagination

          </h3>
          <p>Bring your imagination today into our store, and we will help you bring that to life in the most beautiful form you can think of. We have many years of experience in crafting custom designs for our customers.</p>
        </div>

        {/* CARDS SECTION */}
        <div className=" flex w-full md:justify-center justify-start overflow-x-auto whitespace-nowrap scrollbarHide   ">
          <div className="md:grid md:grid-cols-4  gap-[0rem]   grid-cols-4 flex md:gap-2">

            {bestSelling.map((item, i) => (
              <SellingCard key={i} {...item} />
            ))}
          </div>
        </div>
        <div className=" flex bg-white   justify-center items-center">
          <Link to='./CollectionPage'>
            <button className=' text-center bg-[#eff3f7] px-[40px] md:px-[80px] md:py-[10px] py-[6px] text-black text-md md:text-xl hover:text-black hover:bg-grey transition-all duration-300 ease-in-out transform-gpu hover:scale-105 group'>
              <span className='transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]'>
                View All
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
