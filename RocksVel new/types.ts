export interface ServiceItem {
  title: string;
  description: string;
  iconName: 'TrendingUp' | 'Users' | 'Lightbulb' | 'Handshake' | 'Target';
}

export interface TrainingModule {
  title: string;
  duration: string;
  keyTakeaways: string[];
}

export interface GeneratedPlan {
  introduction: string;
  modules: TrainingModule[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SampleModule {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  takeaways: string[];
  prerequisites?: string[];
  caseStudies?: string[];
  objectives?: string[];
}