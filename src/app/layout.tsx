import type { Metadata } from 'next'
import { Montserrat, Noto_Serif } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import clsx from 'clsx'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
export const gilda_display = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gilda-display'
})

export const metadata: Metadata = {
  title: 'Express Taxi',
  description: 'Express taxi Somborski taxi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.variable, gilda_display.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
