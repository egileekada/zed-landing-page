"use client"
import AppStore from '@/components/app_store'
import DollarCardSection from '@/components/dollar_card_section'
import FAQSection from '@/components/faq_section'
import Footer from '@/components/footer'
import GetAppSection from '@/components/get_app_section'
import HeroSection from '@/components/hero_section'
import Navbar from '@/components/navbar'
import OurSolution from '@/components/our_solution'
import ProdutSection from '@/components/product_section'
import Image from 'next/image'

export default function Home() {

  return (
    <main className=" w-full px-6 lg:px-10  scroll-smooth relative overflow-x-hidden h-screen text-primary bg-white">
      <div className=' top-0 w-full sticky z-[100] bg-white ' >
        <Navbar />
      </div>
      <HeroSection />
      <div className=' w-full flex justify-center ' >
        <div className=' max-w-[1440px]  ' >
          <GetAppSection />
          <ProdutSection />
          <DollarCardSection />
          <FAQSection />
          <OurSolution />
          <AppStore />
          <Footer />
        </div>
      </div>
    </main>
  )
}
