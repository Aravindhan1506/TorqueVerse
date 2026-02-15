import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import Logo from './Logo';

const footerLinks = {
  explore: [
    { name: 'All Superbikes', path: '/explore' },
    { name: 'Sports Bikes', path: '/explore?category=Sports' },
    { name: 'Naked Bikes', path: '/explore?category=Naked' },
    { name: 'Adventure Bikes', path: '/explore?category=Adventure' },
  ],
  resources: [
    { name: 'Compare Bikes', path: '/compare' },
    { name: 'Buyer Guide', path: '/guide' },
    { name: 'Maintenance Tips', path: '/guide#maintenance' },
    { name: 'Insurance Info', path: '/guide#insurance' },
  ],
  brands: [
    { name: 'Kawasaki', path: '/explore?brand=Kawasaki' },
    { name: 'BMW', path: '/explore?brand=BMW' },
    { name: 'Ducati', path: '/explore?brand=Ducati' },
    { name: 'Suzuki', path: '/explore?brand=Suzuki' },
  ],
};

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Carbon fiber accent */}
      <div className="absolute inset-0 opacity-5 carbon-fiber pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo size="md" showTagline />
            <p className="mt-6 text-muted-foreground text-sm max-w-sm leading-relaxed">
              Your ultimate destination for exploring all superbikes available in India. 
              Compare specs, prices, and make informed decisions before visiting dealerships.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-wider mb-6 text-foreground">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-wider mb-6 text-foreground">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-wider mb-6 text-foreground">
              Brands
            </h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © 2024 TorqueVerse India. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right max-w-md">
              <span className="text-primary">Disclaimer:</span> Prices shown are ex-showroom and may vary by city and dealership. 
              Please contact your local dealer for actual prices.
            </p>
          </div>
        </div>
      </div>

      {/* Racing stripe accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
