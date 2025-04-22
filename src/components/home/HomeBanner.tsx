import Image from 'next/image';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="w-full rounded-lg bg-[#F99417] relative overflow-hidden">
      <div className="p-5 flex flex-col justify-between h-full z-10 relative">
        <div className="mb-4">
          <div className="bg-white bg-opacity-20 rounded px-2 py-1 inline-block mb-2">
            <Image 
              src="/logo.png" 
              alt="Barber Logo" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
          </div>
        </div>
        
        <Link 
          href="/barbers"
          className="bg-[#363062] text-white rounded-lg px-6 py-3 text-center font-semibold mt-4 w-fit"
        >
          Booking Now
        </Link>
      </div>
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-bg.jpg"
          alt="Banner background"
          fill
          className="object-cover mix-blend-overlay opacity-60"
        />
      </div>
    </div>
  );
} 