import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative bg-brand-900 min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className={`absolute top-0 right-0 w-[800px] h-full bg-brand-800 transform skew-x-[-12deg] origin-top translate-x-1/4 opacity-50 hidden lg:block transition-transform duration-1000 ${mounted ? 'translate-x-1/4' : 'translate-x-full'}`}></div>
      <div className={`absolute top-0 right-0 w-[600px] h-full bg-blue-600 transform skew-x-[-12deg] origin-top translate-x-1/3 opacity-30 hidden lg:block transition-transform duration-1000 delay-100 ${mounted ? 'translate-x-1/3' : 'translate-x-full'}`}></div>
      
      {/* Subtle animated particles/gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Image Overlay for Mobile/Tablet */}
      <div className="absolute inset-0 z-0 lg:hidden">
         <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
            alt="Business Meeting" 
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/20 mb-8 backdrop-blur-md shadow-lg">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Accepting New Corporate Clients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight uppercase italic">
              Empower Teams.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-100 to-white">
                Drive Success.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-lg leading-relaxed font-light">
              Master world-class leadership, sales mastery, and technical growth strategies with RocksVel's intensive training modules.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                  onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-brand-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-brand-400 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-500/20 hover:-translate-y-1 hover:shadow-brand-500/40">
                Get Free Training Plan
                <ArrowRight size={20} />
              </button>
              <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:-translate-y-1">
                Explore Services
              </button>
            </div>
          </div>

          {/* Hero Image / Visual (Desktop Only) */}
          <div className={`hidden lg:block relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
               <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Training Session" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/60 to-transparent"></div>
               
               <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-xs border-l-4 border-brand-500 animate-pulse-slow">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp size={20} className="text-green-600" />
                     </div>
                     <span className="font-bold text-gray-800">RocksVel Impact</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">"RocksVel helped our team scale productivity by 40% through targeted workshops."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};