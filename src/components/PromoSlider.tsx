import { useState, useEffect, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCart } from "../context/useCart";

interface PromoSlide {
  id: number;
  title: string;
  subtitle: string;
  categoryTarget: string;
  image: string;
  badge?: string;
}

const SLIDES: PromoSlide[] = [
  {
    id: 1,
    title: "New Collection",
    subtitle: "Discount 50% for the first transaction",
    categoryTarget: "Jacket",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    badge: "50% OFF",
  },
  {
    id: 2,
    title: "Tailored Outerwear",
    subtitle: "Minimalist silhouettes & structured fall layers",
    categoryTarget: "Jacket",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
    badge: "NEW ARRIVAL",
  },
  {
    id: 3,
    title: "Curated Essentials",
    subtitle: "Handcrafted silhouettes built for timeless style",
    categoryTarget: "Women's Wear",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    badge: "TRENDING",
  },
];

export function PromoSlider() {
  const { setSelectedCategory, setSearchQuery } = useCart();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleSlideClick = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    const catalogEl =
      document.getElementById("flash-sale-section") ||
      document.getElementById("catalog-section");
    catalogEl?.scrollIntoView({ behavior: "smooth" });
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <div
      className="group relative h-full min-h-[170px] sm:min-h-[190px] md:min-h-[220px] overflow-hidden rounded-3xl border border-[#EAE4DC] bg-[#F5EBE1] shadow-xs transition-all flex flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle decorative curved rings from reference design */}
      <div className="pointer-events-none absolute -left-12 -bottom-12 h-52 w-52 rounded-full border border-[#E2D2C3] opacity-60" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full border border-[#E2D2C3] opacity-40" />

      {/* Banner Content Container */}
      <div
        onClick={() => handleSlideClick(activeSlide.categoryTarget)}
        className="cursor-pointer relative flex h-[160px] sm:h-[185px] md:h-[210px] w-full items-center justify-between px-5 sm:px-10"
      >
        {/* Left Text & CTA */}
        <div className="relative z-10 max-w-xs sm:max-w-md space-y-2 sm:space-y-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F1916] leading-tight font-sans">
            {activeSlide.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#8D7B68] font-medium leading-relaxed max-w-xs">
            {activeSlide.subtitle}
          </p>

          <div className="pt-1">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#704F38] px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#5B3F2C] transition-all active:scale-95"
            >
              <span>Shop Now</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Right Fashion Model Image */}
        <div className="relative h-full w-2/5 min-w-[140px] max-w-[280px] sm:max-w-[340px] overflow-hidden">
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Soft fade into beige background on left */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F5EBE1] to-transparent" />
        </div>
      </div>

      {/* Previous & Next Control Arrows (visible on hover) */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#1F1916] backdrop-blur-xs transition hover:bg-white opacity-0 group-hover:opacity-100 z-20 shadow-xs"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#1F1916] backdrop-blur-xs transition hover:bg-white opacity-0 group-hover:opacity-100 z-20 shadow-xs"
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* Slide Indicator Dots matching screenshot */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setCurrentSlide(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "h-1.5 w-4 bg-[#704F38]"
                : "h-1.5 w-1.5 bg-[#D8CBC0] hover:bg-[#8D7B68]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default PromoSlider;
