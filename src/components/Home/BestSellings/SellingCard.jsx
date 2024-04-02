import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";

const SellingCard = ({ img, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3">
      <div className="sellingCard rounded relative" onClick={toggleModal}>
        <img src={img} alt="img" className="rounded w-[15rem] h-60" />
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={toggleModal}
        >
          <ReactImageZoom
            image={{
              src: img,
              alt: title,
              className: "rounded-lg",
            }}
            zoomImage={{
              src: img,
              alt: title,
            }}
          />
        </div>
      )}
      {/* <h2 className="xl:text-xl text-base font-medium mx-auto text-left">
        {title}
      </h2> */}
      {/* <span className="xl:text-base text-sm text-primaryColor">FROM</span> */}
    </div>
  );
};

export default SellingCard;
