import React from 'react'
import useProducts from '../hooks/useProducts.js';
import Banner from './Banner.jsx';
import StatesSection from './StatesSection.jsx';
import SkeletonLoader from '../Components/SkeletonLoader'
import ProductCard from '../Components/ProductCard'
import { Link } from 'react-router'
const Home = () => {
  const { loading, error, products } = useProducts();
  const featuredProducts = products.slice(0, 6)
 console.log(products)
  return (
    <div >
      <Banner/>
      <StatesSection/>

      <div className='max-w-[1200px] mx-auto px-4'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>Top Apps Section</h1>
        
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
         <div className='p-3 flex justify-center mx-auto '>
              <Link className='btn btn-outline bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white' to='/Apps'>
              Show All
            </Link>
         </div>
    </div>
      
    </div>
  )
}

export default Home