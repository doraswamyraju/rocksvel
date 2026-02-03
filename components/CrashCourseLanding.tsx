import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, Award, Star, Zap, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Users, PlayCircle, Lock } from 'lucide-react';
import { Reveal } from './Reveal';
import { Contact } from './Contact';

export type CourseType = 'python-dsa' | 'digital-marketing' | 'mern-stack' | 'tally' | 'public-speaking';

export const CrashCourseLanding: React.FC<{ courseId: CourseType; onBack: () => void }> = ({ courseId, onBack }) => {
  // This is a shell now as we use individual components for separate pages
  return null;
};