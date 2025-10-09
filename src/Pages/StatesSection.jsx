import React from 'react'
import { LuDownload } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const StatesSection = () => {
  return (
    <div className='bg-gradient-to-r from-[#8e5eeb] to-[#877ad6] p-8'>
        <div className="max-w-[1200px] mx-auto px-4">
            <h1 className='text-5xl text-white font-bold flex justify-center text-center mx-auto'>Trusted by Millions, Built for You</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
             <div className='text-white justify-center text-center mx-auto p-4 flex gap-3'>
                <div>
                  <p className='text-sm m-3'>total Downloads</p>
                  <h1 className='font-bold text-6xl m-3'>29.6M</h1>
                  <p className='text-sm m-3'>21% More Than Last Month</p>
                </div>
                <LuDownload  className='mt-12 text-4xl'/>
            </div>
             <div className='text-white justify-center text-center mx-auto p-4 flex gap-3'>
                <div>
                    <p className='text-sm m-3'>Total Reviews</p>
                  <h1 className='font-bold text-6xl m-3'>906K</h1>
                  <p className='text-sm m-3'>46% more than last month</p>
                </div>
                <IoMdStar  className='mt-12 text-5xl'/>
            </div>
             <div className='text-white justify-center text-center mx-auto p-4 flex gap-3'>
                <div>
                    <p className='text-sm m-3'>Active Apps</p>
                    <h1 className='font-bold text-6xl m-3'>132+</h1>
                    <p className='text-sm m-3'>31 more will Launch</p>
                </div>
                <IoLogoGooglePlaystore  className='mt-12 text-4xl'/>
            </div>
           </div>
            

        </div>
    </div>
  )
}

export default StatesSection