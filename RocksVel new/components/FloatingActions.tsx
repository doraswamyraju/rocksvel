import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="tel:+919014755686"
        className="group relative flex items-center justify-center w-14 h-14 bg-white text-brand-600 rounded-full shadow-lg border border-brand-100 hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        title="Call Us"
      >
        <div className="absolute right-full mr-4 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </div>
        <Phone size={24} className="animate-pulse-slow" />
      </a>
      
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-brand-600 to-cyan-500 text-white rounded-full shadow-lg shadow-brand-500/30 hover:scale-110 transition-transform duration-300 hover:shadow-brand-500/50"
        title="Book Consultation"
      >
        <div className="absolute right-full mr-4 bg-gray-900 px-3 py-1 rounded-lg shadow-md text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Book Session
        </div>
        <CalendarCheck size={24} />
      </button>
    </div>
  );
};