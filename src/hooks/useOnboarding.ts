'use client';

import { useState } from 'react';
import { useOnboardingContext } from '@/providers/OnboardingProvider';

export function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const { hasCompletedOnboarding, setHasCompletedOnboarding, resetOnboarding } = useOnboardingContext();
  
  // Go to next step
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  // Reset to first step
  const resetSteps = () => {
    setCurrentStep(1);
  };
  
  // Mark onboarding as completed
  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
  };
  
  return {
    currentStep,
    hasCompletedOnboarding,
    nextStep,
    resetSteps,
    completeOnboarding,
    resetOnboarding
  };
} 