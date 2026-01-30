import React from 'react';
import { Users, Briefcase, Award, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

export const Stats: React.FC = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Teams Trained" },
    { icon: Briefcase, value: "120+", label: "Corporate Clients" },
    { icon: Clock, value: "10k+", label: "Training Hours" },
    { icon: Award, value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="bg-brand-900 py-20 border-b border-brand-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply"></div>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100} className="group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 backdrop-blur-sm border border-transparent hover:border-white/10">
              <div className="flex justify-center mb-4">
                <stat.icon size={32} className="text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-brand-200 text-sm font-medium uppercase tracking-wider group-hover:text-blue-200">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};