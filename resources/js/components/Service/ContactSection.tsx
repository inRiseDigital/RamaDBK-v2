import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { useCallback } from "react"

export function ContactSection() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
    phone: "",
  })

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    post('/contact', {
      onSuccess: () => {
        reset()
        alert('Your message has been sent successfully!')
      },
      onError: (errors) => {
        console.error('Form errors:', errors)
      }
    })
  }, [post, reset])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(e.target.name as any, e.target.value)
  }, [setData])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black leading-tight mb-12">
              We Are Always Read To<br />
              Help You And Answer<br />
              Your Question
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-base">
              {/* English Section */}
              <div className="space-y-1.5">
                <p className="font-semibold text-black text-lg">RamaDBK Head Office</p>
                <p className="text-gray-700">201 Rama HQ Building</p>
                <p className="text-gray-700">2-1-17 Shinkoyasu</p>
                <p className="text-gray-700">Kanagawa-ku | Yokohama,</p>
                <p className="text-gray-700">Japan</p>
                <p className="text-gray-700 mt-2">Postcode 221-0013</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-gray-700">Sales Hotline: +81-50-6860 5410</p>
                <p className="text-gray-700">Tel: +81-45-402 6117</p>
                <p className="text-gray-700">Fax: +81-45-402 0689</p>
              </div>

              {/* Japanese Section */}
              <div className="space-y-1.5">
                <p className="font-semibold text-black text-lg">Address in Japanese</p>
                <p className="text-gray-700">ラマデービーケイ（株）</p>
                <p className="text-gray-700">ラマ 本社 ビル ２０１</p>
                <p className="text-gray-700">神奈川県横浜市</p>
                <p className="text-gray-700">神奈川区</p>
                <p className="text-gray-700">新子安2-1-17</p>
                <p className="text-gray-700">ラマ本社ビル201</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-gray-700">電話 : 045-402-6117</p>
                <p className="text-gray-700">Fax  : 045-402-0689</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white">
            <h3 className="text-3xl text-black mb-8">contact</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  value={data.subject}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  value={data.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700 resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Country"
                  value={data.country}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone"
                  value={data.phone}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none placeholder:text-gray-400 text-gray-700"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <Button
                type="submit"
                disabled={processing}
                className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-full font-medium text-base mt-8 disabled:opacity-50"
              >
                {processing ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
