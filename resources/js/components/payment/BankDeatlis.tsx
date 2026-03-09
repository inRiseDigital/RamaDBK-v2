import { Link } from '@inertiajs/react';

export default function BankDeatlis() {
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
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-[var(--color-crimson)]">Bank Details</span>
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
        <div className="space-y-5 max-w-8xl text-base md:text-xl leading-relaxed">
          <p>
            For Your Convenience, RamaDBK Offers Different Types Of Accounts From Major Banks In Japan.
          </p>

          <p>
            If You Would Like To Make A Transfer From Overseas, Please Check The Bank Details Under "Overseas Remittance" And Select Either A US Dollar Account Or A Japanese Yen Account.
          </p>

          <p>
            If You Would Like To Make The Remittance Within Japan (In Japanese Yen) Please Check The Details Under "Local Remittance" And Select Either The Post Office Account Or A Bank Account.
          </p>

          <p>
            To Take A Print Out Of Our Bank Details With You When Making The Remittance, Please Click On The "Print" Link Available At The Upper Right Corner Of Each Bank Account And Print The PDF File That Appears.
          </p>
        </div>

        {/* Overseas Remittance Cards Section */}
        <div className="flex items-center justify-center lg:grid-cols-2 gap-8 mt-10">
          {/* First Card */}
          <div className="relative">
            <Link href='/overseas-remittance'>
              <img
                src="/payment/OVERSEASE.png"
                alt="Overseas Remittance"
                className="w-150 h-auto rounded-2xl cursor-pointer"
              />
            </Link>
          </div>

          {/* Second Card */}
          <div className="relative">
            <Link href='/local-remittance'>
            <img
              src="/payment/LOCAL.png"
              alt="Local Remittance"
              className="w-150 h-auto rounded-2xl cursor-pointer"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
