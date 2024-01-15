import './page.scss'
import { PageHeader } from '@/pages/PageHeader/PageHeader'
import { AboutPage } from '@/pages/AboutPage/AboutPage'
import { AvailabilityPage } from '@/pages/AvailabilityPage/AvailabilityPage'
import { ServicesPage } from '@/pages/ServicesPage/ServicesPage'
import { PageWrapper } from '@/ui/container'
import { CarSvg } from '$/icons/CarIcon'

export default function LandingPage() {
  return (
    <div className='main'>
      <PageHeader />

      <AboutPage />

      <ServicesPage />

      <AvailabilityPage />

      <PageWrapper>
        <CarSvg
          width={48}
          height={30}
          // color='#FEFF86'
        />
      </PageWrapper>
    </div>
  )
}
