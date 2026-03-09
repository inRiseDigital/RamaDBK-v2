import React from 'react'

export default function Overseas() {
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
              Overseas Remittance
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

        {/* Content Section */}
        <div className="space-y-3 max-w-8xl text-base md:text-lg leading-relaxed">
          <p className="text-[var(--color-crimson)] font-semibold">
            Dear Valued Customers!!
          </p>

          <p className="text-[var(--color-crimson)]">
            Please Check Carefully Our Homepage, Bank Details, And E-Mail Addresses From Invoices Before You Send Your Money.
          </p>

          <p className="text-[var(--color-crimson)]">
            Fake Homepages, E-Mails, And Bank Details Are Being Used To Tempt You By People Who Pretend To Be RamaDBK.
          </p>

          <p className="text-[var(--color-crimson)]">
            All Payments Should Be Paid To RamaDBK Ltd Accounts Only.
          </p>

          <p className="text-[var(--color-crimson)]">
            RamaDBK Ltd Will Not Be Liable For Any Payments Made To Any Accounts Not Listed On Our Website.
          </p>

          <p className="text-[var(--color-crimson)]">
            Kindly Be Noted That The Customer Payments & Transactions Are Allowed On Behalf Of The Authorized RamaDBK Invoice With The Official & Relevant Sales Representative Details Only.
          </p>

          <p className="text-[var(--color-crimson)]">
            The Company Will Not Bear Responsibility For Any Such Claims/Damages If Caused Due To Any Other Person Claiming.
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="mt-16 max-w-scree mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#b43636] to-[#470306] px-8 py-6 relative overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 flex-1">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Sumitomo Mitsui Banking Corporation</h2>
                    <div className="text-sm text-white/90 mt-1">Bank Account Information - [Bank-2]</div>
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
            <div className="divide-y divide-gray-100">
              {/* Account Name */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Account Name
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>RamaDBK LTD</span>
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Account Number
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>0200161</span>
                </div>
              </div>

              {/* Bank Name */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Bank Name
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>Sumitomo Mitsui Banking Corporation</span>
                </div>
              </div>

              {/* Bank Address */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Bank Address
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>8-26 Toyooka-Cho, Tsurumi-ku, Yokohama, Japan</span>
                </div>
              </div>

              {/* Branch Name */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Branch Name
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>Tsurumi Branch</span>
                </div>
              </div>

              {/* Branch Code */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Branch Code
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>572</span>
                </div>
              </div>

              {/* Bank Code */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Bank Code
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>0009</span>
                </div>
              </div>

              {/* Swift Code */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Swift Code
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>SMBCJPJT</span>
                </div>
              </div>

              {/* IBAN Number */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  IBAN Number
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>JP07 SMBC 0572 XXX 2 4020 0161</span>
                </div>
              </div>

              {/* Payment Purpose */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] px-8 py-5 hover:bg-gray-50 transition-all duration-300">
                <div className="text-gray-600 font-semibold text-sm flex items-center">
                  <span className="w-1 h-1 bg-[var(--color-blue-purple)] rounded-full mr-3"></span>
                  Payment Purpose
                </div>
                <div className="text-gray-800 font-medium flex items-center justify-between mt-2 md:mt-0">
                  <span>Payment for Motor Vehicle and/or Vehicle Parts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
