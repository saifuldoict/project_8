import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Installation = () => {
  const [installItems, setInstallItems] = useState([])
  const [sortOrder, setSortOrder] = useState('none')
  const [loading, setLoading] = useState(true)

  // 🔹 Load apps from localStorage
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem('Installation')) || []
      setInstallItems(savedList)
      setLoading(false)
    }, 800)
  }, [])

  // 🔹 Handle sorting change (show spinner briefly)
  const handleSortChange = (value) => {
    setSortOrder(value)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 700)
  }

  // ✅ Remove single app
  const removeItem = (id) => {
    const updatedList = installItems.filter((item) => item.id !== id)
    setInstallItems(updatedList)
    localStorage.setItem('Installation', JSON.stringify(updatedList))
  }

  // ✅ Sort items by size
  const sortedItems = () => {
    if (sortOrder === 'size-asc') {
      return [...installItems].sort((a, b) => a.size - b.size)
    } else if (sortOrder === 'size-desc') {
      return [...installItems].sort((a, b) => b.size - a.size)
    } else {
      return installItems
    }
  }

  const itemsToRender = sortedItems()

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <div className='max-w-[1200px] mx-auto px-4 mt-15 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold text-center pt-12'>Your Installed Apps</h1>
      <p className='text-center text-gray-400 mb-6'>
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* 🔹 Sort section */}
      <div className='flex justify-between items-center gap-10 p-6'>
        <h1 className='mb-5 font-bold pl-4'>{installItems.length} Apps Found</h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value='none'>Sort by Size</option>
            <option value='size-asc'>Small → Large</option>
            <option value='size-desc'>Large → Small</option>
          </select>
        </label>
      </div>

      {/* 🔹 Loading Spinner */}
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin'></div>
        </div>
      ) : (
        <motion.div
          className='space-y-4 px-4 pb-10'
          initial='hidden'
          animate='show'
        >
          <AnimatePresence>
            {itemsToRender.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.8 }}
                className='bg-white flex justify-between items-center p-4 rounded-lg shadow-sm hover:shadow-md transition'
              >
                <div className='flex gap-4 items-center'>
                  <span className='font-bold text-gray-500'>{index + 1}.</span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-10 h-10 rounded-lg object-cover'
                  />
                  <div>
                    <h2 className='text-lg font-semibold'>{item.title}</h2>
                    <div className='flex gap-3 text-gray-500 text-sm'>
                      <p>Downloads: {item.downloads}</p>
                      <p>⭐ {item.ratingAvg}</p>
                      <p>Size: {item.size}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className='btn bg-green-500 hover:bg-red-600 text-white'
                >
                  Uninstall
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}

export default Installation
