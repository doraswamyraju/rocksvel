import React from 'react';
import { CourseLayout, CourseData } from '../CourseLayout';

const data: CourseData = {
  title: "Professional Tally Mastery",
  subtitle: "Accounting & GST in 15 Days",
  description: "Master the standard of business accounting. Learn payroll, inventory, and GST compliance from a pro with 7+ years of training experience.",
  heroImage: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { label: "Live Projects", value: "10+" },
    { label: "GST Ready", value: "100%" },
    { label: "Sessions", value: "25+" }
  ],
  price: "₹1,999",
  originalPrice: "₹5,500",
  nextBatch: "Early Bird Open",
  gradient: "from-blue-700 to-indigo-900",
  accentColor: "text-blue-700",
  highlights: ["Tally Prime 3.0", "E-Invoicing", "Advanced Payroll", "Audit Readiness"],
  tools: ["Tally Prime", "MS Excel", "GST Portal", "Razorpay"],
  curriculum: [
    { days: "Day 1-3", title: "Accounting Foundations", content: ["Company Creation", "Ledger Management", "Voucher Entry Mastery", "Groups & Ledgers"] },
    { days: "Day 4-6", title: "Inventory Controls", content: ["Stock Management", "Purchase/Sales Orders", "Price Lists", "Batch Management"] },
    { days: "Day 7-9", title: "GST & Compliance", content: ["CGST, SGST, IGST Setup", "GST Composition Scheme", "RCM Calculations", "Returns (GSTR 1/3B)"] },
    { days: "Day 10-12", title: "Payroll & TDS", content: ["Employee Masters", "Salary Setup", "TDS Deductions", "ESI/PF Reports"] },
    { days: "Day 13-15", title: "Reports & Audit", content: ["B/S & P&L Analysis", "Bank Reconciliation", "Audit Trail", "Final Project"] }
  ],
  certificateImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
  careerFeatures: ["Accounting Portfolios", "Job Referral Network", "LMS Access", "Resume Building"],
  instructors: [
    {
      name: "Doraswamy Raju M",
      role: "Lead Master Trainer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "With 7+ years of experience in business and technical training, Doraswamy Raju M has mentored thousands in professional accounting and financial compliance."
    }
  ],
  testimonials: [
    {
      name: "Karan S.",
      role: "Accountant",
      avatar: "https://i.pravatar.cc/150?img=12",
      content: "I landed a job at a top CA firm after completing this 15-day sprint. Raju sir's practical approach is unmatched."
    },
    {
      name: "Pooja V.",
      role: "Business Owner",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "I can now handle my own business accounts and GST filings. This course saved me lakhs in consulting fees!"
    }
  ],
  faqs: [
    { q: "Is Tally software provided?", a: "We guide you on how to use the Tally Prime educational version for your practice during the course." },
    { q: "Do I need an accounting background?", a: "No, we start from the absolute basics of accounting before moving into Tally." }
  ]
};

export const TallyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => <CourseLayout data={data} onBack={onBack} />;