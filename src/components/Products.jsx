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
          <button
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${activeCategory === 'all'
              ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20'
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
              }`}
            onClick={() => setActiveCategory('all')}
          >
            All Vehicles
          </button>
          <button
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${activeCategory === 'suv'
              ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20'
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
              }`}
            onClick={() => setActiveCategory('mini-truck')}
          >
            Mini Trucks
          </button>
          <button
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${activeCategory === 'ev'
              ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20'
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
              }`}
            onClick={() => setActiveCategory('ev')}
          >
            EV Range ⚡
          </button>
          {/* <button
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${activeCategory === 'hatchback'
              ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20'
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
              }`}
            onClick={() => setActiveCategory('hatchback')}
          >
            Hatchbacks
          </button> */}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className={`group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${car.category === 'ev' ? 'hover:border-whatsapp-green/40' : 'hover:border-tata-blue/35'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 pb-3 bg-gradient-to-b from-tata-blue/[0.01] to-transparent flex items-center justify-center min-h-[200px]">
                <img src={car.image} alt={car.name} className="max-w-[90%] h-auto object-contain drop-shadow-[0_8px_16px_rgba(13,51,136,0.12)] transition-transform duration-300 group-hover:scale-104" />
                <span className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border ${car.category === 'ev'
                  ? 'bg-whatsapp-green text-white border-whatsapp-green'
                  : 'bg-slate-600 text-white border-slate-600'
                  }`}>
                  {car.type}
                </span>
              </div>

              <div className="p-6 border-t border-slate-100 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-tata-navy mb-0.5">{car.name}</h3>
                    <p className="text-xs text-slate-500">{car.tagline}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest">Ex-Showroom</span>
                    <span className="text-base font-extrabold text-tata-navy">{car.price}</span>
                  </div>
                </div>

                {/* <div className="inline-flex items-center gap-1.5 text-xs bg-slate-50 border border-slate-100 px-3 py-1.5 rounded text-slate-500 mb-5 w-fit font-medium">
                  <Shield size={14} className="text-whatsapp-green" />
                  <span>Safety: <strong>{car.safety}</strong></span>
                </div> */}

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Zap size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Engine/Battery</span>
                      <span className="block text-xs font-bold text-slate-800 w-full" title={car.engine}>{car.engine}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Gauge size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Power Output</span>
                      <span className="block text-xs font-bold text-slate-800 w-full" title={car.power}>{car.power}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Users size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Seating</span>
                      <span className="block text-xs font-bold text-slate-800 truncate w-full" title={car.seating}>{car.seating}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Info size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Fuel Options</span>
                      <span className="block text-xs font-bold text-slate-800 w-full" title={car.fuel}>{car.fuel}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4 mb-5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">Highlights:</span>
                  <ul className="list-none text-xs text-slate-500 grid grid-cols-1 gap-1">
                    {car.keySpecs.map((spec, i) => (
                      <li key={i} className={`flex items-start before:content-['•'] before:mr-2 before:font-bold ${car.category === 'ev' ? 'before:text-whatsapp-green' : 'before:text-tata-blue'
                        }`}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button
                    className="inline-flex items-center justify-center px-4 py-2.5 font-semibold text-xs border border-tata-blue text-tata-blue rounded hover:bg-tata-blue/5 transition-all duration-300 cursor-pointer"
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
                    className="inline-flex items-center justify-center px-4 py-2.5 font-bold text-xs bg-tata-blue text-white rounded hover:bg-tata-navy transition-all duration-300 cursor-pointer shadow hover:shadow-tata-blue/15"
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
