import React from 'react';
import { Star, Quote, CheckCircle2, Award, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tata-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Award size={14} />
            <span>Trusted By 1,250+ Commercial Owners</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-4">
            What Our Vehicle Owners Say
          </h2>

          <p className="text-sm text-slate-500">
            Real feedback from logistics operators, fleet owners, and business entrepreneurs across Pune & Maharashtra.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-sm">4.9 / 5.0</span>
            <span className="text-slate-400">|</span>
            <span className="font-semibold text-slate-600">Verified Customer Reviews</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-tata-bg/60 border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_30px_rgba(13,51,136,0.08)] hover:border-tata-blue/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 text-slate-200 group-hover:text-tata-blue/20 transition-colors" size={48} />

              <div className="relative z-10 space-y-4">
                {/* Rating Stars & Vehicle Tag */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 bg-tata-blue/8 border border-tata-blue/15 text-tata-blue px-3 py-1 rounded-full text-xs font-extrabold">
                    🚚 {item.vehicle}
                  </span>
                </div>

                {/* Customer Review Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium pt-2">
                  "{item.quote}"
                </p>
              </div>

              {/* Customer Info Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-tata-blue/30 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 size={15} className="text-whatsapp-green" title="Verified Owner" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.location}</p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  {item.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
