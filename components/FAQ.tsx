import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';
import { Reveal } from './Reveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Can you customize training for our specific industry?",
      answer: "Absolutely. We don't believe in one-size-fits-all. We conduct a thorough needs analysis (TNA) before designing any module to ensure it addresses your specific industry challenges."
    },
    {
      question: "Do you offer virtual or hybrid training options?",
      answer: "Yes, we offer fully in-person, fully virtual, and hybrid training models using state-of-the-art interactive tools to ensure engagement regardless of the format."
    },
    {
      question: "What is the typical duration of a workshop?",
      answer: "Workshops can range from half-day 'Power Sessions' (4 hours) to comprehensive 3-day bootcamps. We can also structure long-term development programs spanning several months."
    },
    {
      question: "How do you measure the effectiveness of the training?",
      answer: "We use the Kirkpatrick Model of evaluation: Reaction (feedback), Learning (assessments), Behavior (on-job application), and Results (business impact metrics)."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, all participants receive a certificate of completion from Rocksvel upon successfully finishing the training program."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-300">
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-brand-600 shrink-0" size={20} />
                  ) : (
                    <Plus className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};