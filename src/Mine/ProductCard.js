import React, { useState } from "react";

const ProductCard = ({ img, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3">
      <div className="sellingCard rounded relative">
        <img
          src={img}
          alt="img"
          className="object-cover rounded md:w-[15rem] w-[8rem] md:h-60 h-[8rem]"
          onClick={toggleModal}
        />
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="modalContainer relative  bg-white rounded-lg">
              <img
                src={img}
                alt="img"
                className="object-cover rounded-lg md:w-[30rem] w-[15rem] h-[15rem] md:h-[30rem]"
              />
              <button
                className="absolute top-2 right-2 btn-sm btn bg-white text-gray-700"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <h2 className="xl:text-xl text-base font-medium md:w-[15rem] w-[8rem] ">
        {title}
      </h2>
      <h2 className="text-[#6d6a6a] text-xs md:w-[15rem] w-[8rem]">
        {description}
      </h2> */}
    </div>
  );
};

export default ProductCard;
