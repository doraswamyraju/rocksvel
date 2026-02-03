import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-white font-black text-xl mb-6 uppercase tracking-widest italic">RocksVel</h3>
        <p className="mb-4">&copy; {new Date().getFullYear()} RocksVel Private Limited. All rights reserved.</p>
        <div className="flex justify-center gap-8 mt-4 font-bold text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};