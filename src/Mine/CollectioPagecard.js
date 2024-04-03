import React from "react";
// import "./collectioncard.css";
const CollectionPagecard = ({ title, img }) => {
    return (
        <>
            <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3">
                <div className="sellingCard rounded relative">
                    <img
                        src={img}
                        alt="img"
                        className="object-cover rounded md:w-[15rem] w-[9rem] md:h-60 h-[10rem]"
                    />
                    <div className="md:px-6 md:py-4 text-center">
                        <h2 className="absolute md:bottom-3 bottom-[0rem]  left-0 md:right-0 right-[3rem] text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out ">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CollectionPagecard;
