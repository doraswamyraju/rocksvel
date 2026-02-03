import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Briefcase, GraduationCap, ChevronDown, Code2, LineChart, Database, Calculator, Mic2 } from 'lucide-react';
import { CourseType } from './CrashCourseLanding';

interface NavbarProps {
  currentView: 'corporate' | 'institute';
  onViewChange: (view: 'corporate' | 'institute') => void;
  onCourseSelect?: (courseId: CourseType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, onCourseSelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSwitch = (view: 'corporate' | 'institute') => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseClick = (courseId: CourseType) => {
    if (onCourseSelect) {
      onCourseSelect(courseId);
      setIsMobileMenuOpen(false);
      setIsCoursesOpen(false);
    }
  };

  const courseLinks = [
    { id: 'python-dsa' as CourseType, title: 'Python DSA', icon: Code2, color: 'text-blue-500' },
    { id: 'digital-marketing' as CourseType, title: 'Digital Marketing', icon: LineChart, color: 'text-orange-500' },
    { id: 'mern-stack' as CourseType, title: 'MERN Stack', icon: Database, color: 'text-emerald-500' },
    { id: 'tally' as CourseType, title: 'Tally Mastery', icon: Calculator, color: 'text-indigo-500' },
    { id: 'public-speaking' as CourseType, title: 'Public Speaking', icon: Mic2, color: 'text-rose-500' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer" onClick={() => handleSwitch(currentView)}>
            <div className={`flex flex-col transition-colors duration-300 ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              <span className="text-2xl font-black tracking-tighter flex items-center gap-1 uppercase">
                RocksVel
                <span className={`w-2 h-2 rounded-full animate-pulse ${currentView === 'institute' ? 'bg-yellow-400' : 'bg-cyan-400'}`}></span>
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-brand-600' : 'text-brand-200'}`}>
                {currentView === 'corporate' ? 'Corporate Training' : 'Training Institute'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4 mr-4">
               <div className="relative group">
                 <button 
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors py-2 ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-cyan-300'}`}
                 >
                    Fast-Track <ChevronDown size={14} className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 <div 
                    onMouseLeave={() => setIsCoursesOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top ${isCoursesOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}
                  >
                    <div className="p-3">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 py-2">15-Day Intensive Programs</p>
                       {courseLinks.map((course) => (
                         <button
                           key={course.id}
                           onClick={() => handleCourseClick(course.id)}
                           className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors rounded-xl text-left"
                         >
                            <div className={`p-2 bg-gray-100 rounded-lg ${course.color}`}>
                               <course.icon size={20} />
                            </div>
                            <div>
                               <p className="text-sm font-black text-gray-900">{course.title}</p>
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">Certification Sprint</p>
                            </div>
                         </button>
                       ))}
                    </div>
                 </div>
               </div>
            </div>

            {/* View Switcher */}
            <div className={`flex items-center p-1 rounded-full ${isScrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'}`}>
              <button 
                onClick={() => handleSwitch('corporate')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${currentView === 'corporate' ? 'bg-white text-brand-900 shadow-sm' : 'text-gray-400 hover:text-white'}`}
              >
                <Briefcase size={12} /> Corporate
              </button>
              <button 
                onClick={() => handleSwitch('institute')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${currentView === 'institute' ? 'bg-yellow-400 text-brand-900 shadow-sm' : 'text-gray-400 hover:text-white'}`}
              >
                <GraduationCap size={12} /> Institute
              </button>
            </div>

            <a href="tel:+919014755686" className={`group flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white hover:text-cyan-300'}`}>
              <div className={`p-2 rounded-full transition-all ${isScrolled ? 'bg-gray-100 group-hover:bg-brand-50' : 'bg-white/10 group-hover:bg-white/20'}`}>
                <Phone size={16} />
              </div>
              <span className="hidden lg:inline">+91 9014755686</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t transform transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pt-6 pb-8 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="bg-gray-100 p-1 rounded-xl flex mb-4">
             <button onClick={() => handleSwitch('corporate')} className={`flex-1 py-2 text-sm font-bold rounded-lg ${currentView === 'corporate' ? 'bg-white shadow-sm text-brand-900' : 'text-gray-500'}`}>Corporate</button>
             <button onClick={() => handleSwitch('institute')} className={`flex-1 py-2 text-sm font-bold rounded-lg ${currentView === 'institute' ? 'bg-yellow-400 shadow-sm text-gray-900' : 'text-gray-500'}`}>Institute</button>
          </div>

          <div className="space-y-2 border-b border-gray-100 pb-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 px-3">Featured 15-Day Courses</p>
            {courseLinks.map((course) => (
              <button
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl text-left"
              >
                <div className={`p-2 bg-gray-50 rounded-lg ${course.color}`}><course.icon size={20} /></div>
                <span className="font-bold text-gray-800">{course.title}</span>
              </button>
            ))}
          </div>

          <a href="tel:+919014755686" className="flex items-center gap-4 text-gray-700 p-3 rounded-xl hover:bg-gray-50 font-medium">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Phone size={20} /></div>
            +91 9014755686
          </a>
        </div>
      </div>
    </nav>
  );
};