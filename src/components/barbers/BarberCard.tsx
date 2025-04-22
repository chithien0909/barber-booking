import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';

interface BarberCardProps {
  barber: {
    id: number;
    name: string;
    rating: number;
    reviews: number;
    specialties: string[];
    image: string;
    location: string;
  }
}

const BarberCard = ({ barber }: BarberCardProps) => {
  return (
    <Link href={`/barbers/${barber.id}`} className="block">
      <div className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full bg-secondary-light">
          {/* This would be a real image in production */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Barber Image {barber.id}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-secondary">{barber.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="ml-1 text-secondary font-medium">{barber.rating}</span>
              <span className="ml-1 text-text-secondary text-sm">({barber.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center text-text-secondary mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{barber.location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {barber.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="text-xs bg-primary-light text-primary py-1 px-2 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <button className="w-full mt-4 bg-primary hover:bg-primary-hover text-white font-medium py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BarberCard; 