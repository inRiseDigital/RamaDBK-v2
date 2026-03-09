import React from 'react'
import { Link } from '@inertiajs/react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

// Simple inline SVG icons for platforms lucide doesn't cover
const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
  </svg>
)

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const GRADIENT_STYLE: React.CSSProperties = {
  width: '1253px',
  height: '1259px',
  borderRadius: '1259px',
  opacity: 0.2,
  background: 'linear-gradient(180deg, rgba(199, 135, 169, 0.50) 0%, rgba(255, 0, 4, 0.50) 100%)',
  filter: 'blur(247.0703125px)',
  flexShrink: 0,
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute -top-[30%] -right-[10%] pointer-events-none" style={GRADIENT_STYLE} />

      {/* Footer Content */}
      <div className="relative z-10 max-w-screen mx-auto px-8 lg:px-12 xl:px-25  py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-30">
          {/* Company Info Section */}
          <div className="space-y-6 lg:col-span-1">
            <h1 className="text-3xl lg:text-4xl font-bold">
              <span className="text-red-600">Rama</span>
              <span className="text-white">DBK</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              RamaDBK Is An One-Stop Car Shop With Commercial And Non-Commercial Vehicles. As A World Renowned Japanese Car Exporter, We Pride Ourselves For Providing A Variety Of Services, Including The Purchasing, Sales, Export, And Distribution Of A Wide Variety Of Quality Japanese New And Used Cars And Car Parts From Japan.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.facebook.com/ramadbk/" className="hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/rama_dbk/" className="hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://x.com/ramadbk" className="hover:text-red-600 transition-colors">
                <XTwitterIcon />
              </a>
              <a href="https://api.whatsapp.com/send?phone=817093460348&text=Hello,%20I%20am%20looking%20for%20a%20vehicle." className="hover:text-red-600 transition-colors">
                <WhatsappIcon />
              </a>
              <a href="https://www.tiktok.com/@rama_dbk?_r=1&_t=ZS-91Kz3Y6ljIG" className="hover:text-red-600 transition-colors">
                <TiktokIcon />
              </a>
              <a href="https://www.linkedin.com/company/ramadbk-limited/?originalSubdomain=jp" className="hover:text-red-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 1 - Main Pages */}
          <div>
            <ul className="space-y-3">
              <li><Link prefetch href="/" className="hover:text-red-600 transition-colors text-base font-medium">Home</Link></li>
              <li><Link prefetch href="/stock-list" className="hover:text-red-600 transition-colors text-base">Stock List</Link></li>
              <li><Link prefetch href="/spare-parts" className="hover:text-red-600 transition-colors text-base">Spare Parts</Link></li>
              <li><Link prefetch href="/payments" className="hover:text-red-600 transition-colors text-base">Payment</Link></li>
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base">Our Service</Link></li>
              <li><Link prefetch href="/contact" className="hover:text-red-600 transition-colors text-base">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2 - Information Pages */}
          <div>
            <ul className="space-y-3">
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base font-medium">Search Car For Me</Link></li>
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base">After Sales Guarantee</Link></li>
              <li><Link prefetch href="/payments" className="hover:text-red-600 transition-colors text-base">Payment Security</Link></li>
              <li><Link prefetch href="/spare-parts" className="hover:text-red-600 transition-colors text-base">Spare Parts</Link></li>
              <li><Link prefetch href="/contact" className="hover:text-red-600 transition-colors text-base">Sales Team</Link></li>
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base">Import Regulations</Link></li>
              <li><Link prefetch href="/contact" className="hover:text-red-600 transition-colors text-base">Request Call Back</Link></li>
            </ul>
          </div>

          {/* Column 3 - Additional Info */}
          <div>
            <ul className="space-y-3">
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base font-medium">Shipping Info</Link></li>
              <li><Link prefetch href="/contact" className="hover:text-red-600 transition-colors text-base">Route To RamaDBK</Link></li>
              <li><Link prefetch href="/services" className="hover:text-red-600 transition-colors text-base">ODO-Meter Check Service</Link></li>
              <li><Link prefetch href="/stock-list" className="hover:text-red-600 transition-colors text-base">Why Japanese Used Cars</Link></li>
              <li><Link prefetch href="/payments" className="hover:text-red-600 transition-colors text-base">Our Bank Details</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 pb-16 border-t border-gray-700 text-center">
          <p className="text-sm font-bold text-gray-300">
            Copyright 2025 RamaDBK.Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
