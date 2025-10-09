import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import SkeletonLoader from '../Components/SkeletonLoader'
import { Link } from 'react-router'
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Apps = () => {
  const { loading, products } = useProducts()
  const [search, setSearch] = useState('')

  const term = search.trim().toLowerCase()

  const searchedProducts = term
    ? products.filter(product =>
        product.title.toLowerCase().includes(term)
      )
    : products

  return (
    <div className='max-w-[1200px] mx-auto px-4 pt-7'>
      <div className=' py-5 items-center text-center mx-auto'>
        <h1 className='text-3xl font-semibold  '>Our All Applications</h1>
        <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
        
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div>
          <div className='flex flex-col sm:flex-row justify-between py-5 items-center gap-3'>
            <h1 className='text-3xl font-bold pb-2 sm:pb-0 pl-10'>
              {' '}
              <span className='text-sm text-gray-500'>
                ({searchedProducts.length}) Apps Found
              </span>
            </h1>

            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type='search'
              placeholder='Search Apps...'
              className='input input-bordered w-full sm:w-72'
            />
          </div>

          {searchedProducts.length === 0 ? (
            <p className='flex flex-col text-center text-gray-500 py-10 text-3xl'>
              No apps found matching “{search}”.
              <Link
                className='max-w-[200px] mt-4 mx-auto btn btn-outline bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white'
                to='/'
              >
                Show All Apps
              </Link>
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
              {searchedProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/apps/${product.id}`}
                  className='card bg-base-100 border shadow-sm hover:scale-105 transition-transform ease-in-out'
                >
                  <figure className='h-48 overflow-hidden'>
                    <img
                      className='w-full h-full object-cover'
                      src={product.image}
                      alt={product.title}
                    />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>{product.title}</h2>
                    <div className='flex justify-start  mx-auto gap-2'>
                              <div className='flex items-center gap-1 bg-gray-300 rounded'>
                                <FaArrowDown className='text-green-500'/>
                                <p className='flex items-center gap-1 text-green-500 px-2 rounded bg-gray-300'> {product.downloads}</p>
                              </div>
                            <div className='flex items-center gap-1 bg-gray-300 px-2 rounded'>
                              <FaStar  className='text-yellow-400'/>
                              <p className='text-blue-900'> {product.ratingAvg}</p>
                            </div>
                            </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Apps
