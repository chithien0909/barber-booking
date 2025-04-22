import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { OnboardingProvider } from '@/providers/OnboardingProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Barber Booking App',
  description: 'Book your favorite barber with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <OnboardingProvider>
          <main className="min-h-screen bg-white">
            {children}
          </main>
        </OnboardingProvider>
      </body>
    </html>
  )
}
