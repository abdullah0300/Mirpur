import React from "react";
// import "./collectioncard.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Collections } from "../data/Collections";
import CollectioPagecard from "./CollectioPagecard";
const CollectionPage = ({ title, img }) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mb-4">
                <h3 className="xl:text-3xl text-black md:text-3xl text-2xl royal text-center  md:mt-4">Royal Collection</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 justify-center">
                    {Collections.map((item, i) => (
                        <CollectioPagecard key={i} {...item} />
                    ))}
                </div>
            </div>
            <Footer />


        </>
    );
};

export default CollectionPage;
