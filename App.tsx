import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard } from './components/AdminDashboard';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Stats } from './components/Stats';
import { TrustedBy } from './components/TrustedBy';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { ModulePreview } from './components/ModulePreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SmartPlanner } from './components/SmartPlanner';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handlePlanInquiry = (message: string) => {
    setInquiryMessage(message);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-brand-200 selection:text-brand-900">
            <Navbar />
            <Hero />
            <TrustStrip />
            <TrustedBy />
            <Stats />
            <Services />
            <Solutions />
            <ModulePreview />
            <WhyChooseUs />
            <SmartPlanner onPlanInquiry={handlePlanInquiry} />
            <Process />
            <Testimonials />
            <FAQ />
            <CallToAction />
            <Contact initialMessage={inquiryMessage} />
            <Footer />
            <FloatingActions />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;