import React from 'react';
import { Award, Users, Globe2, Zap, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { icon: Award, text: "Experienced Corporate Trainers" },
    { icon: Zap, text: "Practical & Interactive Sessions" },
    { icon: Users, text: "Customized Programs (Not Generic)" },
    { icon: Globe2, text: "On-site & Online Training" },
    { icon: MapPin, text: "Serving Hyderabad & PAN India" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-6 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <div className="bg-brand-50 p-2 rounded-full group-hover:bg-brand-100 transition-colors">
                <item.icon size={20} className="text-brand-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-800 transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};