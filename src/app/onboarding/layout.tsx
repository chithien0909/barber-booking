import type { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { OnboardingProvider } from '@/providers/OnboardingProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Onboarding - Barber Booking App',
  description: 'Get started with the Barber Booking App',
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <OnboardingProvider>
          {children}
        </OnboardingProvider>
      </body>
    </html>
  )
} 