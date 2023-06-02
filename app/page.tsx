import Hero from '@/components/Home/Hero/Hero'
import './globals.css'
import CoursesSection from '@/components/Home/CoursesSection/CoursesSection'
import DAUExcel from '@/components/Home/DAUExcel/DAUExcel'
import DUAPBi from '@/components/Home/DUAPBi/DUAPBi'
import TableauSection from '@/components/Home/TableauSection/TableauSection'
import LearnSection from '@/components/Home/LearnSection/LearnSection'
import OurVision from '@/components/Home/OurVision/OurVision'
import FaqSection from '@/components/Home/FaqSection/FaqSection'
import Immersive from '@/components/Home/Immersive/Immersive'
import WhyChoose from '@/components/Home/WhyChoose/WhyChoose'


export default function Home() {
  return (
    <main>
    <Hero/>
    <CoursesSection/>
    <WhyChoose/>
    <LearnSection/>
    <DAUExcel/>
    <DUAPBi/>
    <TableauSection/>
    <Immersive/>
    <OurVision/>
    <FaqSection/>
    </main>
  )
}
