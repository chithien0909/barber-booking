import Link from 'next/link';
import { UserCircle2, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">Barber<span className="text-secondary">Book</span></Link>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/profile" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
          >
            <UserCircle2 className="w-5 h-5 text-secondary" />
            <span className="text-secondary hidden md:block">Profile</span>
          </Link>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-secondary" />
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-text-primary hover:text-primary font-medium">Home</Link>
            <Link href="/barbers" className="text-text-primary hover:text-primary font-medium">Barbers</Link>
            <Link href="/appointments" className="text-text-primary hover:text-primary font-medium">Appointments</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 