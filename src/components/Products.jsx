import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ChevronLeft, ChevronRight, Cpu, Zap, Users, Fuel, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VEHICLES_DATA, CATEGORIES } from '../data/vehiclesData';

export default function Products({ onOpenInquiry, isTeaser = false, isStandalonePage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4; // 4 vehicles per page (2x2 spacious layout)

  // Reset to page 1 whenever user changes category filter or searches
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Filter cars based on category and search query
  const filteredCars = VEHICLES_DATA.filter((car) => {
    const matchesCategory = activeCategory === 'all' || car.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.fuel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination bounds
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const displayedCars = isTeaser
    ? filteredCars.slice(0, 4)
    : filteredCars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Smooth scroll to top of catalog section
      const catalogEl = document.getElementById('products');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredCars.length);

  return (
    <section id="products" className={`py-20 relative bg-tata-bg ${isStandalonePage ? 'pt-12' : ''}`}>
      <div className="container">

        {/* Section Header */}
        {!isStandalonePage && (
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <span className="text-xs font-bold text-tata-blue uppercase tracking-widest block mb-3">
              {isTeaser ? 'Featured Showcase' : 'Showroom Catalog'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-4">
              {isTeaser ? 'Popular Commercial Fleet' : 'Explore Our Full Vehicle Catalog'}
            </h2>
            <p className="text-sm text-slate-500">
              {isTeaser
                ? 'Discover our top-selling Mini Trucks, EVs, Buses & Pickups. Click "Explore All Vehicles" to see the full range.'
                : 'Choose from Tata Motors\' complete lineup of Mini Trucks, Commercial Buses, Electric Vehicles, and Heavy Duty Pickups.'
              }
            </p>
          </div>
        )}

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">

          {/* Category Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-2 w-full lg:w-auto">
            {CATEGORIES.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer flex items-center gap-2 ${activeCategory === tab.key
                      ? 'bg-tata-blue text-white border-tata-blue shadow-md shadow-tata-blue/20 scale-105'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  onClick={() => setActiveCategory(tab.key)}
                >
                  {Icon && typeof Icon === 'function' ? (
                    <Icon size={16} className="shrink-0 text-current" />
                  ) : null}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search model, fuel, engine, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-tata-blue focus:ring-1 focus:ring-tata-blue transition shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Results Info Counter */}
        {!isTeaser && filteredCars.length > 0 && (
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
            <span>
              Showing <strong className="text-slate-900 font-bold">{startIndex}–{endIndex}</strong> of <strong className="text-slate-900 font-bold">{filteredCars.length}</strong> vehicles
            </span>
            <span>Page <strong className="text-slate-900 font-bold">{currentPage}</strong> of <strong className="text-slate-900 font-bold">{totalPages}</strong></span>
          </div>
        )}

        {/* Empty State */}
        {displayedCars.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
            <p className="text-base font-bold text-slate-700 mb-2">No matching vehicles found</p>
            <p className="text-xs text-slate-500 mb-4">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-tata-blue text-white text-xs font-bold rounded-full hover:bg-tata-navy transition"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Spacious 2-Column Showroom Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(13,51,136,0.12)] hover:border-tata-blue/30 transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              {/* Vehicle Showcase Image Header */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80";
                  }}
                />

                {/* Floating Category Pill */}
                <span className={`absolute top-4 right-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${car.category === 'ev'
                    ? 'bg-whatsapp-green text-white'
                    : car.category === 'bus'
                      ? 'bg-purple-700 text-white'
                      : car.category === 'pickup'
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-950 text-white'
                  }`}>
                  {car.category === 'ev' ? 'EV' : car.category === 'bus' ? 'Bus' : car.category === 'pickup' ? 'Pickup' : 'Mini Truck'}
                </span>
              </div>

              {/* Card Body & Specs */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-5">

                {/* Vehicle Title & Tagline */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-tata-blue transition-colors tracking-tight">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium line-clamp-1">
                    {car.tagline}
                  </p>
                </div>

                {/* Showroom Pricing & EMI Highlight Box */}
                <div className="bg-gradient-to-r from-tata-blue/5 to-blue-50/50 border border-tata-blue/15 rounded-2xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Ex-Showroom Price</span>
                    <span className="text-lg font-black text-tata-navy">{car.price}</span>
                  </div>
                  {car.emi && (
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Low EMI Offer</span>
                      <span className="inline-block text-[11px] font-extrabold text-tata-blue bg-white border border-tata-blue/20 rounded-xl px-2.5 py-0.5 shadow-xs">
                        From {car.emi}
                      </span>
                    </div>
                  )}
                </div>

                {/* Spec Icons Matrix */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50/80 border border-slate-100 rounded-2xl p-3">
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-tata-blue shrink-0" />
                    <span className="truncate font-semibold text-slate-800 text-[11px]">{car.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-tata-blue shrink-0" />
                    <span className="truncate font-semibold text-slate-800 text-[11px]">{car.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-tata-blue shrink-0" />
                    <span className="truncate font-semibold text-slate-800 text-[11px]">Cap: {car.seating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel size={14} className="text-tata-blue shrink-0" />
                    <span className="truncate font-semibold text-slate-800 text-[11px]">{car.fuel}</span>
                  </div>
                </div>

                {/* Key Spec Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {car.keySpecs.map((spec, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-medium text-slate-700">
                      <CheckCircle2 size={11} className="text-tata-blue shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    className="rounded-xl cursor-pointer border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-tata-blue/40 hover:bg-slate-50"
                    onClick={() => onOpenInquiry(`On-Road Quote: ${car.name}`)}
                  >
                    On-Road Quote
                  </button>
                  <button
                    className="rounded-xl cursor-pointer bg-tata-blue hover:bg-tata-navy text-white text-xs font-bold px-3 py-2.5 transition shadow-md hover:shadow-lg flex items-center justify-center gap-1"
                    onClick={() => onOpenInquiry(`Book Test Drive: ${car.name}`)}
                  >
                    <span>Test Drive</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination Navigation Bar */}
        {!isTeaser && totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-full border text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${currentPage === 1
                ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-tata-blue hover:text-white hover:border-tata-blue shadow-sm'
                }`}
              aria-label="Previous Page"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline pr-1">Prev</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full text-xs font-bold transition-all cursor-pointer border ${currentPage === pageNum
                    ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20 scale-105'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-full border text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${currentPage === totalPages
                ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-tata-blue hover:text-white hover:border-tata-blue shadow-sm'
                }`}
              aria-label="Next Page"
            >
              <span className="hidden sm:inline pl-1">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* View All Products CTA on Homepage Teaser */}
        {isTeaser && (
          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-tata-navy hover:bg-tata-blue text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Explore All Commercial Vehicles ({VEHICLES_DATA.length} Models across 4 Categories)</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
