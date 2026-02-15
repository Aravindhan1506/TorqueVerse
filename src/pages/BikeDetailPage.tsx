import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiOutlineScale, HiLightningBolt, HiCheck } from 'react-icons/hi';
import { GiSpeedometer, GiWeight, GiGasPump } from 'react-icons/gi';
import { TbEngine } from 'react-icons/tb';
import Layout from '@/components/Layout';
import BikeCard from '@/components/BikeCard';
import { bikes } from '@/data/bikes';

const BikeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const bike = bikes.find(b => b.id === id);

  if (!bike) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-orbitron text-4xl font-bold mb-4">Bike Not Found</h1>
            <Link to="/explore" className="btn-hero-primary">
              Browse All Bikes
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedBikes = bikes
    .filter(b => b.id !== bike.id && b.category === bike.category)
    .slice(0, 3);

  const specs = [
    { icon: TbEngine, label: 'Engine', value: bike.engine },
    { icon: HiLightningBolt, label: 'Power', value: bike.power },
    { icon: GiSpeedometer, label: 'Top Speed', value: bike.topSpeed },
    { icon: GiWeight, label: 'Weight', value: bike.weight || 'N/A' },
    { icon: GiGasPump, label: 'Mileage', value: bike.mileage || 'N/A' },
  ];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={bike.image}
          alt={`${bike.brand} ${bike.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/explore"
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 z-10"
        >
          <HiArrowLeft size={20} />
          <span className="font-rajdhani font-semibold">Back to Explore</span>
        </Link>
      </section>

      {/* Content */}
      <section className="relative -mt-32 z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="premium-card p-8"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="spec-badge mb-3 inline-block">{bike.category}</span>
                    <p className="font-rajdhani text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {bike.brand}
                    </p>
                    <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mt-1">
                      {bike.name}
                    </h1>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Ex-Showroom Price</p>
                    <p className="font-orbitron text-3xl font-bold text-primary">{bike.price}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {bike.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {specs.map((spec) => (
                    <div key={spec.label} className="bg-secondary/50 rounded-lg p-4 text-center">
                      <spec.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {spec.label}
                      </p>
                      <p className="font-rajdhani font-bold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Torque if available */}
                {bike.torque && (
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="font-rajdhani font-semibold uppercase tracking-wider text-muted-foreground">
                        Torque
                      </span>
                      <span className="font-orbitron text-xl font-bold text-primary">{bike.torque}</span>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div>
                  <h3 className="font-orbitron text-lg font-bold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {bike.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <HiCheck className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-rajdhani text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="premium-card p-6 sticky top-24"
              >
                <h3 className="font-orbitron text-lg font-bold mb-4">Actions</h3>
                
                <Link
                  to={`/compare?bikes=${bike.id}`}
                  className="btn-hero-primary w-full flex items-center justify-center gap-2 mb-4"
                >
                  <HiOutlineScale size={20} />
                  Compare This Bike
                </Link>
                
                <Link
                  to="/explore"
                  className="btn-hero-secondary w-full text-center"
                >
                  Browse More Bikes
                </Link>

                {/* Quick Specs */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-rajdhani text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Quick Specs
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Brand</span>
                      <span className="font-rajdhani font-semibold">{bike.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Engine</span>
                      <span className="font-rajdhani font-semibold">{bike.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Power</span>
                      <span className="font-rajdhani font-semibold">{bike.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Top Speed</span>
                      <span className="font-rajdhani font-semibold">{bike.topSpeed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Category</span>
                      <span className="font-rajdhani font-semibold">{bike.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Bikes */}
          {relatedBikes.length > 0 && (
            <div className="mt-20">
              <h2 className="font-orbitron text-2xl font-bold mb-8">
                Similar <span className="text-primary">{bike.category}</span> Bikes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBikes.map((relatedBike, index) => (
                  <BikeCard key={relatedBike.id} bike={relatedBike} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BikeDetailPage;
