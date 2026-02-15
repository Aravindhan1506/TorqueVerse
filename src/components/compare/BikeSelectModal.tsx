import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlus, HiX } from "react-icons/hi";

import type { Bike } from "@/data/bikes";

interface BikeSelectModalProps {
  open: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  availableBikes: Bike[];
  onSelect: (bikeId: string) => void;
}

const BikeSelectModal = ({
  open,
  onClose,
  searchQuery,
  onSearchQueryChange,
  availableBikes,
  onSelect,
}: BikeSelectModalProps) => {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg premium-card p-6 z-50 max-h-[calc(100vh-7rem)] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Select a bike"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold tracking-wide">Select a Bike</h3>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <HiX size={24} />
              </button>
            </div>

            <input
              type="text"
              placeholder="Search bikes..."
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg mb-4 font-body focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />

            <div className="overflow-y-auto flex-1 space-y-2 overscroll-contain pr-1">
              {availableBikes.map((bike) => (
                <button
                  key={bike.id}
                  onClick={() => onSelect(bike.id)}
                  className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-16 h-12 object-cover rounded"
                    loading="lazy"
                  />
                  <div className="flex-1 text-left">
                    <p className="font-body font-semibold">
                      {bike.brand} {bike.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{bike.price}</p>
                  </div>
                  <HiPlus className="text-primary" size={20} />
                </button>
              ))}

              {availableBikes.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No bikes found</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default BikeSelectModal;
