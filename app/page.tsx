import Hero from '@/components/Home/Hero/Hero'
import './globals.css'
import CoursesSection from '@/components/Home/CoursesSection/CoursesSection'

import OurVision from '@/components/Home/OurVision/OurVision'
import FaqSection from '@/components/Home/FaqSection/FaqSection'
import Immersive from '@/components/Home/Immersive/Immersive'
import WhyChoose from '@/components/Home/WhyChoose/WhyChoose'
import LearnSection from '@/components/Home/LearnSection/LearnSection'


export default function Home() {
  return (
    <main>
    <Hero/>
    <CoursesSection/>
    <WhyChoose/>
    <Immersive/>
    <LearnSection/>
    <OurVision/>
    <FaqSection/>
    </main>
  )
}
