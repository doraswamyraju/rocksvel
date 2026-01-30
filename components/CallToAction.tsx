import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/90 to-brand-900/80"></div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <Reveal className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Elevate Your Team?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Join the 100+ companies that have scaled their growth with Rocksvel's expert training programs. The future of your business starts with your people.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-white to-gray-100 text-brand-700 px-8 py-4 rounded-full font-bold text-lg hover:to-white transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Schedule Free Consultation
          </button>
          <button 
            onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm shadow-lg"
          >
            Build Curriculum
            <ArrowRight size={20} />
          </button>
        </div>
      </Reveal>
    </section>
  );
};