import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactProps {
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
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
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: message,
      type: 'general'
    };

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
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
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <Reveal direction="left">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-brand-100 mb-8 leading-relaxed text-lg">
              Whether you need to boost sales figures, develop future leaders, or ignite team motivation, Rocksvel is your partner in growth. Contact us today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-brand-800 p-3 rounded-lg shrink-0 group-hover:bg-brand-700 transition-colors shadow-lg">
                  <MapPin className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Us</h4>
                  <p className="text-brand-200 text-sm mt-1 leading-relaxed group-hover:text-white transition-colors">
                    3rd Floor, Dwarawati31 Pipeline,<br />
                    Subhodaya Colony, Kukatpally,<br />
                    Hyderabad 500072
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-brand-800 p-3 rounded-lg shrink-0 group-hover:bg-brand-700 transition-colors shadow-lg">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-brand-200 text-sm mt-1 group-hover:text-white transition-colors">
                    +91 9014755686
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-brand-800 p-3 rounded-lg shrink-0 group-hover:bg-brand-700 transition-colors shadow-lg">
                  <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-brand-200 text-sm mt-1 group-hover:text-white transition-colors">
                    rocksvelprivatelimited@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 to-cyan-500"></div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input name="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow hover:border-brand-300" placeholder="Your Name" required />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow hover:border-brand-300" placeholder="+91..." required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input name="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow hover:border-brand-300" placeholder="you@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none font-sans transition-shadow hover:border-brand-300"
                    placeholder="How can we help you?"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold rounded-lg hover:from-brand-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 hover:-translate-y-1 transform">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};