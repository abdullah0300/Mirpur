import React from 'react'

const MainBtn = () => {
    return (
        <>
            <button className=' text-center bg-[#f8f9fa] px-[80px] py-[10px] text-black text-xl hover:text-black hover:bg-grey transition-all duration-300 ease-in-out transform-gpu hover:scale-105 group'>
                <span className='transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]'>
                    View All
                </span>
            </button>
        </>
    )
}

export default MainBtn