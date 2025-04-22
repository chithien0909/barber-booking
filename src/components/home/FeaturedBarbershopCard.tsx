import { MapPin, Star, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedBarbershopCardProps = {
  id: number;
  name: string;
  location: string;
  distance: string;
  rating: number;
  image: string;
};

export default function FeaturedBarbershopCard({
  id,
  name,
  location,
  distance,
  rating,
  image,
}: FeaturedBarbershopCardProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden relative">
      <div className="h-56 bg-gray-200 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        
        <Link 
          href={`/barbers/${id}/book`}
          className="absolute bottom-4 right-4 bg-[#363062] text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2"
        >
          <Calendar size={16} />
          Booking
        </Link>
      </div>
      
      <div className="p-3 bg-white">
        <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
        
        <div className="flex items-center gap-1 mb-1">
          <MapPin size={14} className="text-gray-500" />
          <span className="text-sm text-gray-500">{location} ({distance})</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Star size={14} className="text-gray-500" />
          <span className="text-sm text-gray-500">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
} 