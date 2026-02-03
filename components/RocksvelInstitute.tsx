import React, { useState } from 'react';
import { BookOpen, TrendingUp, Users, Laptop, Brain, Presentation, CheckCircle2, ArrowRight, Building2, GraduationCap, Target, Briefcase, Rocket, Layers, MapPin, Monitor, Calendar, Code2, LineChart, Database, Zap, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';
import { Contact } from './Contact';
import { CourseType } from './CrashCourseLanding';

interface InstituteProps {
  onCourseSelect?: (courseId: CourseType) => void;
}

export const RocksvelInstitute: React.FC<InstituteProps> = ({ onCourseSelect }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'tech' | 'soft' | 'entrepreneur'>('foundation');

  const crashCourses = [
    {
      id: 'python-dsa' as CourseType,
      title: "Python DSA Mastery",
      desc: "15 Days to crack top-tier technical interviews. Pattern-based logic training.",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
      borderColor: "hover:border-blue-300",
      days: "15 Days"
    },
    {
      id: 'digital-marketing' as CourseType,
      title: "AI Digital Marketing",
      desc: "Automate your marketing workflows with AI. Intensive growth bootcamp.",
      icon: LineChart,
      color: "from-orange-500 to-rose-500",
      borderColor: "hover:border-orange-300",
      days: "15 Days"
    },
    {
      id: 'mern-stack' as CourseType,
      title: "MERN Stack Pro",
      desc: "Full-stack production development sprint. Build and deploy in 15 days.",
      icon: Database,
      color: "from-emerald-500 to-green-600",
      borderColor: "hover:border-emerald-300",
      days: "15 Days"
    },
    {
      id: 'tally' as CourseType,
      title: "Tally Mastery",
      icon: Database,
      desc: "Accounting & GST compliance mastery in record time.",
      color: "from-indigo-600 to-blue-500",
      borderColor: "hover:border-indigo-300",
      days: "15 Days"
    }
  ];

  const programs = {
    foundation: {
      title: "Commerce Foundation",
      icon: Building2,
      subtitle: "The RocksVel Way",
      description: "Master the bedrock of business and accounting. No background required.",
      modules: [
        "Personal Finance & Investing",
        "GST & Professional Accounting",
        "Business Ethics & Models",
        "Banking & Credit Management"
      ],
      color: "from-blue-500 to-indigo-600",
      target: "All Professionals"
    },
    tech: {
      title: "Digital Edge Layer",
      icon: Laptop,
      subtitle: "Technical Upskilling",
      description: "Modern tech stacks built on your business knowledge to ensure market dominance.",
      modules: [
        "AI-First Digital Marketing",
        "Conversion Optimization",
        "Low-Code Automation",
        "Business Intelligence Tools"
      ],
      color: "from-purple-500 to-pink-600",
      target: "Aspirants"
    },
    soft: {
      title: "Communication Mastery",
      icon: Users,
      subtitle: "Leadership Track",
      description: "Unlock executive presence and persuasive communication skills.",
      modules: [
        "Advanced Public Speaking",
        "Negotiation Dynamics",
        "Executive Branding",
        "Emotional Intelligence 2.0"
      ],
      color: "from-green-500 to-teal-600",
      target: "Future Leaders"
    },
    entrepreneur: {
      title: "Startup Blueprint",
      icon: Rocket,
      subtitle: "Founder Bootcamp",
      description: "From conceptualization to capital. Launch and manage your business.",
      modules: [
        "Compliance & Registrations",
        "Growth Hacking Strategies",
        "Fundraising & Scalability",
        "Cashflow Optimization"
      ],
      color: "from-orange-500 to-red-600",
      target: "Founders"
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-500 transform skew-x-12 translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/20 mb-6 backdrop-blur-md">
                <GraduationCap size={16} className="text-yellow-400" />
                <span className="text-sm font-bold tracking-wide uppercase">RocksVel Training Institute</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase italic">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Future of Work</span>.
              </h1>
              <p className="text-lg text-brand-100 mb-8 leading-relaxed max-w-lg">
                Intensive, result-oriented training by Doraswamy Raju M (7+ Yrs Exp). Gain elite skills in technology and business fundamentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('crash-courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  View 15-Day Sprints <ArrowRight size={20} />
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Crash Courses Section */}
      <section id="crash-courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Fast-Track Results</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase">RocksVel Sprint Series</h2>
            <p className="text-gray-500 mt-4 text-lg">15 days to transform your professional capabilities.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                      <Code2 size={32} className="text-gray-800" />
                    </div>
                    <span className="bg-gray-900 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg group-hover:bg-black uppercase">
                      {course.days}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase italic leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed font-medium">{course.desc}</p>

                  <div className="flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all uppercase tracking-tight">
                    Get Full Syllabus <ArrowRight size={20} className="text-gray-400 group-hover:text-black" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="institute-contact" className="bg-gray-50 border-t border-gray-100">
        <Contact
          initialMessage="I'm interested in the 15-day Fast Track programs at RocksVel Training Institute."
          type="institute"
        />
      </section>
    </div>
  );
};