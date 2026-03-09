const WATERMARK_STYLE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  opacity: 0.06,
  pointerEvents: 'none',
  zIndex: 0,
  overflow: 'hidden',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Cg transform='rotate(-45 150 60)'%3E%3Ctext x='10' y='70' font-family='Roboto Flex,sans-serif' font-size='60' font-weight='900'%3E%3Ctspan fill='%23dc2626'%3ERama%3C/tspan%3E%3Ctspan fill='%23000'%3EDBK%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
};

export function SalesGuarantee() {
  return (
    <div className="w-full font-['Roboto_Flex',sans-serif] relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Watermark pattern - SVG background instead of 4500 DOM elements */}
      <div style={WATERMARK_STYLE} />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-[1] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black mb-8 md:mb-10 lg:mb-12">
            Sales Guarantee
          </h1>

          {/* For International Customers */}
          <div className="mb-5 md:mb-6">
            <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center text-black mb-2 md:mb-3">
              For International Customers
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-black leading-relaxed text-center">
              Vehicles Under Six Months After Refistration Date Or Mileage Under 1,000 KM With Thia Guarantee Logo Will Be Granted International Warranty If Six Months From RamaDBK Which Ever Comes First.
            </p>
          </div>

          {/* Specially For Sri Lankan Customers */}
          <div className="mb-5 md:mb-6">
            <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center text-black mb-2 md:mb-3">
              Specially For Sri Lankan Customers
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-black leading-relaxed text-center">
              We Thank You For Selecting A Vehicle From Us, As A Responsible Organization, We Wish To Warrant The Engine And Transmission System Of Your Vehicle For A Period Of One Year Or 1,00,000 Km Subject To The Following Terms And Conditions.
            </p>
          </div>
        </div>

        {/* Dividing Line - Full Width */}
        <div className="w-full h-0.5 bg-black mb-4 md:mb-5"></div>

        <div className="max-w-4xl mx-auto">
          {/* Clause A */}
          <div className="mb-4 md:mb-5">
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-center text-black mb-2 md:mb-3">
              Clause A: Vehicles Under One Years Of Age After First Registration Date.
            </h2>

          <ul className="space-y-1.5 md:space-y-2 text-black text-xs md:text-sm list-disc pl-5">
            <li className="leading-relaxed">
              This Warranty Is Only To Cover The Major Technical Defects Of The Engine And Transmission System Of Your Vehicle.
            </li>

            <li className="leading-relaxed">
              <span>This Warranty Will Not Cover The Following Items In The Engine And Transmission:</span>
              <ul className="ml-4 mt-1.5 space-y-1">
                <li>a. Engine - Oil Seals, Gaskets, Injector Nozzles, Parts Of Rubber And Plastics, Filters, Lubricants, Antifreeze Fluid And Other Oil Materials.</li>
                <li>b. Transmission - All Rubber And Plastics Parts, Lubricants And Other Oil Materials.</li>
              </ul>
            </li>

            <li className="leading-relaxed">
              You Are Given 3 Labor Free Services, And It Is Compulsory To Get These From Our Authorized Service Center. The Regular After Sales Care For Your Vehicle, From Our Service Center Will Help You To Enjoy The Uninterrupted Warranty Coverage.
            </li>

            <li className="leading-relaxed">
              The Warranty Mileage Will Be Based On The Odometer Reading. If The Odometer Is Damaged Or Broken Remaining Warranty Will Be Calculated According To Time (200 Km Per Day).
            </li>

            <li className="leading-relaxed">
              Damage Caused By Traffic Accidents, Insufficient Or Improper Maintenance, Misuse, Use Of The Vehicle Under Unusual Conditions Such As In Motor Races Or Rallies, And Modification To The Vehicle Is Not Covered Under This Warranty.
            </li>

            <li className="leading-relaxed">
              Any Electrical Or Electronic Parts And Failures Are Not Covered Under This Warranty.
            </li>

            <li className="leading-relaxed">
              Damage Caused By External Influences Such As Chemical Pollution, Acid Rain, Sand, Salt, Stones, Road Hazards, Floods, Fire Or Disasters Whether Due To Human Fault, Negligence Or Act Of God, Are Not Covered Under This Warranty.
            </li>

            <li className="leading-relaxed">
              In The Event The Ownership Changers From The First Owner During The Warranty Period It Is Necessary To Inform Us Immediately, To Enjoy The Remaining Warranty Period By The New Owner.
            </li>
          </ul>

          <p className="text-center text-xs md:text-sm text-black leading-relaxed mt-3 md:mt-4">
            The Warranty Period Is 12 (Twelve) Months Or 1,00,000 Km (Hundred Thousand) Whichever Comes First.
          </p>
        </div>

          {/* Clause B */}
          <div className="mb-4 md:mb-5">
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-center text-black mb-2 md:mb-3">
              Clause B: Vehicles Under Two Years Of Age After First Registration Date.
            </h2>

            <p className="text-xs md:text-sm text-black leading-relaxed text-center">
              Vehicles Under Two Years After Registration Date Will Undergo For Spare Parts Discount Warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
