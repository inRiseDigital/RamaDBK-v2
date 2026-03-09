import React from 'react'
import LocalRemittance from '@/components/payment/LocalRemittance'
import Footer from '@/components/Footer/Footer';
import NavBar from "@/components/Navigation/NavBar";

export default function LocalRemittancePage() {
  return (
    <div>
      <NavBar/>
      <LocalRemittance/>
      <Footer/>
    </div>
  )
}
