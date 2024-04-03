import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import CollectioPagecard from "./CollectioPagecard";
import Bangles from "../assets/images/collections/bangles.jpg";
import Earrings from "../assets/images/collections/earings.jpg";
import { Link } from "react-router-dom";

const categories = [
    { name: 'Necklaces', id: 'necklaces', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0012.jpg?updatedAt=1712146106340' },
    { name: 'Bangles', id: 'bangles', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240401-WA0027.jpg?updatedAt=1712146099763' },
    { name: 'Rings', id: 'rings', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240401-WA0019.jpg?updatedAt=1712146097595' },
    { name: 'Chains/Braclets', id: 'chainsbracelets', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/WhatsApp%20Image%202024-04-03%20at%2016.41.47_6312142d.jpg?updatedAt=1712146106850' },
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
