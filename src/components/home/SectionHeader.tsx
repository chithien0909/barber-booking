import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type SectionHeaderProps = {
  title: string;
  viewAllLink?: string;
};

export default function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      
      {viewAllLink && (
        <Link 
          href={viewAllLink}
          className="text-[#363062] border border-[#363062] rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-1"
        >
          See All
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
} 