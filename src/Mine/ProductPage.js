import React from "react";
import SellingCard from "../components/Home/BestSellings/SellingCard";
import { bestSelling } from "../data/BestSelling";
import { useParams } from 'react-router-dom';
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Bangles from "../assets/images/collections/bangles.jpg";
import Earrings from "../assets/images/collections/earings.jpg";


const products = {
    bridal: [
        { name: 'New Bridal', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', price: '$100' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', price: '$120' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', price: '$90' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', price: '$150' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', price: '$80' }
    ],
    necklaces: [
        { name: 'Necklace', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', price: '$50' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', price: '$70' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', price: '$60' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', price: '$90' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', price: '$120' }
    ],
    bangles: [
        { name: 'Bangles', src: Bangles, price: '$40' },
        { name: 'Product 2', src: Bangles, price: '$55' },
        { name: 'Product 3', src: Bangles, price: '$45' },
        { name: 'Product 4', src: Bangles, price: '$65' },
        { name: 'Product 5', src: Bangles, price: '$80' }
    ],
    earings: [
        { name: 'Earrings ', src: Earrings, price: '$25' },
        { name: 'Product 2', src: Earrings, price: '$30' },
        { name: 'Product 3', src: Earrings, price: '$35' },
        { name: 'Product 4', src: Earrings, price: '$40' },
        { name: 'Product 5', src: Earrings, price: '$45' }
    ]
};
const ProductPage = () => {
    const { categoryId } = useParams();
    const productList = products[categoryId];
    return (
        <>
            <Navbar />
            <div className=" flex flex-col text-left  gap-8 md:px-[60px] px-[16px] md:my-10">
                {/* HEADINGS SECTION */}
                <div className=" flex flex-col gap-1 text-left ">

                    <h3 className="capitalize md:text-4xl text-2xl text-headingColor md:mt-[0rem] mt-[5rem]   text-left">
                        {categoryId}
                    </h3>
                </div>

                {/* CARDS SECTION */}
                <div className="  w-full md:justify-center     ">
                    <div className="md:grid md:grid-cols-4  gap-[0rem] grid  grid-cols-2  md:gap-2">

                        {productList.map((product, index) => (
                            <SellingCard key={index} title={product.name} img={product.src} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
