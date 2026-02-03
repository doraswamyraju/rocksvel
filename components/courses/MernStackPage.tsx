import React from 'react';
import { CourseLayout, CourseData } from '../CourseLayout';

const data: CourseData = {
  title: "MERN Stack Fast-Track",
  subtitle: "Build Production Apps in 15 Days",
  description: "Learn to build modern, scalable web applications. We go deep into MongoDB, Express, React, and Node to make you a full-stack engineer.",
  heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "Full Stack Projects", value: "2 Major" },
    { label: "Coding Hours", value: "45+" },
    { label: "Support", value: "1-on-1" }
  ],
  price: "₹3,499",
  originalPrice: "₹12,000",
  nextBatch: "Last 5 Seats",
  gradient: "from-emerald-500 to-green-700",
  accentColor: "text-emerald-600",
  highlights: ["React Hooks & Context", "Secure Node APIs", "Advanced Mongoose", "Cloud Deployment"],
  tools: ["React", "Node.js", "MongoDB", "Tailwind", "Postman", "Vercel", "Docker"],
  curriculum: [
    { days: "Day 1-3", title: "Modern Frontend", content: ["React 19 Hooks", "Tailwind Masterclass", "State Management", "Routing"] },
    { days: "Day 4-6", title: "Backend Systems", content: ["Node Architecture", "Express Routing", "Middleware", "Error Handling"] },
    { days: "Day 7-9", title: "DB & Auth", content: ["Schema Modeling", "Aggregations", "JWT Sessions", "Refresh Tokens"] },
    { days: "Day 10-12", title: "Real-time & Payments", content: ["Socket.io Chat", "Cloudinary Uploads", "Stripe/Razorpay", "Testing"] },
    { days: "Day 13-15", title: "Deployment & Scaling", content: ["Dockerizing", "Production Optimization", "CI/CD Vercel", "Demo Day"] }
  ],
  certificateImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  careerFeatures: ["GitHub Profile Audit", "Open Source Guide", "Mock System Design", "Dev Community Pass"],
  instructors: [
    {
      name: "Doraswamy Raju M",
      role: "Lead Full Stack Architect",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "7+ years of experience in the software industry and training. Raju has successfully mentored thousands of students in full-stack development and cloud engineering."
    }
  ],
  testimonials: [
    {
      name: "Tushar S.",
      role: "Frontend Dev @ Swiggy",
      avatar: "https://i.pravatar.cc/150?img=51",
      content: "I went from only knowing HTML/CSS to building a full-blown app in 15 days thanks to Raju sir's guidance. Pure gold!"
    },
    {
      name: "Kevin D.",
      role: "Freelance Developer",
      avatar: "https://i.pravatar.cc/150?img=60",
      content: "The deployment and security sessions were eye-opening. Now I can confidently pitch full-stack solutions to my clients."
    }
  ],
  faqs: [
    { q: "Do I need to know JavaScript?", a: "A basic understanding of JS is required. We cover ES6+ features in the first two days to ensure everyone is on the same page." },
    { q: "Will I get a project to show on my resume?", a: "Yes! You will build and deploy two major projects including a real-time application." }
  ]
};

export const MernStackPage: React.FC<{ onBack: () => void }> = ({ onBack }) => <CourseLayout data={data} onBack={onBack} />;