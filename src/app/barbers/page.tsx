import { Search, MapPin, Filter } from 'lucide-react';
import BarberCard from '@/components/barbers/BarberCard';

// Mock data for barbers
const barbers = [
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
  {
    id: 4,
    name: 'Robert Taylor',
    rating: 4.6,
    reviews: 87,
    specialties: ['Classic Cut', 'Hair Styling', 'Shave'],
    image: '/barbers/barber4.jpg',
    location: 'Elite Barbershop'
  },
  {
    id: 5,
    name: 'Chris Harris',
    rating: 4.9,
    reviews: 132,
    specialties: ['Fade', 'Beard Design', 'Hair Treatment'],
    image: '/barbers/barber5.jpg',
    location: 'Premium Cuts'
  },
  {
    id: 6,
    name: 'James Wilson',
    rating: 4.5,
    reviews: 92,
    specialties: ['Kids Cut', 'Beard Trim', 'Hair Styling'],
    image: '/barbers/barber6.jpg',
    location: 'Family Barbers'
  },
];

export default function BarbersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-6">Find Your Barber</h1>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search barbers by name or service"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-lg transition-colors md:w-auto">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>
      
      {/* Barbers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {barbers.map(barber => (
          <BarberCard key={barber.id} barber={barber} />
        ))}
      </div>
    </div>
  );
} 