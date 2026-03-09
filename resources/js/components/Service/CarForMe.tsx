import { useForm } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import React from "react"

// Pre-compute year options outside component to avoid re-creation on every render
const currentYear = new Date().getFullYear()
const YEAR_OPTIONS = Array.from({ length: 30 }, (_, i) => currentYear - i)

// SVG-based watermark pattern — replaces 2,400 DOM elements with a single background
const WATERMARK_SVG = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='40'>
    <text x='10' y='28' font-family='sans-serif' font-weight='900' font-size='20'>
      <tspan fill='%23dc2626'>Rama</tspan><tspan fill='%23000'>DBK</tspan>
    </text>
  </svg>`
)}")`

const WATERMARK_SVG_DESKTOP = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='120'>
    <text x='10' y='90' font-family='sans-serif' font-weight='900' font-size='100'>
      <tspan fill='%23dc2626'>Rama</tspan><tspan fill='%23000'>DBK</tspan>
    </text>
  </svg>`
)}")`

const WATERMARK_STYLE: React.CSSProperties = {
  backgroundImage: WATERMARK_SVG,
  backgroundRepeat: 'repeat',
  transform: 'rotate(-45deg)',
  width: '300%',
  height: '300%',
  left: '-100%',
  top: '-100%',
  position: 'absolute',
}

const WATERMARK_STYLE_DESKTOP: React.CSSProperties = {
  backgroundImage: WATERMARK_SVG_DESKTOP,
  backgroundRepeat: 'repeat',
  transform: 'rotate(-45deg)',
  width: '300%',
  height: '300%',
  left: '-100%',
  top: '-100%',
  position: 'absolute',
}

const BG_STYLE: React.CSSProperties = {
  backgroundImage: "url('/asset/s-background.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const YearOptions = React.memo(function YearOptions() {
  return (
    <>
      {YEAR_OPTIONS.map(year => (
        <option key={year} value={year} className="bg-black/95">{year}</option>
      ))}
    </>
  )
})

