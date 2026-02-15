import kawasakiNinjaZx10r from '@/assets/bikes/kawasaki-ninja-zx-10r.png';
import kawasakiZ900 from '@/assets/bikes/kawasaki-z900.png';
import suzukiHayabusa from '@/assets/bikes/suzuki-hayabusa.jpg';
 import bmwS1000rr from '@/assets/bikes/bmw-s1000rr.jpg';
 import ducatiPanigaleV4 from '@/assets/bikes/ducati-panigale-v4.jpg';
 import ducatiPanigaleV4r from '@/assets/bikes/ducati-panigale-v4r.jpg';
 import kawasakiNinjaH2 from '@/assets/bikes/kawasaki-ninja-h2.jpg';
 import kawasakiNinjaZx6r from '@/assets/bikes/kawasaki-ninja-zx-6r.png';
 import hondaCbr650r from '@/assets/bikes/honda-cbr650r.jpg';
 import yamahaYzfR6 from '@/assets/bikes/yamaha-yzf-r6.jpg';
 import apriliaRsv4 from '@/assets/bikes/aprilia-rsv4.jpg';
 import mvAgustaF3800 from '@/assets/bikes/mv-agusta-f3-800.jpg';
 import mvAgustaF4 from '@/assets/bikes/mv-agusta-f4.jpg';
 import kawasakiNinjaZx14r from '@/assets/bikes/kawasaki-ninja-zx-14r.jpg';
 import bmwM1000rr from '@/assets/bikes/bmw-m1000rr.jpg';
 import ducatiMonster from '@/assets/bikes/ducati-monster.jpg';
 import triumphStreetTripleR from '@/assets/bikes/triumph-street-triple-r.jpg';
 import kawasakiZH2 from '@/assets/bikes/kawasaki-z-h2.png';
 import ducatiDiavelV4 from '@/assets/bikes/ducati-diavel-v4.jpg';
 import bmwR1250Gs from '@/assets/bikes/bmw-r1250-gs.png';
 import ducatiMultistradaV4Rs from '@/assets/bikes/ducati-multistrada-v4-rs.jpg';
 import hondaGoldWingTour from '@/assets/bikes/honda-gold-wing-tour.jpg';
 import bmwS1000xr from '@/assets/bikes/bmw-s1000xr.png';
 import kawasakiNinja1000sx from '@/assets/bikes/kawasaki-ninja-zx-6r.png';
 import ducatiSupersport950 from '@/assets/bikes/ducati-supersport-950.jpg';
 import triumphTiger1200 from '@/assets/bikes/triumph-tiger-1200.jpg';

export interface Bike {
  id: string;
  name: string;
  brand: string;
  engine: string;
  power: string;
  topSpeed: string;
  price: string;
  priceValue: number;
  category: 'Sports' | 'Naked' | 'Adventure' | 'Touring' | 'Sports Touring';
  description: string;
  image: string;
  torque?: string;
  mileage?: string;
  weight?: string;
  features: string[];
  engineCC: number;
}

