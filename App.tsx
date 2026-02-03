import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AdminDashboard } from './components/AdminDashboard';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Stats } from './components/Stats';
import { TrustedBy } from './components/TrustedBy';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { ModulePreview } from './components/ModulePreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AIPlanner } from './components/AIPlanner'; // Using AIPlanner as per new design
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RocksvelInstitute } from './components/RocksvelInstitute';
import { CorporateCrashCourses } from './components/CorporateCrashCourses';
import { CourseType } from './components/CrashCourseLanding';

// Course Pages
import { PythonDSAPage } from './components/courses/PythonDSAPage';
import { DigitalMarketingPage } from './components/courses/DigitalMarketingPage';
import { MernStackPage } from './components/courses/MernStackPage';
import { TallyPage } from './components/courses/TallyPage';
import { PublicSpeakingPage } from './components/courses/PublicSpeakingPage';

// Layout Component
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </div>
  );
};

// Corporate View Component
const CorporateView = () => {
  const [inquiryMessage, setInquiryMessage] = useState('');
  const navigate = useNavigate();

  const handlePlanInquiry = (message: string) => {
    setInquiryMessage(message);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCourseSelect = (courseId: CourseType) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <>
      <Hero />
      <TrustStrip />
      <TrustedBy />
      <CorporateCrashCourses onCourseSelect={handleCourseSelect} />
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
  );
};

// Institute View Component
const InstituteView = () => {
  const navigate = useNavigate();
  return <RocksvelInstitute onCourseSelect={(id) => navigate(`/course/${id}`)} />;
};

// Course Page Wrapper
const CoursePageWrapper = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  switch (courseId) {
    case 'python-dsa': return <PythonDSAPage onBack={onBack} />;
    case 'digital-marketing': return <DigitalMarketingPage onBack={onBack} />;
    case 'mern-stack': return <MernStackPage onBack={onBack} />;
    case 'tally': return <TallyPage onBack={onBack} />;
    case 'public-speaking': return <PublicSpeakingPage onBack={onBack} />;
    default: return <div className="pt-32 text-center text-xl">Course not found</div>;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<PublicLayout><CorporateView /></PublicLayout>} />
        <Route path="/institute" element={<PublicLayout><InstituteView /></PublicLayout>} />
        <Route path="/course/:courseId" element={<PublicLayout><CoursePageWrapper /></PublicLayout>} />
      </Routes>
    </Router>
  );
}

export default App;