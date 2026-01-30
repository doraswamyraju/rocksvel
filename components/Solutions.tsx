import React from 'react';
import { TrendingDown, Users2, ShieldAlert, Puzzle, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: TrendingDown,
      problem: "Declining Sales Numbers",
      solution: "High-Impact Sales Mastery Workshops",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users2,
      problem: "Team Communication Gaps",
      solution: "Collaborative Intelligence Training",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: ShieldAlert,
      problem: "Leadership & Management Void",
      solution: "Executive Leadership Development",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Puzzle,
      problem: "Low Employee Engagement",
      solution: "Culture & Motivation Bootcamps",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Real Problems, Real Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            We Bridge the Gap Between <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Potential & Performance</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={24} />
                </div>

                <div className="mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">The Challenge</p>
                  <h4 className="text-lg font-semibold text-gray-700 line-through decoration-red-400 decoration-2">{item.problem}</h4>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-brand-600 uppercase tracking-wide">The Rocksvel Solution</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1 leading-tight group-hover:text-brand-700 transition-colors">
                    {item.solution}
                  </h3>
                </div>

                <div className="mt-6 flex items-center text-sm font-bold text-brand-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore Module <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};