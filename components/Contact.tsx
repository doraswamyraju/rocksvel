import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactProps {
  initialMessage?: string;
  type?: 'general' | 'planner' | 'institute' | 'crash-course';
  data?: any;
}

export const Contact: React.FC<ContactProps> = ({ initialMessage = '', type = 'general', data: extraData }) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const postData = {
      name: formData.get('name') as string, // Assuming input name is 'name' - wait, the form inputs need name attributes!
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: message,
      type: type,
      courseData: extraData
    };

    // Note: The form inputs in the view (Step 102) do NOT have 'name' attributes. 
    // I need to update the JSX to add name attributes as well.
    // So I will just replace the whole component return or the relevant parts.

    // Actually, looking at Step 102, the inputs are:
    // <input type="text" placeholder="John Doe" ... />
    // They are missing 'name' attributes. I must add them.

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        alert("Thank you! We have received your inquiry and will contact you shortly.");
        setMessage('');
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-900 text-white clip-diagonal-reverse relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          <Reveal direction="left" className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-6 tracking-tight leading-tight uppercase">Transform Your Business Today</h2>
            <p className="text-brand-100 mb-10 leading-relaxed text-lg font-light">
              RocksVel is your dedicated partner in growth. We bridge the gap between team potential and organizational performance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group w-full">
                <div className="bg-brand-800 p-4 rounded-2xl shrink-0 group-hover:bg-brand-600 transition-all shadow-lg">
                  <MapPin className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-xl mb-1">Visit Our Center</h4>
                  <p className="text-brand-200 text-sm leading-relaxed group-hover:text-white transition-colors mb-4">
                    3rd Floor, Dwarawati31 Pipeline,<br />
                    Subhodaya Colony, Kukatpally,<br />
                    Hyderabad 500072
                  </p>
                  <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border-2 border-brand-800/50 group-hover:border-brand-600 transition-colors">
                    <iframe
                      src="https://maps.google.com/maps?q=3rd%20Floor,%20Dwarawati31%20Pipeline,%20Subhodaya%20Colony,%20Kukatpally,%20Hyderabad%20500072&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RocksVel Office Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-brand-800 p-4 rounded-2xl shrink-0 group-hover:bg-brand-600 transition-all shadow-lg">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Direct Helpline</h4>
                  <p className="text-brand-200 text-sm group-hover:text-white transition-colors">
                    +91 9014755686
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-brand-800 p-4 rounded-2xl shrink-0 group-hover:bg-brand-600 transition-all shadow-lg">
                  <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Official Inquiry</h4>
                  <p className="text-brand-200 text-sm group-hover:text-white transition-colors">
                    rocksvelprivatelimited@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200} className="lg:col-span-3 w-full">
            <div className="bg-white rounded-[2.5rem] p-10 text-gray-800 shadow-2xl relative overflow-hidden border border-white/10 w-full">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-brand-600 to-cyan-400"></div>
              <h3 className="text-3xl font-black mb-8 text-gray-900 tracking-tight">Consult with RocksVel</h3>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                    <input name="name" type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none transition-all font-bold" placeholder="John Doe" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Phone Number</label>
                    <input name="phone" type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none transition-all font-bold" placeholder="+91..." required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Business/Personal Email</label>
                  <input name="email" type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none transition-all font-bold" placeholder="name@domain.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">How can we help?</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none font-bold transition-all resize-none"
                    placeholder="Tell us about your team's needs..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-3 mt-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};