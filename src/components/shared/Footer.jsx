import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: "get in touch with us",
    sublinks: ["Phone: +44 133 2200205", " E-Mail: Support@mirpurjewellersderby.co.uk", "Address: 12 Pear Tree Road, Derby, United Kingdom"]
  },


]

const Footer = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [id, setId] = useState();
  const [links, setLinks] = useState();


  const handleOpen = (id) => {
    let newOpenDropDown = [];
    newOpenDropDown = isOpen.map((item, i) => {
      return item.id === id ? !isOpen[id - 1] : false;
    });
    setIsOpen(newOpenDropDown);
  }

  useEffect(() => {
    const show = data.filter((item) => item.id === id);
    console.log(show)
    setLinks(show[0]?.sublinks)

  }, [id])

  return (
    <>
      <div className=' flex flex-col gap-5 bg-[#F1F3F4] py-10 md:py-4'>

        {/* MOBILE */}

        <div className=' flex flex-col gap-5 md:hidden px-3'>

          <div className=' flex justify-start items-center gap-3 text-black'>
            <h3 className=' capitalize'>follow us:</h3>
            <div className=' flex gap-3'>
              <div className=' rounded-[50%] p-2 bg-white'>
                <a href='https://www.facebook.com/p/Mirpur-jewellers-100063830221549/'><FaFacebookF className='text-black' /></a>
              </div>

              <div className=' rounded-[50%] p-2 bg-white'>
                <a href='https://www.instagram.com/mirpur_jewellers_derby_?igsh=MXE2a2MxdzN6NGQ0OA=='>  <FaInstagram className='text-black' /></a>
              </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4'>

            {
              data.map((item, i) => (
                <>
                  <div className=' flex justify-between text-black'>
                    <p className=' capitalize text-[19px]'>{item.title}</p>
                    <FaPlus className=' text-2xl text-black'
                      onClick={() => {
                        setId(item.id)
                        handleOpen(item.id)
                      }} />
                  </div>
                  {isOpen && links && (item.id === id) && <div>
                    <ul className=' flex flex-col gap-2 text-black'>
                      {
                        links && links.map((item, i) => (
                          <li className=' text-sm'>{item}</li>
                        ))
                      }
                    </ul>
                  </div>}
                </>
              ))
            }

            <div className='  justify-between text-black'>
              <a href='/Contact'> <p className=' capitalize text-[19px] mt-2'>contact us</p></a>

            </div>

          </div>

        </div>


        {/* DESKTOP */}

        {/* first div */}
        <div className=' hidden md:flex gap-40 text-black pl-16 pt-10'>
          <div>
            <img src="https://ik.imagekit.io/mctozv7td/Mirpur%20Jewelers/logo.png?updatedAt=1711594580966" alt="" className='h-[5rem]' />
            <div className=' flex justify-start items-center gap-3 ml-[20px] mt-5'>
              <h3 className=' capitalize'>follow us:</h3>
              <div className=' flex gap-3'>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <a href='https://www.facebook.com/p/Mirpur-jewellers-100063830221549/'><FaFacebookF className='text-black' /></a>
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <a href='https://www.instagram.com/mirpur_jewellers_derby_?igsh=MXE2a2MxdzN6NGQ0OA=='>  <FaInstagram className='text-black' /></a>
                </div>

              </div>
            </div>
          </div>
          {/* 1st */}
          <div className=' flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-lg uppercase font-semibold'>get in  touch with us</h3>
                <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
              </div>
              <div className=' flex flex-col gap-3  text-black'>
                <p><strong>Phone:</strong> <a href="tel:+441332200205">+44 133 2200205</a></p>
                <p><strong>E-mail:</strong><a href="mailto:support@mirpurjewellersderby.co.uk"> support@mirpurjewellersderby.co.uk</a></p>
                <p><strong>Address:</strong> 12 Pear Tree Road, Derby, United Kingdom</p>

              </div>
            </div>

          </div>

          {/* 2nd */}
          <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>information</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-black'>
              <a href='./Contact'> <p>contact us</p></a>
              <Link to='./CollectionPage'><p>our collection</p></Link>
            </div>
          </div>

          {/* 3rd */}
          {/* <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>our resources</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-black'>
              <p>plan and pricing</p>
              <p>client business</p>
              <p>sales & purchase</p>
              <p>product quality</p>
            </div>
          </div> */}

        </div>

        {/* second div (same for both) */}
        <div className='flex flex-col gap-3 text-center '>
          <hr className=' w-full text-[#707070]' />
          <div className=' pl-10'>
            <h3 className=' capitalize text-lg text-black'>designed by <a href='https://www.webcraftio.com/'><span className='text-[#a8633b]'> WebCraftio</span></a></h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer