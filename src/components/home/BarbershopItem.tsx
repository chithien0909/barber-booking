import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type BarbershopItemProps = {
  id: number;
  name: string;
  location: string;
  distance: string;
  rating: number;
  image: string;
};

export default function BarbershopItem({
  id,
  name,
  location,
  distance,
  rating,
  image,
}: BarbershopItemProps) {
  return (
    <Link href={`/barbers/${id}`} className="flex gap-3 w-full">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="font-bold text-sm text-gray-900 leading-tight">{name}</h3>
        
        <div className="flex items-center gap-1 mt-1">
          <MapPin size={12} className="text-gray-500" />
          <span className="text-xs text-gray-500">{location} ({distance})</span>
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          <Star size={12} className="text-gray-500" />
          <span className="text-xs text-gray-500">{rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
} 