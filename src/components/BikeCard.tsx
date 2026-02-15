import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiArrowRight } from 'react-icons/hi';
import { GiSpeedometer } from 'react-icons/gi';
import { Bike } from '@/data/bikes';
import OptimizedImage from './OptimizedImage';

interface BikeCardProps {
  bike: Bike;
  index?: number;
  priority?: boolean; // For above-the-fold images
}

const BikeCard = memo(({ bike, index = 0, priority = false }: BikeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  // Load first 8 images immediately (2 rows on desktop)
  const shouldEagerLoad = priority || index < 8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.15) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="premium-card overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={bike.image}
            alt={`${bike.brand} ${bike.name}`}
            wrapperClassName="w-full h-full"
            eager={shouldEagerLoad}
            maxWidth={320}
            maxHeight={240}
            className={`w-full h-full object-cover transition-transform duration-200 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="spec-badge">{bike.category}</span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/90 flex flex-col justify-center items-center p-6 text-center"
          >
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-body">
              {bike.description}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-primary">
                <HiLightningBolt className="text-lg" />
                <span className="font-mono font-bold">{bike.power}</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <GiSpeedometer className="text-lg" />
                <span className="font-mono font-bold">{bike.topSpeed}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand */}
          <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {bike.brand}
          </p>

          {/* Name */}
          <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-200 tracking-wide">
            {bike.name}
          </h3>

          {/* Specs Row */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="font-mono">{bike.engine}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="font-mono">{bike.power}</span>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-body">Starting from</p>
              <p className="font-display text-2xl text-primary tracking-wide">{bike.price}</p>
            </div>
            <Link 
              to={`/bike/${bike.id}`}
              className="flex items-center gap-2 text-sm font-body font-semibold uppercase text-foreground hover:text-primary transition-colors duration-200 group/btn"
            >
              View
              <HiArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={false}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary origin-left"
        />
      </div>
    </motion.div>
  );
});

BikeCard.displayName = 'BikeCard';

export default BikeCard;
