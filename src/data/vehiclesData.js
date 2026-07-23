import acepev from "../assets/images/ace pro/ev.jpg";
import acepp from "../assets/images/ace pro/petrol.jpg";
import acepbi from "../assets/images/ace pro/bifuel.jpg";
import acep from "../assets/images/ace/petrol.jpg";
import acecng from "../assets/images/ace/cng.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { FaTruck, FaChargingStation, FaBus, FaTruckPickup } from "react-icons/fa6";

export const CATEGORIES = [
  { key: 'all', label: 'All Vehicles', icon: FaTruck },
  { key: 'mini-truck', label: 'Mini Trucks', icon: TbTruckDelivery },
  { key: 'ev', label: 'EV Commercials', icon: FaChargingStation },
  { key: 'bus', label: 'Busses & Passenger', icon: FaBus },
  { key: 'pickup', label: 'Pickups', icon: FaTruckPickup }
];

export const VEHICLES_DATA = [
  {
    id: 'aceproev',
    name: 'ACE PRO EV',
    tagline: 'Ab Meri Baari - Next Gen Electric Cargo',
    type: 'Small Commercial Vehicles',
    category: 'ev',
    price: '₹6.50 Lakh*',
    emi: '₹11,999/mo*',
    image: acepev,
    fuel: 'Electric (EV)',
    engine: 'PMSM (Permanent Magnet Synchronous Motor)',
    power: '29 kW @ 3500 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 155km (Certified)', 'Charging: Fast & Slow Dual Mode (< 6h)']
  },
  {
    id: 'acepropetrol',
    name: 'ACE PRO PETROL',
    tagline: 'Ab Meri Baari - Dependable & High Torque',
    type: 'Small Commercial Vehicles',
    category: 'mini-truck',
    price: '₹3.99 Lakh*',
    emi: '₹7,499/mo*',
    image: acepp,
    fuel: 'Petrol',
    engine: '694cc, Water-Cooled 4-Stroke Engine',
    power: '22 kW (30 hp) @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 140km', 'GVW: 1460kg']
  },
  {
    id: 'aceprobi',
    name: 'ACE PRO BIFUEL',
    tagline: 'Dual Savings with CNG + Petrol Reliability',
    type: 'Small Commercial Vehicles',
    category: 'mini-truck',
    price: '₹4.99 Lakh*',
    emi: '₹8,999/mo*',
    image: acepbi,
    fuel: 'Bi-Fuel (Petrol + CNG)',
    engine: '694cc Dual-Fuel Water-Cooled Engine',
    power: '19 kW (25 hp) @ 4000 rpm (CNG Mode)',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 325-350km', 'GVW: 1535kg']
  },
  {
    id: 'acegoldpetrol',
    name: 'TATA ACE GOLD PETROL',
    tagline: 'The Original Chhota Hathi',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹3.99 Lakh*',
    emi: '₹7,499/mo*',
    image: acep,
    fuel: 'Petrol',
    engine: '694cc, 2-Cylinder MPFI Engine',
    power: '22 kW (30 hp) @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 900kg', 'Range: 390-570km', 'GVW: 1740kg']
  },
  {
    id: 'acegoldcng',
    name: 'TATA ACE GOLD CNG 2.0',
    tagline: 'The Gold Standard in CNG Mobility',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹6.65 Lakh*',
    emi: '₹12,499/mo*',
    image: acecng,
    fuel: 'Bi-Fuel (Petrol + CNG)',
    engine: '694 cc, 2-Cylinder, 4-Stroke Engine',
    power: 'CNG: 18.3 kW (25 hp) @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 800kg', 'Range: 300-400km', 'GVW: 1790kg']
  },
  {
    id: 'tatayodha',
    name: 'TATA YODHA 2.0 PICKUP',
    tagline: 'Built Strong for Heavy Commercial Loads',
    type: 'Heavy Duty Pickup',
    category: 'pickup',
    price: '₹9.99 Lakh*',
    emi: '₹17,999/mo*',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Diesel',
    engine: '2.2L VARICOR Direct Injection Turbo-Charged',
    power: '73.5 kW (100 hp) @ 3750 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 2000kg (Highest in Class)', 'Cargo Deck: 2650mm x 1850mm', 'Gradeability: 30%']
  },
  {
    id: 'tataintrav50',
    name: 'TATA INTRA V50 PICKUP',
    tagline: 'Smart Commercial Vehicle for High Profitability',
    type: 'Smart Pickup',
    category: 'pickup',
    price: '₹8.90 Lakh*',
    emi: '₹15,999/mo*',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Diesel',
    engine: '1496cc 4-Cylinder DI Engine',
    power: '59.6 kW (80 hp) @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 1500kg', 'Cargo Body: 2960mm Length', 'Eco Switch for maximum mileage']
  },
  {
    id: 'tataintrav30',
    name: 'TATA INTRA V30 PICKUP',
    tagline: 'Compact High Load Pickup with Power Steering',
    type: 'Compact Pickup',
    category: 'pickup',
    price: '₹8.15 Lakh*',
    emi: '₹14,499/mo*',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Diesel / CNG Option',
    engine: '1496cc 4-Cylinder Engine',
    power: '52 kW (70 hp) @ 4000 rpm',
    seating: 'D+1',
    keySpecs: ['Payload: 1300kg', 'Electric Power Steering', 'Rugged Leaf Spring Suspension']
  },
  {
    id: 'tatastarbus',
    name: 'TATA STARBUS PASSENGER',
    tagline: 'Safe & Comfortable School & Staff Transport',
    type: 'Commercial Bus',
    category: 'bus',
    price: '₹18.50 Lakh*',
    emi: '₹32,999/mo*',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Diesel / CNG',
    engine: '3.8L Turbotronn BS6 Engine',
    power: '92 kW (125 hp) @ 2400 rpm',
    seating: '24 to 32 Seater Options',
    keySpecs: ['Emergency Exit & Fire Suppression', 'High Roof Ergonomic Seating', 'Parabolic Leaf Suspension']
  },
  {
    id: 'tatawinger',
    name: 'TATA WINGER STAFF BUS',
    tagline: 'Executive Passenger Comfort for Corporate & Tours',
    type: 'Multi Utility Bus',
    category: 'bus',
    price: '₹15.20 Lakh*',
    emi: '₹27,499/mo*',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Diesel',
    engine: '2.2L DICOR Engine',
    power: '73.5 kW (100 hp) @ 3750 rpm',
    seating: '12 to 15 Pushback Reclining Seats',
    keySpecs: ['Individual AC Vents', 'Monocoque Body Construction', 'ABS with EBD Safety']
  },
  {
    id: 'tataace1000ev',
    name: 'TATA ACE EV 1000',
    tagline: 'Heavy Load Electric Delivery Vehicle',
    type: 'Electric Commercial Vehicle',
    category: 'ev',
    price: '₹8.75 Lakh*',
    emi: '₹15,999/mo*',
    image: 'https://images.unsplash.com/photo-1558441819-873867c27d4c?auto=format&fit=crop&w=1000&q=80',
    fuel: 'Electric (EV)',
    engine: 'Advanced PMSM Motor with Evogen Powertrain',
    power: '36 kW Peak Power',
    seating: 'D+1',
    keySpecs: ['Payload: 1000kg', 'Real World Range: 161km', 'Fast Charging (10-80% in 105 mins)']
  },
  {
    id: 'tatamagic',
    name: 'TATA MAGIC PASSENGER',
    tagline: 'India\'s Favourite Last-Mile Passenger Van',
    type: 'Passenger Van',
    category: 'bus',
    price: '₹5.65 Lakh*',
    emi: '₹9,999/mo*',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
    fuel: 'CNG / Petrol',
    engine: '694cc Water Cooled Engine',
    power: '19 kW (26 hp) @ 4000 rpm',
    seating: '6+1 & 9+1 Seating Layouts',
    keySpecs: ['High Fuel Economy', 'Low Turning Radius (4.3m)', 'All-Steel Body Frame']
  }
];