export function CarForMe() {
  const { data, setData, post, processing, errors, reset } = useForm({
    make: "",
    model: "",
    transmission: "",
    regYearFrom: "",
    regYearTo: "",
    name: "",
    country: "",
    mobile: "",
    email: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/services', {
      onSuccess: () => {
        reset()
        alert('Your service request has been submitted successfully!')
      },
      onError: (errors) => {
        console.error('Form errors:', errors)
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setData(name as any, type === "checkbox" ? (e.target as HTMLInputElement).checked : value)
  }

  return (
    <div className="w-full font-['Host_Grotesk',sans-serif]">
      {/* Mobile layout - side by side */}
      <div className="md:hidden">
        {/* Top section - split white and dark */}
        <div className="grid grid-cols-[35%_65%] sm:grid-cols-[30%_70%] min-h-[120vh] sm:min-h-[110vh] relative">
          {/* Left side - White section with watermark pattern */}
          <div className="relative bg-white overflow-hidden">
            {/* RamaDBK Logo - Top Center */}
            <div className="absolute top-4 sm:top-6 left-0 right-0 z-30 flex justify-center">
              <h2 className="text-lg sm:text-xl font-black">
                <span className="text-red-600">Rama</span>
                <span className="text-black">DBK</span>
              </h2>
            </div>

            {/* Watermark Pattern - SVG background instead of 2400 DOM elements */}
            <div className="absolute inset-0 opacity-15 pointer-events-none z-10 overflow-hidden">
              <div style={WATERMARK_STYLE} />
            </div>
          </div>

          {/* Right side - Form section */}
          <div className="p-4 sm:p-6 pt-8" style={BG_STYLE}>
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Car For Me</h1>

            <form onSubmit={handleSubmit} className="space-y-3 backdrop-blur-xl bg-black/20 p-3 sm:p-4 rounded-2xl border border-white/10">
            {/* Vehicle Information */}
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-2 pb-2 text-white border-b border-white/20">Vehicle Information</h3>

              <div className="space-y-2 sm:space-y-3">
                <select
                  name="make"
                  value={data.make}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                >
                  <option value="" className="bg-black/95 text-gray-400">Select Make</option>
                  <option value="toyota" className="bg-black/95">Toyota</option>
                  <option value="honda" className="bg-black/95">Honda</option>
                  <option value="nissan" className="bg-black/95">Nissan</option>
                  <option value="mazda" className="bg-black/95">Mazda</option>
                  <option value="subaru" className="bg-black/95">Subaru</option>
                </select>

                <select
                  name="model"
                  value={data.model}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                >
                  <option value="" className="bg-black/95 text-gray-400">Select Model</option>
                  <option value="sedan" className="bg-black/95">Sedan</option>
                  <option value="suv" className="bg-black/95">SUV</option>
                  <option value="hatchback" className="bg-black/95">Hatchback</option>
                </select>

                <select
                  name="transmission"
                  value={data.transmission}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                >
                  <option value="" className="bg-black/95 text-gray-400">Select Transmission</option>
                  <option value="automatic" className="bg-black/95">Automatic</option>
                  <option value="manual" className="bg-black/95">Manual</option>
                </select>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <select
                    name="regYearFrom"
                    value={data.regYearFrom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  >
                    <option value="" className="bg-black/95 text-gray-400">Year From</option>
                    <YearOptions />
                  </select>
                  <select
                    name="regYearTo"
                    value={data.regYearTo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  >
                    <option value="" className="bg-black/95 text-gray-400">Year To</option>
                    <YearOptions />
                  </select>
                </div>
              </div>
            </div>

            {/* Your Information */}
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-2 pb-2 text-white border-b border-white/20">Your Information</h3>

              <div className="space-y-2 sm:space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={data.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No"
                  value={data.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-black/40 border border-white/30 rounded-full text-white text-sm sm:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={data.acceptTerms}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 rounded border-white/30 bg-transparent text-white focus:ring-white/40 focus:ring-offset-0"
              />
              <label className="text-xs text-white/80 leading-relaxed">
                I confirm that I have read and accept the terms and conditions and privacy policy.
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={processing}
              className="w-full bg-white hover:bg-gray-100 text-black font-semibold h-10 sm:h-12 rounded-full text-sm sm:text-base mt-2 disabled:opacity-50"
            >
              {processing ? 'Submitting...' : 'Submit'}
            </Button>
          </form>

          {/* Description text - Below form */}
          <div className="mt-4 sm:mt-5 px-2 sm:px-3 pb-32 sm:pb-40">
            <p className="text-white/80 mb-3 text-xs sm:text-sm leading-relaxed">
              Looking for your perfect car? Simply tell us your preferred make, model, and details, and we'll
              send you personalized recommendations straight to your inbox — no registration required.
            </p>

            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Want more control?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Join for free
              </a>{" "}
              to save your preferences, manage alerts, and enjoy exclusive offers. Already a member?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Sign in
              </a>{" "}
              to update "My Preferences" and fine-tune your search.
            </p>
          </div>
        </div>

        {/* Car Image fixed at corner - spanning across white and dark sections - Hidden on mobile, visible on tablet */}
        <div className="hidden sm:block absolute bottom-0 left-0 z-[100] w-full pointer-events-none">
          <div className="relative w-full">
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-end">
              <div className="relative w-[100%] sm:w-[95%] -ml-[35%] sm:-ml-[30%]">
                <img
                  src="/asset/s-car.webp"
                  alt="Red Sports Car"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Desktop and Tablet layout - side by side */}
      <div className="hidden md:grid md:grid-cols-3 md:min-h-screen lg:h-[800px] xl:h-[900px]">
        {/* Left side - Car Image */}
        <div className="relative overflow-visible bg-white md:col-span-1 z-50">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-[5]"></div>

            {/* Top Corner Logo */}
            <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 z-30">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
                <span className="text-red-600">Rama</span>
                <span className="text-black">DBK</span>
              </h2>
            </div>

            {/* Watermark Pattern - SVG background instead of 2400 DOM elements */}
            <div className="absolute inset-0 opacity-15 pointer-events-none z-10 overflow-hidden">
              <div style={WATERMARK_STYLE_DESKTOP} />
            </div>

            {/* Car Image */}
            <div className="relative z-[100] flex items-end justify-end h-full pr-0 pb-0">
              <div className="relative w-[150%] lg:w-[160%] xl:w-[170%] -mr-[50%] lg:-mr-[60%] xl:-mr-[70%]">
                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                <img
                  src="/asset/s-car.webp"
                  alt="Red Sports Car"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
        </div>

        {/* Right side - Form */}
        <div
          className="relative text-white p-4 md:px-8 md:py-10 lg:p-10 xl:p-12 flex items-start md:items-start justify-center overflow-hidden md:col-span-2"
          style={BG_STYLE}
        >
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 xl:gap-12 items-start justify-start md:justify-start lg:justify-center">
            {/* Left side - Title and Description */}
            <div className="flex-shrink-0 md:max-w-[260px] lg:max-w-xs xl:max-w-sm">
              <h1 className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-5 text-white leading-tight">Car For Me</h1>
              <div className="space-y-3 md:space-y-2.5 lg:space-y-4">
                <p className="text-gray-300 text-sm md:text-[13px] lg:text-base leading-relaxed md:leading-relaxed">
                  Looking for your perfect car? Simply tell us your preferred make, model, and details, and we'll
                  send you personalized recommendations straight to your inbox — no registration required.
                </p>

                <p className="text-gray-300 text-sm md:text-[13px] lg:text-base leading-relaxed md:leading-relaxed">
                  Want more control?{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Join for free
                  </a>{" "}
                  to save your preferences, manage alerts, and enjoy exclusive offers. Already a member?{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Sign in
                  </a>{" "}
                  to update "My Preferences" and fine-tune your search.
                </p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 w-full md:max-w-md lg:max-w-md xl:max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-3 lg:space-y-5 backdrop-blur-xl bg-black/30 p-4 md:p-6 lg:p-6 xl:p-7 rounded-3xl md:rounded-[2.5rem] lg:rounded-3xl border border-white/10 shadow-2xl">
              {/* Vehicle Information */}
              <div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-2.5 pb-2 text-white border-b border-white/30">Vehicle Information</h3>

                <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                  <select
                    name="make"
                    value={data.make}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  >
                    <option value="" className="bg-black/95 text-gray-400">Select Make</option>
                    <option value="toyota" className="bg-black/95">Toyota</option>
                    <option value="honda" className="bg-black/95">Honda</option>
                    <option value="nissan" className="bg-black/95">Nissan</option>
                    <option value="mazda" className="bg-black/95">Mazda</option>
                    <option value="subaru" className="bg-black/95">Subaru</option>
                  </select>

                  <select
                    name="model"
                    value={data.model}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  >
                    <option value="" className="bg-black/95 text-gray-400">Select Model</option>
                    <option value="sedan" className="bg-black/95">Sedan</option>
                    <option value="suv" className="bg-black/95">SUV</option>
                    <option value="hatchback" className="bg-black/95">Hatchback</option>
                  </select>

                  <select
                    name="transmission"
                    value={data.transmission}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  >
                    <option value="" className="bg-black/95 text-gray-400">Select Transmission</option>
                    <option value="automatic" className="bg-black/95">Automatic</option>
                    <option value="manual" className="bg-black/95">Manual</option>
                  </select>

                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <select
                      name="regYearFrom"
                      value={data.regYearFrom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                    >
                      <option value="" className="bg-black/95 text-gray-400">Reg. Year From</option>
                      <YearOptions />
                    </select>
                    <select
                      name="regYearTo"
                      value={data.regYearTo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                    >
                      <option value="" className="bg-black/95 text-gray-400">Reg. Year To</option>
                      <YearOptions />
                    </select>
                  </div>
                </div>
              </div>

              {/* Your Information */}
              <div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-2.5 pb-2 text-white border-b border-white/30">Your Information</h3>

                <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={data.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No"
                    value={data.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3.5 bg-black/40 border border-white/30 rounded-full text-white text-sm md:text-base placeholder:text-gray-400 focus:border-white/50 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={data.acceptTerms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-3.5 md:w-4 h-3.5 md:h-4 rounded border-white/30 bg-transparent text-white focus:ring-white/40 focus:ring-offset-0"
                />
                <label className="text-[11px] md:text-xs lg:text-sm text-white/80 leading-relaxed">
                  I confirm that I have read and accept the terms and conditions and privacy policy.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={processing}
                className="w-full bg-white hover:bg-gray-100 text-black font-semibold h-10 md:h-11 lg:h-14 rounded-full text-sm md:text-base lg:text-lg mt-2 disabled:opacity-50"
              >
                {processing ? 'Submitting...' : 'Submit'}
              </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
