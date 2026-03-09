import React from 'react'
import PaymentForm from '../../components/payment/Payment'
import BankDeatlis from '../../components/payment/BankDeatlis'
import Overseas from '@/components/payment/Overseas'
import LocalRemittance from '@/components/payment/LocalRemittance'
import NavBar from "@/components/Navigation/NavBar";
import Footer from '@/components/Footer/Footer';

export default function Payment() {
  return (
    <div>
      <NavBar/>
      <PaymentForm/>
      <BankDeatlis/>
      <Overseas/>
      <LocalRemittance/>
      <Footer/>
    </div>
  )
}
