import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import EmiCalculator from './components/EmiCalculator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import { Compass, BadgeCheck, Wrench, ShieldAlert } from 'lucide-react';
import './App.css';

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CK Motors – Authorized TATA Motors Commercial Dealer';
  }, []);

  // Scroll to the section matching the URL hash when navigating from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  const openInquiry = (carName = '') => {
    setSelectedCar(carName);
    setIsInquiryOpen(true);
  };

  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setSelectedCar('');
  };

  return (
    <>
      {/* Sticky Header Navigation */}
      <Header onOpenInquiry={() => openInquiry('General Enquiry')} />

      {/* Main Page Sections */}
      <main className="pt-8">
        {/* Immersive Hero Section */}
        <Hero onOpenInquiry={openInquiry} />

        {/* Featured Vehicles Preview */}
        <Products onOpenInquiry={openInquiry} isTeaser={true} />

        {/* Showroom Interactive EMI Calculator */}
        <EmiCalculator onOpenInquiry={openInquiry} />

        {/* Why Choose CK Motors (About Section) */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-tata-blue/10 text-tata-blue border border-tata-blue/20 mb-4">
                Showroom Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-4">The CK Motors Experience</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                We believe buying a commercial vehicle should be hassle-free. That's why we support you at every milestone with personalized, showroom-grade service.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-tata-blue/10 border border-tata-blue/15 flex items-center justify-center text-tata-blue">
                  <Compass size={22} />
                </div>
                <h3 className="text-base font-bold text-tata-navy">Doorstep Test Drives</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Short on time? Choose your preferred Tata commercial vehicle and we will bring it right to your office or hub for a test drive.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-tata-blue/10 border border-tata-blue/15 flex items-center justify-center text-tata-blue">
                  <BadgeCheck size={22} />
                </div>
                <h3 className="text-base font-bold text-tata-navy">Instant EMI &amp; Finance</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Partnered with top public and private banks to secure low interest rates, instant approvals, and flexible financing structures.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-tata-blue/10 border border-tata-blue/15 flex items-center justify-center text-tata-blue">
                  <Wrench size={22} />
                </div>
                <h3 className="text-base font-bold text-tata-navy">40-Bay Service Hub</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our advanced workshop features cutting-edge Tata diagnostics, high-volume collision repair, and genuine spare parts.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-tata-blue/10 border border-tata-blue/15 flex items-center justify-center text-tata-blue">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="text-base font-bold text-tata-navy">100% Exchange Bonus</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Upgrade your old commercial vehicle easily. We offer transparent digital evaluations at the showroom and guarantee maximum value.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Us & Live Google Map */}
        <ContactSection />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Booking / Lead Generation Popup Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={closeInquiry}
        preselectedCar={selectedCar}
      />
    </>
  );
}

export default App;
