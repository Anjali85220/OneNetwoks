import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
//import Sidebar from  './components/Sidebar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor' // ⬅️ Added

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 })
  }, [])

  return (
    <>
      {/* ⬅️ Cursor is rendered globally */}
      <CustomCursor />

      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
