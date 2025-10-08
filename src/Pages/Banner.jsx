import React from 'react'
import hero from '../assets/hero.png'
import playStore from '../assets/playStore.jpg'
import appStore from '../assets/appStore.jpg'
const Banner = () => {
  return (
    <div>
        <div>
            <div className=' mb-2 mt-14 flex flex-col justify-center text-center mx-auto'>
                <h1 className='text-6xl font-bold'>We Build</h1>
                <h1 className='text-6xl font-bold'><span className='text-[#8e5eeb]'>Productive</span>Apps</h1>
                <p className='text-gray-400 mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center gap-5 mt-11'>
                    <button className='btn btn-outline outline-gray-200'><img src={playStore} className='w-6'/> Google Play</button>
                    <button className='btn btn-outline outline-gray-200'><img src={appStore} className='w-6'/>App Store</button>
                </div>
            </div>
            <img src={hero} className='mx-auto mt-11'/>
        </div>
    </div>
  )
}

export default Banner