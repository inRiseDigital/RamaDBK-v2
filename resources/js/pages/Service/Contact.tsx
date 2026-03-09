import { Hero } from "@/components/Service/hero"
import { ContactSection } from "@/components/Service/ContactSection"
import { MapSection } from "@/components/Service/MapSection"
import NavBar from "@/components/Navigation/NavBar";
import Footer from '@/components/Footer/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-anybody">
      <NavBar/>
      <Hero title="contact" backgroundImage="/asset/contact-header.webp" />
      <ContactSection />
      <MapSection />
      <Footer/>
    </div>
  )
}
