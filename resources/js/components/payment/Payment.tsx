import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Payment() {
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

      <div className="container max-w-screen mx-auto px-8 lg:px-12 xl:px-25 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-10">
              <div>
                <h1 className="text-4xl font-bold">Make Your Payment Using</h1>
                <div className="flex items-center gap-2 mt-2">
                  {/* PayPal Logo */}
                  <img
                    src="/payment/paypal.svg"
                    alt="PayPal"
                    className="h-6 lg:h-10 xl:h-10"
                  />
                  <span className="text-white text-xl lg:text-3xl xl:text-3xl">/</span>
                  <span className="text-[var(--color-pure-red)] font-semibold text-xl lg:text-3xl xl:text-3xl">Credit Card</span>
                </div>
              </div>
              
              {/* Payment Method Icons with Original SVGs */}
              <div className="flex gap-4 items-center">
                {/* American Express */}
                <img
                  src="/payment/american express.svg"
                  alt="American Express"
                  className="h-8"
                />

                {/* Visa */}
                <img
                  src="/payment/visa.svg"
                  alt="Visa"
                  className="h-8"
                />

                {/* Mastercard */}
                <img
                  src="/payment/mastercard.svg"
                  alt="Mastercard"
                  className="h-8"
                />

                {/* Discover */}
                <img
                  src="/payment/discover.svg"
                  alt="Discover"
                  className="h-8"
                />
              </div>
            </div>

            {/* Payment Form */}
            <Card className="bg-transparent border-0">
              <CardContent className="p-0 space-y-10">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName" className="text-yellow-400 text-sm font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-transparent border-b border-gray-600 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-yellow-400 text-sm font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-transparent border-b border-gray-600 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="paymentFor" className="text-yellow-400 text-sm font-medium">
                      Payment For
                    </Label>
                    <Input
                      id="paymentFor"
                      className="bg-transparent border-b border-gray-600 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="What is this payment for?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="amount" className="text-yellow-400 text-sm font-medium">
                      Amount (USD)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      className="bg-transparent border-b border-gray-600 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder-gray-400 focus:border-yellow-400"
                      placeholder="0.00"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Amount Should Include 4% Transaction Fee
                    </p>
                    <p className="text-xs text-gray-500">
                      Example: (If You Want To Pay $100, You Have To Enter $104)
                    </p>
                  </div>
                </div>
                
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2 rounded-sm">
                  PAY NOW
                </Button>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Powered By</span>
              <img
                src="/payment/paypalLogo.svg"
                alt="PayPal"
                className="h-4"
              />
            </div>
          </div>

            
          {/* Right Side - Credit Card Visual */}
          <div className="relative h-full flex flex-col items-end">
            {/* RamaDBK Logo */}
            <img
              src="/ramalogo.jpg"
              alt="RamaDBK LTD"
              className="h-15 object-contain absolute top-0 right-0"
            />

            {/* Decorative Star with Blue Rounded Background */}
            <div
              className="absolute top-40 right-90 flex items-center justify-center"
              
            >
              <img
                src="/payment/star.svg"
                alt="Star"
                className="w-30 h-30 animate-pulse"
              />
            </div>

            <img
              src="/payment/payment-card.png"
              alt="Payment Card"
              className="drop-shadow-2xl absolute -bottom-32 -right-30"
              style={{
                width: '80%',
                height: 'auto',
                flexShrink: 0,
                aspectRatio: '757.18 / 670.00'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}