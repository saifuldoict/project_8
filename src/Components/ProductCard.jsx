import React from 'react'
import { Link } from 'react-router'
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const ProductCard = ({ product }) => {
  const { title, image, ratingAvg, downloads,id } = product
  return (
    <Link to={`/apps/${id}`}>
      <div className='card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>

        <div className='flex justify-center  mx-auto gap-20'>
          <div className='flex items-center gap-1 bg-gray-300 px-2 rounded'>
            <FaArrowDown className='text-green-500'/>
            <p className='flex items-center gap-1 text-green-500 px-2 rounded bg-gray-300'> {downloads}</p>
          </div>
        <div className='flex items-center gap-1 bg-gray-300 px-2 rounded'>
          <FaStar  className='text-yellow-400'/>
          <p className='text-blue-900'> {ratingAvg}</p>
        </div>
        </div>
    
      </div>
    </div>
    </Link>
  )
}

export default ProductCard