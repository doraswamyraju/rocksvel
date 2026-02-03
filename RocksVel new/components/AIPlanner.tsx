import React, { useState } from 'react';
import { generateTrainingPlan } from '../services/geminiService';
import { TrainingModule } from '../types';
import { Sparkles, Loader2, BookOpen, Clock, Check, ArrowRight, Edit2, Save, X, Plus, Trash2, CheckSquare, Square, RefreshCcw } from 'lucide-react';
import { Reveal } from './Reveal';

interface AIPlannerProps {
  onPlanInquiry?: (message: string) => void;
}

interface EditableModule extends TrainingModule {
  id: string;
  selected: boolean;
  isEditing: boolean;
  tempTitle?: string;
  tempDuration?: string;
  tempTakeaways?: string;
}

export const AIPlanner: React.FC<AIPlannerProps> = ({ onPlanInquiry }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    teamRole: '',
    focusArea: ''
  });
  
  // State for the generated content
  const [intro, setIntro] = useState('');
  const [modules, setModules] = useState<EditableModule[]>([]);
  const [customInstructions, setCustomInstructions] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateTrainingPlan(formData.industry, formData.teamRole, formData.focusArea);
      setIntro(result.introduction);
      setModules(result.modules.map((m, idx) => ({
        ...m,
        id: `gen-${Date.now()}-${idx}`,
        selected: true,
        isEditing: false
      })));
      setStep(2);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSelection = (id: string) => {
    setModules(prev => prev.map(m => m.id === id ? { ...m, selected: !m.selected } : m));
  };

  const deleteModule = (id: string) => {
    setModules(prev => prev.filter(m => m.id !== id));
  };

  const addNewModule = () => {
    const newMod: EditableModule = {
      id: `custom-${Date.now()}`,
      title: "New Custom Session",
      duration: "4 Hours",
      keyTakeaways: ["Learning outcome 1", "Learning outcome 2", "Learning outcome 3"],
      selected: true,
      isEditing: true, // Start in edit mode
      tempTitle: "New Custom Session",
      tempDuration: "4 Hours",
      tempTakeaways: "Learning outcome 1\nLearning outcome 2\nLearning outcome 3"
    };
    setModules(prev => [...prev, newMod]);
  };

  const startEditing = (id: string) => {
    setModules(prev => prev.map(m => 
      m.id === id ? { 
        ...m, 
        isEditing: true, 
        tempTitle: m.title, 
        tempDuration: m.duration, 
        tempTakeaways: m.keyTakeaways.join('\n') 
      } : m
    ));
  };

  const cancelEditing = (id: string) => {
    setModules(prev => prev.map(m => m.id === id ? { ...m, isEditing: false } : m));
  };

  const saveEditing = (id: string) => {
    setModules(prev => prev.map(m => {
      if (m.id === id) {
        return {
          ...m,
          isEditing: false,
          title: m.tempTitle || m.title,
          duration: m.tempDuration || m.duration,
          keyTakeaways: m.tempTakeaways ? m.tempTakeaways.split('\n').filter(t => t.trim()) : m.keyTakeaways
        };
      }
      return m;
    }));
  };

  const updateTemp = (id: string, field: 'tempTitle' | 'tempDuration' | 'tempTakeaways', value: string) => {
    setModules(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const handleRequestQuote = () => {
    const selected = modules.filter(m => m.selected);
    if (selected.length === 0) {
        alert("Please select at least one module for your curriculum.");
        return;
    }
    
    const message = `Hello, I have customized a training curriculum using your AI tool and would like a quote.

Client Details:
- Industry: ${formData.industry}
- Role: ${formData.teamRole}
- Focus: ${formData.focusArea}

Customized Curriculum (${selected.length} Modules):
${selected.map((m, i) => `
Module ${i + 1}: ${m.title}
Duration: ${m.duration}
Key Takeaways:
${m.keyTakeaways.map(t => `- ${t}`).join('\n')}
`).join('\n')}

Additional Instructions:
${customInstructions || "None"}

Please contact me to finalize this plan.`;

    if (onPlanInquiry) {
      onPlanInquiry(message);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-50 -skew-y-3 origin-top-left z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-1.5 border border-purple-200 mb-6 shadow-sm">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-purple-900 text-sm font-bold tracking-wide">AI-Powered Training Architect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Training Curriculum</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate a baseline with AI, then customize it to fit your exact needs. Select modules, edit details, and get a quote.
          </p>
        </Reveal>

        <Reveal delay={200} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-h-[600px] flex flex-col md:flex-row shadow-brand-200/40">
            
            {/* Left Panel: Input / Summary */}
            <div className={`transition-all duration-500 bg-brand-900 text-white p-8 flex flex-col ${step === 2 ? 'md:w-1/4' : 'md:w-1/3 w-full'}`}>
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-bold">Parameters</h3>
                 {step === 2 && (
                   <button onClick={() => setStep(1)} className="text-xs bg-brand-800 hover:bg-brand-700 px-3 py-1 rounded-full flex items-center gap-1 transition-colors border border-brand-700">
                     <RefreshCcw size={12} /> Reset
                   </button>
                 )}
              </div>
              
              {step === 1 ? (
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">Industry</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. IT, Manufacturing"
                      className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">Target Audience</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Sales Managers"
                      className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow"
                      value={formData.teamRole}
                      onChange={(e) => setFormData({...formData, teamRole: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">Key Challenge</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Closing deals"
                      className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow"
                      value={formData.focusArea}
                      onChange={(e) => setFormData({...formData, focusArea: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-white hover:from-cyan-400 hover:to-blue-400 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-8 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                    {loading ? 'Analyzing...' : 'Generate Plan'}
                  </button>
                </form>
              ) : (
                <div className="space-y-4 text-brand-100 text-sm">
                   <div>
                      <p className="text-xs uppercase tracking-wider opacity-60">Industry</p>
                      <p className="font-semibold text-white">{formData.industry}</p>
                   </div>
                   <div>
                      <p className="text-xs uppercase tracking-wider opacity-60">Role</p>
                      <p className="font-semibold text-white">{formData.teamRole}</p>
                   </div>
                   <div>
                      <p className="text-xs uppercase tracking-wider opacity-60">Focus</p>
                      <p className="font-semibold text-white">{formData.focusArea}</p>
                   </div>
                   <div className="pt-8 border-t border-brand-800">
                     <p className="text-xs opacity-80 mb-2">Progress</p>
                     <div className="w-full bg-brand-800 rounded-full h-2">
                       <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                     </div>
                     <p className="mt-2 text-xs">Step 2: Customize & Confirm</p>
                   </div>
                </div>
              )}
            </div>

            {/* Right Panel: Output */}
            <div className={`transition-all duration-500 bg-gray-50 flex flex-col ${step === 2 ? 'md:w-3/4' : 'md:w-2/3 w-full'}`}>
              
              {step === 1 && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 opacity-60 p-8">
                   <BookOpen size={64} className="mb-4 text-gray-300" />
                   <p className="text-lg font-medium">Your custom curriculum will appear here.</p>
                </div>
              )}

              {loading && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                  <h4 className="text-xl font-bold text-gray-800">Designing Curriculum...</h4>
                  <p className="text-gray-500">Consulting our knowledge base for {formData.industry} strategies.</p>
                </div>
              )}

              {step === 2 && (
                <div className="h-full overflow-y-auto custom-scrollbar animate-fadeIn flex flex-col p-8">
                  <div className="bg-blue-50 text-blue-900 p-4 rounded-lg mb-6 text-sm leading-relaxed border border-blue-100 flex gap-3 shadow-sm">
                    <Sparkles className="shrink-0 text-blue-500 mt-1" size={18} />
                    <div>
                      <strong>AI Suggestion:</strong> {intro}
                    </div>
                  </div>

                  <div className="flex justify-between items-end mb-4">
                     <h3 className="text-lg font-bold text-gray-800">Select & Customize Modules</h3>
                     <button onClick={addNewModule} className="text-sm flex items-center gap-1 text-brand-600 hover:text-brand-700 font-bold bg-white px-3 py-1.5 rounded-lg border border-brand-200 hover:border-brand-400 transition-all shadow-sm">
                        <Plus size={16} /> Add Custom Module
                     </button>
                  </div>
                  
                  <div className="space-y-4 flex-grow mb-8">
                    {modules.map((mod, idx) => (
                      <div 
                        key={mod.id} 
                        className={`bg-white p-5 rounded-xl border transition-all duration-300 ${mod.selected ? 'border-brand-200 shadow-md ring-1 ring-brand-100' : 'border-gray-200 opacity-60 grayscale-[0.5]'}`}
                      >
                        {mod.isEditing ? (
                          // EDIT MODE
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                               <h4 className="text-sm font-bold text-brand-600 uppercase tracking-wide">Editing Module {idx + 1}</h4>
                               <button onClick={() => deleteModule(mod.id)} className="text-red-400 hover:text-red-600 p-1">
                                  <Trash2 size={16} />
                               </button>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="col-span-2">
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Module Title</label>
                                <input 
                                  type="text" 
                                  value={mod.tempTitle}
                                  onChange={(e) => updateTemp(mod.id, 'tempTitle', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Duration</label>
                                <input 
                                  type="text" 
                                  value={mod.tempDuration}
                                  onChange={(e) => updateTemp(mod.id, 'tempDuration', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:outline-none"
                                />
                              </div>
                            </div>
                            <div>
                               <label className="block text-xs font-semibold text-gray-500 mb-1">Key Takeaways (One per line)</label>
                               <textarea 
                                  value={mod.tempTakeaways}
                                  onChange={(e) => updateTemp(mod.id, 'tempTakeaways', e.target.value)}
                                  rows={4}
                                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm"
                               />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                               <button onClick={() => cancelEditing(mod.id)} className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded flex items-center gap-1">
                                  <X size={14} /> Cancel
                               </button>
                               <button onClick={() => saveEditing(mod.id)} className="px-3 py-1.5 text-xs font-bold bg-green-500 text-white hover:bg-green-600 rounded flex items-center gap-1 shadow-sm">
                                  <Save size={14} /> Save Changes
                               </button>
                            </div>
                          </div>
                        ) : (
                          // DISPLAY MODE
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-start gap-3">
                                <button onClick={() => toggleSelection(mod.id)} className={`mt-1 transition-colors ${mod.selected ? 'text-brand-600' : 'text-gray-300'}`}>
                                   {mod.selected ? <CheckSquare size={20} /> : <Square size={20} />}
                                </button>
                                <div>
                                  <h4 className={`font-bold text-lg flex items-center gap-2 ${mod.selected ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {mod.title}
                                  </h4>
                                  <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit mt-1">
                                    <Clock size={12} /> {mod.duration}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <button onClick={() => startEditing(mod.id)} className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all">
                                   <Edit2 size={16} />
                                </button>
                              </div>
                            </div>
                            
                            {mod.selected && (
                              <ul className="space-y-1 ml-9">
                                {mod.keyTakeaways.map((point, k) => (
                                  <li key={k} className="text-gray-600 text-sm flex items-start gap-2">
                                    <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-gray-200 pt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Instructions / Customization Notes</label>
                    <textarea 
                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm mb-4 bg-gray-50 focus:bg-white transition-colors"
                       rows={2}
                       placeholder="e.g. Please focus more on remote team dynamics..."
                       value={customInstructions}
                       onChange={(e) => setCustomInstructions(e.target.value)}
                    ></textarea>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div className="text-sm text-gray-500 font-medium">
                         {modules.filter(m => m.selected).length} modules selected
                      </div>
                      <button 
                        onClick={handleRequestQuote}
                        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold rounded-lg hover:from-brand-700 hover:to-cyan-600 transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 hover:-translate-y-1">
                        Request Quote for Selected
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </Reveal>
      </div>
    </section>
  );
};