import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import FontSizeToggle from './FontSizeToggle';

export default function Header({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks for both router pages & hash section anchors
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.path) {
      navigate(item.path);
      return;
    }

    if (location.pathname === '/') {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + item.id);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero', path: '/' },
    { label: 'Products & Models', id: 'products', path: '/products' },
    { label: 'Why Choose Us', id: 'about' },
    { label: 'Contact & Location', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${isScrolled
      ? 'py-3 bg-tata-blue/95 backdrop-blur-md shadow-lg'
      : 'py-5 bg-tata-blue'
      }`}>
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col">
          <Link to="/" className="font-heading font-extrabold text-2xl tracking-tight flex items-center leading-none">
            <span className="text-white">CK</span>
            <span className="text-white ml-0.5">MOTORS</span>
          </Link>
          <span className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Authorized TATA Motors Dealer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.path || `/#${item.id}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-sm font-semibold relative py-2 transition-all duration-300 group ${(item.path && location.pathname === item.path) ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${(item.path && location.pathname === item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </a>
          ))}
        </nav>

        {/* Desktop CTA, Language & Font Controls */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <FontSizeToggle />
          <LanguageToggle />

          <a
            href="tel:+918484932191"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-200 transition-colors pl-1"
            title="Call Showroom"
          >
            <Phone size={16} />
            <span>+91 84849 32191</span>
          </a>

          <button
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-body font-bold text-sm rounded bg-white text-tata-blue hover:bg-slate-100 transition-all shadow cursor-pointer shrink-0"
            onClick={() => onOpenInquiry()}
          >
            <Calendar size={16} />
            <span>Book Test Drive</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="block lg:hidden text-white cursor-pointer hover:opacity-85 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full p-6 bg-tata-blue border-b border-white/10 shadow-xl flex flex-col gap-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.path || `/#${item.id}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-base font-medium text-white/80 hover:text-white py-1.5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-white/70 font-semibold">Text Size:</span>
              <FontSizeToggle />
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-white/70 font-semibold">Select Language:</span>
              <LanguageToggle />
            </div>
            <a href="tel:+918484932191" className="flex items-center gap-2 text-white hover:text-blue-200 py-1.5">
              <Phone size={16} />
              <span>+91 84849 32191</span>
            </a>
            <button
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 font-bold text-sm rounded bg-white text-tata-blue hover:bg-slate-100 transition-all cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInquiry();
              }}
            >
              <Calendar size={16} />
              <span>Book Test Drive</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
