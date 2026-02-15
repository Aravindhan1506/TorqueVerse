import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiX, HiPlus, HiCheck } from 'react-icons/hi';
import Layout from '@/components/Layout';
import { bikes, Bike } from '@/data/bikes';
import BikeSelectModal from '@/components/compare/BikeSelectModal';

const MAX_COMPARE = 3;

const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const initialBikes = searchParams.get('bikes')?.split(',').filter(Boolean) || [];
  
  const [selectedBikeIds, setSelectedBikeIds] = useState<string[]>(initialBikes);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedBikes = useMemo(() => {
    return selectedBikeIds
      .map(id => bikes.find(b => b.id === id))
      .filter(Boolean) as Bike[];
  }, [selectedBikeIds]);

  const availableBikes = useMemo(() => {
    return bikes.filter(bike => 
      !selectedBikeIds.includes(bike.id) &&
      (searchQuery === '' || 
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [selectedBikeIds, searchQuery]);

  const addBike = (bikeId: string) => {
    if (selectedBikeIds.length < MAX_COMPARE) {
      setSelectedBikeIds([...selectedBikeIds, bikeId]);
      setIsSelectOpen(false);
      setSearchQuery('');
    }
  };

  const removeBike = (bikeId: string) => {
    setSelectedBikeIds(selectedBikeIds.filter(id => id !== bikeId));
  };

  const comparisonSpecs = [
    { key: 'price', label: 'Price' },
    { key: 'engine', label: 'Engine' },
    { key: 'power', label: 'Power' },
    { key: 'torque', label: 'Torque' },
    { key: 'topSpeed', label: 'Top Speed' },
    { key: 'weight', label: 'Weight' },
    { key: 'mileage', label: 'Mileage' },
    { key: 'category', label: 'Category' },
  ];

  const getSpecValue = (bike: Bike, key: string): string => {
    const value = bike[key as keyof Bike];
    return typeof value === 'string' ? value : 'N/A';
  };

  // Find the best value for comparison highlighting
  const getBestValue = (key: string): string | null => {
    if (selectedBikes.length < 2) return null;
    
    const numericKeys = ['power', 'topSpeed'];
    const lowerBetterKeys = ['price', 'weight'];
    
    if (numericKeys.includes(key)) {
      const values = selectedBikes.map(bike => {
        const val = getSpecValue(bike, key);
        return { id: bike.id, value: parseFloat(val.replace(/[^\d.]/g, '')) || 0 };
      });
      const max = Math.max(...values.map(v => v.value));
      return values.find(v => v.value === max)?.id || null;
    }
    
    if (lowerBetterKeys.includes(key)) {
      const values = selectedBikes.map(bike => {
        const val = key === 'price' ? bike.priceValue : parseFloat(getSpecValue(bike, key).replace(/[^\d.]/g, '')) || Infinity;
        return { id: bike.id, value: val };
      });
      const min = Math.min(...values.map(v => v.value));
      return values.find(v => v.value === min)?.id || null;
    }
    
    return null;
  };

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
              Compare <span className="text-primary">Superbikes</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select up to {MAX_COMPARE} bikes to compare their specifications side by side
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selection Area */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Selected Bikes */}
            {selectedBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="premium-card overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={bike.image}
                    alt={`${bike.brand} ${bike.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => removeBike(bike.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <HiX size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">{bike.brand}</p>
                  <h3 className="font-display font-bold text-lg tracking-wide">{bike.name}</h3>
                  <p className="text-primary font-body font-bold">{bike.price}</p>
                </div>
              </motion.div>
            ))}

            {/* Add Bike Slot */}
            {selectedBikes.length < MAX_COMPARE && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <button
                  onClick={() => setIsSelectOpen(true)}
                  className="w-full h-full min-h-[200px] premium-card flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border hover:border-primary transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <HiPlus className="text-primary" size={24} />
                  </div>
                  <span className="font-body font-semibold text-muted-foreground">
                    Add Bike to Compare
                  </span>
                </button>

                {/* Bike Selection Modal */}
                <BikeSelectModal
                  open={isSelectOpen}
                  onClose={() => setIsSelectOpen(false)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  availableBikes={availableBikes}
                  onSelect={addBike}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {selectedBikes.length >= 2 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="premium-card overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left font-display text-sm uppercase tracking-wider text-muted-foreground">
                        Specification
                      </th>
                      {selectedBikes.map(bike => (
                        <th key={bike.id} className="p-4 text-center">
                          <span className="font-display font-bold text-foreground tracking-wide">{bike.name}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonSpecs.map(spec => {
                      const bestId = getBestValue(spec.key);
                      return (
                        <tr key={spec.key} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                          <td className="p-4 font-body font-semibold text-muted-foreground">
                            {spec.label}
                          </td>
                          {selectedBikes.map(bike => {
                            const value = getSpecValue(bike, spec.key);
                            const isBest = bestId === bike.id;
                            return (
                              <td
                                key={bike.id}
                              className={`p-4 text-center font-body font-bold ${
                                isBest ? 'text-primary' : 'text-foreground'
                                }`}
                              >
                                <div className="flex items-center justify-center gap-2">
                                  {value}
                                  {isBest && <HiCheck className="text-primary" size={16} />}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <HiCheck className="text-primary" />
                <span>Best in category</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {selectedBikes.length < 2 && (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-4">⚖️</div>
            <h3 className="font-display text-xl font-bold mb-2 tracking-wide">
              Select at least 2 bikes to compare
            </h3>
            <p className="text-muted-foreground">
              Click "Add Bike to Compare" to start building your comparison
            </p>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ComparePage;
