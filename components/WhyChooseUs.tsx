import React from 'react';
import { ShieldCheck, Rocket, Zap, HeartHandshake, Mic2, BrainCircuit } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Proven Methodologies",
      description: "Our curriculum is backed by behavioral psychology and real-world business case studies."
    },
    {
      icon: Rocket,
      title: "Immediate Impact",
      description: "We focus on actionable tools that employees can implement the very next day."
    },
    {
      icon: Zap,
      title: "High-Energy Delivery",
      description: "No boring lectures. Our sessions are interactive, gamified, and highly engaging."
    },
    {
      icon: BrainCircuit,
      title: "Smart-Enhanced Learning",
      description: "We leverage modern tech tools to personalize the learning experience for every team."
    },
    {
      icon: Mic2,
      title: "World-Class Speakers",
      description: "Learn from industry veterans who have walked the talk and led successful teams."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      description: "We don't just train and leave. We provide post-training support to ensure retention."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop"
          alt="Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-3 py-1 rounded-full border border-brand-100">Why Rocksvel?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            The Rocksvel <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We move beyond standard presentations to create transformative learning experiences that stick.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-brand-50 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-brand-600"></div>

                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-600 transition-colors duration-300 shadow-sm">
                  <feature.icon size={28} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};