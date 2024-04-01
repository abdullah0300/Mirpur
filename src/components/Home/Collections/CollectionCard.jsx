import React from "react";
import "./collectioncard.css";
const CollectionCard = ({ title, img }) => {
  return (
    <>
      <div className="max-w-xs mt-1 rounded overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img className="w-[30rem] object-cover h-[20rem]" src={img} alt="Sunset in the mountains" />
        <div className="md:px-6 md:py-4 text-center">
          <div className=" xl:text-xl text-base font-medium mb-2 p-1">{title}</div>
        </div>
      </div>


    </>
  );
};

export default CollectionCard;
