import React from "react";
// import "./collectioncard.css";
const CollectionPagecard = ({ title, img }) => {
    return (
        <>
            <div className="max-w-xs flex mt-1 rounded overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img className="w-[30rem]" src={img} alt="Sunset in the mountains" />
                <div className="md:px-6 md:py-4 text-center">
                    <h2 className="absolute bottom-0 left-0 right-0 text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out ">
                        {title}
                    </h2>
                </div>
            </div>


        </>
    );
};

export default CollectionPagecard;
