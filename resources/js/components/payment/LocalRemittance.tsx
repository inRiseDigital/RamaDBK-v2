import React from 'react'

export default function LocalRemittance() {
  return (
    <div className='relative min-h-screen bg-[var(--color-bg-dark)] text-white py-20 overflow-hidden'>
      <div
        className="absolute -top-[30%] -right-[10%] pointer-events-none"
        style={{
          width: '1253px',
          height: '1259px',
          borderRadius: '1259px',
          opacity: 0.2,
          background: 'linear-gradient(180deg, rgba(199, 135, 169, 0.50) 0%, rgba(255, 0, 4, 0.50) 100%)',
          filter: 'blur(247.0703125px)',
          flexShrink: 0,
        }}
      />
    
      <div className="container max-w-screen mx-auto px-8 lg:px-12 xl:px-25 py-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Local Remittance
            </h1>
          </div>
          <div>
            <img
              src="/ramalogo.jpg"
              alt="RamaDBK LTD - Japanese Car Exporter"
              className="w-48 h-auto"
            />
          </div>
        </div>
        {/* Table one  */}
        {/* Post Office Card */}
        <div className="mt-16 max-w-screen mx-auto mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#b43636] to-[#470306] px-8 py-6">
              <h2 className="text-2xl font-semibold text-white">Post Office</h2>
            </div>

            {/* Card Body */}
            <div className="bg-white">
              {/* Account Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  RamaDBK LTD. (ラマデービーケイ)
                </div>
              </div>

              {/* From Post Bank To Post Bank - Header */}
              <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800 border-b-2 border-gray-300">
                From Post Bank To Post Bank
              </div>

              {/* Code Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Code Number :
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  10920
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Number :
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  01915201
                </div>
              </div>

              {/* From Bank to Post Bank - Header */}
              <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800 border-b-2 border-gray-300">
                From Bank to Post Bank
              </div>

              {/* Branch Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Branch Number :
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  098
                </div>
              </div>

              {/* Account Type */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Type :
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  Ordinary
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Number :
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  0191520
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table two - Resona Bank */}
        <div className="mt-16 max-w-screen mx-auto mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#b43636] to-[#470306] px-8 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 flex-1">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Resona Bank Ltd.</h2>
                    <div className="text-sm text-white/90 mt-1">[Bank-1]</div>
                  </div>

                  {/* Resona Logo */}
                  <div className="px-6 py-4">
                    <img
                      src="/payment/resona.png"
                      alt="Resona Bank Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="bg-white/20 text-white border-2 border-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[var(--color-blue-purple)] transition-all duration-300"
                >
                  🖨️ Print
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className="bg-white">
              {/* Bank Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Bank Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  RESONA BANK LTD
                </div>
              </div>

              {/* Bank Address */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Bank Address
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  2-5-11, ISAGO KAWASAKI-KU, KAWASAKI-CITY, KANAGAWA PREFECTURE, JAPAN.<br />
                  ZIP CODE 210-0006
                </div>
              </div>

              {/* Branch Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Branch Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  KAWASAKI BRANCH
                </div>
              </div>

              {/* Account Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  RamaDBK LTD
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Number
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  1508547
                </div>
              </div>

              {/* Account Type */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Type
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  FUTSU (Savings Account)
                </div>
              </div>

              {/* Swift Code */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Swift Code
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  DIWAJPJT
                </div>
              </div>

              {/* Reason For Remittance */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Reason For Remittance
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  Payment for Motor Vehicle and/or Vehicle Parts
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table three - Sumitomo Mitsui Banking Corporation */}
        <div className="mt-16 max-w-screen mx-auto mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#b43636] to-[#470306] px-8 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 flex-1">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Sumitomo Mitsui Banking Corporation</h2>
                    <div className="text-sm text-white/90 mt-1">[Bank-2]</div>
                  </div>

                  {/* SMBC Logo */}
                  <div className="px-6 py-4">
                    <img
                      src="/payment/Smbc_logo.png"
                      alt="SMBC Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="bg-white/20 text-white border-2 border-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[var(--color-blue-purple)] transition-all duration-300"
                >
                  🖨️ Print
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className="bg-white">
              {/* Bank Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Bank Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  SUMITOMO MITSUI BANKING CORPORATION
                </div>
              </div>

              {/* Bank Address */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Bank Address
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  8-26 TOYOOKA-CHO, TSURUMI-KU, YOKOHAMA, JAPAN
                </div>
              </div>

              {/* Branch Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Branch Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  TSURUMI BRANCH
                </div>
              </div>

              {/* Account Name */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Name
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  RamaDBK LTD
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Account Number
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  9204826
                </div>
              </div>

              {/* Type of Account */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Type of Account
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  FUTSU (Savings Account)
                </div>
              </div>

              {/* Swift Code */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b-2 border-gray-300">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Swift Code
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  SMBCJPJT
                </div>
              </div>

              {/* Reason For Remittance */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
                <div className="bg-gray-200 px-6 py-4 font-semibold text-gray-800">
                  Reason For Remittance
                </div>
                <div className="bg-white px-6 py-4 text-gray-800">
                  Payment for Motor Vehicle and/or Vehicle Parts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
