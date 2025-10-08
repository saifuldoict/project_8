import React from 'react'
import { Link } from 'react-router'

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

        <p> {downloads}</p>
        <p>{ratingAvg}</p>
    
      </div>
    </div>
    </Link>
  )
}

export default ProductCard