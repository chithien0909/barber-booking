'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingContext } from '@/providers/OnboardingProvider';

// Components
import HomeHeader from '@/components/home/HomeHeader';
import HomeBanner from '@/components/home/HomeBanner';
import SearchBar from '@/components/home/SearchBar';
import SectionHeader from '@/components/home/SectionHeader';
import BarbershopItem from '@/components/home/BarbershopItem';
import FeaturedBarbershopCard from '@/components/home/FeaturedBarbershopCard';
import NearbyMap from '@/components/home/NearbyMap';
import BottomNav from '@/components/layout/BottomNav';

// Mock data
import { nearestBarbershops, recommendedBarbershops } from '@/data/mockData';

export default function Home() {
  const router = useRouter();
  const { hasCompletedOnboarding } = useOnboardingContext();
  const [activeSlide, setActiveSlide] = useState(0);

  // Check if user should see onboarding
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!hasCompletedOnboarding) {
        router.push('/onboarding/welcome');
      }
    }
  }, [hasCompletedOnboarding, router]);

  // Featured barbershop carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % recommendedBarbershops.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20">
      <div className="px-5 pt-4 pb-6 space-y-6">
        {/* Header with profile */}
        <HomeHeader 
          userName="Joe Samanta" 
          location="Yogyakarta" 
        />
        
        {/* Banner */}
        <HomeBanner />
        
        {/* Search and Filter */}
        <SearchBar />
        
        {/* Nearest Barbershops */}
        <div className="space-y-4">
          <SectionHeader 
            title="Nearest Barbershop" 
            viewAllLink="/barbers" 
          />
          
          <div className="space-y-3">
            {nearestBarbershops.map((shop) => (
              <BarbershopItem 
                key={shop.id}
                id={shop.id}
                name={shop.name}
                location={shop.location}
                distance={shop.distance}
                rating={shop.rating}
                image={shop.image}
              />
            ))}
          </div>
        </div>
        
        {/* Most Recommended */}
        <div className="space-y-4">
          <SectionHeader 
            title="Most recommended" 
            viewAllLink="/barbers?sort=recommended" 
          />
          
          <div className="relative">
            <FeaturedBarbershopCard
              id={recommendedBarbershops[activeSlide].id}
              name={recommendedBarbershops[activeSlide].name}
              location={recommendedBarbershops[activeSlide].location}
              distance={recommendedBarbershops[activeSlide].distance}
              rating={recommendedBarbershops[activeSlide].rating}
              image={recommendedBarbershops[activeSlide].image}
            />
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-4 gap-2">
              {recommendedBarbershops.map((_, index) => (
                <div
                  key={index}
                  className={`${
                    index === activeSlide 
                      ? 'w-6 bg-[#363062]' 
                      : 'w-2 bg-gray-200'
                  } h-2 rounded-full transition-all duration-300`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            {recommendedBarbershops.slice(1, 4).map((shop) => (
              <BarbershopItem 
                key={shop.id}
                id={shop.id}
                name={shop.name}
                location={shop.location}
                distance={shop.distance}
                rating={shop.rating}
                image={shop.image}
              />
            ))}
          </div>
        </div>
        
        {/* Find a barber nearby */}
        <div className="space-y-4">
          <SectionHeader title="Find a barber nearby" />
          <NearbyMap />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
