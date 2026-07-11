import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 8000);
  };

  const directionsUrl = 'https://www.google.com/maps/dir//No+10%2FA,+Tata+Motors+Commercial+Vehicle+Dealer+-+C+K+Motors,+Old+Industrial+Area,+Chittorgarh,+Rajasthan+312001/@24.8992082,74.6207115,17z/data=!4m16!1m7!3m6!1s0x3968a04c6e6b9b67:0x3342f78fdd54f17a!2sTata+Motors+Commercial+Vehicle+Dealer+-+C+K+Motors!8m2!3d24.8992082!4d74.6232864!16s%2Fg%2F11btsvfflf!4m7!1m0!1m5!1m1!1s0x3968a04c6e6b9b67:0x3342f78fdd54f17a!2m2!1d74.6232864!2d24.8992082?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D';

  const INFO_ITEMS = [
    {
      icon: <MapPin size={18} />,
      color: 'bg-blue-50 text-tata-blue border border-blue-100',
      title: 'Location Address',
      content: 'No 10/A, Old Industrial Area,\nChittorgarh, Rajasthan – 312001',
    },
    {
      icon: <Phone size={18} />,
      color: 'bg-blue-50 text-tata-blue border border-blue-100',
      title: 'Contact Lines',
      content: 'Sales: +91 84849 32191\nSupport: +91 84849 32191',
    },
    {
      icon: <Mail size={18} />,
      color: 'bg-blue-50 text-tata-blue border border-blue-100',
      title: 'Email Correspondence',
      content: 'sales@ckmotors.in\nsupport@ckmotors.in',
    },
    {
      icon: <Clock size={18} />,
      color: 'bg-blue-50 text-tata-blue border border-blue-100',
      title: 'Working Hours',
      content: 'Monday – Sunday: 9:00 AM – 8:00 PM\nShowroom open all days of the week',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-tata-blue/10 text-tata-blue border border-tata-blue/20 mb-4">
            Find &amp; Reach Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-4">Visit Our Showroom</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Come to CK Motors showroom to experience Tata vehicles in person. Take a test drive, discuss finance options and explore accessories.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Info Card */}
          <div className="w-full">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
              <h3 className="text-lg font-bold text-tata-navy mb-5">CK Motors Dealership</h3>
              <div className="flex flex-col gap-5">
                {INFO_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.title}</p>
                      <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA */}
                {/* <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">WhatsApp Support</p>
                    <a
                      href="https://wa.me/918484932191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
                    >
                      <MessageCircle size={14} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-full min-h-[500px] w-full">
            <div className="relative h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9640400362377!2d74.6232864!3d24.899208200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a04c6e6b9b67%3A0x3342f78fdd54f17a!2sTata%20Motors%20Commercial%20Vehicle%20Dealer%20-%20C%20K%20Motors!5e0!3m2!1sen!2sin!4v1783766757771!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CK Motors Tata Showroom – Chittorgarh"
              />
              {/* <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row sm:justify-end gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-tata-blue text-white text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-tata-navy transition"
                >
                  Get Directions
                </a>
              </div> */}
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-tata-navy mb-5">Send a Direct Message</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-500">Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-tata-blue focus:ring-2 focus:ring-tata-blue/10"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-number" className="text-xs font-semibold text-slate-500">Phone Number *</label>
                      <input
                        type="text"
                        id="contact-number"
                        required
                        value={formState.number}
                        onChange={(e) => setFormState({ ...formState, number: e.target.value })}
                        placeholder="9999999999"
                        className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-tata-blue focus:ring-2 focus:ring-tata-blue/10"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-500">Email *</label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-tata-blue focus:ring-2 focus:ring-tata-blue/10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-500">Subject *</label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Pricing query, Fleet enquiry..."
                      className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-tata-blue focus:ring-2 focus:ring-tata-blue/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-500">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your query here..."
                      className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-tata-blue focus:ring-2 focus:ring-tata-blue/10 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-tata-blue hover:bg-tata-navy text-white text-sm font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex items-start gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <CheckCircle size={28} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-800 mb-1">Message Dispatched!</h4>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      We've received your message. Our showroom executive will call or email you back in 1-2 business days.
                    </p>
                  </div>
                </div>
              )}
            </div>
      </div>
    </section>
  );
}
