import Image from 'next/image'
import HeroSection from '@/components/hero-section'
import ContentSection from '@/components/contentSection'
import CardSection from '@/components/cardSection'
import SubSection from '@/components/subSection'

export default function Home() {
  return (
   <main>
      <HeroSection/>
      <ContentSection/>
      <CardSection/>
      <SubSection/>
   </main>
  )
}
