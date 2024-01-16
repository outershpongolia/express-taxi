import './page.scss'
import { PageHeader } from '@/pages/PageHeader/PageHeader'
import { About } from '@/pages/About/About'
import { Availability } from '@/pages/Availability/Availability'
import { Services } from '@/pages/Services/Services'
import { Contact } from '@/pages/Contact/Contact'

export default function LandingPage() {
  return (
    <div className='main'>
      <PageHeader />

      <About />

      <Services />

      <Availability />

      <Contact />
    </div>
  )
}
