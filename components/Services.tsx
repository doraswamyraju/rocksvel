import React from 'react';
import { TrendingUp, Users, Lightbulb, Handshake, Target, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const services: ServiceItem[] = [
  {
    title: "Strategic Leadership",
    description: "Equip your managers with the skills to lead with vision, empathy, and strategic foresight.",
    iconName: "Target"
  },
  {
    title: "Sales Mastery",
    description: "Close more deals and build lasting partnerships with advanced persuasion techniques.",
    iconName: "Handshake"
  },
  {
    title: "Innovation Mindset",
    description: "Foster an intrapreneurial mindset within your organization to drive innovation.",
    iconName: "Lightbulb"
  },
  {
    title: "High-Performance Teams",
    description: "Create a cohesive, high-energy culture that thrives on collaboration and trust.",
    iconName: "Users"
  },
  {
    title: "Business Scaling",
    description: "Actionable frameworks to scale your operations and increase market share.",
    iconName: "TrendingUp"
  }
];

const IconMap = {
  TrendingUp,
  Users,
  Lightbulb,
  Handshake,
  Target
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      
      {/* Subtle Background Image */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
         <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Office Pattern" 
            className="w-full h-full object-cover grayscale"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2 bg-blue-50 inline-block px-4 py-1.5 rounded-full border border-blue-100">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Training That Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Results</span></h3>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don't just teach theory. We provide actionable strategies tailored for business owners and high-performance teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-200 hover:-translate-y-2 relative overflow-hidden h-full">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-cyan-500 transition-all duration-300 group-hover:rotate-3 shadow-sm border border-blue-100 group-hover:border-transparent group-hover:shadow-lg">
                      <Icon className="text-brand-600 group-hover:text-white transition-colors duration-300" size={32} />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-brand-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          
          {/* Custom Card for "More Services" */}
          <Reveal delay={services.length * 100}>
            <div className="bg-brand-900 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
               <div className="absolute inset-0 bg-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-overlay" alt="" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">Need Something Custom?</h4>
                  <p className="text-brand-100 mb-6">We design bespoke training modules for unique organizational challenges.</p>
                  <button className="bg-white text-brand-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg group-hover:scale-105 transform">
                    Contact Us
                  </button>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};