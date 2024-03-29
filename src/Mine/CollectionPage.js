import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import CollectioPagecard from "./CollectioPagecard";
import Bangles from "../assets/images/collections/bangles.jpg";
import Earrings from "../assets/images/collections/earings.jpg";
import { Link } from "react-router-dom";

const categories = [
    { name: 'Bridal', id: 'bridal', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_005.jpeg?updatedAt=1711595532330' },
    { name: 'Necklaces', id: 'necklaces', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/c37564f44c5a7bd589fe88a05fb6830c.jpg?updatedAt=1711595038162' },
    { name: 'Earings', id: 'earings', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_004.jpeg?updatedAt=1711595534488' },
    { name: 'Bangles', id: 'bangles', src: Bangles },
];

const CollectionPage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mb-[3rem]">
                <div className="md:h-[1rem] h-[5rem]"></div><h3 className="xl:text-3xl text-black md:text-3xl text-2xl royal md:text-center  text-left md:mt-2">Royal Collection</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-5 mt-4 justify-center">
                    {categories.map((category, index) => (

                        <Link to={`/ProductPage/${category.id}`}>
                            <CollectioPagecard title={category.name} img={category.src} />
                        </Link>

                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CollectionPage;
