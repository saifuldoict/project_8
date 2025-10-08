import React from 'react'
import useProducts from '../hooks/useProducts.js';
import Banner from './Banner.jsx';

const Home = () => {
  const data = useProducts();
 
  return (
    <div>
      <Banner/>
    </div>
  )
}

export default Home