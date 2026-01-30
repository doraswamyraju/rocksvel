import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`flex flex-col transition-colors duration-300 ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              <span className="text-2xl font-black tracking-tighter flex items-center gap-1">
                ROCKSVEL
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-brand-600' : 'text-brand-200'}`}>
                Corporate Training
              </span>
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:+919014755686" className={`group flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white hover:text-cyan-300'}`}>
              <div className={`p-2 rounded-full transition-all ${isScrolled ? 'bg-gray-100 group-hover:bg-brand-50' : 'bg-white/10 group-hover:bg-white/20'}`}>
                <Phone size={16} />
              </div>
              <span>+91 9014755686</span>
            </a>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`
                px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg
                ${isScrolled 
                  ? 'bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-700 hover:to-cyan-600 text-white shadow-brand-500/30' 
                  : 'bg-white text-brand-900 hover:bg-brand-50 shadow-black/20'}
              `}>
              Book Consultation
            </button>
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
        <div className="px-6 pt-6 pb-8 space-y-4">
          <a href="tel:+919014755686" className="flex items-center gap-4 text-gray-700 p-3 rounded-xl hover:bg-gray-50 font-medium">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Phone size={20} /></div>
            +91 9014755686
          </a>
          <a href="mailto:rocksvelprivatelimited@gmail.com" className="flex items-center gap-4 text-gray-700 p-3 rounded-xl hover:bg-gray-50 font-medium">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Mail size={20} /></div>
            rocksvelprivatelimited@gmail.com
          </a>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-gradient-to-r from-brand-600 to-cyan-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-500/30 mt-4 active:scale-95 transition-transform">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};