export const bikes: Bike[] = [
  // SPORTS / SUPERSPORT
  {
    id: 'kawasaki-ninja-zx-10r',
    name: 'Ninja ZX-10R',
    brand: 'Kawasaki',
    engine: '998cc',
    engineCC: 998,
    power: '203 PS',
    topSpeed: '299 km/h',
    price: '₹20.8L',
    priceValue: 2080000,
    category: 'Sports',
    description: 'Track-focused superbike built for racing dominance with cutting-edge aerodynamics and electronics.',
    image: kawasakiNinjaZx10r,
    torque: '114.9 Nm',
    mileage: '15 kmpl',
    weight: '207 kg',
    features: ['Kawasaki Traction Control', 'Quick Shifter', 'Launch Control', 'Cornering ABS', 'Riding Modes']
  },
  {
    id: 'bmw-s1000rr',
    name: 'S1000RR',
    brand: 'BMW',
    engine: '999cc',
    engineCC: 999,
    power: '210 PS',
    topSpeed: '303 km/h',
    price: '₹25.6L',
    priceValue: 2560000,
    category: 'Sports',
    description: 'Precision superbike with cutting-edge electronics and BMW ShiftCam technology.',
    image: bmwS1000rr,
    torque: '113 Nm',
    mileage: '14 kmpl',
    weight: '197 kg',
    features: ['ShiftCam Technology', 'Dynamic Traction Control', 'ABS Pro', 'Pit Lane Limiter', 'Launch Control']
  },
  {
    id: 'ducati-panigale-v4',
    name: 'Panigale V4',
    brand: 'Ducati',
    engine: '1103cc',
    engineCC: 1103,
    power: '215 PS',
    topSpeed: '320 km/h',
    price: '₹30.3L',
    priceValue: 3030000,
    category: 'Sports',
    description: 'MotoGP-inspired Italian performance machine with Desmosedici Stradale engine.',
    image: ducatiPanigaleV4,
    torque: '123.6 Nm',
    mileage: '12 kmpl',
    weight: '198 kg',
    features: ['Desmosedici Stradale Engine', 'Öhlins Suspension', 'Brembo Stylema Brakes', 'Cornering ABS EVO', 'Ducati Wheelie Control']
  },
  {
    id: 'ducati-panigale-v4r',
    name: 'Panigale V4 R',
    brand: 'Ducati',
    engine: '998cc',
    engineCC: 998,
    power: '240 PS',
    topSpeed: '325 km/h',
    price: '₹84.9L',
    priceValue: 8490000,
    category: 'Sports',
    description: 'Track-only homologation superbike with WorldSBK-derived components.',
    image: ducatiPanigaleV4r,
    torque: '119 Nm',
    mileage: '10 kmpl',
    weight: '193 kg',
    features: ['Race-spec Engine', 'Carbon Fiber Bodywork', 'Akrapovič Exhaust', 'Öhlins NIX30/TTX36 Suspension', 'Brembo GP4 Brakes']
  },
  {
    id: 'suzuki-hayabusa',
    name: 'Hayabusa',
    brand: 'Suzuki',
    engine: '1340cc',
    engineCC: 1340,
    power: '190 PS',
    topSpeed: '299 km/h',
    price: '₹18.5L',
    priceValue: 1850000,
    category: 'Sports Touring',
    description: 'Legendary hyperbike known for ultimate speed and touring comfort.',
    image: suzukiHayabusa,
    torque: '150 Nm',
    mileage: '16 kmpl',
    weight: '264 kg',
    features: ['SDMS-α Riding Modes', 'Motion Track Brake', 'Cruise Control', 'Active Speed Limiter', 'Launch Control']
  },
  {
    id: 'kawasaki-ninja-h2',
    name: 'Ninja H2',
    brand: 'Kawasaki',
    engine: '998cc Supercharged',
    engineCC: 998,
    power: '231 PS',
    topSpeed: '340 km/h',
    price: '₹35L',
    priceValue: 3500000,
    category: 'Sports',
    description: 'Supercharged monster with unmatched performance and aerospace technology.',
    image: kawasakiNinjaH2,
    torque: '141.7 Nm',
    mileage: '12 kmpl',
    weight: '238 kg',
    features: ['Supercharged Engine', 'Mirror-Coated Bodywork', 'KTRC Traction Control', 'Öhlins Suspension', 'Cornering Management']
  },
  {
    id: 'kawasaki-ninja-zx-6r',
    name: 'Ninja ZX-6R',
    brand: 'Kawasaki',
    engine: '636cc',
    engineCC: 636,
    power: '130 PS',
    topSpeed: '260 km/h',
    price: '₹11.5L',
    priceValue: 1150000,
    category: 'Sports',
    description: 'Middleweight supersport with race-bred performance and agile handling.',
    image: kawasakiNinjaZx6r,
    torque: '70.8 Nm',
    mileage: '18 kmpl',
    weight: '196 kg',
    features: ['KTRC Traction Control', 'Power Modes', 'Quick Shifter', 'ABS', 'Slipper Clutch']
  },
  {
    id: 'honda-cbr650r',
    name: 'CBR650R',
    brand: 'Honda',
    engine: '649cc',
    engineCC: 649,
    power: '87 PS',
    topSpeed: '230 km/h',
    price: '₹9.5L',
    priceValue: 950000,
    category: 'Sports',
    description: 'Balanced sportbike with inline-four smoothness and everyday usability.',
    image: hondaCbr650r,
    torque: '63 Nm',
    mileage: '22 kmpl',
    weight: '208 kg',
    features: ['Inline-4 Engine', 'Dual Channel ABS', 'LED Lighting', 'Assist Slipper Clutch', 'Emergency Stop Signal']
  },
  {
    id: 'yamaha-yzf-r6',
    name: 'YZF-R6',
    brand: 'Yamaha',
    engine: '599cc',
    engineCC: 599,
    power: '118 PS',
    topSpeed: '265 km/h',
    price: '₹18L',
    priceValue: 1800000,
    category: 'Sports',
    description: 'Track-focused supersport with MotoGP-derived technology and razor-sharp handling.',
    image: yamahaYzfR6,
    torque: '61.7 Nm',
    mileage: '17 kmpl',
    weight: '190 kg',
    features: ['YCC-T Throttle', 'Quick Shift System', 'Traction Control', 'ABS', 'Deltabox Frame']
  },
  {
    id: 'aprilia-rsv4',
    name: 'RSV4',
    brand: 'Aprilia',
    engine: '1077cc',
    engineCC: 1077,
    power: '217 PS',
    topSpeed: '305 km/h',
    price: '₹30L',
    priceValue: 3000000,
    category: 'Sports',
    description: 'Italian V4 superbike with WorldSBK heritage and advanced electronics.',
    image: apriliaRsv4,
    torque: '125 Nm',
    mileage: '13 kmpl',
    weight: '204 kg',
    features: ['V4 Engine', 'APRC Electronics', 'Öhlins Suspension', 'Brembo Brakes', 'Cornering ABS']
  },
  {
    id: 'mv-agusta-f3-800',
    name: 'F3 800',
    brand: 'MV Agusta',
    engine: '798cc',
    engineCC: 798,
    power: '147 PS',
    topSpeed: '270 km/h',
    price: '₹19L',
    priceValue: 1900000,
    category: 'Sports',
    description: 'Exotic Italian triple with stunning design and mechanical artistry.',
    image: mvAgustaF3800,
    torque: '88 Nm',
    mileage: '15 kmpl',
    weight: '173 kg',
    features: ['Triple Engine', 'MVICS Electronics', 'EAS Quick Shifter', 'Marzocchi Suspension', 'Radial Brakes']
  },
  {
    id: 'mv-agusta-f4',
    name: 'F4',
    brand: 'MV Agusta',
    engine: '998cc',
    engineCC: 998,
    power: '195 PS',
    topSpeed: '302 km/h',
    price: '₹35L',
    priceValue: 3500000,
    category: 'Sports',
    description: 'Legendary Italian superbike with iconic design and inline-four performance.',
    image: mvAgustaF4,
    torque: '111 Nm',
    mileage: '12 kmpl',
    weight: '191 kg',
    features: ['Inline-4 Engine', 'MVICS 2.0', 'Öhlins Suspension', 'Brembo GP Brakes', 'Carbon Fiber Parts']
  },
  {
    id: 'kawasaki-ninja-zx-14r',
    name: 'Ninja ZX-14R',
    brand: 'Kawasaki',
    engine: '1441cc',
    engineCC: 1441,
    power: '210 PS',
    topSpeed: '299 km/h',
    price: '₹20L',
    priceValue: 2000000,
    category: 'Sports Touring',
    description: 'Hypersport tourer with massive power and long-distance comfort.',
    image: kawasakiNinjaZx14r,
    torque: '158.2 Nm',
    mileage: '14 kmpl',
    weight: '268 kg',
    features: ['Monocoque Frame', 'KTRC', 'Power Modes', 'Slipper Clutch', 'Ram Air Intake']
  },
  {
    id: 'bmw-m1000rr',
    name: 'M 1000 RR',
    brand: 'BMW',
    engine: '999cc',
    engineCC: 999,
    power: '212 PS',
    topSpeed: '306 km/h',
    price: '₹47L',
    priceValue: 4700000,
    category: 'Sports',
    description: 'BMW M Performance superbike with carbon fiber winglets and race-spec components.',
    image: bmwM1000rr,
    torque: '113 Nm',
    mileage: '13 kmpl',
    weight: '192 kg',
    features: ['M Winglets', 'M Carbon Brakes', 'ShiftCam Pro', 'M Chassis Kit', 'M GPS Laptrigger']
  },

  // NAKED / STREETFIGHTER
  {
    id: 'kawasaki-z900',
    name: 'Z900',
    brand: 'Kawasaki',
    engine: '948cc',
    engineCC: 948,
    power: '125 PS',
    topSpeed: '245 km/h',
    price: '₹11.8L',
    priceValue: 1180000,
    category: 'Naked',
    description: 'Aggressive streetfighter with smooth power delivery and Sugomi styling.',
    image: kawasakiZ900,
    torque: '98.6 Nm',
    mileage: '20 kmpl',
    weight: '212 kg',
    features: ['Sugomi Design', 'Traction Control', 'ABS', 'Assist & Slipper Clutch', 'LED Lighting']
  },
  {
    id: 'ducati-monster',
    name: 'Monster',
    brand: 'Ducati',
    engine: '937cc',
    engineCC: 937,
    power: '111 PS',
    topSpeed: '235 km/h',
    price: '₹12.9L',
    priceValue: 1290000,
    category: 'Naked',
    description: 'Lightweight naked bike with iconic design and Testastretta engine.',
    image: ducatiMonster,
    torque: '93 Nm',
    mileage: '18 kmpl',
    weight: '188 kg',
    features: ['Testastretta Engine', 'Aluminum Frame', 'Cornering ABS', 'Ducati Quick Shift', 'Riding Modes']
  },
  {
    id: 'triumph-street-triple-r',
    name: 'Street Triple R',
    brand: 'Triumph',
    engine: '765cc',
    engineCC: 765,
    power: '118 PS',
    topSpeed: '245 km/h',
    price: '₹12.5L',
    priceValue: 1250000,
    category: 'Naked',
    description: 'Sharp handling and thrilling mid-range power with British engineering.',
    image: triumphStreetTripleR,
    torque: '79 Nm',
    mileage: '22 kmpl',
    weight: '186 kg',
    features: ['Triple Engine', 'Showa Suspension', 'Riding Modes', 'Quickshifter', 'Cornering ABS']
  },
  {
    id: 'kawasaki-z-h2',
    name: 'Z H2',
    brand: 'Kawasaki',
    engine: '998cc Supercharged',
    engineCC: 998,
    power: '200 PS',
    topSpeed: '280 km/h',
    price: '₹29.7L',
    priceValue: 2970000,
    category: 'Naked',
    description: 'Supercharged streetfighter with brutal acceleration and aggressive stance.',
    image: kawasakiZH2,
    torque: '137 Nm',
    mileage: '14 kmpl',
    weight: '239 kg',
    features: ['Supercharged Engine', 'Electronic Suspension', 'KTRC', 'Cruise Control', 'Smartphone Connectivity']
  },
  {
    id: 'ducati-diavel-v4',
    name: 'Diavel V4',
    brand: 'Ducati',
    engine: '1158cc',
    engineCC: 1158,
    power: '168 PS',
    topSpeed: '270 km/h',
    price: '₹26L',
    priceValue: 2600000,
    category: 'Naked',
    description: 'Muscular power cruiser with V4 Granturismo engine and aggressive styling.',
    image: ducatiDiavelV4,
    torque: '126 Nm',
    mileage: '14 kmpl',
    weight: '223 kg',
    features: ['V4 Granturismo Engine', 'Ducati Traction Control', 'Wheelie Control', 'Cornering ABS', 'Riding Modes']
  },

  // TOURING / ADVENTURE
  {
    id: 'bmw-r1250-gs',
    name: 'R1250 GS',
    brand: 'BMW',
    engine: '1254cc',
    engineCC: 1254,
    power: '136 PS',
    topSpeed: '220 km/h',
    price: '₹28L',
    priceValue: 2800000,
    category: 'Adventure',
    description: 'Iconic adventure bike built for long-distance touring across any terrain.',
    image: bmwR1250Gs,
    torque: '143 Nm',
    mileage: '18 kmpl',
    weight: '249 kg',
    features: ['ShiftCam Technology', 'Telelever Suspension', 'Keyless Ride', 'Connectivity', 'Dynamic ESA']
  },
  {
    id: 'ducati-multistrada-v4-rs',
    name: 'Multistrada V4 RS',
    brand: 'Ducati',
    engine: '1158cc',
    engineCC: 1158,
    power: '170 PS',
    topSpeed: '280 km/h',
    price: '₹42L',
    priceValue: 4200000,
    category: 'Touring',
    description: 'Performance touring with advanced rider tech and V4 Granturismo engine.',
    image: ducatiMultistradaV4Rs,
    torque: '118 Nm',
    mileage: '15 kmpl',
    weight: '226 kg',
    features: ['V4 Granturismo Engine', 'Radar System', 'Adaptive Cruise Control', 'Öhlins Smart EC 2.0', 'Carbon Fiber Parts']
  },
  {
    id: 'honda-gold-wing-tour',
    name: 'Gold Wing Tour',
    brand: 'Honda',
    engine: '1833cc',
    engineCC: 1833,
    power: '126 PS',
    topSpeed: '200 km/h',
    price: '₹49.6L',
    priceValue: 4960000,
    category: 'Touring',
    description: 'Luxury touring motorcycle with unmatched comfort and premium features.',
    image: hondaGoldWingTour,
    torque: '170 Nm',
    mileage: '14 kmpl',
    weight: '367 kg',
    features: ['Flat-6 Engine', 'DCT Transmission', 'Apple CarPlay', 'Airbag', 'Heated Everything']
  },
  {
    id: 'bmw-s1000xr',
    name: 'S1000XR',
    brand: 'BMW',
    engine: '999cc',
    engineCC: 999,
    power: '165 PS',
    topSpeed: '250 km/h',
    price: '₹23L',
    priceValue: 2300000,
    category: 'Adventure',
    description: 'Sport-adventure hybrid with superbike DNA and touring versatility.',
    image: bmwS1000xr,
    torque: '114 Nm',
    mileage: '16 kmpl',
    weight: '226 kg',
    features: ['ShiftCam Technology', 'Dynamic ESA', 'Cruise Control', 'Heated Grips', 'Keyless Ride']
  },
  {
    id: 'kawasaki-ninja-1000sx',
    name: 'Ninja 1000SX',
    brand: 'Kawasaki',
    engine: '1043cc',
    engineCC: 1043,
    power: '142 PS',
    topSpeed: '250 km/h',
    price: '₹13L',
    priceValue: 1300000,
    category: 'Sports Touring',
    description: 'Sport tourer blending supersport performance with everyday comfort.',
    image: kawasakiNinja1000sx,
    torque: '111 Nm',
    mileage: '18 kmpl',
    weight: '235 kg',
    features: ['KTRC', 'Electronic Cruise Control', 'Cornering Management', 'Quick Shifter', 'Smartphone Connectivity']
  },
  {
    id: 'ducati-supersport-950',
    name: 'SuperSport 950',
    brand: 'Ducati',
    engine: '937cc',
    engineCC: 937,
    power: '110 PS',
    topSpeed: '240 km/h',
    price: '₹16L',
    priceValue: 1600000,
    category: 'Sports Touring',
    description: 'Everyday sportbike with Italian flair and Testastretta engine.',
    image: ducatiSupersport950,
    torque: '93 Nm',
    mileage: '17 kmpl',
    weight: '210 kg',
    features: ['Testastretta Engine', 'Ducati Quick Shift', 'Cornering ABS', 'Riding Modes', 'TFT Display']
  },
  {
    id: 'triumph-tiger-1200',
    name: 'Tiger 1200',
    brand: 'Triumph',
    engine: '1160cc',
    engineCC: 1160,
    power: '150 PS',
    topSpeed: '225 km/h',
    price: '₹21L',
    priceValue: 2100000,
    category: 'Adventure',
    description: 'Premium adventure tourer with triple-cylinder power and off-road capability.',
    image: triumphTiger1200,
    torque: '130 Nm',
    mileage: '16 kmpl',
    weight: '240 kg',
    features: ['Triple Engine', 'Showa Semi-Active Suspension', 'Cornering ABS', 'Cruise Control', 'Heated Seats']
  },
  {
    id: 'suzuki-hayabusa-tour',
    name: 'Hayabusa Tour Spec',
    brand: 'Suzuki',
    engine: '1340cc',
    engineCC: 1340,
    power: '190 PS',
    topSpeed: '299 km/h',
    price: '₹19L',
    priceValue: 1900000,
    category: 'Sports Touring',
    description: 'Legendary hyperbike with touring accessories for long-distance comfort.',
    image: suzukiHayabusa,
    torque: '150 Nm',
    mileage: '16 kmpl',
    weight: '270 kg',
    features: ['SDMS-α Riding Modes', 'Cruise Control', 'Touring Panniers', 'Heated Grips', 'Comfort Seat']
  }
];

export const brands = [...new Set(bikes.map(bike => bike.brand))];
export const categories = [...new Set(bikes.map(bike => bike.category))];

export const priceRanges = [
  { label: 'Under ₹15L', min: 0, max: 1500000 },
  { label: '₹15L - ₹25L', min: 1500000, max: 2500000 },
  { label: '₹25L - ₹40L', min: 2500000, max: 4000000 },
  { label: 'Above ₹40L', min: 4000000, max: Infinity }
];

export const engineCapacities = [
  { label: '750cc - 1000cc', min: 750, max: 1000 },
  { label: '1000cc - 1200cc', min: 1000, max: 1200 },
  { label: 'Above 1200cc', min: 1200, max: Infinity }
];

export const featuredBikes = bikes.filter(bike => 
  ['kawasaki-ninja-zx-10r', 'bmw-s1000rr', 'ducati-panigale-v4', 'suzuki-hayabusa', 'kawasaki-z900'].includes(bike.id)
);
