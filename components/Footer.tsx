import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & NAP */}
          <div>
            <h3 className="text-white font-black text-2xl mb-6 uppercase tracking-widest italic">RocksVel</h3>
            <div className="space-y-3 text-sm">
              <p className="font-bold text-white">RocksVel Private Limited</p>
              <p>3rd Floor, Dwarawati31 Pipeline,<br />Subhodaya Colony, Kukatpally,<br />Hyderabad 500072</p>
              <p><a href="tel:+919014755686" className="hover:text-cyan-400 transition-colors">+91 9014755686</a></p>
              <p><a href="mailto:rocksvelprivatelimited@gmail.com" className="hover:text-cyan-400 transition-colors">rocksvelprivatelimited@gmail.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/institute" className="hover:text-cyan-400 transition-colors">Institute</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 font-bold text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800 text-sm">
          <p>&copy; {new Date().getFullYear()} RocksVel Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};