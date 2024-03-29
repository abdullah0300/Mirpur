import React from "react";
import CollectionCard from "./CollectionCard";
import { Collections } from "../../../data/Collections";
import MainBtn from "../../shared/MainBtn";
import { Link } from "react-router-dom";
import Bangles from "../../../assets/images/collections/bangles.jpg";
const categories = [
  { name: 'Bridal', id: 'bridal', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_005.jpeg?updatedAt=1711595532330' },
  { name: 'Necklaces', id: 'necklaces', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/c37564f44c5a7bd589fe88a05fb6830c.jpg?updatedAt=1711595038162' },
  { name: 'Earings', id: 'earings', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_004.jpeg?updatedAt=1711595534488' },
];
const CollectionSection = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 my-10">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">

        <h3 className=" md:text-4xl text-1xl text-headingColor capitalize">
          Our Collections
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className="flex md:justify-center md:gap-[2rem] gap-[1rem] p-2">
        {categories.map((category, index) => (
          <Link to={`/ProductPage/${category.id}`}>

            <CollectionCard title={category.name} img={category.src}
            />
          </Link>
          
        ))}
      </div>
      <div className="mt-3 flex bg-white   justify-center items-center">
        <Link to='./CollectionPage'> <MainBtn /></Link>
      </div>
    </div>
  );
};

export default CollectionSection;
