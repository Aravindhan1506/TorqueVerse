import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiX, HiAdjustments } from 'react-icons/hi';
import Layout from '@/components/Layout';
import BikeCard from '@/components/BikeCard';
import { bikes, brands, categories, priceRanges, engineCapacities } from '@/data/bikes';

const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get filters from URL
  const selectedBrand = searchParams.get('brand') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';
  const selectedEngineCapacity = searchParams.get('engine') || '';

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const filteredBikes = useMemo(() => {
    return bikes.filter(bike => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          bike.name.toLowerCase().includes(query) ||
          bike.brand.toLowerCase().includes(query) ||
          bike.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (selectedBrand && bike.brand !== selectedBrand) return false;

      // Category filter
      if (selectedCategory && !bike.category.toLowerCase().includes(selectedCategory.toLowerCase())) return false;

      // Price range filter
      if (selectedPriceRange) {
        const range = priceRanges.find(r => r.label === selectedPriceRange);
        if (range && (bike.priceValue < range.min || bike.priceValue > range.max)) return false;
      }

      // Engine capacity filter
      if (selectedEngineCapacity) {
        const range = engineCapacities.find(r => r.label === selectedEngineCapacity);
        if (range && (bike.engineCC < range.min || bike.engineCC > range.max)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedBrand, selectedCategory, selectedPriceRange, selectedEngineCapacity]);

  const hasActiveFilters = selectedBrand || selectedCategory || selectedPriceRange || selectedEngineCapacity || searchQuery;

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wider">
              Explore <span className="text-primary">Superbikes</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our complete collection of {bikes.length} superbikes available in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by name, brand, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <HiX size={18} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold transition-all duration-200 ${
                showFilters ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              <HiAdjustments size={20} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Filter Pills */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                  {/* Brand Filter */}
                  <div>
                    <label className="block font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Brand
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {brands.map(brand => (
                        <button
                          key={brand}
                          onClick={() => updateFilter('brand', selectedBrand === brand ? '' : brand)}
                          className={`filter-chip ${selectedBrand === brand ? 'active' : ''}`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => updateFilter('category', selectedCategory === category ? '' : category)}
                          className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Price Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map(range => (
                        <button
                          key={range.label}
                          onClick={() => updateFilter('price', selectedPriceRange === range.label ? '' : range.label)}
                          className={`filter-chip ${selectedPriceRange === range.label ? 'active' : ''}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Engine Capacity Filter */}
                  <div>
                    <label className="block font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Engine Capacity
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {engineCapacities.map(range => (
                        <button
                          key={range.label}
                          onClick={() => updateFilter('engine', selectedEngineCapacity === range.label ? '' : range.label)}
                          className={`filter-chip ${selectedEngineCapacity === range.label ? 'active' : ''}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters & Results Count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-body text-sm text-muted-foreground">
                Showing <span className="text-primary font-bold">{filteredBikes.length}</span> of {bikes.length} bikes
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
                >
                  <HiX size={14} />
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bike Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBikes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBikes.map((bike, index) => (
                <BikeCard key={bike.id} bike={bike} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🏍️</div>
              <h3 className="font-display text-xl font-bold mb-2 tracking-wide">No bikes found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearAllFilters}
                className="btn-hero-secondary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ExplorePage;
