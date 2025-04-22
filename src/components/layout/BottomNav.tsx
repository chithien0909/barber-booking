import Link from 'next/link';
import { Home, Calendar, MessageCircle, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="h-1 w-full bg-gray-100"></div>
      <div className="flex justify-between px-6 py-2">
        <Link 
          href="/"
          className="flex flex-col items-center"
        >
          <Home 
            size={20} 
            className={pathname === '/' ? 'text-[#363062]' : 'text-gray-400'} 
          />
          <span className={`text-xs mt-1 ${pathname === '/' ? 'text-[#363062] font-medium' : 'text-gray-400'}`}>
            Home
          </span>
        </Link>
        
        <Link 
          href="/appointments"
          className="flex flex-col items-center"
        >
          <Calendar 
            size={20} 
            className={pathname === '/appointments' ? 'text-[#363062]' : 'text-gray-400'} 
          />
          <span className={`text-xs mt-1 ${pathname === '/appointments' ? 'text-[#363062] font-medium' : 'text-gray-400'}`}>
            Booking
          </span>
        </Link>
        
        <Link 
          href="/chat"
          className="flex flex-col items-center"
        >
          <MessageCircle 
            size={20} 
            className={pathname === '/chat' ? 'text-[#363062]' : 'text-gray-400'} 
          />
          <span className={`text-xs mt-1 ${pathname === '/chat' ? 'text-[#363062] font-medium' : 'text-gray-400'}`}>
            Chat
          </span>
        </Link>
        
        <Link 
          href="/profile"
          className="flex flex-col items-center"
        >
          <User 
            size={20} 
            className={pathname === '/profile' ? 'text-[#363062]' : 'text-gray-400'} 
          />
          <span className={`text-xs mt-1 ${pathname === '/profile' ? 'text-[#363062] font-medium' : 'text-gray-400'}`}>
            Profile
          </span>
        </Link>
      </div>
      <div className="h-1 bg-white"></div>
    </div>
  );
} 