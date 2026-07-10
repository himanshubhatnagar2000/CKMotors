import React, { useState } from 'react';
import { Shield, Zap, Users, Gauge, Info } from 'lucide-react';

const CARS_DATA = [
  {
    id: 'safari',
    name: 'Tata Safari',
    tagline: 'Reclaim Your Life',
    type: 'SUV',
    category: 'suv',
    price: '₹ 16.19 Lakh*',
    image: '/images/tata_safari.png',
    safety: '5-Star GNCAP & BNCAP',
    fuel: 'Diesel',
    engine: '2.0L Kryotec Turbocharged',
    power: '170 PS @ 3750 RPM',
    seating: '6 or 7 Seater',
    keySpecs: ['ADAS Level 2', 'Panoramic Sunroof', '12.3" infotainment screen', 'Terrain Response Modes']
  },
  {
    id: 'curvv',
    name: 'Tata Curvv',
    tagline: 'Shaped to Excite',
    type: 'Coupe SUV',
    category: 'suv',
    price: '₹ 9.99 Lakh*',
    image: '/images/tata_hero.png',
    safety: '5-Star GNCAP',
    fuel: 'Petrol / Diesel',
    engine: '1.2L GDI Hyperion Turbo',
    power: '125 PS @ 5000 RPM',
    seating: '5 Seater',
    keySpecs: ['Coupe Design', 'Gesture Tailgate', 'ADAS Level 2', 'Voice Assisted Sunroof']
  },
  {
    id: 'nexon-ev',
    name: 'Tata Nexon EV',
    tagline: 'Go.ev - Electric Icon',
    type: 'Electric SUV',
    category: 'ev',
    price: '₹ 12.49 Lakh*',
    image: '/images/tata_nexon_ev.png',
    safety: '5-Star BNCAP (EV)',
    fuel: 'Electric (EV)',
    engine: '45 kWh High Energy Density',
    power: '465 km Range / 150 PS',
    seating: '5 Seater',
    keySpecs: ['Liquid-cooled battery', 'V2L & V2V charging technology', 'Paddle Shifters', 'Arcade.ev App suite']
  },
  {
    id: 'punch',
    name: 'Tata Punch',
    tagline: 'Vibes With You',
    type: 'Sub-Compact SUV',
    category: 'suv',
    price: '₹ 6.13 Lakh*',
    image: '/images/tata_punch.png',
    safety: '5-Star GNCAP',
    fuel: 'Petrol / CNG',
    engine: '1.2L Revotron Engine',
    power: '88 PS @ 6000 RPM',
    seating: '5 Seater',
    keySpecs: ['187mm Ground Clearance', '7" Harman Touchscreen', 'Traction Pro Mode', 'Dynamic dual-tone styling']
  },
  {
    id: 'altroz',
    name: 'Tata Altroz',
    tagline: 'The Gold Standard',
    type: 'Premium Hatchback',
    category: 'hatchback',
    price: '₹ 6.65 Lakh*',
    image: '/images/tata_altroz.png',
    safety: '5-Star GNCAP',
    fuel: 'Petrol / Diesel / CNG',
    engine: '1.2L i-Turbo+ Petrol / 1.5L Diesel',
    power: '110 PS / 90 PS',
    seating: '5 Seater',
    keySpecs: ['90-degree opening doors', 'iRA Connected Car Tech', 'Cruise Control', 'Harman Premium Audio']
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
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${
              activeCategory === 'all' 
                ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Vehicles
          </button>
          <button 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${
              activeCategory === 'suv' 
                ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
            }`}
            onClick={() => setActiveCategory('suv')}
          >
            SUVs & Coupes
          </button>
          <button 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${
              activeCategory === 'ev' 
                ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
            }`}
            onClick={() => setActiveCategory('ev')}
          >
            EV Range ⚡
          </button>
          <button 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 border ${
              activeCategory === 'hatchback' 
                ? 'bg-tata-blue text-white border-tata-blue shadow-lg shadow-tata-blue/20' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400'
            }`}
            onClick={() => setActiveCategory('hatchback')}
          >
            Hatchbacks
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div 
              key={car.id} 
              className={`group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                car.category === 'ev' ? 'hover:border-whatsapp-green/40' : 'hover:border-tata-blue/35'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 pb-3 bg-gradient-to-b from-tata-blue/[0.01] to-transparent flex items-center justify-center min-h-[200px]">
                <img src={car.image} alt={car.name} className="max-w-[90%] h-auto object-contain drop-shadow-[0_8px_16px_rgba(13,51,136,0.12)] transition-transform duration-300 group-hover:scale-104" />
                <span className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border ${
                  car.category === 'ev' 
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

                <div className="inline-flex items-center gap-1.5 text-xs bg-slate-50 border border-slate-100 px-3 py-1.5 rounded text-slate-500 mb-5 w-fit font-medium">
                  <Shield size={14} className="text-whatsapp-green" />
                  <span>Safety: <strong>{car.safety}</strong></span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Zap size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Engine/Battery</span>
                      <span className="block text-xs font-bold text-slate-800 truncate w-full" title={car.engine}>{car.engine}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 px-3 rounded flex items-center gap-2.5 min-w-0">
                    <Gauge size={14} className={`flex-shrink-0 ${car.category === 'ev' ? 'text-whatsapp-green' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold truncate w-full">Power Output</span>
                      <span className="block text-xs font-bold text-slate-800 truncate w-full" title={car.power}>{car.power}</span>
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
                      <span className="block text-xs font-bold text-slate-800 truncate w-full" title={car.fuel}>{car.fuel}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4 mb-5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">Highlights:</span>
                  <ul className="list-none text-xs text-slate-500 grid grid-cols-1 gap-1">
                    {car.keySpecs.map((spec, i) => (
                      <li key={i} className={`flex items-start before:content-['•'] before:mr-2 before:font-bold ${
                        car.category === 'ev' ? 'before:text-whatsapp-green' : 'before:text-tata-blue'
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
