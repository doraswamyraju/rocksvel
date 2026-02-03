import React from 'react';
import { CourseLayout, CourseData } from '../CourseLayout';

const data: CourseData = {
  title: "Digital Marketing with AI",
  subtitle: "Modern Growth Hacking in 15 Days",
  description: "Marketing without AI is history. Master the latest AI tools to automate content, run hyper-targeted ads, and grow businesses faster than ever.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  stats: [
    { label: "AI Tools", value: "20+" },
    { label: "Live Campaigns", value: "4" },
    { label: "Certifications", value: "3" }
  ],
  price: "₹2,499",
  originalPrice: "₹7,500",
  nextBatch: "Early Bird Open",
  gradient: "from-orange-500 to-rose-500",
  accentColor: "text-orange-600",
  highlights: ["Prompt Engineering for Leads", "AI Video Ads", "Performance Marketing 2.0", "SEO Automation"],
  tools: ["ChatGPT", "Midjourney", "AdSpy", "Meta Suite", "Google Analytics", "Zapier"],
  curriculum: [
    { days: "Day 1-3", title: "AI Strategy & Copy", content: ["Niche Discovery", "AI Prompting", "Image Generation", "Brand Identity"] },
    { days: "Day 4-6", title: "Social Domination", content: ["Viral Reel Frameworks", "LinkedIn Authority", "AI Scheduling", "Influencer Strategy"] },
    { days: "Day 7-9", title: "Paid Performance", content: ["Meta Ads Architecture", "Google Search Ads", "A/B Testing AI", "Retargeting Pixels"] },
    { days: "Day 10-12", title: "SEO & Workflows", content: ["Programmatic SEO", "AI Content Audits", "Zapier Workflows", "Email AI"] },
    { days: "Day 13-15", title: "Freelancing Mastery", content: ["High-Ticket Sales", "Client Onboarding", "Live Dashboarding", "Final Project"] }
  ],
  certificateImage: "https://images.unsplash.com/photo-1589330694653-418b725487c9?q=80&w=2070&auto=format&fit=crop",
  careerFeatures: ["Portfolio Building", "Freelance Setup", "Agency Networking", "Ads Budget Credit"],
  instructors: [
    {
      name: "Doraswamy Raju M",
      role: "Growth Strategy Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "7+ years of elite experience in business training and marketing strategy. Raju has pioneered AI-driven growth for hundreds of regional brands and startups."
    }
  ],
  testimonials: [
    {
      name: "Mark T.",
      role: "E-com Owner",
      avatar: "https://i.pravatar.cc/150?img=12",
      content: "My ROAS jumped from 2.5 to 5.8 using the AI ad workflows taught by Raju sir. Unbelievable results in just 15 days!"
    },
    {
      name: "Lisa K.",
      role: "Freelance Marketer",
      avatar: "https://i.pravatar.cc/150?img=25",
      content: "The prompt engineering session alone saved me 10 hours a week on content creation. It's a complete game-changer."
    }
  ],
  faqs: [
    { q: "Do I need a prior marketing background?", a: "Not necessarily. We cover fundamentals while focusing on how AI disrupts traditional methods." },
    { q: "Will you provide the AI tools?", a: "We provide access to common tools during the training and show you how to use free alternatives effectively." }
  ]
};

export const DigitalMarketingPage: React.FC<{ onBack: () => void }> = ({ onBack }) => <CourseLayout data={data} onBack={onBack} />;