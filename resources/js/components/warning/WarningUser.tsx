import React, { useState, useEffect } from 'react'

export default function WarningUser() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    // Set timer to show again after 5 minutes (300000 milliseconds)
    setTimeout(() => {
      setIsVisible(true)
    }, 20000)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="max-w-80 md:max-w-lg lg:max-w-lg xl:max-w-2xl mx-auto p-2 bg-white/20 backdrop-blur-md border-2 border-yellow-300 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        {/* Achievement Icon */}
        <div className="flex-shrink-0">
          <img src="/warning.png" width="24" height="24" alt="Achievement Icon" />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] text-yellow-300">
            Dear valued customers! All payments should be paid to RamaDBK Ltd accounts only, as stated in our <a href="#" target='blank' className="underline text-blue-500">web-page</a>.
            RamaDBK Ltd will not be liable for any payments made to any accounts not listed in our website.
          </p>
        </div>

        {/* Close Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleClose}
            className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
            aria-label="Close warning"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}