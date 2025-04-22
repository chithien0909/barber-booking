'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingContext } from '@/providers/OnboardingProvider';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import BarberCard from '@/components/barbers/BarberCard';

// Mock data for barbers
const featuredBarbers = [
  {
    id: 1,
    name: 'John Smith',
    rating: 4.8,
    reviews: 124,
    specialties: ['Beard Trim', 'Fade', 'Classic Cut'],
    image: '/barbers/barber1.jpg',
    location: 'Downtown Barbershop'
  },
  {
    id: 2,
    name: 'Mike Johnson',
    rating: 4.9,
    reviews: 98,
    specialties: ['Skin Fade', 'Hair Design', 'Hot Towel Shave'],
    image: '/barbers/barber2.jpg',
    location: 'Luxury Cuts'
  },
  {
    id: 3,
    name: 'David Williams',
    rating: 4.7,
    reviews: 156,
    specialties: ['Beard Styling', 'Hair Coloring', 'Kids Cut'],
    image: '/barbers/barber3.jpg',
    location: 'Modern Barbers'
  },
];

export default function Home() {
  const router = useRouter();
  const { hasCompletedOnboarding } = useOnboardingContext();

  // Check if user should see onboarding
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      if (!hasCompletedOnboarding) {
        router.push('/onboarding');
      }
    }
  }, [hasCompletedOnboarding, router]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Perfect Haircut</h1>
            <p className="text-lg mb-6 text-gray-300">Find and book the best barbers in your area with just a few clicks</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/barbers" 
                className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
              >
                Find Barbers
              </Link>
              <Link 
                href="/appointments" 
                className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-lg text-center hover:bg-white hover:text-secondary transition-colors"
              >
                My Appointments
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>150+ Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Open 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Easy Booking</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative h-[400px]">
            <div className="absolute inset-0 bg-primary rounded-xl overflow-hidden opacity-20"></div>
            <div className="absolute inset-4 bg-secondary-light rounded-xl overflow-hidden">
              {/* This would be an image in the real app */}
              <div className="w-full h-full flex items-center justify-center text-primary">
                Barber Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Barbers Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">Featured Barbers</h2>
            <Link href="/barbers" className="text-primary font-medium hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBarbers.map(barber => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Barber</h3>
              <p className="text-text-secondary">Browse through our selection of professional barbers in your area</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
              <p className="text-text-secondary">Choose a convenient time slot and book with just a few clicks</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Haircut</h3>
              <p className="text-text-secondary">Show up at the scheduled time and enjoy your professional service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
