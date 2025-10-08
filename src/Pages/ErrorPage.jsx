import React from 'react'
import { Link, useRouteError } from 'react-router'
import image from '../assets/image.png'
import Navbar from '../Components/Navbar'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div >
        <Navbar/>
        <Link to='/'>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <img src={image} alt='error' className='flex justify-center items-center mx-auto'/>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops, page not found!</h1>
      <p className="text-lg mb-2 text-gray-300">The page you are looking for is not available..</p>
      <div className='flex justify-center gap-6'>
        <p className="text-white mb-6 btn bg-[#422AD5] ">
        {error?.statusText || error?.message || "Go Back!"}
      </p>
      <p className=" mb-6 btn text-[#422AD5]">
       Browse Apps
      </p>
      </div>
      </div>
      </Link>  
    </div>
    
  )
}

export default ErrorPage
