import React from 'react';
import { CourseLayout, CourseData } from '../CourseLayout';

const data: CourseData = {
  title: "Python DSA Masterclass",
  subtitle: "15 Days to Crack Technical Interviews",
  description: "Stop memorizing code. Learn the logic patterns that FAANG engineers use to solve complex algorithmic problems efficiently with Python.",
  heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "LeetCode Patterns", value: "15+" },
    { label: "Problems Solved", value: "120+" },
    { label: "Live Mentor Hours", value: "30+" }
  ],
  price: "₹2,999",
  originalPrice: "₹9,500",
  nextBatch: "Starts Monday",
  gradient: "from-blue-600 to-cyan-500",
  accentColor: "text-blue-600",
  highlights: ["Pattern-based Learning", "Advanced Recursion", "Time Complexity Visualization", "Interview Mock Sessions"],
  tools: ["Python", "LeetCode", "VS Code", "GitHub", "Excalidraw", "Jupyter"],
  curriculum: [
    { days: "Day 1-3", title: "Logic & Fundamentals", content: ["Space/Time Complexity", "Advanced Slicing", "Decorators", "Recursion Depth"] },
    { days: "Day 4-6", title: "Linear Data Structures", content: ["Two Pointers", "Sliding Window", "Monotonic Stacks", "Linked List Reversals"] },
    { days: "Day 7-9", title: "Trees & Graphs", content: ["BFS/DFS Patterns", "BST/Heaps", "Graph Traversal", "Shortest Path"] },
    { days: "Day 10-12", title: "DP & Greedy", content: ["Knapsack Variants", "String DP", "Memoization", "Scheduling"] },
    { days: "Day 13-15", title: "System Design & Final Mock", content: ["Scalability Basics", "Technical Mocks", "Behavioral Prep", "Resume Audit"] }
  ],
  certificateImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
  careerFeatures: ["Resume Review", "LinkedIn Strategy", "Job Portal Access", "Referral Network"],
  instructors: [
    {
      name: "Doraswamy Raju M",
      role: "Lead Master Trainer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "Professional skill architect with 7+ years of experience. Raju specializes in logic-driven problem solving and has transformed career trajectories for 5000+ students across various tech stacks."
    }
  ],
  testimonials: [
    {
      name: "Saurav Jha",
      role: "SDE-1 @ Zomato",
      avatar: "https://i.pravatar.cc/150?img=11",
      content: "The pattern-based approach by Raju sir changed how I look at LeetCode. I cracked Zomato within 2 weeks of finishing this sprint!"
    },
    {
      name: "Anita M.",
      role: "Associate @ TCS",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "The live mocks were nerve-wracking but they were exactly what I needed to overcome my interview anxiety and get placed."
    }
  ],
  faqs: [
    { q: "Will this help if I am a beginner?", a: "Yes! We start with time complexity and logic basics before moving into advanced data structures." },
    { q: "Is Python the only language used?", a: "Yes, we focus on Python's elegant syntax to solve DSA problems faster during high-pressure interviews." }
  ]
};

export const PythonDSAPage: React.FC<{ onBack: () => void }> = ({ onBack }) => <CourseLayout data={data} onBack={onBack} />;