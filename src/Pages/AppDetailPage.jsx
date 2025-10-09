import React, { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { Link, useParams } from 'react-router'
import useProducts from '../hooks/useProducts'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

const AppDetailPage = () => {
  const { id } = useParams()
  const { products, loading } = useProducts()
  const [installed, setInstalled] = useState(false)
  const [showToast, setShowToast] = useState(false)

  if (loading) return <p>Loading.......</p>

  const product = products.find(p => p.id === Number(id))
  if (!product) return <p>Product not found</p>

  const { image, title, ratings, downloads, reviews, description,companyName } = product || {}


  // Prepare chart data (5★ on top, horizontal bars)
  const chartData = [5, 4, 3, 2, 1].map(star => {
    const ratingObj = ratings.find(r => r.name.startsWith(star))
    return { star: `${star}★`, count: ratingObj ? ratingObj.count : 0 }
  })

  const handleInstall = () => {
    setInstalled(true)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000);

    const existingList = JSON.parse(localStorage.getItem('Installation'))
    let updatedList =[]
    if(existingList){
      const isDuplicate = existingList.some(p=>p.id===product.id)
      if(isDuplicate){
        return alert("Already added")
      }
     updatedList = [...existingList, product]
    } else{
      updatedList.push(product)
    }
     localStorage.setItem("Installation", JSON.stringify(updatedList))

  }

  return (
    <div className='relative'>
      {showToast && (
        <div className='toast toast-top toast-end'>
          <div className='alert alert-success'>
            <span>{title} installed successfully!</span>
          </div>
        </div>
      )}

      {/* App Details Card */}
      <div className='card bg-base-100 border shadow-sm max-w-[1200px] mx-auto px-4 mt-10'>
        <div className='flex flex-col md:flex-row gap-6 p-4'>
          <figure className='w-full md:w-1/3 h-80 overflow-hidden'>
            <img
              className='w-full h-full object-cover rounded-xl'
              src={image}
              alt={title}
            />
          </figure>

          <div className='card-body w-full md:w-2/3'>
            <h2 className='card-title text-2xl font-semibold'>{title}</h2>
            <p>Developed by: <span className='text-[#422AD5] font-bold '>{companyName}</span></p>
            <div className='space-y-1 mb-35'>
              <hr className='text-[#422AD5]'/>

                <div className='flex gap-6'>
                     <div className='flex justify-center gap-2 mb-4'>
                        <div className='mt-4'>
                          <h1 className='text-gray-500'>Downloads</h1>
                          <p className='font-bold'>{downloads}</p>
                        </div>
                        <LuDownload  className='mt-5 text-4xl text-[#422AD5]'/>
                    </div>
                    <div className='flex justify-center gap-2 mb-4'>
                          <div className='mt-4'>
                            <h1 className='text-gray-500'>Average Rating</h1>
                            <p className='font-bold'>{downloads}</p>
                          </div>
                          <IoMdStar  className='mt-5 text-4xl text-[#422AD5]'/>
                    </div>
                    <div className='flex justify-center gap-2 mb-4'>
                          <div className='mt-4'>
                            <h1 className='text-gray-500'>Total Review</h1>
                            <p className='font-bold'>{downloads}</p>
                          </div>
                          <MdReviews  className='mt-5 text-4xl text-[#422AD5]'/>
                    </div>
                </div>  
                <div className='card-actions justify-center '>
              {/* <Link to="/installation"> */}
                  <button 
                onClick={handleInstall}
                disabled={installed}
                className={`btn bg-green-400 text-white px-6 ${
                  installed ? 'btn-success cursor-not-allowed' : 'btn-outline'
                }`}
              >
                {installed ? 'Installed' : 'Install App'}
              </button>
              {/* </Link> */}
            </div>
            </div>

            

            
          </div>
        </div>
        
      </div>

      {/* Ratings Chart Below Card */}
      <div className='max-w-[1200px] mx-auto px-4 mt-8 border-1 border-gray-400 rounded-2xl shadow-2xl'>
        <h2 className='text-2xl font-semibold mb-4 text-start ml-30'>
          Ratings 
        </h2>
        <div className='w-full h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={chartData}
              layout='vertical'
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
            >
              <XAxis type='number' />
              <YAxis
                dataKey='star'
                type='category'
                tick={{ fontSize: 14, fontWeight: 600 }}
                width={70}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey='count'
                fill='#f97316'
                name='Ratings Count'
                barSize={30}
                label={{ position: 'right', fill: '#000', fontWeight: 600 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='border-1 p-4 text-center max-w-[1200px] mx-auto px-4 mt-8 rounded-2xl shadow-2xl'>
          <h1 className='text-3xl font-bold text-start'>Description</h1>
        {description}
      </div>
    </div>
  )
}

export default AppDetailPage
