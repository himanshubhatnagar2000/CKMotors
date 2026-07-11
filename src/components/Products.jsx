import React, { useState } from 'react';
import { Shield, Zap, Users, Gauge, Info } from 'lucide-react';
import acepev from "../assets/images/ace pro/ev.jpg"
import acepp from "../assets/images/ace pro/petrol.jpg"
import acepbi from "../assets/images/ace pro/bifuel.jpg"
import acep from "../assets/images/ace/petrol.jpg"
import acecng from "../assets/images/ace/cng.jpg"

const CARS_DATA = [
  {
    id: 'aceproev',
    name: 'ACE PRO EV',
    tagline: 'Ab Meri Baari',
    type: 'Electric Mini Truck',
    category: 'ev',
    price: '₹6.50 Lakh*',
    image: acepev,
    // safety: '5-Star GNCAP & BNCAP',
    fuel: 'Electric (EV)',
    engine: 'PMSM (Permanent Magnet Synchronous Motor)',
    power: '29 kW @ 3500 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 155*km (Certified)', 'Charging: Slow Charging (5 to 100%): < 6 hours']
  },
  {
    id: 'acepropetrol',
    name: 'ACE PRO PETROL',
    tagline: 'Ab Meri Baari',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹3.99 Lakh*',
    image: acepp,
    // safety: '5-Star GNCAP',
    fuel: 'Petrol',
    engine: '694cc, water-cooled, 4-stroke engines',
    power: '22 kW (30 hp) @4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 140km', 'GVW: 1460kg']
  },
  {
    id: 'aceprobi',
    name: 'ACE PRO BIFUEL',
    tagline: 'Go.ev - Electric Icon',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹4.99 Lakh*',
    image: acepbi,
    // safety: '5-Star BNCAP (EV)',
    fuel: 'Bi-fuel (Petrol + CNG)',
    engine: '694cc dual-fuel engine',
    power: '19 kW (25 hp) @4000 rpm (CNG mode)',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 325-350km', 'GVW: 1535kg']
  },
  {
    id: 'acegoldpetrol',
    name: 'TATA ACE GOLD PETROL',
    tagline: 'Ab Meri Baari',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '3.99 lakh*',
    image: acep,
    // safety: '5-Star GNCAP',
    fuel: 'Petrol',
    engine: '694cc, 2-cylinder MPFI engine',
    power: '22 kW (30 hp) @4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 900kg', 'Range: 390-570km', 'GVW: 1740kg']
  },
  {
    id: 'acegoldcng',
    name: 'TATA ACE GOLD CNG 2.0',
    tagline: 'The Gold Standard',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹ 6.65 Lakh*',
    image: acecng,
    // safety: '5-Star GNCAP',
    fuel: 'Bi-fuel (Petrol + CNG)',
    engine: '694 cc, 2-cylinder, 4-stroke water-cooled engine',
    power: 'Petrol: (30 hp) 22 kW @ 4000 RPM; CNG : (25 hp) 18.3 kW @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 800kg', 'Range: 300-400km', 'GVW: 1790kg']
  }
];

export default function Products({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCars = activeCategory === 'all'
    ? CARS_DATA
    : CARS_DATA.filter(car => car.category === activeCategory);

  return (
    <section id="products" className="py-20 relative bg-tata-bg">
      <div className="container">
        <div className="text-center max-w-[650px] mx-auto mb-12">
          <span className="text-xs font-bold text-tata-blue uppercase tracking-widest block mb-3">Showroom Catalog</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-4">Explore Our Premium Fleet</h2>
          <p className="text-sm text-slate-500">
            Choose from Tata Motors' award-winning range of safest and smartest vehicles. Click "Enquire Now" to request detailed pricing and custom showroom offers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {[
            { key: 'all', label: 'All Vehicles' },
            { key: 'mini-truck', label: 'Mini Trucks' },
            { key: 'ev', label: 'EV Range ⚡' }
          ].map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === tab.key
                ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20'
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
                }`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className={`group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${car.category === 'ev' ? 'hover:border-whatsapp-green/30' : 'hover:border-tata-blue/25'}`}
            >
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-4 right-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${car.category === 'ev' ? 'bg-whatsapp-green text-white' : 'bg-slate-950 text-white'}`}>
                  {car.type === 'Electric Mini Truck' ? 'EV' : car.category === 'mini-truck' ? 'Mini Truck' : 'Model'}
                </span>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{car.name}</h3>
                    <p className="mt-2 text-sm text-slate-500">{car.tagline}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 text-right">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Ex-Showroom</p>
                    <p className="mt-2 text-lg font-extrabold text-slate-900">{car.price}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Engine / Battery</p>
                    <p className="mt-2 font-semibold text-slate-900">{car.engine}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Power Output</p>
                    <p className="mt-2 font-semibold text-slate-900">{car.power}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Seating</p>
                    <p className="mt-2 font-semibold text-slate-900">{car.seating}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Fuel Options</p>
                    <p className="mt-2 font-semibold text-slate-900">{car.fuel}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {car.keySpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${car.category === 'ev' ? 'bg-whatsapp-green' : 'bg-tata-blue'}`} />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    onClick={() => {
                      const detailsSection = document.getElementById('contact');
                      if (detailsSection) {
                        detailsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View Showroom
                  </button>
                  <button
                    className="rounded-full bg-tata-blue px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0b2e86]"
                    onClick={() => onOpenInquiry(car.name)}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
