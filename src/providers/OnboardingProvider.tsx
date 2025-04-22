'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type OnboardingContextType = {
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (value: boolean) => void;
  resetOnboarding: () => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for onboarding status
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (onboardingCompleted === 'true') {
      setHasCompletedOnboarding(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Update localStorage when state changes
    if (!isLoading) {
      localStorage.setItem('onboardingCompleted', hasCompletedOnboarding.toString());
    }
  }, [hasCompletedOnboarding, isLoading]);

  const resetOnboarding = () => {
    localStorage.removeItem('onboardingCompleted');
    setHasCompletedOnboarding(false);
  };

  return (
    <OnboardingContext.Provider
      value={{
        hasCompletedOnboarding,
        setHasCompletedOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboardingContext must be used within an OnboardingProvider');
  }
  return context;
} 