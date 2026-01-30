import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Reveal } from './Reveal';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "VP of Sales",
      company: "TechSolutions India",
      rating: 5,
      content: "The Rocksvel team completely transformed our sales approach. We saw a 30% increase in closed deals within 3 months of the workshop.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      role: "HR Director",
      company: "Innovate Pharma",
      rating: 5,
      content: "Finally, a training program that isn't boring! The energy and practical insights kept our entire team engaged from start to finish.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "CEO",
      company: "Urban FinTech",
      rating: 5,
      content: "The leadership module was an eye-opener. It helped our managers move from micromanaging to empowering their teams effectively.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wide uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from leaders who have transformed their teams and scaled their businesses with Rocksvel's expert training.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={t.id} delay={index * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 relative group border border-gray-100 h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-brand-100 w-12 h-12 rotate-12 group-hover:text-brand-200 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed flex-grow">"{t.content}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-100 group-hover:border-brand-300 transition-colors shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.name}</h4>
                    <p className="text-sm text-brand-600 font-medium">{t.role}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};