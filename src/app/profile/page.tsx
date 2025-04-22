import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, Bell, LogOut, Edit2, Lock } from 'lucide-react';
import Link from 'next/link';

// Mock user data
const userData = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  phone: '+1 234 567 8901',
  memberSince: 'June 2023',
  profileImage: '/avatar.jpg'
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-6">Profile</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-5">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-secondary-light rounded-full mb-4 flex items-center justify-center text-white text-2xl">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-xl font-bold text-secondary">{userData.name}</h2>
                <p className="text-text-secondary">Member since {userData.memberSince}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>{userData.phone}</span>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-600 font-medium py-2 rounded-lg hover:bg-red-200 transition-colors">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-card p-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-secondary">Personal Information</h3>
                    <button className="flex items-center gap-1 text-primary font-medium">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Full Name</label>
                      <input
                        type="text"
                        value={userData.name}
                        disabled
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        disabled
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={userData.phone}
                        disabled
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-secondary">Security</h3>
                    <button className="flex items-center gap-1 text-primary font-medium">
                      <Edit2 className="w-4 h-4" />
                      Change
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Current Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary">Notification Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Bell className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-medium text-secondary">Appointment Reminders</h4>
                          <p className="text-sm text-text-secondary">Receive notifications about upcoming appointments</p>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 h-6 border-2 border-gray-200 rounded-full cursor-pointer">
                        <div className="absolute left-0 w-5 h-5 mt-[1px] ml-[1px] bg-primary rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Bell className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-medium text-secondary">Promotional Offers</h4>
                          <p className="text-sm text-text-secondary">Get notifications about deals and discounts</p>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 h-6 border-2 border-gray-200 rounded-full cursor-pointer">
                        <div className="absolute right-0 w-5 h-5 mt-[1px] mr-[1px] bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Bell className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-medium text-secondary">Email Notifications</h4>
                          <p className="text-sm text-text-secondary">Receive email about your appointments and account</p>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 h-6 border-2 border-gray-200 rounded-full cursor-pointer">
                        <div className="absolute left-0 w-5 h-5 mt-[1px] ml-[1px] bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 