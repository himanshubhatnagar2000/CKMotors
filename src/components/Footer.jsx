import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Award, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/CKmotorsdealership/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    // {
    //   label: 'Twitter',
    //   href: 'https://www.instagram.com/ckmotors_tatamotorsdealership/',
    //   icon: (
    //     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    //     </svg>
    //   ),
    // },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ckmotors_tatamotorsdealership/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96C5.12 19 12 19 12 19s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z" />
          <polyline points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-tata-navy text-white">

      {/* Value Proposition Banner */}
      <div className="border-b border-white/10 bg-tata-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">India's Safest Fleet</h4>
                <p className="text-xs text-white/60 leading-relaxed">Top-rated 5-Star BNCAP/GNCAP Tata passenger vehicles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">State-of-Art Workshop</h4>
                <p className="text-xs text-white/60 leading-relaxed">Certified Tata mechanics and genuine spares at CK Motors.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                <HelpCircle size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">24/7 Roadside Support</h4>
                <p className="text-xs text-white/60 leading-relaxed">Emergency assistance and towing services just one call away.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-1 font-extrabold text-2xl tracking-tight">
              <span className="text-white">CK</span>
              <span className="text-white/50 font-light">MOTORS</span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              Authorized Tata Motors showroom bringing you the best dealership experience. Elevate your driving journey with style, luxury, and safety.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Showroom Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[['#hero', 'Home'], ['#products', 'Tata Cars Catalog'], ['#about', 'Why CK Motors'], ['#contact', 'Showroom Location']].map(([href, label]) => (
                <a key={label} href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div> */}

          {/* Vehicle Range */}
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Tata Vehicle Range</h4>
            <nav className="flex flex-col gap-2.5">
              {['Tata Safari (SUV)', 'Tata Curvv (Coupe)', 'Tata Nexon EV (Electric)', 'Tata Punch (Micro SUV)', 'Tata Altroz (Hatchback)'].map((model) => (
                <a key={model} href="#products" className="text-sm text-white/60 hover:text-white transition-colors">
                  {model}
                </a>
              ))}
            </nav>
          </div> */}

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Get Showroom Offers</h4>
            <p className="text-sm text-white/55 leading-relaxed">
              Subscribe for pricing updates, upcoming Tata launches, and showroom finance discounts.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/50 transition"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-white transition-colors cursor-pointer"
                >
                  <Send size={15} />
                </button>
              </form>
            ) : (
              <p className="text-sm text-emerald-400 font-semibold">✓ Subscribed! We'll keep you posted.</p>
            )}
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} CK Motors. All Rights Reserved. All logos and trademarks are property of Tata Motors Ltd.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
