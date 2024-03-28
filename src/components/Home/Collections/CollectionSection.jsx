import React from "react";
import CollectionCard from "./CollectionCard";
import { Collections } from "../../../data/Collections";
import MainBtn from "../../shared/MainBtn";
import { Link } from "react-router-dom";

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
        {Collections.slice(0, 3).map((item, i) => (
          <CollectionCard key={i} {...item} />
        ))}
      </div>
      <div className="mt-3 flex bg-white   justify-center items-center">
        <Link to='./CollectionPage'> <MainBtn /></Link>
      </div>
    </div>
  );
};

export default CollectionSection;
