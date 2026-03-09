export function MapSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[48px] font-semibold text-black mb-12" style={{ lineHeight: '150%' }}>
            Our Location
          </h2>

          <div className="w-full rounded-lg overflow-hidden shadow-lg mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5723480790075!2d139.6492634765174!3d35.49012337264955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185dd4e920efbb%3A0x97397cd50e1c542d!2sRamaDBK%20Ltd.!5e0!3m2!1sen!2slk!4v1762234995458!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RamaDBK Location Map"
            />
          </div>

          {/* Access Section */}
          <div className="mt-16">
            <h2 className="text-[48px] font-semibold text-black mb-12" style={{ lineHeight: '150%' }}>
              Access Now
            </h2>

            <div className="space-y-8">
              <div className="w-full">
                <img
                  src="/asset/mapimg1.webp"
                  alt="Access Map 1"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="w-full">
                <img
                  src="/asset/mapimg2.webp"
                  alt="Access Map 2"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
