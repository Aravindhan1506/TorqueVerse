import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineScale, HiLightningBolt } from 'react-icons/hi';
import { GiSpeedometer } from 'react-icons/gi';
import Layout from '@/components/Layout';
import BikeCard from '@/components/BikeCard';
import OptimizedImage from '@/components/OptimizedImage';
import { featuredBikes, bikes } from '@/data/bikes';
import heroBike from '@/assets/hero-bike.jpg';


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroBike}
            alt="Superbike Hero"
            priority
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-pulse" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-20">
          <div className="max-w-3xl ml-4 md:ml-8 lg:ml-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                India's Ultimate Superbike Showcase
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 tracking-wider"
            >
              <span className="text-metallic">Explore All</span>
              <br />
              <span className="text-primary neon-text">Superbikes</span>
              <br />
              <span className="text-metallic">in India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Compare specs, prices, and performance — all in one place. 
              Make informed decisions before visiting dealerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/explore" className="btn-hero-primary flex items-center gap-3">
                Explore Superbikes
                <HiArrowRight />
              </Link>
              <Link to="/compare" className="btn-hero-secondary flex items-center gap-3">
                <HiOutlineScale />
                Compare Bikes
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-5 carbon-fiber pointer-events-none" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4 block">
              Top Picks
            </span>
            <h2 className="section-title font-display text-4xl md:text-5xl mx-auto tracking-wider">
              Featured Superbikes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBikes.slice(0, 6).map((bike, index) => (
              <BikeCard key={bike.id} bike={bike} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link 
              to="/explore" 
              className="inline-flex items-center gap-2 font-body text-lg font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-200 group"
            >
              View All {bikes.length} Superbikes
              <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4 block">
              Categories
            </span>
            <h2 className="section-title font-display text-4xl md:text-5xl mx-auto tracking-wider">
              Find Your Style
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sports', 
                count: bikes.filter(b => b.category === 'Sports' || b.category === 'Sports Touring').length,
                description: 'Track-ready machines built for ultimate speed',
                gradient: 'from-primary/20 to-transparent'
              },
              { 
                name: 'Naked', 
                count: bikes.filter(b => b.category === 'Naked').length,
                description: 'Raw power with aggressive streetfighter styling',
                gradient: 'from-accent/20 to-transparent'
              },
              { 
                name: 'Adventure', 
                count: bikes.filter(b => b.category === 'Adventure' || b.category === 'Touring').length,
                description: 'Long-distance touring and off-road capability',
                gradient: 'from-chrome/20 to-transparent'
              },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  to={`/explore?category=${category.name}`}
                  className="premium-card block p-8 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative">
                    <span className="font-display text-5xl text-foreground group-hover:text-primary transition-colors duration-200 tracking-wide">
                      {category.name}
                    </span>
                    <p className="text-muted-foreground text-sm mt-2 mb-4 font-body">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                        {category.count} Bikes
                      </span>
                      <HiArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-wider">
              Ready to Find Your
              <span className="text-primary"> Dream Bike?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Compare specifications, explore features, and discover the perfect superbike 
              that matches your riding style and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/explore" className="btn-hero-primary flex items-center gap-3">
                Start Exploring
                <HiArrowRight />
              </Link>
              <Link to="/guide" className="btn-hero-secondary">
                Read Buyer Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
