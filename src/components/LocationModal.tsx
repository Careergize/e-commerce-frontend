import { useState } from "react";
import { MapPin, X, Check } from "lucide-react";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: string;
  onSelectLocation: (loc: string) => void;
}

const POPULAR_LOCATIONS = [
  { city: "New York", country: "USA", label: "New York, USA" },
  { city: "Los Angeles", country: "USA", label: "Los Angeles, USA" },
  { city: "London", country: "UK", label: "London, UK" },
  { city: "Bengaluru", country: "India", label: "Bengaluru, India" },
  { city: "Mumbai", country: "India", label: "Mumbai, India" },
  { city: "Paris", country: "France", label: "Paris, France" },
  { city: "Tokyo", country: "Japan", label: "Tokyo, Japan" },
];

export function LocationModal({
  isOpen,
  onClose,
  currentLocation,
  onSelectLocation,
}: LocationModalProps) {
  const [customInput, setCustomInput] = useState("");

  if (!isOpen) return null;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      onSelectLocation(customInput.trim());
      setCustomInput("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-sm rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5ECE5] text-[#704F38]">
              <MapPin size={16} />
            </div>
            <h3 className="text-base font-bold text-[#1F1916]">Select Location</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-stone-400 hover:bg-[#F5ECE5] hover:text-[#1F1916] transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Custom Input */}
        <form onSubmit={handleCustomSubmit} className="mt-4">
          <label htmlFor="custom-loc" className="block text-xs font-bold text-[#5C4C40] mb-1">
            Search or Type City
          </label>
          <div className="flex items-center gap-2">
            <input
              id="custom-loc"
              type="text"
              placeholder="e.g. Chicago, USA"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="flex-1 rounded-xl border border-[#E0D7CE] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1F1916] placeholder:text-stone-400 focus:border-[#704F38] focus:bg-white focus:outline-hidden"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#704F38] px-4 py-2 text-xs font-bold text-white hover:bg-[#5B3F2C] transition"
            >
              Set
            </button>
          </div>
        </form>

        {/* Popular Locations */}
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8D7B68] mb-2">
            Popular Delivery Zones
          </p>
          <div className="space-y-1">
            {POPULAR_LOCATIONS.map((loc) => {
              const isSelected = currentLocation === loc.label;
              return (
                <button
                  key={loc.label}
                  type="button"
                  onClick={() => {
                    onSelectLocation(loc.label);
                    onClose();
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition ${
                    isSelected
                      ? "bg-[#F5ECE5] text-[#704F38] font-bold"
                      : "text-[#1F1916] hover:bg-[#FAF5F0]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={13} className={isSelected ? "text-[#704F38]" : "text-stone-400"} />
                    {loc.label}
                  </span>
                  {isSelected && <Check size={14} className="text-[#704F38]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
