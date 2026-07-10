import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, Sparkles } from 'lucide-react';

const AVAILABLE_MODELS = [
  'Tata Safari',
  'Tata Curvv',
  'Tata Nexon EV',
  'Tata Punch',
  'Tata Altroz',
  'General Enquiry'
];

export default function InquiryModal({ isOpen, onClose, preselectedCar }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: 'General Enquiry',
    type: 'Test Drive',
    date: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedCar) {
      setFormData(prev => ({ ...prev, model: preselectedCar }));
    } else {
      setFormData(prev => ({ ...prev, model: 'General Enquiry' }));
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [preselectedCar, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-[650px] bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-2xl animate-fade-in-up text-left" role="dialog" aria-modal="true">
        <button 
          className="absolute top-6 right-6 bg-slate-100 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition-colors text-slate-500 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tata-blue/8 border border-tata-blue/15 text-tata-blue mb-3">
                <Sparkles size={12} className="animate-pulse" />
                Showroom Connect
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tata-navy mb-2">Schedule / Enquire</h2>
              <p className="text-sm text-slate-500">
                Fill in the details below. A CK Motors advisor will contact you within 2 hours to confirm your schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-name" className="text-xs font-semibold text-slate-500">Full Name *</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name"
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-phone" className="text-xs font-semibold text-slate-500">Phone Number *</label>
                <input 
                  type="tel" 
                  id="modal-phone" 
                  name="phone" 
                  pattern="[0-9]{10}"
                  title="Ten digit phone number"
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. 8484932191"
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-email" className="text-xs font-semibold text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  id="modal-email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="e.g. john@example.com"
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-model" className="text-xs font-semibold text-slate-500">Selected Tata Model</label>
                <select 
                  id="modal-model" 
                  name="model" 
                  value={formData.model} 
                  onChange={handleChange}
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                >
                  {AVAILABLE_MODELS.map(model => (
                    <option key={model} value={model} className="bg-white text-slate-900">{model}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-type" className="text-xs font-semibold text-slate-500">Inquiry Type</label>
                <select 
                  id="modal-type" 
                  name="type" 
                  value={formData.type} 
                  onChange={handleChange}
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                >
                  <option value="Test Drive">Book a Test Drive</option>
                  <option value="Price Quote">Request Detailed Quote</option>
                  <option value="Finance Offer">Finance & EMI Queries</option>
                  <option value="General">General Showroom Query</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-date" className="text-xs font-semibold text-slate-500">Preferred Date</label>
                <input 
                  type="date" 
                  id="modal-date" 
                  name="date" 
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date} 
                  onChange={handleChange}
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label htmlFor="modal-notes" className="text-xs font-semibold text-slate-500">Additional Messages / Requirements</label>
                <textarea 
                  id="modal-notes" 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleChange} 
                  rows="3"
                  placeholder="Mention any custom specifications, variant preferences, or exchange queries..."
                  className="bg-white border border-slate-200 rounded p-2.5 px-3.5 text-slate-900 text-sm outline-none transition duration-300 focus:border-tata-blue focus:ring-3 focus:ring-tata-blue/10"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 mt-2 bg-tata-blue text-white rounded font-bold text-sm hover:bg-tata-navy transition duration-300 shadow hover:shadow-tata-blue/15 cursor-pointer flex justify-center items-center gap-2" 
              disabled={loading}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 rounded-full border-t-white animate-spin"></span>
              ) : (
                <span>Submit Showroom Request</span>
              )}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
              <CheckCircle2 size={48} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-emerald-900 mb-3">Request Received Successfully!</h2>
            <p className="text-sm text-slate-500 max-w-[480px] mx-auto mb-6 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your request for a <strong>{formData.type}</strong> for the <strong>{formData.model}</strong> has been logged in our system.
            </p>
            <div className="w-full max-w-[440px] p-5 px-6 rounded-lg border border-slate-200 bg-slate-50 mb-6 flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <Calendar size={16} className="text-tata-blue" />
                <span>Preferred Date: {formData.date || 'TBD (To be confirmed over call)'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <Phone size={16} className="text-tata-blue" />
                <span>Follow-up Phone: {formData.phone}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mb-7 max-w-[420px]">
              An executive from CK Motors will call you shortly at the provided number to coordinate pricing, models availability, and test drive details.
            </p>
            <button 
              className="w-[200px] py-2.5 bg-tata-blue text-white rounded font-bold text-sm hover:bg-tata-navy transition cursor-pointer" 
              onClick={onClose}
            >
              Back to Showroom
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
