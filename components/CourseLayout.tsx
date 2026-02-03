import React, { useState } from 'react';
import { CheckCircle2, Clock, Star, Zap, ChevronDown, ArrowRight, ShieldCheck, Users, PlayCircle, Lock, Award, MessageSquare, Briefcase, GraduationCap, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

export interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
  companyIcon?: string;
}

export interface CourseTestimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface CourseFaq {
  q: string;
  a: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  price: string;
  originalPrice: string;
  nextBatch: string;
  gradient: string;
  accentColor: string;
  highlights: string[];
  tools: string[];
  curriculum: { days: string; title: string; content: string[] }[];
  certificateImage: string;
  instructors: Instructor[];
  testimonials: CourseTestimonial[];
  faqs: CourseFaq[];
  careerFeatures: string[];
}

interface Props {
  data: CourseData;
  onBack: () => void;
}

export const CourseLayout: React.FC<Props> = ({ data, onBack }) => {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn">
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div>
          <span className="text-gray-500 text-xs line-through">{data.originalPrice}</span>
          <span className={`block font-bold text-xl ${data.accentColor}`}>{data.price}</span>
        </div>
        <button
          onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
          className={`px-6 py-2 rounded-lg text-white font-bold bg-gradient-to-r ${data.gradient}`}
        >
          Enroll Now
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-20" />
          <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-${data.gradient.split('-')[1]}/40`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors group text-sm font-bold uppercase tracking-widest">
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} /> Back to Programs
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/20 mb-6 backdrop-blur-md">
                <Zap size={14} className="text-yellow-400 animate-pulse" />
                <span className="text-xs font-black tracking-widest uppercase">15-Day Immersive Bootcamp</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tighter uppercase italic">
                {data.title}
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-medium">{data.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {data.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-200">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0" /> {h}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-10 py-5 rounded-2xl font-black text-lg text-white shadow-2xl bg-gradient-to-r ${data.gradient} hover:scale-105 transition-transform flex items-center justify-center gap-2`}
                >
                  Join the Batch <ArrowRight size={20} />
                </button>
              </div>
            </Reveal>

            <Reveal delay={200} direction="right">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden shadow-3xl">
                <div className={`absolute top-0 right-0 p-5 rounded-bl-3xl bg-gradient-to-r ${data.gradient} text-white font-black text-sm uppercase tracking-widest`}>
                  Batch: {data.nextBatch}
                </div>
                <h3 className="text-2xl font-black mb-8">Course Snapshot</h3>
                <div className="space-y-6">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{stat.label}</span>
                      <span className="text-2xl font-black text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-2xl">
                    <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Risk-Free Guarantee</p>
                    <p className="text-xs text-gray-400">100% refund if not satisfied after Day 1.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-gray-50 border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20">
          <div className="flex items-center gap-3 font-black text-gray-900 text-sm uppercase tracking-tighter"><ShieldCheck className="text-brand-600" /> Verified Certificate</div>
          <div className="flex items-center gap-3 font-black text-gray-900 text-sm uppercase tracking-tighter"><Users className="text-brand-600" /> Alumni Network</div>
          <div className="flex items-center gap-3 font-black text-gray-900 text-sm uppercase tracking-tighter"><Zap className="text-brand-600" /> Live Classes</div>
          <div className="flex items-center gap-3 font-black text-gray-900 text-sm uppercase tracking-tighter"><Award className="text-brand-600" /> Lifetime Support</div>
        </div>
      </div>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className={`text-sm font-black uppercase tracking-[0.3em] ${data.accentColor} mb-4 block`}>The 15-Day Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Course Syllabus</h2>
          </Reveal>
          <div className="space-y-6">
            {data.curriculum.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className={`bg-white border-2 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${openDay === index ? `border-gray-900 ring-4 ring-gray-100` : 'border-gray-100'}`}>
                  <button
                    onClick={() => setOpenDay(openDay === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg bg-gradient-to-br ${data.gradient} text-white`}>
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.days}</span>
                        <h3 className="font-black text-xl md:text-2xl text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                    <ChevronDown size={20} className={`text-gray-400 transition-transform ${openDay === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openDay === index && (
                    <div className="p-8 pt-0 border-t border-gray-50 bg-gray-50/50 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {item.content.map((c, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <PlayCircle size={18} className={data.accentColor} />
                            <span className="text-gray-800 font-bold">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter">Mentorship by Industry Experts</h2>
            <p className="text-gray-400 mt-4 text-lg font-medium">Learn from professionals who have trained thousands over the years.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.instructors.map((ins, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:scale-105 transition-transform bg-gray-800 flex items-center justify-center">
                    <img src={ins.image} alt={ins.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black">{ins.name}</h4>
                    <p className={`text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>{ins.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed font-medium mb-6">"{ins.bio}"</p>
                <div className="pt-6 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Training Experience</span>
                  <div className="flex gap-4 mt-2">
                    <span className="font-black text-xl italic tracking-tighter">7+ YEARS</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-20">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-4 block underline decoration-brand-200 underline-offset-4">Verified Alumnus Success</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">Elite Career Transformations</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white p-10 rounded-[2.5rem] relative h-full flex flex-col group hover:shadow-3xl transition-all border border-gray-100">
                <Quote className="text-brand-50 absolute top-8 right-8" size={60} />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 font-medium mb-10 flex-grow leading-relaxed italic relative z-10 text-sm">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <img src={t.avatar} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt={t.name} />
                  <div>
                    <h5 className="font-black text-gray-900 leading-tight">{t.name}</h5>
                    <p className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section - Fixed Layout */}
      <section id="enroll-form" className="py-24 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="bg-gray-900 rounded-[3.5rem] overflow-hidden shadow-4xl flex flex-col lg:flex-row">
            {/* Value Side */}
            <div className={`lg:w-2/5 p-12 lg:p-16 bg-gradient-to-br ${data.gradient} text-white flex flex-col justify-between`}>
              <div>
                <div className="bg-white/20 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">RocksVel Elite</div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Join the next cohort.</h2>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-white" />
                    <span className="font-bold text-sm">Official Certification</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-white" />
                    <span className="font-bold text-sm">Placement Support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-white" />
                    <span className="font-bold text-sm">Expert Interaction</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-black/20 rounded-[2.5rem] border border-white/10 text-center">
                <p className="text-xs font-black opacity-60 uppercase mb-3 tracking-widest tracking-widest">Early Bird Pricing</p>
                <div className="flex items-center justify-center gap-6">
                  <span className="text-2xl line-through opacity-30 font-bold">{data.originalPrice}</span>
                  <span className="text-6xl font-black tracking-tighter">{data.price}</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
              <div className="max-w-md mx-auto">
                <h3 className="text-3xl font-black mb-3 text-gray-900">Secure Your Slot</h3>
                <p className="text-gray-500 mb-10 font-medium">Fill in your details for batch availability.</p>

                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const postData = {
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    message: `Enrollment Request for ${data.title} (${data.nextBatch})`,
                    type: 'crash-course',
                    courseData: {
                      courseTitle: data.title,
                      price: data.price,
                      nextBatch: data.nextBatch
                    }
                  };

                  try {
                    const res = await fetch('/api/enquiries', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(postData)
                    });
                    if (res.ok) {
                      alert(`Success! You have initiated enrollment for ${data.title}. Our team will contact you shortly.`);
                      form.reset();
                    } else {
                      alert('Something went wrong. Please try again.');
                    }
                  } catch (err) {
                    console.error(err);
                    alert('Error submitting form.');
                  }
                }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                      <input name="name" type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:outline-none font-bold placeholder-gray-300" placeholder="e.g. John Doe" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Phone Number</label>
                      <input name="phone" type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:outline-none font-bold placeholder-gray-300" placeholder="+91..." required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Work/Personal Email</label>
                    <input name="email" type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:outline-none font-bold placeholder-gray-300" placeholder="email@example.com" required />
                  </div>

                  <button type="submit" className={`w-full py-6 rounded-2xl text-white font-black text-lg bg-gradient-to-r ${data.gradient} shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4`}>
                    Confirm Admission <ArrowRight />
                  </button>

                  <div className="mt-8 flex flex-wrap justify-center gap-8 text-[10px] font-black text-gray-300 uppercase tracking-widest text-center">
                    <div className="flex items-center gap-2"><Lock size={12} /> SSL Secure</div>
                    <div className="flex items-center gap-2"><Star size={12} className="text-yellow-400 fill-yellow-400" /> 4.9+ Trust</div>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};