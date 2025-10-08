import React from 'react'
import useProducts from '../hooks/useProducts.js';

const Home = () => {
  const data = useProducts();
 
  return (
    <div>Home</div>
  )
}

export default Home