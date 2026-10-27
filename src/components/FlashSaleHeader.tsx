import { useState, useEffect } from "react";

interface FlashSaleHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FlashSaleHeader({ activeTab, onTabChange }: FlashSaleHeaderProps) {
  // Countdown timer (e.g. 2 hours, 12 mins, 56 secs remaining)
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 2,
    minutes: 12,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 15, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num: number) => String(num).padStart(2, "0");

  const filterTabs = ["All", "Newest", "Popular", "Man", "Women"];

  return (
    <div className="space-y-3.5 pt-6 pb-2" id="flash-sale-section">
      {/* Title & Countdown Timer */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-[#1F1916]">Flash Sale</h2>

        <div className="flex items-center gap-1.5 text-xs text-[#8D7B68]">
          <span className="text-[11px] sm:text-xs font-medium">Closing in :</span>
          <div className="flex items-center gap-1">
            <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5 text-[11px] font-mono font-bold text-[#704F38]">
              {formatUnit(timeLeft.hours)}
            </span>
            <span className="text-[#8D7B68] font-bold">:</span>
            <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5 text-[11px] font-mono font-bold text-[#704F38]">
              {formatUnit(timeLeft.minutes)}
            </span>
            <span className="text-[#8D7B68] font-bold">:</span>
            <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5 text-[11px] font-mono font-bold text-[#704F38]">
              {formatUnit(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 shrink-0 ${
                isActive
                  ? "bg-[#704F38] text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:border-[#704F38] hover:text-[#704F38]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FlashSaleHeader;
