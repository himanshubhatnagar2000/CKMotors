import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Zap, Search, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import InquiryModal from '../components/InquiryModal';

export default function ProductsPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Products Catalog & Vehicle Fleet – CK Motors';
  }, []);

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
      <Header onOpenInquiry={() => openInquiry('General Enquiry')} />

      {/* Hero Banner for Products Page */}
      <div className="relative overflow-hidden bg-gradient-to-br from-tata-navy via-tata-blue to-[#1a4ec4] pt-36 pb-16">
        {/* Background Decorative Accent Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 text-white/90 mb-5">
            <Truck size={14} className="text-blue-300" />
            Authorized TATA Motors Showcase
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Explore Our Vehicle Catalog
          </h1>

          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
            Discover Tata Motors' complete commercial lineup across Mini Trucks, Busses &amp; Passenger Transport, EV Commercials, and Heavy Duty Pickups. Search by specification and request custom showroom pricing.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium">Products &amp; Fleet</span>
          </div>
        </div>
      </div>

      {/* Main Products Section */}
      <main className="bg-tata-bg min-h-screen">
        <Products onOpenInquiry={openInquiry} isStandalonePage={true} />
      </main>


      <Footer />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={closeInquiry}
        preselectedCar={selectedCar}
      />
    </>
  );
}
