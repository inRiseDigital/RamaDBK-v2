export function CarCareMap() {
  return (
    <div className="w-full font-['Roboto_Flex',sans-serif] bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-8 md:mb-10 lg:mb-12">
          For Sri Lankan Customers - Laugfs Car Care Center
        </h2>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-12 md:mb-16 lg:mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023616.668067294!2d79.38687715334136!3d7.855627792084008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1762440579311!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Terms & Conditions Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-6 md:mb-8">
            Terms & Conditions
          </h3>

          <ul className="space-y-3 md:space-y-4 text-black text-sm md:text-base text-center list-none">
            <li className="leading-relaxed">
              • Service record book offered by RAMA D.B.K Limited along with the LUGFS CAR CARE coupon book must be presented at every time to LAUGFS Car Care service center to redeem respective offers.
            </li>
            <li className="leading-relaxed">
              • This offer is NOT VALID for commercial vehicles.
            </li>
            <li className="leading-relaxed">
              • Offer card is valid for two years from the date of Purchase of Motor vehicle.
            </li>
            <li className="leading-relaxed">
              • When your vehicle is serviced, all car care products, Lubricants, Filters & other accessories should be purchased form LAUGFS Car Care Service Centers only.
            </li>
            <li className="leading-relaxed">
              • Please make advanced appointment with LAUGFS CAR CARE to avoid disappointments.
            </li>
            <li className="leading-relaxed">
              • Offer coupons have no monetary value.
            </li>
            <li className="leading-relaxed">
              • Tempered coupons are not valid.
            </li>
            <li className="leading-relaxed">
              • Not valid with any other discounts or promotions.
            </li>
            <li className="leading-relaxed">
              • Offers are valid only for labour charge.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
