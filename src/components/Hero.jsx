import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import HERO from "../assets/hero.jpg"

export default function Hero({ onOpenInquiry }) {
  return (
    <section id="hero" className="pt-[140px] pb-16 relative bg-gradient-to-br from-tata-blue/5 via-transparent to-whatsapp-green/2 border-b border-slate-200 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left animate-fade-in-up">
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-tata-blue/8 border border-tata-blue/15 text-tata-navy">
              <Sparkles size={14} className="animate-pulse" />
              Redefining Indian Motoring
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-tata-navy leading-tight mb-6">
            Drive the Future <br />
            With <span className="bg-gradient-to-r from-tata-blue to-blue-600 bg-clip-text text-transparent">CK Motors</span>
          </h1>
          <p className="text-base text-slate-600 mb-8 max-w-[540px]">
            Experience the luxury of performance, advanced tech, and India's safest fleet. As your trusted authorized TATA Motors showroom, we bring you vehicles designed to excite and built to protect.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-bold text-base bg-tata-blue text-white hover:bg-tata-navy transition-all duration-300 shadow-lg hover:shadow-tata-blue/20 hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onOpenInquiry()}
            >
              <span>Book a Test Drive</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-bold text-base border border-tata-blue text-tata-blue hover:bg-tata-blue/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Models
            </a>
          </div>

          <div className="flex gap-8 border-t border-slate-200 pt-8 w-full">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                <ShieldCheck size={20} className="text-tata-blue" />
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 leading-tight">5-Star</span>
                <span className="block text-xs text-slate-500">Safety Rated Fleet</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                <Award size={20} className="text-tata-blue" />
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 leading-tight">Best Offers</span>
                <span className="block text-xs text-slate-500">Guaranteed Pricing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-in-up delay-200">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute w-[350px] h-[350px] bg-tata-blue/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px] -z-10"></div>
            <img
              src={HERO}
              alt="ACE PRO EV Showroom Showcase"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(13,51,136,0.15)] rounded-[20px] object-cover"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 p-4 px-6 rounded-lg bg-white border border-slate-200 shadow-lg">
              <span className="text-[10px] font-bold text-tata-blue tracking-widest block mb-1">FLAGSHIP LAUNCH</span>
              <h3 className="text-lg font-extrabold text-slate-900 mb-0.5">ACE PRO EV</h3>
              <p className="text-xs text-slate-500">Starting from ₹6.50 Lakh*</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
