import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

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
              <Link to='/'><img
                src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/logo.png?updatedAt=1711594580966"
                alt="logo"
                className="h-[3rem]"
              /></Link>

              <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                <Link to="/ProductPage">Bridal Sets</Link>
              </li>
              <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                <Link to="/category/earings">Earings</Link>
              </li>
              <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                <Link to="/category/necklace-sets">Necklace Sets</Link>
              </li>
              <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                <Link to="/category/bangles">Bangles</Link>
              </li>
              <li className="xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks">
                <Link to="/Contact">Contact Us</Link>
              </li>

              <div className="search-div flex gap-2 md:flex">
                <div className="searchLogo">
                  <IoIosSearch />
                </div>
                <input
                  className="border-bottom outline-none"
                  placeholder="Search..."
                  type="text"
                />
              </div>
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
              className="text-3xl text-[#fdeab8]"
              onClick={() => setIsMobileOpen(true)}
            />
            <Link to='/'><img
              src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/logo.png?updatedAt=1711594580966"
              className="w-[8rem]"
            /></Link>
            <IoIosSearch className="text-3xl text-[#fdeab8]" />
          </div>
          <div
            className={` ${isMobileOpen ? "flex" : "hidden"
              } flex-col w-full gap-3 py-3`}
          >
            <FiX
              className="text-3xl text-[#fdeab8]"
              onClick={() => setIsMobileOpen(false)}
            />
            <Link to="/category/bridal-sets">Bridal Sets</Link>
            <Link to="/category/earings">Earings</Link>
            <Link to="/category/necklace-sets">Necklace Sets</Link>
            <Link to="/category/bangles">Bangles</Link>
            <Link to="/Contact">Contact Us</Link>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
