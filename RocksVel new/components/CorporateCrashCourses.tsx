import React from 'react';
import { Code2, LineChart, Database, Calculator, Mic2, ArrowRight, Zap } from 'lucide-react';
import { Reveal } from './Reveal';
import { CourseType } from './CrashCourseLanding';

interface Props {
  onCourseSelect: (id: CourseType) => void;
}

export const CorporateCrashCourses: React.FC<Props> = ({ onCourseSelect }) => {
  const courses = [
    { id: 'python-dsa' as CourseType, title: "Python DSA", icon: Code2, color: "from-blue-600 to-cyan-500", desc: "Master technical interviews in 15 days." },
    { id: 'digital-marketing' as CourseType, title: "AI Marketing", icon: LineChart, color: "from-orange-500 to-rose-500", desc: "Automate growth using modern AI tools." },
    { id: 'mern-stack' as CourseType, title: "MERN Stack", icon: Database, color: "from-emerald-500 to-green-600", desc: "Build full-stack apps in a 15-day sprint." },
    { id: 'tally' as CourseType, title: "Tally Mastery", icon: Calculator, color: "from-indigo-600 to-blue-500", desc: "GST, Payroll & Accounting fast-track." },
    { id: 'public-speaking' as CourseType, title: "Public Speaking", icon: Mic2, color: "from-rose-500 to-pink-500", desc: "Master corporate communication & pitch." }
  ];

  return (
    <section className="py-24 bg-brand-50 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-brand-200 underline-offset-4">New: Intensive Sprints</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Accelerate Professional Skills</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">15-day high-intensity bootcamps designed for the modern workplace.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, i) => (
            <Reveal key={i} delay={i * 100}>
              <div 
                onClick={() => onCourseSelect(course.id)}
                className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full flex flex-col"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full`}></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                    <course.icon size={28} className="text-gray-900" />
                  </div>
                  <div className="bg-brand-900 text-white text-[8px] font-black px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Zap size={8} className="text-yellow-400" /> 15 DAYS
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 text-[10px] mb-6 flex-grow leading-relaxed font-medium">{course.desc}</p>
                <div className="flex items-center text-[10px] font-black text-brand-600 gap-1 group-hover:gap-2 transition-all">
                  Get Syllabus <ArrowRight size={14} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};