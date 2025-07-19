import React from 'react'

export const Article = () => {
  return (
    <>
      {/* coming soon page add */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
          <p className="text-lg text-gray-600">This article is under construction. Stay tuned for updates!</p>
          <img src="/path/to/your/image.jpg" alt="Coming Soon" className="mt-6 w-64 h-64 object-cover rounded-full" />
          <p className="text-sm text-gray-500 mt-4">Thank you for your patience!</p>
        </div>
      </div>
    </>
  )
}
