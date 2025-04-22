'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Search, MapPin, Calendar } from 'lucide-react';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useRouter } from 'next/navigation';

// Onboarding steps data
const onboardingSteps = [
  {
    id: 1,
    title: 'Looking for barber?',
    description: 'Find the best barbershop around you in seconds, make an appointment, and enjoy the best grooming experience.',
    icon: Search,
    image: '/onboarding/onboard2.jpg',
    bgColor: 'bg-[#F99417]',
    iconColor: 'text-white'
  },
  {
    id: 2,
    title: 'Everything in your hands',
    description: 'With BarberBook, find high-quality barbershops, see reviews, and make appointments easily. Achieve your confident appearance!',
    icon: Calendar,
    image: '/onboarding/onboard3.jpg',
    bgColor: 'bg-[#F99417]',
    iconColor: 'text-white'
  },
  {
    id: 3,
    title: 'Find nearby barbers',
    description: 'Discover barbers close to your location and book appointments at your convenience.',
    icon: MapPin,
    image: '/onboarding/booking.png',
    bgColor: 'bg-[#F99417]',
    iconColor: 'text-white'
  }
];

export default function OnboardingPage() {
  const { currentStep, hasCompletedOnboarding, nextStep, completeOnboarding } = useOnboarding();
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Redirect if onboarding already completed
  useEffect(() => {
    if (hasCompletedOnboarding) {
      router.replace('/barbers');
    }
  }, [hasCompletedOnboarding, router]);
  
  const currentStepData = onboardingSteps.find(step => step.id === currentStep);
  const isLastStep = currentStep === onboardingSteps.length;
  
  const handleNextStep = () => {
    if (currentStep < onboardingSteps.length) {
      nextStep();
    }
  };
  
  const handleComplete = () => {
    completeOnboarding();
    router.push('/barbers');
  };
  
  if (hasCompletedOnboarding) {
    return null; // Don't render anything during redirect
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Onboarding Content */}
      <div className="flex-grow">
        {/* Image */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          {currentStepData?.image && (
            <div className="absolute inset-0 bg-gray-200">
              <Image 
                src={currentStepData.image} 
                alt="Onboarding illustration" 
                layout="fill"
                objectFit="cover"
                onLoadingComplete={() => setImageLoaded(true)}
                priority
                className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          )}
        </div>
        
        {/* Content Container */}
        <div className="w-full bg-[#F99417] rounded-t-[28px] -mt-6 px-5 py-6 flex flex-col items-center">
          {/* Title and Description */}
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {currentStepData?.title}
            </h1>
            <p className="text-white text-sm">
              {currentStepData?.description}
            </p>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex space-x-3 mb-6">
            {onboardingSteps.map(step => (
              <div key={step.id} className="flex items-center space-x-2">
                {step.id === currentStep ? (
                  <div className="w-16 h-1.5 rounded-full bg-[#363062]"></div>
                ) : step.id < currentStep ? (
                  <div className="w-2 h-1.5 rounded-full bg-white"></div>
                ) : (
                  <div className="w-2 h-1.5 rounded-full bg-white/50"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Button */}
          {isLastStep ? (
            <button
              onClick={handleComplete}
              className="w-full bg-[#363062] hover:bg-[#2A2D3A] text-white py-4 rounded-lg font-bold flex items-center justify-center transition-colors"
            >
              Get Started
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNextStep}
              className="w-full bg-[#363062] hover:bg-[#2A2D3A] text-white py-4 rounded-lg font-bold flex items-center justify-center transition-colors"
            >
              Next
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 