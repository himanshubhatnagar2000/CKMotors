import acepev from "../assets/images/ace pro/ev.jpg";
import acepp from "../assets/images/ace pro/petrol.jpg";
import acepbi from "../assets/images/ace pro/bifuel.jpg";
import acep from "../assets/images/ace/petrol.jpg";
import acecng from "../assets/images/ace/cng.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import acegoldxl from '../assets/images/ace gold plus xl/images.jpeg'
import { FaTruck, FaChargingStation, FaBus, FaTruckPickup } from "react-icons/fa6";

export const CATEGORIES = [
  { key: 'all', label: 'All Vehicles', icon: FaTruck },
  { key: 'mini-truck', label: 'Mini Trucks', icon: TbTruckDelivery },
  { key: 'ev', label: 'EV Commercials', icon: FaChargingStation },
  { key: 'bus', label: 'Busses & Passenger', icon: FaBus },
  { key: 'pickup', label: 'Pickups', icon: FaTruckPickup }
];

export const VEHICLES_DATA = [
  // 1. ACE PRO EV
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
    keySpecs: ['Payload: 750kg', 'Range: 155km (Certified)', 'Battery: 17.2 kWh Lithium-Ion', 'Fast Charging Support']
  },
  // 2. ACE PRO PETROL
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
    engine: '694cc, Water Cooled Engine',
    power: '22 kW (30 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 340km', 'Gradeability: 35%', 'Eco-Drive Assistance']
  },
  // 3. ACE PRO BIFUEL
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
    engine: '694cc Dual Fuel Engine',
    power: '19 kW (25 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 750kg', 'Range: 375-500km', 'CNG Capacity: 70L', 'Automatic Fuel Switch']
  },
  // 4. TATA ACE GOLD PETROL
  {
    id: 'acegoldpetrol',
    name: 'TATA ACE GOLD PETROL',
    tagline: 'The Original Chhota Hathi - Proven Reliability',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹3.99 Lakh*',
    emi: '₹7,499/mo*',
    image: acep,
    fuel: 'Petrol',
    engine: '694cc, 2-Cylinder Engine',
    power: '22 kW (30 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 900kg', 'GVW: 1615kg', 'Fuel Tank: 26L', 'Gear Shift Advisor']
  },
  // 5. TATA ACE GOLD CNG 2.0
  {
    id: 'acegoldcng2',
    name: 'TATA ACE GOLD CNG 2.0',
    tagline: 'Maximum Savings & Highest Mileage',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹4.49 Lakh*',
    emi: '₹8,499/mo*',
    image: acecng,
    fuel: 'CNG',
    engine: '694cc Multipoint Gas Injection',
    power: '19 kW (26 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 850kg', 'CNG Tank: 70L Water Capacity', 'Low Running Cost ₹1.8/km', 'Strong Leaf Spring Suspension']
  },
  // 6. TATA ACE HT +
  {
    id: 'acehtplus',
    name: 'TATA ACE HT +',
    tagline: 'High Torque Diesel Powerhouse',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹5.15 Lakh*',
    emi: '₹9,499/mo*',
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '800cc 2-Cylinder DICOR Diesel Engine',
    power: '26 kW (35 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 900kg', 'Torque: 85 Nm', 'Heavy Duty Axle', '8.2ft Long Loading Deck']
  },
  // 7. INTRA V20 GOLD
  {
    id: 'intrav20gold',
    name: 'TATA INTRA V20 GOLD',
    tagline: 'Smart Commercial Vehicle with Premium Comfort',
    type: 'Commercial Pickup',
    category: 'pickup',
    price: '₹5.99 Lakh*',
    emi: '₹10,999/mo*',
    image: "https://images.unsplash.com/photo-1586191582056-a0eb867e376a?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Bi-Fuel (CNG + Petrol)',
    engine: '1199cc 3-Cylinder Engine',
    power: '43 kW (58 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1000kg', 'Deck Length: 8.8 ft', 'Eco & Normal Drive Modes', 'Power Steering']
  },
  // 8. INTRA V30 GOLD
  {
    id: 'intrav30gold',
    name: 'TATA INTRA V30 GOLD',
    tagline: 'Higher Payload, Greater Profits',
    type: 'Commercial Pickup',
    category: 'pickup',
    price: '₹6.80 Lakh*',
    emi: '₹12,499/mo*',
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '1496cc 4-Cylinder DI Diesel',
    power: '52 kW (70 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1300kg', 'Deck Length: 8.8 ft', 'Torque: 140 Nm', 'Strong Chassis Frame']
  },
  // 9. INTRA V50 GOLD
  {
    id: 'intrav50gold',
    name: 'TATA INTRA V50 GOLD',
    tagline: 'King of Heavy Commercial Pickups',
    type: 'Heavy Pickup',
    category: 'pickup',
    price: '₹7.99 Lakh*',
    emi: '₹14,999/mo*',
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '1496cc 4-Cylinder DI Engine',
    power: '59 kW (80 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1500kg', 'Deck Length: 9.8 ft', 'Hydraulic Power Steering', 'Heavy Duty Suspension']
  },
  // 10. INTRA V70
  {
    id: 'intrav70',
    name: 'TATA INTRA V70',
    tagline: 'Maximum Capacity & Unmatched Earnings',
    type: 'Heavy Pickup',
    category: 'pickup',
    price: '₹8.95 Lakh*',
    emi: '₹16,499/mo*',
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '1496cc Turbocharged DI Engine',
    power: '59 kW (80 HP) @ 4000 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1700kg', 'Deck Length: 9.8 ft', 'Torque: 160 Nm', 'Wide Loading Body']
  },
  // 11. INTRA EV PICKUP
  {
    id: 'intraev',
    name: 'TATA INTRA EV PICKUP',
    tagline: 'Heavy Duty Electric Commercial Fleet',
    type: 'Electric Pickup',
    category: 'ev',
    price: '₹9.50 Lakh*',
    emi: '₹17,999/mo*',
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Electric (EV)',
    engine: 'High Output Electric Motor',
    power: '45 kW Peak Power Output',
    seating: 'D+1',
    keySpecs: ['Payload: 1000kg', 'Range: 160km (Real World)', 'Rapid Fast Charging', 'Zero Carbon Fleet Emission']
  },
  // 12. TATA YODHA 1700
  {
    id: 'yodha1700',
    name: 'TATA YODHA 1700',
    tagline: 'Built Tough for Extreme Commercial Loads',
    type: 'Rugged Pickup',
    category: 'pickup',
    price: '₹8.90 Lakh*',
    emi: '₹16,299/mo*',
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '2200cc 4-Cylinder TORQPACK Diesel',
    power: '73.5 kW (100 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1700kg', 'Torque: 250 Nm', '4mm Thick Heavy Chassis', 'High Ground Clearance']
  },
  // 13. TATA YODHA 2.0
  {
    id: 'yodha20',
    name: 'TATA YODHA 2.0',
    tagline: 'Massive 2 Ton Payload Commercial Leader',
    type: 'Heavy Pickup',
    category: 'pickup',
    price: '₹9.99 Lakh*',
    emi: '₹18,499/mo*',
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '2200cc DI VARICOR Engine',
    power: '73.5 kW (100 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 2000kg (2 Tons)', 'Metallic Front Bumper', '3-Piece Front Bumper', 'Heavy Duty Tubeless Tyres']
  },
  // 14. TATA YODHA CNG
  {
    id: 'yodhacng',
    name: 'TATA YODHA CNG',
    tagline: 'Eco-Friendly Heavy Duty Commercial Pickup',
    type: 'CNG Pickup',
    category: 'pickup',
    price: '₹9.45 Lakh*',
    emi: '₹17,299/mo*',
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
    fuel: 'CNG',
    engine: '2200cc CNG Engine',
    power: '63 kW (85 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1200kg', 'CNG Capacity: 90L', 'Long Range Intercity Cargo', 'Superior Fuel Economy']
  },
  // 15. TATA YODHA 4X4 SINGLE CAB
  {
    id: 'yodha4x4',
    name: 'TATA YODHA 4X4',
    tagline: 'All-Terrain 4WD Commercial Pickup',
    type: '4x4 Pickup',
    category: 'pickup',
    price: '₹10.50 Lakh*',
    emi: '₹19,499/mo*',
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '2200cc 4WD Turbocharged Diesel',
    power: '73.5 kW (100 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 1210kg', '4x4 Drive System', '40% Gradeability Off-Road', 'Heavy Duty Suspension']
  },
  // 16. TATA WINGER CARGO
  {
    id: 'wingercargo',
    name: 'TATA WINGER CARGO',
    tagline: 'Monocoque Van for Secure & High Volume Freight',
    type: 'Delivery Van',
    category: 'bus',
    price: '₹9.80 Lakh*',
    emi: '₹18,199/mo*',
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '2200cc 2.2L DICOR Engine',
    power: '73.5 kW (100 HP) @ 3750 RPM',
    seating: 'D+2',
    keySpecs: ['Payload: 1680kg', 'Cargo Space: 324 cu. ft.', 'Monocoque Body Structure', 'Dual Side Sliding Doors']
  },
  // 17. TATA MAGIC EXPRESS
  {
    id: 'magicexpress',
    name: 'TATA MAGIC EXPRESS',
    tagline: '10-Seater Passenger Carrier Mini Bus',
    type: 'Passenger Mini Bus',
    category: 'bus',
    price: '₹6.25 Lakh*',
    emi: '₹11,499/mo*',
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
    fuel: 'Diesel',
    engine: '800cc 2-Cylinder DICOR Engine',
    power: '33 kW (44 HP) @ 3750 RPM',
    seating: '10 Seater (9+D)',
    keySpecs: ['Seating: 10 Passenger Seats', 'Speed Limiter Included', 'High Mileage Passenger Vehicle', 'Comfortable Vinyl Seats']
  },
  // 18. TATA ACE GOLD PLUS XL
  {
    id: 'acegoldplusxl',
    name: 'TATA ACE GOLD PLUS XL',
    tagline: 'Extended Deck Length for Extra Cargo Space',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹5.40 Lakh*',
    emi: '₹9,999/mo*',
    image: acegoldxl,
    fuel: 'Diesel',
    engine: '800cc DICOR Engine',
    power: '26 kW (35 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 950kg', 'XL Deck Length: 8.5 ft', 'Leaf Spring Suspension', 'Higher Volume Capacity']
  },
  // 19. TATA ACE GOLD +
  {
    id: 'acegoldplus',
    name: 'TATA ACE GOLD +',
    tagline: 'Higher Payload & Enhanced Torque Powerhouse',
    type: 'Mini Truck',
    category: 'mini-truck',
    price: '₹4.75 Lakh*',
    emi: '₹8,799/mo*',
    image: acegoldxl,
    fuel: 'Diesel',
    engine: '800cc 2-Cylinder Engine',
    power: '26 kW (35 HP) @ 3750 RPM',
    seating: 'D+1',
    keySpecs: ['Payload: 900kg', 'GVW: 1815kg', 'High Torque 85 Nm', 'Gear Shift Advisor']
  }
];
