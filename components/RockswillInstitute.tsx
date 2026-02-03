import React, { useState } from 'react';
import { BookOpen, TrendingUp, Users, Laptop, Brain, Presentation, CheckCircle2, ArrowRight, Building2, GraduationCap, Target, Briefcase, Rocket, Layers, MapPin, Monitor, Calendar, Code2, LineChart, Database, Zap, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';
import { Contact } from './Contact';
import { CourseType } from './CrashCourseLanding';

interface InstituteProps {
   onCourseSelect?: (courseId: CourseType) => void;
}

export const RockswillInstitute: React.FC<InstituteProps> = ({ onCourseSelect }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'tech' | 'soft' | 'entrepreneur'>('foundation');

  const crashCourses = [
    {
      id: 'python-dsa' as CourseType,
      title: "Python DSA Mastery",
      desc: "15 Days to crack top-tier technical interviews. Pattern-based learning.",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
      borderColor: "hover:border-blue-300",
      days: "15 Days"
    },
    {
      id: 'digital-marketing' as CourseType,
      title: "AI Digital Marketing",
      desc: "Revolutionize your marketing with AI tools. 15 days intensive boot camp.",
      icon: LineChart,
      color: "from-orange-500 to-rose-500",
      borderColor: "hover:border-orange-300",
      days: "15 Days"
    },
    {
      id: 'mern-stack' as CourseType,
      title: "MERN Stack Pro",
      desc: "Build & deploy full-stack applications from scratch in just 15 days.",
      icon: Database,
      color: "from-emerald-500 to-green-600",
      borderColor: "hover:border-emerald-300",
      days: "15 Days"
    }
  ];

  const programs = {
    foundation: {
      title: "Commerce Foundation (CFP)",
      icon: Building2,
      subtitle: "The Entry Point",
      description: "The bedrock of your career. Understand money, business, and the economy regardless of your background.",
      modules: [
        "Personal Finance & Budgeting",
        "Accounting & GST Basics",
        "Business Models & Pricing",
        "Banking Products & Credit"
      ],
      color: "from-blue-500 to-indigo-600",
      target: "Everyone"
    },
    tech: {
      title: "Technical Skills Layer",
      icon: Laptop,
      subtitle: "Add-on Tracks",
      description: "Modern digital skills built on top of your business knowledge to make you indispensable.",
      modules: [
        "Digital Marketing (SEO, Social Media)",
        "Business Web Presence & Landing Pages",
        "Excel, Sheets & Data Analytics",
        "Productivity & Automation Tools"
      ],
      color: "from-purple-500 to-pink-600",
      target: "Job Seekers"
    },
    soft: {
      title: "Career & Soft Skills",
      icon: Users,
      subtitle: "Career Accelerator",
      description: "The art of communication, presentation, and selling yourself in a business context.",
      modules: [
        "Communication & Negotiation",
        "Interview Readiness & Mock Drills",
        "Resume, LinkedIn & Portfolio Building",
        "Client Handling Scenarios"
      ],
      color: "from-green-500 to-teal-600",
      target: "Professionals"
    },
    entrepreneur: {
      title: "Entrepreneurship",
      icon: Rocket,
      subtitle: "Business Builder",
      description: "From idea to invoice. Learn how to start, manage, and grow a small business.",
      modules: [
        "Business Compliance & Registration",
        "Pricing Strategies & Sales Pitching",
        "Freelancing Fundamentals",
        "Managing Cashflow"
      ],
      color: "from-orange-500 to-red-600",
      target: "Founders"
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-900 text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-500 transform skew-x-12 translate-x-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/20 mb-6 backdrop-blur-md">
                <GraduationCap size={16} className="text-yellow-400" />
                <span className="text-sm font-bold tracking-wide uppercase">Rockswill Institute</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Elite Skills for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Future Leaders</span>.
              </h1>
              <p className="text-lg text-brand-100 mb-8 leading-relaxed max-w-lg">
                High-intensity, project-based training designed for the real world. Master technical and business fundamentals in record time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('crash-courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  View Crash Courses <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Long Term Tracks
                </button>
              </div>
            </Reveal>
            <Reveal delay={200} direction="right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Modern Learning" 
                  className="rounded-3xl shadow-2xl border-8 border-white/5"
                />
                <div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-xs hidden lg:block border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={24} /></div>
                     <span className="font-black text-xl">15 Days</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Our signature fast-track format designed for maximum retention and project output.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Crash Courses Section */}
      <section id="crash-courses" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4">
            <Reveal className="text-center mb-16">
               <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Accelerated Learning</span>
               <h2 className="text-3xl md:text-5xl font-black text-gray-900">15-Day Intensive Sprints</h2>
               <p className="text-gray-500 mt-4 text-lg">Elite programs for elite career growth. Limited seats per batch.</p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
               {crashCourses.map((course, i) => (
                  <Reveal key={i} delay={i * 100}>
                     <div 
                        onClick={() => onCourseSelect && onCourseSelect(course.id)}
                        className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 cursor-pointer group h-full flex flex-col relative overflow-hidden group border-2 border-transparent ${course.borderColor}`}
                     >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-full`}></div>
                        
                        <div className={`h-1.5 w-16 rounded-full mb-8 bg-gradient-to-r ${course.color} group-hover:w-full transition-all duration-500 ease-in-out`}></div>
                        
                        <div className="flex justify-between items-start mb-6">
                           <div className="bg-gray-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md">
                              <course.icon size={32} className="text-gray-800" />
                           </div>
                           <span className="bg-gray-900 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg group-hover:bg-black">
                              {course.days}
                           </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                          {course.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">{course.desc}</p>
                        
                        <div className="flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all">
                           Explore Syllabus <ArrowRight size={20} className="text-gray-400 group-hover:text-black" />
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* Program Offerings */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Foundation Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our long-term tracks for deep expertise in business and commerce.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(Object.keys(programs) as Array<keyof typeof programs>).map((key) => {
              const prog = programs[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-500 flex items-center gap-3 border-2 ${
                    isActive 
                    ? `bg-gray-900 text-white border-gray-900 shadow-xl scale-105` 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300 hover:bg-white hover:text-gray-800'
                  }`}
                >
                  <prog.icon size={20} />
                  {prog.title}
                </button>
              );
            })}
          </div>

          <div className="min-h-[500px]">
            {(Object.keys(programs) as Array<keyof typeof programs>).map((key) => {
               if (activeTab !== key) return null;
               const prog = programs[key];
               return (
                 <Reveal key={key} className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                    <div className={`w-full lg:w-2/5 bg-gradient-to-br ${prog.color} p-12 text-white flex flex-col justify-between relative`}>
                       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                       <div className="relative z-10">
                          <div className="bg-white/20 w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                             {prog.subtitle}
                          </div>
                          <prog.icon size={80} className="mb-8 text-white/90 drop-shadow-lg" />
                          <h3 className="text-4xl font-black mb-6 leading-tight uppercase tracking-tight">{prog.title}</h3>
                          <p className="text-white/80 leading-relaxed text-lg font-medium">{prog.description}</p>
                       </div>
                       <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                          <p className="text-xs font-black opacity-60 uppercase tracking-widest mb-2">Ideal Candidates</p>
                          <p className="text-2xl font-black">{prog.target}</p>
                       </div>
                    </div>
                    <div className="w-full lg:w-3/5 p-12 bg-white flex flex-col justify-center">
                       <h4 className="text-2xl font-black text-gray-900 mb-10 border-b border-gray-100 pb-4">Curriculum Highlights</h4>
                       <div className="grid sm:grid-cols-2 gap-8 mb-12">
                          {prog.modules.map((mod, i) => (
                             <div key={i} className="flex items-start gap-4 group">
                                <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-brand-50 transition-colors">
                                   <CheckCircle2 className="text-brand-500 shrink-0" size={24} />
                                </div>
                                <span className="text-gray-800 font-bold text-lg leading-snug">{mod}</span>
                             </div>
                          ))}
                       </div>
                       <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                          <button onClick={() => document.getElementById('institute-contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                             Enroll Today
                          </button>
                          <button onClick={() => document.getElementById('institute-contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 border-2 border-gray-200 text-gray-900 rounded-2xl font-black hover:border-gray-900 transition-all">
                             Syllabus PDF
                          </button>
                       </div>
                    </div>
                 </Reveal>
               );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal className="text-center mb-20">
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">Our Learning Community</h2>
           </Reveal>
           <div className="grid lg:grid-cols-3 gap-10">
              {[
                { icon: GraduationCap, title: "Students", text: "Bridge the gap between academic theory and real-world business demands.", bg: "bg-blue-50", color: "text-blue-600" },
                { icon: Briefcase, title: "Career Movers", text: "Acquire the technical edge to shift roles or upgrade your salary significantly.", bg: "bg-purple-50", color: "text-purple-600" },
                { icon: Rocket, title: "Entrepreneurs", text: "Learn to build, market, and manage your own business efficiently.", bg: "bg-orange-50", color: "text-orange-600" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                   <div className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                      <item.icon size={40} className={item.color} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                   <p className="text-gray-600 leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact */}
      <section id="institute-contact" className="bg-gray-50 border-t border-gray-100">
         <Contact initialMessage="I want to know more about the 15-day Fast Track programs at Rockswill Institute." />
      </section>
    </div>
  );
};