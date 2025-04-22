import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Scissors, MoreVertical } from 'lucide-react';
import Link from 'next/link';

// Mock data for appointments
const upcomingAppointments = [
  {
    id: 1,
    barberName: 'John Smith',
    barberImage: '/barbers/barber1.jpg',
    service: 'Haircut & Beard',
    location: 'Downtown Barbershop',
    date: 'Today',
    time: '11:30 AM',
    price: 35,
    status: 'confirmed'
  },
  {
    id: 2,
    barberName: 'Mike Johnson',
    barberImage: '/barbers/barber2.jpg',
    service: 'Skin Fade',
    location: 'Luxury Cuts',
    date: 'Tomorrow',
    time: '2:00 PM',
    price: 30,
    status: 'confirmed'
  }
];

const pastAppointments = [
  {
    id: 3,
    barberName: 'David Williams',
    barberImage: '/barbers/barber3.jpg',
    service: 'Classic Cut',
    location: 'Modern Barbers',
    date: 'June 15, 2023',
    time: '10:00 AM',
    price: 25,
    status: 'completed'
  },
  {
    id: 4,
    barberName: 'John Smith',
    barberImage: '/barbers/barber1.jpg',
    service: 'Beard Trim',
    location: 'Downtown Barbershop',
    date: 'May 28, 2023',
    time: '3:30 PM',
    price: 15,
    status: 'completed'
  },
  {
    id: 5,
    barberName: 'Chris Harris',
    barberImage: '/barbers/barber5.jpg',
    service: 'Haircut & Hair Treatment',
    location: 'Premium Cuts',
    date: 'May 10, 2023',
    time: '1:00 PM',
    price: 45,
    status: 'cancelled'
  }
];

// Appointment Card Component
const AppointmentCard = ({ appointment }: { appointment: any }) => {
  const isUpcoming = appointment.status === 'confirmed';
  const isCancelled = appointment.status === 'cancelled';
  
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-secondary">{appointment.barberName}</h3>
            <p className="text-text-secondary">{appointment.service}</p>
          </div>
          <button className="text-gray-400 hover:text-secondary">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-text-secondary">
            <Calendar className="w-5 h-5 mr-3 text-primary" />
            <span>{appointment.date}, {appointment.time}</span>
          </div>
          <div className="flex items-center text-text-secondary">
            <MapPin className="w-5 h-5 mr-3 text-primary" />
            <span>{appointment.location}</span>
          </div>
          <div className="flex items-center text-text-secondary">
            <Scissors className="w-5 h-5 mr-3 text-primary" />
            <span>${appointment.price}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {isCancelled ? (
            <span className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded-full">Cancelled</span>
          ) : isUpcoming ? (
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary-light text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                Reschedule
              </button>
              <button className="px-4 py-2 border border-gray-200 text-text-secondary rounded-lg font-medium hover:border-red-500 hover:text-red-500 transition-colors">
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link 
                href={`/barbers/${appointment.id}`} 
                className="px-4 py-2 bg-primary-light text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Book Again
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-6">My Appointments</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingAppointments.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-secondary mb-2">No Upcoming Appointments</h3>
                <p className="text-text-secondary mb-6">You don't have any upcoming appointments scheduled.</p>
                <Link 
                  href="/barbers" 
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
                >
                  Book an Appointment
                </Link>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastAppointments.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {pastAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-secondary mb-2">No Past Appointments</h3>
                <p className="text-text-secondary">You don't have any past appointments.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 