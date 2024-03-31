import React from "react";
import ProductCard from "./ProductCard";
import { bestSelling } from "../data/BestSelling";
import { useParams } from 'react-router-dom';
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Bangles from "../assets/images/collections/bangles.jpg";
import Earrings from "../assets/images/collections/earings.jpg";
import { Link } from "react-router-dom";

const products = {
    bridal: [
        {
            name: 'RITUAL NECKLACE', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', description: 'Unleash your inner magic with the Ritual Necklace by Mirpur Jewellers Derby. This quirky piece will add a touch of playfulness to any outfit.'
        },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/3e362f715486bfb73a4ada8ce90ca733.jpg?updatedAt=1711595037890', description: 'description' },
    ],
    necklaces: [
        { name: 'Necklace ', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', description: 'description' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/4bd4b6d1b929fcddd6d87bede153a14f.jpg?updatedAt=1711595038133', description: 'description' }

    ],
    bangles: [
        { name: 'Bangles  ', src: Bangles, description: 'description' },
        { name: 'Product 2', src: Bangles, description: 'description' },
        { name: 'Product 3', src: Bangles, description: 'description' },
        { name: 'Product 4', src: Bangles, description: 'description' },
        { name: 'Product 5', src: Bangles, description: 'description' }

    ],
    earings: [
        { name: 'Earrings ', src: Earrings, description: 'description' },
        { name: 'Product 2', src: Earrings, description: 'description' },
        { name: 'Product 3', src: Earrings, description: 'description' },
        { name: 'Product 4', src: Earrings, description: 'description' },
        { name: 'Product 5', src: Earrings, description: 'description' }

    ]
};
const ProductPage = () => {
    const { categoryId } = useParams();
    const productList = products[categoryId];
    const categoryDescriptions = {
        bridal: "Welcome to Mirpur Jewellers Derby, where timeless elegance meets modern sophistication in our exquisite bridal jewelry collection. From dazzling diamond sets to intricately crafted gold and pearl designs, each piece is meticulously curated to enhance the beauty of every bride on her special day. ",
        necklaces: "Elevate your elegance with our exquisite necklaces, curated with finesse, only at Mirpur Jewellers Derby. Adorn yourself with timeless beauty and sophistication.",
        bangles: "Indulge in the allure of tradition and modernity with our stunning bangles, meticulously crafted to grace your wrists. Explore the epitome of craftsmanship at Mirpur Jewellers Derby.",
        earings: "Elevate your style with our stunning earrings, designed to captivate hearts and turn heads. Explore the epitome of elegance and craftsmanship at Mirpur Jewellers Derby."
    };
    const categoryDescription = categoryDescriptions[categoryId];
    const categoryImages = {
        bridal: 'https://ik.imagekit.io/mctozv7td/meena/1.jpg?updatedAt=1711471154752', // Add your bridal category image source here
        necklaces: 'https://ik.imagekit.io/mctozv7td/meena/2.jpg?updatedAt=1711471154963', // Add your necklaces category image source here
        bangles: 'https://ik.imagekit.io/mctozv7td/meena/2.jpg?updatedAt=1711471154963', // Add your bangles category image source here
        earings: 'https://ik.imagekit.io/mctozv7td/meena/2.jpg?updatedAt=1711471154963' // Add your earrings category image source here
    };
    const categoryImage = categoryImages[categoryId];

    return (
        <>
            <Navbar />
            <div className=" flex flex-col text-left  gap-8 md:px-[60px] px-[16px] md:my-0">
                <span className="md:h-[1rem] h-[2rem]"></span>
                <img src={categoryImage} alt={categoryId} width="1600" height="900" />


                <h3 className="capitalize md:text-4xl text-2xl text-center text-[#b1704b]     ">
                    {categoryId}
                </h3>
                {/* HEADINGS SECTION */}
                <div className=" flex flex-col gap-1 mb-3 text-left ">

                    <div className="text-left">
                        <h3 className=" md:text-lg text-sm text-headingColor  text-center">{categoryDescription}</h3>
                    </div>
                </div>

                {/* CARDS SECTION */}
                <div className="  w-full md:justify-center justify-center   ">
                    <div className="md:grid md:grid-cols-4  gap-[0rem] grid  grid-cols-2  md:gap-2">

                        {productList.map((product, index) => (
                            <ProductCard key={index} title={product.name} img={product.src} description={product.description} />
                        ))
                        }
                        <a href="/Contact" >
                            <div className="max-w-xs md:h-[15rem] mb-5 md:w-[20rem] w-10rem flex mt-1 rounded overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                                <img className="w-[10rem] md:w-[20rem]" src='https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/More%20(1).png?updatedAt=1711750339410' alt="Sunset in the mountains" />
                                <div className="md:px-6 md:py-4 text-center">
                                    <h2 className="absolute bottom-0 md:left-[8rem] left-[4rem] right-0 text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out ">
                                        <img className="md:h-[3rem] h-[2rem] animate-bounce" src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/arrow-right.png?updatedAt=1711839207217"></img>
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
