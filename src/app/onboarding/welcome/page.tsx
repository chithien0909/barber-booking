'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function WelcomePage() {
  const router = useRouter();
  
  const handleGetStarted = () => {
    router.push('/onboarding');
  };
  
  return (
    <div className="min-h-screen bg-[#363062] flex flex-col">
      {/* Hero Content */}
      <div className="flex-grow flex flex-col px-5">
        {/* Background Design Elements */}
        <div className="absolute top-0 right-0 w-full h-60 overflow-hidden">
          <div className="absolute top-10 right-[-50px] w-40 h-40 rounded-full bg-[#F99417] opacity-20"></div>
          <div className="absolute top-40 right-[20px] w-20 h-20 rounded-full bg-[#F99417] opacity-15"></div>
        </div>
        
        {/* Logo */}
        <div className="mt-16 mb-auto">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white">
              Barber<span className="text-[#F99417]">Book</span>
            </h1>
          </div>
        </div>
        
        {/* Image and Text */}
        <div className="mb-10">
          <div className="w-full h-[300px] mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 bg-[#2A2D3A] rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-[#F99417] opacity-20 rounded-full flex items-center justify-center">
                  <div className="text-[#F99417] text-9xl font-bold">B</div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3 text-left">
            Welcome to BarberBook
          </h2>
          <p className="text-gray-300 text-left leading-relaxed">
            Find the best grooming experience in your city with just one tap! Don't miss out on the haircut or treatment of your dreams. Let's start now!
          </p>
        </div>
      </div>
      
      {/* Bottom Action */}
      <div className="px-5 py-12">
        <button
          onClick={handleGetStarted}
          className="w-full bg-[#F99417] hover:bg-[#F88404] text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center transition-colors text-lg"
        >
          Get Started
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 