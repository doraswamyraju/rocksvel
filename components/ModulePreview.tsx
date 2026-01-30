import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, CheckCircle2, ChevronRight, BarChart3, Users, Brain, Zap, GraduationCap, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { SampleModule } from '../types';
import { Reveal } from './Reveal';

export const ModulePreview: React.FC = () => {
  const modules: SampleModule[] = [
    {
      id: 'negotiation',
      title: "The Art of Negotiation",
      category: "Sales & Persuasion",
      duration: "2 Days (16 Hours)",
      description: "Master the psychological and tactical aspects of deal-making. Learn to create win-win scenarios while protecting your margins and building long-term relationships.",
      takeaways: [
        "BATNA & ZOPA: Advanced framework application",
        "Reading micro-expressions and body language",
        "Overcoming deadlocks and handling objections",
        "Structuring high-value contracts"
      ],
      prerequisites: ["Foundations of Sales or 1+ year sales experience"],
      caseStudies: ["The 6-Month Enterprise Standoff", "Vendor Price Hike Negotiations"],
      objectives: ["Identify leverage points in complex deals", "Separate people from the problem", "Protect margins during concession trades"]
    },
    {
      id: 'emotional-intelligence',
      title: "Emotional Intelligence at Work",
      category: "Leadership",
      duration: "1 Day (8 Hours)",
      description: "High-performing teams aren't just smart; they are emotionally agile. This module helps leaders and teams navigate complex interpersonal dynamics with empathy.",
      takeaways: [
        "Self-regulation under pressure",
        "Empathy mapping for conflict resolution",
        "Giving and receiving difficult feedback",
        "Building psychological safety in teams"
      ],
      prerequisites: ["None - Open to all levels"],
      caseStudies: ["Turning Toxic Culture Around", "The High-Performer with Low EQ"],
      objectives: ["Develop greater self-awareness", "Navigate office politics with integrity", "Manage stress and burnout effectively"]
    },
    {
      id: 'agile-leadership',
      title: "Agile Leadership for Uncertainty",
      category: "Management",
      duration: "3 Days (24 Hours)",
      description: "Traditional management fails in volatile markets. Equip your leaders with the tools to pivot quickly, empower decentralized decision-making, and lead through change.",
      takeaways: [
        "Moving from command-and-control to servant leadership",
        "Implementing rapid feedback loops",
        "Managing distributed/hybrid teams effectively",
        "Crisis management simulations"
      ],
      prerequisites: ["Management Experience (3+ years)"],
      caseStudies: ["Scaling a Startup from 10 to 100", "Pivot or Perish: A Crisis Simulation"],
      objectives: ["Foster a culture of experimentation", "Decentralize decision-making safely", "Lead effectively in hybrid environments"]
    },
    {
      id: 'productivity',
      title: "Peak Performance & Productivity",
      category: "Personal Development",
      duration: "4 Hours (Half Day)",
      description: "Eliminate burnout and busy work. This high-energy workshop focuses on prioritization, flow states, and sustainable work habits for maximum output.",
      takeaways: [
        "The Eisenhower Matrix deep dive",
        "Techniques to achieve 'Flow State' on demand",
        "Digital detox and focus management",
        "Energy management vs. Time management"
      ],
      prerequisites: ["None"],
      caseStudies: ["The 4-Day Work Week Experiment", "Inbox Zero for Executives"],
      objectives: [" reclaim 10+ hours per week", "Eliminate decision fatigue", "Optimize biological peak performance times"]
    }
  ];

  const [activeModule, setActiveModule] = useState<SampleModule>(modules[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion when module changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeModule.id]);

  // Icons helper
  const getIcon = (id: string) => {
    switch (id) {
      case 'negotiation': return <BarChart3 size={24} />;
      case 'emotional-intelligence': return <Brain size={24} />;
      case 'agile-leadership': return <Users size={24} />;
      case 'productivity': return <Zap size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  // Get related modules (simple logic: show other modules)
  const relatedModules = modules
    .filter(m => m.id !== activeModule.id)
    .slice(0, 2);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-[-12deg] translate-x-1/4 -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">Inside the Classroom</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Preview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a few of our most popular training modules. Click on a topic to see what your team will learn.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* List Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {modules.map((module, index) => (
              <Reveal key={module.id} delay={index * 100} direction="left">
                <button
                  onClick={() => setActiveModule(module)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    activeModule.id === module.id
                      ? 'bg-brand-900 text-white border-brand-900 shadow-xl scale-105'
                      : 'bg-white text-gray-700 border-gray-100 hover:border-brand-200 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors ${activeModule.id === module.id ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-500 group-hover:text-brand-600 group-hover:bg-brand-50'}`}>
                      {getIcon(module.id)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">{module.title}</h4>
                      <span className={`text-xs font-medium uppercase tracking-wider ${activeModule.id === module.id ? 'text-brand-200' : 'text-gray-400'}`}>
                        {module.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform duration-300 relative z-10 ${activeModule.id === module.id ? 'text-white translate-x-1' : 'text-gray-300 group-hover:text-brand-600'}`} 
                  />
                </button>
              </Reveal>
            ))}
          </div>

          {/* Details Column */}
          <Reveal className="w-full lg:w-2/3" delay={200} direction="right">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col hover:shadow-brand-100/50 transition-shadow duration-500">
              
              {/* Background Icon Watermark */}
              <div className="absolute -bottom-10 -right-10 text-gray-50 opacity-50 transform rotate-12 transition-all duration-500 pointer-events-none">
                 {React.cloneElement(getIcon(activeModule.id) as React.ReactElement<any>, { size: 300, strokeWidth: 1 })}
              </div>

              <div className="relative z-10 animate-fadeIn" key={activeModule.id}>
                {/* Header Info */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full font-bold text-sm border border-brand-100">
                    <Clock size={16} />
                    {activeModule.duration}
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full font-semibold text-sm">
                    <GraduationCap size={16} />
                    {activeModule.category}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  {activeModule.title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {activeModule.description}
                </p>

                {/* Core Content */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-brand-600" />
                    Key Takeaways
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeModule.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                        <span className="text-gray-700 font-medium">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Details Section */}
                <div className="mb-8">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors focus:outline-none group"
                  >
                    {isExpanded ? 'Hide Detailed Curriculum' : 'View Detailed Curriculum & Case Studies'}
                    <ChevronDown size={20} className={`transition-transform duration-300 group-hover:translate-y-1 ${isExpanded ? 'rotate-180 group-hover:translate-y-0' : ''}`} />
                  </button>

                  <div className={`grid gap-6 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    
                    {/* Objectives */}
                    {activeModule.objectives && (
                       <div>
                         <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                           <Target size={18} className="text-brand-600" /> Learning Objectives
                         </h5>
                         <ul className="list-disc list-inside space-y-1 text-gray-600 ml-1">
                           {activeModule.objectives.map((obj, i) => (
                             <li key={i}>{obj}</li>
                           ))}
                         </ul>
                       </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Case Studies */}
                      {activeModule.caseStudies && (
                        <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                           <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                             <FileText size={16} className="text-brand-600" /> Case Studies
                           </h5>
                           <ul className="space-y-2">
                             {activeModule.caseStudies.map((cs, i) => (
                               <li key={i} className="text-sm text-gray-700 bg-white px-3 py-2 rounded border border-blue-50 shadow-sm">
                                 {cs}
                               </li>
                             ))}
                           </ul>
                        </div>
                      )}

                      {/* Prerequisites */}
                      {activeModule.prerequisites && (
                        <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
                           <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                             <GraduationCap size={16} className="text-orange-500" /> Prerequisites
                           </h5>
                           <ul className="space-y-2">
                             {activeModule.prerequisites.map((pr, i) => (
                               <li key={i} className="text-sm text-gray-700">
                                 {pr}
                               </li>
                             ))}
                           </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold rounded-lg hover:from-brand-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 hover:-translate-y-1">
                    Book This Workshop
                    <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-white border-2 border-brand-100 text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-colors flex items-center justify-center hover:border-brand-300">
                    Customize Agenda
                  </button>
                </div>

                {/* Related Modules */}
                <div className="mt-12">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">You might also be interested in</p>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {relatedModules.map((mod) => (
                        <div 
                          key={mod.id}
                          onClick={() => { setActiveModule(mod); document.getElementById('module-preview')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                          className="p-4 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/30 cursor-pointer transition-all group flex items-center gap-3 hover:-translate-y-1 hover:shadow-md bg-white"
                        >
                           <div className="bg-gray-50 p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                              {React.cloneElement(getIcon(mod.id) as React.ReactElement<any>, { size: 20, className: "text-brand-600" })}
                           </div>
                           <div className="overflow-hidden">
                              <h6 className="font-bold text-gray-900 truncate group-hover:text-brand-700 transition-colors">{mod.title}</h6>
                              <p className="text-xs text-gray-500">{mod.duration} • {mod.category}</p>
                           </div>
                           <ChevronRight size={16} className="ml-auto text-gray-300 group-hover:text-brand-500" />
                        </div>
                      ))}
                   </div>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Helper for icons used inside the mapped content if not imported
const Target = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);