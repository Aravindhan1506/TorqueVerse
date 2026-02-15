import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showSubtitle?: boolean;
}

const Logo = ({ size = 'md', showTagline = false, showSubtitle = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 24, text: 'text-sm', gap: 'gap-2' },
    md: { icon: 32, text: 'text-lg', gap: 'gap-3' },
    lg: { icon: 48, text: 'text-2xl', gap: 'gap-4' }
  };

  const { icon, text, gap } = sizes[size];

  return (
    <div className={`flex flex-col items-center ${showTagline ? 'gap-2' : ''}`}>
      <div className={`flex items-center ${gap}`}>
        {/* Speed-inspired Icon */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <svg 
            width={icon} 
            height={icon} 
            viewBox="0 0 48 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Speed lines background */}
            <motion.path
              d="M4 24H12M36 24H44"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            {/* Main bike silhouette */}
            <motion.path
              d="M14 32C14 35.3137 16.6863 38 20 38C23.3137 38 26 35.3137 26 32M30 32C30 35.3137 32.6863 38 36 38C39.3137 38 42 35.3137 42 32"
              stroke="hsl(var(--foreground))"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Wheel centers */}
            <circle cx="20" cy="32" r="2" fill="hsl(var(--primary))" />
            <circle cx="36" cy="32" r="2" fill="hsl(var(--primary))" />
            
            {/* Body frame */}
            <motion.path
              d="M20 32L24 22H34L38 18L36 32"
              stroke="hsl(var(--foreground))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />
            
            {/* Handlebar */}
            <motion.path
              d="M34 18L40 14"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            
            {/* Rider silhouette */}
            <motion.path
              d="M28 22L30 16L34 14"
              stroke="hsl(var(--foreground))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            
            {/* Speed accent */}
            <motion.path
              d="M6 20H14M8 28H16"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
          </svg>
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-lg opacity-30 bg-primary rounded-full" />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col">
          <motion.span 
            className={`font-display ${text} font-normal tracking-[0.2em] text-foreground`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary">TORQUE</span>VERSE
          </motion.span>
          {showSubtitle && (
            <motion.span 
              className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              INDIA
            </motion.span>
          )}
        </div>
      </div>

      {showTagline && (
        <motion.p 
          className="font-rajdhani text-sm text-muted-foreground tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Every Superbike in India. One Ultimate Showcase.
        </motion.p>
      )}
    </div>
  );
};

export default Logo;
