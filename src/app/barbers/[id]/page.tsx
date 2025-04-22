import { Star, MapPin, Clock, Calendar, ChevronLeft, Scissors, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for the barber
const barberData = {
  id: 1,
  name: 'John Smith',
  rating: 4.8,
  reviews: 124,
  specialties: ['Beard Trim', 'Fade', 'Classic Cut'],
  image: '/barbers/barber1.jpg',
  location: 'Downtown Barbershop',
  about: 'Professional barber with over 10 years of experience specializing in classic cuts, fades, and beard trims. Known for attention to detail and creating personalized looks for each client.',
  services: [
    { id: 1, name: 'Haircut', price: 25, duration: 30 },
    { id: 2, name: 'Beard Trim', price: 15, duration: 20 },
    { id: 3, name: 'Haircut & Beard', price: 35, duration: 45 },
    { id: 4, name: 'Kids Cut', price: 20, duration: 25 },
    { id: 5, name: 'Hair Styling', price: 30, duration: 40 },
  ],
  availableTimes: [
    { id: 1, time: '09:00 AM' },
    { id: 2, time: '10:00 AM' },
    { id: 3, time: '11:30 AM' },
    { id: 4, time: '01:00 PM' },
    { id: 5, time: '02:30 PM' },
    { id: 6, time: '04:00 PM' },
    { id: 7, time: '05:30 PM' },
  ]
};

export default function BarberDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the barber data based on the ID
  // const barberId = params.id;
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/barbers" 
        className="inline-flex items-center text-secondary hover:text-primary mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        <span>Back to barbers</span>
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Barber Info Section */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="relative h-64 w-full bg-secondary-light">
              {/* This would be a real image in production */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Barber Image
              </div>
            </div>
            
            <div className="p-5">
              <h1 className="text-2xl font-bold text-secondary mb-2">{barberData.name}</h1>
              
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="ml-1 text-secondary font-medium">{barberData.rating}</span>
                <span className="ml-1 text-text-secondary">({barberData.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center text-text-secondary mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{barberData.location}</span>
              </div>
              
              <h3 className="font-semibold text-secondary mb-2">Specialties</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {barberData.specialties.map((specialty, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-primary-light text-primary py-1 px-3 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-secondary mb-2">About</h3>
              <p className="text-text-secondary mb-4">{barberData.about}</p>
              
              <div className="flex items-center text-text-secondary">
                <Clock className="w-5 h-5 mr-2" />
                <span>Available Mon-Sat, 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">Book an Appointment</h2>
            
            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-secondary mb-4">Select Service</h3>
              <div className="space-y-3">
                {barberData.services.map(service => (
                  <div 
                    key={service.id} 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors"
                  >
                    <div className="flex items-center">
                      <Scissors className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <h4 className="font-medium text-secondary">{service.name}</h4>
                        <div className="flex items-center text-sm text-text-secondary">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{service.duration} min</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-secondary mr-4">${service.price}</span>
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-secondary mb-4">Select Date</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[...Array(7)].map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() + index);
                  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
                  const dayNum = date.getDate();
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-lg border-2 cursor-pointer transition-colors ${index === 0 ? 'border-primary bg-primary-light' : 'border-gray-200 hover:border-primary'}`}
                    >
                      <span className="text-sm text-text-secondary">{day}</span>
                      <span className="text-lg font-bold text-secondary">{dayNum}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Time Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-secondary mb-4">Select Time</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {barberData.availableTimes.map(slot => (
                  <div 
                    key={slot.id} 
                    className={`p-3 text-center rounded-lg border-2 border-gray-200 hover:border-primary cursor-pointer transition-colors ${slot.id === 3 ? 'border-primary bg-primary-light' : ''}`}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Booking Summary */}
            <div className="bg-accent rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-secondary mb-3">Booking Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Service:</span>
                  <span className="font-medium text-secondary">Haircut & Beard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Date:</span>
                  <span className="font-medium text-secondary">Today, 11:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Duration:</span>
                  <span className="font-medium text-secondary">45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Price:</span>
                  <span className="font-bold text-primary">$35</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 