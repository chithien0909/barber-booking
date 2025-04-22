import { Search, Settings } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex gap-3 w-full">
      <div className="flex-1 bg-[#EBF0F5] rounded-lg px-4 py-3 flex items-center gap-3">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search barber's, haircut service"
          className="bg-transparent border-none outline-none text-sm flex-1 text-gray-600 placeholder-gray-500"
        />
      </div>
      
      <button 
        className="bg-[#363062] rounded-lg w-12 h-12 flex items-center justify-center"
        aria-label="Filter options"
      >
        <Settings size={20} className="text-white" />
      </button>
    </div>
  );
} 