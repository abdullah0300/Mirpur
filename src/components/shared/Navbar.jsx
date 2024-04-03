import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Bangles from "../../assets/images/collections/bangles.jpg";

const categories = [
  { name: 'Necklaces', id: 'necklaces', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/c37564f44c5a7bd589fe88a05fb6830c.jpg?updatedAt=1711595038162' },
  { name: 'Bangles', id: 'bangles', src: Bangles },
  { name: 'Rings', id: 'rings', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_005.jpeg?updatedAt=1711595532330' },
  { name: 'Chains/Braclets', id: 'chainsbracelets', src: 'https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/signal-2024-03-28-081020_004.jpeg?updatedAt=1711595534488' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <>
      {/* DESKTOP */}
      <header className="md:block hidden sticky top-0 bg-white z-50">
        <nav className="h-4/5 flex w-full px-8" style={{ background: "white" }}>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <ul
              className="w-full flex justify-between items-center py-[10px] xl:px-10 md:px-4"
              style={{
                borderTop: "1px solid #EDEDED",
                borderBottom: "1px solid #EDEDED",
              }}
            >
              <Link to="/">
                <img
                  src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/logo.png?updatedAt=1711594580966"
                  alt="logo"
                  className="h-[3rem]"
                />
              </Link>
              <div className="flex gap-5 mr-[16rem]">
                {categories.map((category, index) => (
                  <Link key={index} to={`/ProductPage/${category.id}`}>
                    <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                      {category.name}
                    </li>
                  </Link>
                ))}
                <a href='/Contact'>  <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                  Contact Us
                </li></a>
              </div>
              {/* <div className="search-div flex gap-2 md:flex">
                <div className="searchLogo">
                  <IoIosSearch />
                </div>
                <input
                  className="border-bottom outline-none"
                  placeholder="Search..."
                  type="text"
                />
              </div> */}
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE */}
      <header className="block md:hidden sticky top-0 bg-white z-50">
        <nav className="absolute z-50 w-full bg-white flex justify-between items-center px-4">
          <div
            className={` ${isMobileOpen ? "hidden" : "flex"
              } justify-between w-full py-3`}
          >
            <FiMenu
              className="text-3xl text-[#b1704b]"
              onClick={() => setIsMobileOpen(true)}
            />
            <Link to='/'><img
              src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/logo.png?updatedAt=1711594580966"
              className="w-[8rem] mr-[6rem]"
            /></Link>
            {/* <IoIosSearch className="text-3xl text-[#fdeab8]" /> */}
          </div>
          <div
            className={` ${isMobileOpen ? "flex" : "hidden"
              } flex-col w-full gap-3 py-3`}
          >
            <FiX
              className="text-3xl text-[#b1704b]"
              onClick={() => setIsMobileOpen(false)}
            />
            {categories.map((category, index) => (
              <Link key={index} to={`/ProductPage/${category.id}`}>
                <p className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu">
                  {category.name}
                </p>
              </Link>
            ))}
            <a href='/Contact'> <p className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu">
              Contact Us
            </p>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
