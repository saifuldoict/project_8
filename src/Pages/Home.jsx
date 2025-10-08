import React from 'react'
import useProducts from '../hooks/useProducts.js';
import Banner from './Banner.jsx';
import StatesSection from './StatesSection.jsx';

const Home = () => {
  const data = useProducts();
 
  return (
    <div>
      <Banner/>
      <StatesSection/>
    </div>
  )
}

export default Home