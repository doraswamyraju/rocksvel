import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Stats } from './components/Stats';
import { TrustedBy } from './components/TrustedBy';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { ModulePreview } from './components/ModulePreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AIPlanner } from './components/AIPlanner';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RocksvelInstitute } from './components/RocksvelInstitute';
import { CorporateCrashCourses } from './components/CorporateCrashCourses';

// Course Pages
import { PythonDSAPage } from './components/courses/PythonDSAPage';
import { DigitalMarketingPage } from './components/courses/DigitalMarketingPage';
import { MernStackPage } from './components/courses/MernStackPage';
import { TallyPage } from './components/courses/TallyPage';
import { PublicSpeakingPage } from './components/courses/PublicSpeakingPage';

import { CourseType } from './components/CrashCourseLanding';

function App() {
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [view, setView] = useState<'corporate' | 'institute'>('corporate');
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const handlePlanInquiry = (message: string) => {
    setInquiryMessage(message);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewChange = (newView: 'corporate' | 'institute') => {
    setView(newView);
    setSelectedCourse(null); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseSelection = (courseId: CourseType) => {
    setSelectedCourse(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCoursePage = () => {
    const onBack = () => setSelectedCourse(null);
    switch (selectedCourse) {
      case 'python-dsa': return <PythonDSAPage onBack={onBack} />;
      case 'digital-marketing': return <DigitalMarketingPage onBack={onBack} />;
      case 'mern-stack': return <MernStackPage onBack={onBack} />;
      case 'tally': return <TallyPage onBack={onBack} />;
      case 'public-speaking': return <PublicSpeakingPage onBack={onBack} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar 
        currentView={view} 
        onViewChange={handleViewChange} 
        onCourseSelect={handleCourseSelection} 
      />
      
      {selectedCourse ? (
        renderCoursePage()
      ) : view === 'corporate' ? (
        <>
          <Hero />
          <TrustStrip />
          <TrustedBy />
          <CorporateCrashCourses onCourseSelect={handleCourseSelection} />
          <Stats />
          <Services />
          <Solutions />
          <ModulePreview />
          <WhyChooseUs />
          <AIPlanner onPlanInquiry={handlePlanInquiry} />
          <Process />
          <Testimonials />
          <FAQ />
          <CallToAction />
          <Contact initialMessage={inquiryMessage} />
        </>
      ) : (
        <RocksvelInstitute onCourseSelect={handleCourseSelection} />
      )}
      
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;