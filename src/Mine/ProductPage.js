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
    necklaces: [
        { name: 'Necklace ', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0014.jpg?updatedAt=1712146106981', description: 'description' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0013.jpg?updatedAt=1712146106550', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0012.jpg?updatedAt=1712146106340', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0011.jpg?updatedAt=1712146104497', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0010.jpg?updatedAt=1712146103821', description: 'description' },
        { name: 'Necklace ', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0005.jpg?updatedAt=1712146103635', description: 'description' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0009.jpg?updatedAt=1712146103736', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0008.jpg?updatedAt=1712146103590', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0006.jpg?updatedAt=1712146103731', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0007.jpg?updatedAt=1712146103586', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0004.jpg?updatedAt=1712146102996', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/IMG-20240403-WA0003.jpg?updatedAt=1712146102917', description: 'description' },

    ],
    bangles: [
        { name: 'Bangles  ', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0028.jpg?updatedAt=1712003090570', description: 'description' },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0027.jpg?updatedAt=1712003090494', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0031.jpg?updatedAt=1712003090474', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0030.jpg?updatedAt=1712003090418', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0024.jpg?updatedAt=1712003087576', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0025.jpg?updatedAt=1712003087595', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0022.jpg?updatedAt=1712003087066', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0026.jpg?updatedAt=1712003086221', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0023.jpg?updatedAt=1712003086100', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0017.jpg?updatedAt=1712003085929', description: 'description' }



    ],
    rings: [
        {
            name: 'RITUAL NECKLACE', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0021.jpg?updatedAt=1712003086044', description: 'Unleash your inner magic with the Ritual Necklace by Mirpur Jewellers Derby. This quirky piece will add a touch of playfulness to any outfit.'
        },
        { name: 'Product 2', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0020.jpg?updatedAt=1712003086326', description: 'description' },
        { name: 'Product 3', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0019.jpg?updatedAt=1712003085908', description: 'description' },
        { name: 'Product 4', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0013.jpg?updatedAt=1712003083025', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0009.jpg?updatedAt=1712003083028', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0010.jpg?updatedAt=1712003082961', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0015.jpg?updatedAt=1712003083020', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0014.jpg?updatedAt=1712003082960', description: 'description' },
        { name: 'Product 5', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0011.jpg?updatedAt=1712003082838', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0008.jpg?updatedAt=1712003082905', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0007.jpg?updatedAt=1712003082852', description: 'description' },
        { name: 'Product 7', src: 'https://ik.imagekit.io/mctozv7td/meena/IMG-20240401-WA0012.jpg?updatedAt=1712003082828', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240416-WA0008.jpg?updatedAt=1713274428382', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240416-WA0007.jpg?updatedAt=1713274428430', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240416-WA0009.jpg?updatedAt=1713274428427', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240416-WA0010.jpg?updatedAt=1713274428423', description: 'description' },
        { name: 'Product 6', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240416-WA0006.jpg?updatedAt=1713274428422', description: 'description' },

    ],
    chains_bracelets: [
        { name: 'chainsbracelets ', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/WhatsApp%20Image%202024-04-03%20at%2016.41.46_33e72fe3.jpg?updatedAt=1712146106870', description: 'description' },
        { name: 'chainsbracelets 2', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/WhatsApp%20Image%202024-04-03%20at%2016.41.47_6312142d.jpg?updatedAt=1712146106850', description: 'description' },
        { name: 'chainsbracelets 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240517-WA0011.jpg?updatedAt=1715895998177', description: 'description' },
        { name: 'chainsbracelets 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240517-WA0009.jpg?updatedAt=1715895998156', description: 'description' },
        { name: 'chainsbracelets 3', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/IMG-20240517-WA0014.jpg?updatedAt=1715895998036', description: 'description' },


    ]
};
const ProductPage = () => {
    const { categoryId } = useParams();
    const productList = products[categoryId];
    const categoryDescriptions = {
        necklaces: "Our Gold necklaces are stunning pieces of jewellery that adorn the neckline with timeless elegance and sophistication. Crafted from luxurious gold, they come in a myriad of styles, from delicate chains to elaborate pendant designs. Their radiant shine and smooth texture create a captivating allure, making them a versatile accessory suitable for any occasion. Whether worn as a standalone statement piece or layered with other necklaces for a trendy look, gold necklaces effortlessly elevate any ensemble.",
        bangles: "Gold bangles are exquisite pieces of jewellery that adorn the wrists with timeless beauty and elegance. Crafted from 22 and 24 carat gold, they come in a variety of designs, from simple, sleek styles to intricately detailed patterns. Their smooth, polished surfaces catch the light, creating a captivating shimmer with every movement. Gold bangles are versatile accessories that can be worn alone for a touch of sophistication or stacked with other bangles for a bold, glamorous look.",
        rings: "Our gold rings are timeless pieces of jewellery that exude elegance and sophistication. Crafted from precious metal,  our rings come in various styles, from classic bands to intricate designs adorned with gemstones. Their lustrous shine and enduring quality make them cherished symbols of love, commitment, and style. Whether worn as engagement rings, wedding bands, or fashion accessories, gold rings are versatile pieces that add a touch of luxury to any ensemble. ",
        chainsbracelets: "Whether worn individually as standalone accessories or layered together for a trendy look, gold bracelets and chains add a touch of luxury to any outfit. They effortlessly elevate both casual and formal ensembles, making them versatile pieces in any jewellery collection. With their radiant shine and enduring quality, gold bracelets and chains are cherished accessories that symbolize elegance and style."
    };
    const categoryDescription = categoryDescriptions[categoryId];
    const categoryImages = {
        necklaces: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/2.png?updatedAt=1712147754153', // Add your necklaces category image source here
        bangles: 'https://ik.imagekit.io/mctozv7td/meena/Beige%20Aesthetic%20Handmade%20Accessories%20Etsy%20Shop%20Cover.png?updatedAt=1712005371073', // Add your bangles category image source here
        rings: 'https://ik.imagekit.io/mctozv7td/meena/2.png?updatedAt=1712005592248', // Add your bridal category image source here
        chains_bracelets: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/meenapic/1.png?updatedAt=1712147754105' // Add your earrings category image source here
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
                        <a href="https://wa.me/+447445313937?text=Hello%20there!" target="_blank">
                            <div className="mb-5 flex flex-col gap-2 text-left md:w-full w-60 xl:px-4 md:px-3 px-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                <div className=" sellingCard rounded relative">
                                    <img className="object-cover rounded md:w-[15rem] w-[8rem]  md:h-60 h-[8rem]" src='https://ik.imagekit.io/mctozv7td/meena/More%20(4).png?updatedAt=1712006779491' alt="Sunset in the mountains" />
                                </div>
                                <div className="md:px-6 md:py-4 text-center">
                                    <h2 className="absolute bottom-0 md:left-[7rem] left-[4rem] right-0 text-center xl:text-3xl md:text-2xl tracking-wide md:pb-[3rem] pb-[1rem] text-white transition-all duration-300 ease-in-out ">
                                        <img className="md:h-[3rem] h-[2rem] animate-bounce" src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/arrow-right%20(1).png?updatedAt=1711850321170"></img>
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
