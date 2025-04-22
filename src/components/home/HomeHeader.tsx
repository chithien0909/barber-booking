import { MapPin } from 'lucide-react';
import Image from 'next/image';

type HomeHeaderProps = {
  userName: string;
  location: string;
  profileImage?: string;
};

export default function HomeHeader({
  userName,
  location,
  profileImage
}: HomeHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-gray-900">{userName}</h1>
        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-gray-500" />
          <span className="text-sm text-gray-500">{location}</span>
        </div>
      </div>
      
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
        {profileImage ? (
          <Image
            src={profileImage}
            alt={userName}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#363062] text-white text-sm">
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
} 