import React from 'react';
import { Search, PenTool, Presentation, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your current team dynamics, gaps, and business goals."
    },
    {
      icon: PenTool,
      title: "Design",
      description: "We customize a curriculum specifically tailored to your industry needs."
    },
    {
      icon: Presentation,
      title: "Delivery",
      description: "Our experts deliver high-impact, interactive training sessions."
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "We measure results and provide follow-up coaching for retention."
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
          alt="Process Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-brand-900/90"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-brand-200 max-w-2xl mx-auto text-lg">
            A systematic approach to ensuring your investment in training yields real ROI.
          </p>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-700"></div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150} direction="up" className="h-full">
                <div className="relative flex flex-col items-center text-center group h-full">
                  <div className="w-24 h-24 bg-brand-800 border-4 border-brand-700 rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-brand-600 shadow-xl">
                    <step.icon size={32} className="text-blue-300 group-hover:text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold border-2 border-brand-900">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};