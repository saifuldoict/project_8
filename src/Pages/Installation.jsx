import React, { useEffect, useState } from 'react'

const Installation = () => {
  const [installItems, setInstallItems] = useState([])
  const [sortOrder, setSortOrder] = useState('none')

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('Installation')) || []
    setInstallItems(savedList)
  }, [])

  // ✅ Remove single app
  const removeItem = (id) => {
    const updatedList = installItems.filter(item => item.id !== id)
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

  return (
    <div className='max-w-[1200px] mx-auto px-4 mt-15 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold text-center pt-12'>Your Installed Apps</h1>
      <p className='text-center text-gray-400 mb-6'>
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* Sort section */}
      <div className='flex justify-between items-center gap-10 p-6'>
        <h1 className='mb-5 font-bold pl-4'>{installItems.length} Apps Found</h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by Size</option>
            <option value='size-asc'>Small → Large</option>
            <option value='size-desc'>Large → Small</option>
          </select>
        </label>
      </div>

      {/* Installed apps list */}
      <div className='space-y-4 px-4 pb-10'>
        {sortedItems().map((item, index) => (
          <div
            key={item.id}
            className='bg-white flex justify-between items-center p-4 rounded-lg shadow-sm hover:shadow-md transition'
          >
            <div className='flex gap-4 items-center'>
              <span className='font-bold text-gray-500'>{index + 1}.</span>
              <img
                src={item.image}
                alt={item.title}
                className='w-16 h-16 rounded-lg object-cover'
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Installation
