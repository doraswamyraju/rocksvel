import React from 'react';
import { CourseLayout, CourseData } from '../CourseLayout';

const data: CourseData = {
  title: "Public Speaking & Pitching",
  subtitle: "Master the Stage in 15 Days",
  description: "Transform from a hesitant speaker to a powerful communicator. Learn the psychology of persuasion and stage presence from an expert with 7+ years in the field.",
  heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "Speech Drills", value: "20+" },
    { label: "Confidence", value: "100%" },
    { label: "Feedback", value: "Daily" }
  ],
  price: "₹1,499",
  originalPrice: "₹4,000",
  nextBatch: "Starts Sunday",
  gradient: "from-rose-500 to-pink-700",
  accentColor: "text-rose-600",
  highlights: ["Body Language Mastery", "Storytelling Frameworks", "TED-Style Pitching", "Overcoming Anxiety"],
  tools: ["Video Feedback", "Teleprompter Labs", "Canva", "LinkedIn"],
  curriculum: [
    { days: "Day 1-3", title: "Fear Elimination", content: ["Stage Fright Psychology", "Breathing Techniques", "First Impressions", "Identity Work"] },
    { days: "Day 4-6", title: "The Narrative Arc", content: ["Storytelling Models", "The Hook Strategy", "Logical Structuring", "Humor Techniques"] },
    { days: "Day 7-9", title: "Body & Voice", content: ["Gestures & Movement", "Tonal Variation", "Power Pauses", "Eye Contact Mastery"] },
    { days: "Day 10-12", title: "Persuasion Tactics", content: ["Ethos, Pathos, Logos", "Handling Q&A", "Debate Fundamentals", "Executive Presence"] },
    { days: "Day 13-15", title: "The Grand Performance", content: ["7-Minute Keynote", "Video Speech Recording", "LinkedIn Branding", "Final Evaluation"] }
  ],
  certificateImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
  careerFeatures: ["Video Portfolio", "Personal Branding", "Networking Access", "Confidence Coaching"],
  instructors: [
    {
      name: "Doraswamy Raju M",
      role: "Lead Communication Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "A master of stagecraft with 7+ years of experience. Raju has personally coached over 2000+ individuals to overcome stage fright and lead with confidence."
    }
  ],
  testimonials: [
    {
      name: "Sneha R.",
      role: "Project Manager",
      avatar: "https://i.pravatar.cc/150?img=44",
      content: "I used to tremble before team meetings. After 15 days with Raju sir, I now lead presentations with zero fear and high impact."
    },
    {
      name: "Rahul G.",
      role: "Sales Lead",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "My sales conversion doubled because I learned how to connect emotionally with clients. Raju sir's methods work."
    }
  ],
  faqs: [
    { q: "Is it a live class?", a: "Yes, all sessions are interactive live classes where you get instant feedback on your speeches." },
    { q: "Can I join if I'm extremely shy?", a: "Absolutely. Most of our students are introverts who want to find their voice." }
  ]
};

export const PublicSpeakingPage: React.FC<{ onBack: () => void }> = ({ onBack }) => <CourseLayout data={data} onBack={onBack} />;