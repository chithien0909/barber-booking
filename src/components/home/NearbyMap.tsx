import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NearbyMap() {
  return (
    <div className="w-full rounded-lg overflow-hidden relative">
      <div className="h-52 bg-gray-100 relative">
        <Image
          src="/map-bg.jpg"
          alt="Map"
          fill
          className="object-cover"
        />
        
        {/* Current location pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-blue-500 opacity-20 absolute -top-6 -left-6"></div>
            <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
          </div>
        </div>
        
        {/* Barbershop pins */}
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-8 h-8 rounded-full bg-[#F99417] flex items-center justify-center">
            <ShoppingBag size={16} className="text-white" />
          </div>
        </div>
        
        <div className="absolute top-1/4 left-1/3">
          <div className="w-8 h-8 rounded-full bg-[#F99417] flex items-center justify-center">
            <ShoppingBag size={16} className="text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-[10%]">
          <div className="w-8 h-8 rounded-full bg-[#F99417] flex items-center justify-center">
            <ShoppingBag size={16} className="text-white" />
          </div>
        </div>
        
        <Link 
          href="/map"
          className="absolute bottom-4 right-4 bg-[#363062] text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2"
        >
          <Search size={16} />
          Find now
        </Link>
      </div>
    </div>
  );
} 