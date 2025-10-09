import React, { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { useParams } from 'react-router'
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

  if (loading) return <p className="text-center mt-20 text-lg font-medium">Loading...</p>

  const product = products.find(p => p.id === Number(id))
  if (!product) return <p className="text-center mt-20 text-lg font-medium">Product not found</p>

  const { image, title, ratings, downloads, reviews, description, companyName } = product

  // Prepare chart data (5★ on top)
  const chartData = [5, 4, 3, 2, 1].map(star => {
    const ratingObj = ratings.find(r => r.name.startsWith(star))
    return { star: `${star}★`, count: ratingObj ? ratingObj.count : 0 }
  })

  const handleInstall = () => {
    setInstalled(true)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)

    const existingList = JSON.parse(localStorage.getItem('Installation')) || []
    const alreadyInstalled = existingList.some(p => p.id === product.id)
    if (alreadyInstalled) return alert('Already installed!')

    localStorage.setItem('Installation', JSON.stringify([...existingList, product]))
  }

  return (
    <div className="relative">
      {/* ✅ Animated Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 animate-fadeInOut z-50">
          <div className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold">
            ✅ {title} installed successfully!
          </div>
        </div>
      )}

      {/* App Details */}
      <div className="card bg-base-100 border shadow-sm max-w-[1200px] mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-6 p-4">
          <figure className="w-full md:w-1/3 h-80 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image}
              alt={title}
            />
          </figure>

          <div className="card-body w-full md:w-2/3">
            <h2 className="card-title text-2xl font-semibold">{title}</h2>
            <p>Developed by: <span className="text-[#422AD5] font-bold">{companyName}</span></p>

            <hr className="my-3 border-[#422AD5]" />

            <div className="flex flex-wrap gap-6 mb-4">
              <StatItem icon={<LuDownload />} label="Downloads" value={downloads} />
              <StatItem icon={<IoMdStar />} label="Average Rating" value="4.8" />
              <StatItem icon={<MdReviews />} label="Total Reviews" value={reviews} />
            </div>

            <div className="card-actions justify-center">
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn px-6 ${
                  installed
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : 'bg-[#422AD5] text-white hover:bg-[#5c3cf3]'
                }`}
              >
                {installed ? 'Installed' : 'Install App'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8 border rounded-2xl shadow-2xl p-4">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="star"
                type="category"
                tick={{ fontSize: 14, fontWeight: 600 }}
                width={70}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#f97316"
                name="Ratings Count"
                barSize={30}
                label={{ position: 'right', fill: '#000', fontWeight: 600 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 text-start max-w-[1200px] mx-auto mt-8 rounded-2xl shadow-2xl border">
        <h1 className="text-3xl font-bold mb-2">Description</h1>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* ✅ Animation Style */}
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  )
}

const StatItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-4xl text-[#422AD5]">{icon}</div>
    <div>
      <h1 className="text-gray-500">{label}</h1>
      <p className="font-bold">{value}</p>
    </div>
  </div>
)

export default AppDetailPage
