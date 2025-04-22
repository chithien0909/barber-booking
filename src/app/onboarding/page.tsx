'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar, Scissors, MapPin, CheckCheck } from 'lucide-react';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useRouter } from 'next/navigation';

// Onboarding steps data
const onboardingSteps = [
  {
    id: 1,
    title: 'Easy Booking',
    description: 'Book your haircut with your favorite barber in seconds',
    icon: Calendar,
    image: '/onboarding/booking.png'
  },
  {
    id: 2,
    title: 'Professional Barbers',
    description: 'Choose from our selection of experienced professional barbers',
    icon: Scissors,
    image: '/onboarding/barbers.png'
  },
  {
    id: 3,
    title: 'Multiple Locations',
    description: 'Find barbers close to you in various locations',
    icon: MapPin,
    image: '/onboarding/locations.png'
  },
  {
    id: 4,
    title: 'Ready to Go!',
    description: 'You\'re all set to enjoy the best haircut experience',
    icon: CheckCheck,
    image: '/onboarding/ready.png'
  }
];

export default function OnboardingPage() {
  const { currentStep, hasCompletedOnboarding, nextStep, completeOnboarding } = useOnboarding();
  const router = useRouter();
  
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
      <div className="flex-grow flex flex-col items-center justify-center px-5 py-10">
        {/* Image */}
        <div className="w-full max-w-sm h-[300px] mb-10 bg-accent rounded-xl relative overflow-hidden flex items-center justify-center">
          <div className="w-48 h-48 bg-primary-light rounded-full flex items-center justify-center">
            {currentStepData?.icon && (
              <currentStepData.icon className="w-20 h-20 text-primary" />
            )}
          </div>
        </div>
        
        {/* Title and Description */}
        <h1 className="text-2xl font-bold text-secondary mb-3 text-center">
          {currentStepData?.title}
        </h1>
        <p className="text-text-secondary mb-10 text-center max-w-xs">
          {currentStepData?.description}
        </p>
        
        {/* Progress Indicators */}
        <div className="flex space-x-2 mb-10">
          {onboardingSteps.map(step => (
            <div 
              key={step.id}
              className={`w-2 h-2 rounded-full transition-colors ${
                step.id === currentStep 
                  ? 'bg-primary' 
                  : step.id < currentStep 
                    ? 'bg-primary-light' 
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="px-5 py-6 border-t border-gray-100">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button 
            onClick={handleComplete}
            className="text-text-secondary font-medium"
          >
            Skip
          </button>
          
          {isLastStep ? (
            <button
              onClick={handleComplete}
              className="bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-lg font-medium flex items-center transition-colors"
            >
              Get Started
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNextStep}
              className="bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-lg font-medium flex items-center transition-colors"
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