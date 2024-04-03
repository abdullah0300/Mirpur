import React from "react";
import CollectionCard from "./CollectionCard";
import { Collections } from "../../../data/Collections";
import MainBtn from "../../shared/MainBtn";
import { Link } from "react-router-dom";
import Bangles from "../../../assets/images/collections/bangles.jpg";
const categories = [
  { name: 'Necklaces', id: 'necklaces', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0012.jpg?updatedAt=1712146106340' },
  { name: 'Bangles', id: 'bangles', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0017.jpg?updatedAt=1712003085929' },
  { name: 'Rings', id: 'rings', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0015.jpg?updatedAt=1712003083020' },
];
const CollectionSection = () => {
  return (
    <div className=" flex flex-col md:gap-4  my-10">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">

        <h3 className=" md:text-4xl text-2xl text-headingColor mb-2 capitalize">
          Our Collections
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className="flex md:justify-center md:gap-[2rem] gap-[1rem] mt-2 p-2">
        {categories.map((category, index) => (
          <Link to={`/ProductPage/${category.id}`}>

            <CollectionCard title={category.name} img={category.src}
            />
          </Link>

        ))}
      </div>
      <div className="mt-4 flex bg-white   justify-center items-center">
        <Link to='./CollectionPage'> <button className=' text-center bg-[#f8f9fa] px-[40px] md:px-[80px] md:py-[10px] py-[6px] text-black text-md md:text-xl hover:text-black hover:bg-grey transition-all duration-300 ease-in-out transform-gpu hover:scale-105 group'>
          <span className='transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]'>
            View All
          </span>
        </button></Link>
      </div>
    </div>
  );
};

export default CollectionSection;
