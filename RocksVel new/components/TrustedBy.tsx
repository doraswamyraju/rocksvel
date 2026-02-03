import React from 'react';
import { Reveal } from './Reveal';

export const TrustedBy: React.FC = () => {
  // Placeholder for company logos - using text for now with modern styling
  const companies = [
    "TechFlow", "GlobalCorp", "InnovateX", "FutureScale", "Omega Solutions", "Apex Systems"
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-brand-600 transition-colors cursor-default select-none">
                {company}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};