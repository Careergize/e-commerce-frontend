import {
  useState,
  useMemo,
  useEffect,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import {
  mockProducts,
  CATEGORIES,
  priceRanges,
  ratingOptions,
} from "../data/mockProducts";
import { ProductCard } from "../components/ProductCard";
import { PromoSlider } from "../components/PromoSlider";
import { CategoryCircleNav } from "../components/CategoryCircleNav";
import { useCart } from "../context/useCart";
import type { SortOption, Product } from "../types";
import {
  SlidersHorizontal,
  X,
  Truck,
  Search,
  Banknote,
  Flame,
} from "lucide-react";

export function HomePage() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
    useCart();

  // Filters State
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState<boolean>(false);
  const [codOnly, setCodOnly] = useState<boolean>(false);
  const [minDiscount50, setMinDiscount50] = useState<boolean>(false);
  const [activeFlashTab, setActiveFlashTab] = useState<string>("All");

  // Countdown timer for Flash Sale
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 2,
    minutes: 12,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num: number) => String(num).padStart(2, "0");

  // Listen for filter drawer event from navbar button
  useEffect(() => {
    const handleOpen = () => setIsFilterDrawerOpen(true);
    window.addEventListener("open-filter-drawer", handleOpen);
    return () => window.removeEventListener("open-filter-drawer", handleOpen);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFilterDrawerOpen(false);
    };
    if (isFilterDrawerOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isFilterDrawerOpen]);

  // Filter & Sort Logic
  const filteredProducts = useMemo<Product[]>(() => {
    let list = [...mockProducts];

    // Flash Sale Tab Filter from screenshot
    if (activeFlashTab === "Newest") {
      list.sort((a, b) => b.id - a.id);
    } else if (activeFlashTab === "Popular") {
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (activeFlashTab === "Man") {
      list = list.filter(
        (p) =>
          p.category === "Men's Wear" ||
          p.category === "T-Shirt" ||
          p.category === "Pant" ||
          p.subcategory?.toLowerCase().includes("man") ||
          p.title.toLowerCase().includes("men") ||
          p.title.toLowerCase().includes("blazer")
      );
    } else if (activeFlashTab === "Women") {
      list = list.filter(
        (p) =>
          p.category === "Women's Wear" ||
          p.category === "Dress" ||
          p.category === "Jacket" ||
          p.subcategory?.toLowerCase().includes("female") ||
          p.title.toLowerCase().includes("women") ||
          p.title.toLowerCase().includes("anarkali") ||
          p.title.toLowerCase().includes("saree")
      );
    }

    // Category Filter
    if (selectedCategory && selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const queryTokens = normalizedQuery
        .split(/[\s,&/-]+/)
        .map((w) => w.trim())
        .filter((w) => w.length > 0);

      list = list.filter((p) => {
        // Direct match with subcategory if defined
        if (p.subcategory && p.subcategory.toLowerCase() === normalizedQuery) return true;
        if (p.subcategory && queryTokens.some((t) => p.subcategory?.toLowerCase().includes(t))) return true;

        const detailsText = Object.values(p.details).join(" ").toLowerCase();
        const fullContent = `${p.title} ${p.category} ${p.subcategory || ""} ${p.description} ${detailsText}`.toLowerCase();

        // Direct full query substring match
        if (fullContent.includes(normalizedQuery)) return true;

        // Multi-token match with singular/plural word matching
        if (queryTokens.length > 0) {
          return queryTokens.some((token) => {
            if (fullContent.includes(token)) return true;
            if (token.endsWith("s") && token.length > 3) {
              const singular = token.slice(0, -1);
              if (fullContent.includes(singular)) return true;
            }
            return false;
          });
        }

        return false;
      });
    }

    // Price Range Filter
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.value === selectedPriceRange);
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    // Rating Filter
    if (minRating > 0) {
      list = list.filter((p) => p.rating >= minRating);
    }

    // Fast Delivery Filter
    if (fastDeliveryOnly) {
      list = list.filter((p) => p.fastDelivery);
    }

    // Cash on Delivery Filter
    if (codOnly) {
      list = list.filter((p) => p.codAvailable !== false);
    }

    // High Discount (50%+ Off) Filter
    if (minDiscount50) {
      list = list.filter((p) => p.discountPercent >= 50);
    }

    // Sort Logic
    if (sortBy === "price-low-high") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-high") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "discount-high") {
      list.sort((a, b) => b.discountPercent - a.discountPercent);
    }

    return list;
  }, [
    selectedCategory,
    searchQuery,
    selectedPriceRange,
    minRating,
    sortBy,
    fastDeliveryOnly,
    codOnly,
    minDiscount50,
    activeFlashTab,
  ]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange("all");
    setMinRating(0);
    setSearchQuery("");
    setSortBy("relevance");
    setFastDeliveryOnly(false);
    setCodOnly(false);
    setMinDiscount50(false);
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedPriceRange !== "all" ||
    minRating > 0 ||
    searchQuery.trim() !== "" ||
    fastDeliveryOnly ||
    codOnly ||
    minDiscount50;

  const activeFiltersCount = useMemo<number>(() => {
    let count = 0;
    if (selectedCategory && selectedCategory !== "All") count++;
    if (selectedPriceRange !== "all") count++;
    if (minRating > 0) count++;
    if (fastDeliveryOnly) count++;
    if (codOnly) count++;
    if (minDiscount50) count++;
    return count;
  }, [
    selectedCategory,
    selectedPriceRange,
    minRating,
    fastDeliveryOnly,
    codOnly,
    minDiscount50,
  ]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Top Hero Section: Banner + Spotlight Deals on Desktop */}
      <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Main Hero Slider (8 cols on desktop, full width on mobile) */}
          <div className="lg:col-span-8">
            <PromoSlider />
          </div>

          {/* Flash Deals Spotlight (4 cols on desktop - fills blank space with real products!) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between rounded-3xl border border-[#EAE4DC] bg-white p-3.5 shadow-2xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#EAE4DC]">
              <span className="text-xs font-black text-[#1F1916] uppercase tracking-wider flex items-center gap-1.5">
                <Flame size={14} className="text-[#704F38]" /> Flash Deals Spotlight
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                50% OFF
              </span>
            </div>

            {/* 2 Hot Deals Cards displayed right alongside the banner */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 flex-1">
              {mockProducts.slice(0, 2).map((dealProduct) => (
                <ProductCard key={`spotlight-${dealProduct.id}`} product={dealProduct} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Circles (swipeable on mobile, hidden on desktop where CategoryBar exists) */}
      <CategoryCircleNav />

      {/* Main Catalog / Flash Sale Section */}
      <section id="catalog-section" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        {/* Unified Modern Toolbar: Flash Tabs, Countdown Timer, Filter Drawer Button & Sort */}
        <div className="mb-4 rounded-2xl border border-[#EAE4DC] bg-white p-3.5 sm:p-4 shadow-2xs">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Title + Flash Sale Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h2 className="text-base sm:text-lg font-black text-[#1F1916]">
                {selectedCategory === "All" ? "Flash Sale" : selectedCategory}
              </h2>
              <span className="rounded-full bg-[#F5ECE5] px-2.5 py-0.5 text-[11px] font-bold text-[#704F38]">
                {filteredProducts.length} items
              </span>

              {/* Flash Sale Tabs */}
              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
                {["All", "Newest", "Popular", "Man", "Women"].map((tab) => {
                  const isActive = activeFlashTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveFlashTab(tab)}
                      className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all shrink-0 ${
                        isActive
                          ? "bg-[#704F38] text-white shadow-xs font-bold"
                          : "border border-[#EAE4DC] bg-[#FAF8F5] text-[#5C4C40] hover:border-[#704F38] hover:text-[#704F38]"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Closing in Countdown + Filter Drawer Button + Sort Select */}
            <div className="flex items-center justify-between sm:justify-end gap-2.5">
              {/* Closing in timer */}
              <div className="flex items-center gap-1.5 text-xs text-[#8D7B68]">
                <span className="text-[11px] font-medium hidden sm:inline">Closing in:</span>
                <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-[#704F38]">
                  <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5">
                    {formatUnit(timeLeft.hours)}
                  </span>
                  <span>:</span>
                  <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5">
                    {formatUnit(timeLeft.minutes)}
                  </span>
                  <span>:</span>
                  <span className="rounded-md bg-[#F5ECE5] px-1.5 py-0.5">
                    {formatUnit(timeLeft.seconds)}
                  </span>
                </div>
              </div>

              {/* Filter Drawer Button */}
              <button
                type="button"
                onClick={() => setIsFilterDrawerOpen(true)}
                className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all shadow-2xs ${
                  activeFiltersCount > 0
                    ? "border-[#704F38] bg-[#704F38] text-white"
                    : "border-[#EAE4DC] bg-white text-[#1F1916] hover:border-[#704F38]"
                }`}
              >
                <SlidersHorizontal size={13} className={activeFiltersCount > 0 ? "text-white" : "text-[#704F38]"} />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-white text-[#704F38] px-1 text-[9px] font-black">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort Select */}
              <div className="flex items-center gap-1.5">
                <select
                  value={sortBy}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setSortBy(e.target.value as SortOption)
                  }
                  className="rounded-full border border-[#EAE4DC] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F1916] shadow-2xs focus:border-[#704F38] focus:outline-hidden"
                >
                  <option value="relevance">Curated Relevance</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating-high">Highest Rated</option>
                  <option value="discount-high">Highest Discount</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Discovery Chips Bar */}
          <div className="no-scrollbar mt-3 pt-2.5 border-t border-[#EAE4DC]/70 flex items-center gap-1.5 overflow-x-auto pb-0.5">
            <button
              onClick={handleResetFilters}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                !hasActiveFilters
                  ? "bg-[#704F38] text-white shadow-xs font-bold"
                  : "border border-[#EAE4DC] bg-[#FAF8F5] text-[#5C4C40] hover:bg-white"
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setCodOnly((prev) => !prev)}
              className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                codOnly
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              <Banknote size={12} className={codOnly ? "text-white" : "text-emerald-600"} />
              <span>Cash on Delivery</span>
            </button>

            <button
              onClick={() => setFastDeliveryOnly((prev) => !prev)}
              className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                fastDeliveryOnly
                  ? "bg-[#704F38] text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              <Truck size={12} className={fastDeliveryOnly ? "text-white" : "text-[#704F38]"} />
              <span>⚡ Express Dispatch</span>
            </button>

            <button
              onClick={() => setMinRating((prev) => (prev === 4.0 ? 0 : 4.0))}
              className={`shrink-0 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                minRating === 4.0
                  ? "bg-[#704F38] text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              <span>★ 4.0+ Rating</span>
            </button>

            <button
              onClick={() =>
                setSelectedPriceRange((prev) => (prev === "under-1000" ? "all" : "under-1000"))
              }
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                selectedPriceRange === "under-1000"
                  ? "bg-[#704F38] text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              Under ₹1,000
            </button>

            <button
              onClick={() =>
                setSelectedPriceRange((prev) => (prev === "1000-2000" ? "all" : "1000-2000"))
              }
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                selectedPriceRange === "1000-2000"
                  ? "bg-[#704F38] text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              ₹1,000 - ₹2,000
            </button>

            <button
              onClick={() => setMinDiscount50((prev) => !prev)}
              className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                minDiscount50
                  ? "bg-rose-600 text-white shadow-xs"
                  : "border border-[#EAE4DC] bg-white text-[#5C4C40] hover:bg-[#FAF8F5]"
              }`}
            >
              <Flame size={12} className={minDiscount50 ? "text-white" : "text-rose-500"} />
              <span>50%+ Off</span>
            </button>
          </div>
        </div>

        {/* Active Filter Chips Bar */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2 px-1">
            <span className="text-xs font-medium text-slate-400">Active:</span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="rounded-full p-0.5 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedCategory !== "All" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">
                Department: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="rounded-full p-0.5 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedPriceRange !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">
                Price: {priceRanges.find((r) => r.value === selectedPriceRange)?.label}
                <button
                  onClick={() => setSelectedPriceRange("all")}
                  className="rounded-full p-0.5 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">
                Rating: {minRating}★ & above
                <button
                  onClick={() => setMinRating(0)}
                  className="rounded-full p-0.5 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {codOnly && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 text-xs font-semibold">
                Cash on Delivery
                <button
                  onClick={() => setCodOnly(false)}
                  className="rounded-full p-0.5 hover:bg-emerald-100 text-emerald-600"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {fastDeliveryOnly && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800">
                Express Dispatch
                <button
                  onClick={() => setFastDeliveryOnly(false)}
                  className="rounded-full p-0.5 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {minDiscount50 && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 px-3 py-1 text-xs font-semibold">
                50%+ Discount
                <button
                  onClick={() => setMinDiscount50(false)}
                  className="rounded-full p-0.5 hover:bg-rose-100 text-rose-600"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-slate-900 hover:underline ml-1"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Full-Width Product Grid */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-white px-6 py-20 text-center shadow-xs">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Search size={32} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                No matching products found
              </h3>
              <p className="mt-1 max-w-sm text-xs text-slate-500">
                Try adjusting your filters, price range, or search query to discover
                pieces in our catalog.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Universal On-Demand Slide-Over Filter Drawer */}
      {isFilterDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsFilterDrawerOpen(false)}
        >
          <div
            className="relative flex h-full w-full max-w-sm flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-250 ease-out"
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                  <SlidersHorizontal size={16} />
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-sm block">
                    Filter Products
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {filteredProducts.length} items available
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-semibold text-slate-900 hover:underline px-2 py-1"
                  >
                    Reset
                  </button>
                )}
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition"
                  aria-label="Close filters"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {/* Department */}
              <div>
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Department
                </h4>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs text-left transition-all ${
                          isSelected
                            ? "bg-slate-900 font-bold text-white shadow-xs"
                            : "text-slate-700 hover:bg-slate-100/70"
                        }`}
                      >
                        <span>{cat}</span>
                        {isSelected && <span className="text-[11px] text-emerald-400">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((r) => {
                    const isSelected = selectedPriceRange === r.value;
                    return (
                      <label
                        key={r.value}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-2.5 text-xs transition ${
                          isSelected
                            ? "border-slate-900 bg-slate-50 font-bold text-slate-950"
                            : "border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="drawer-price"
                            checked={isSelected}
                            onChange={() => setSelectedPriceRange(r.value)}
                            className="accent-slate-900 h-3.5 w-3.5"
                          />
                          <span>{r.label}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Customer Rating */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Customer Rating
                </h4>
                <div className="space-y-2">
                  {ratingOptions.map((opt) => {
                    const isSelected = minRating === opt.value;
                    return (
                      <label
                        key={opt.value}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-2.5 text-xs transition ${
                          isSelected
                            ? "border-slate-900 bg-slate-50 font-bold text-slate-950"
                            : "border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="drawer-rating"
                            checked={isSelected}
                            onChange={() => setMinRating(opt.value)}
                            className="accent-slate-900 h-3.5 w-3.5"
                          />
                          <span>{opt.label}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Services & Deals */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Services & Deals
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center justify-between rounded-xl border border-slate-200/80 p-3 cursor-pointer hover:bg-slate-50 transition">
                    <div className="flex items-center gap-2.5">
                      <Banknote size={15} className="text-emerald-700" />
                      <span className="text-xs font-semibold text-slate-800">Cash on Delivery</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={codOnly}
                      onChange={(e) => setCodOnly(e.target.checked)}
                      className="h-4 w-4 rounded accent-slate-900"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-200/80 p-3 cursor-pointer hover:bg-slate-50 transition">
                    <div className="flex items-center gap-2.5">
                      <Truck size={15} className="text-slate-800" />
                      <span className="text-xs font-semibold text-slate-800">⚡ Express Dispatch</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={fastDeliveryOnly}
                      onChange={(e) => setFastDeliveryOnly(e.target.checked)}
                      className="h-4 w-4 rounded accent-slate-900"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-200/80 p-3 cursor-pointer hover:bg-slate-50 transition">
                    <div className="flex items-center gap-2.5">
                      <Flame size={15} className="text-rose-600" />
                      <span className="text-xs font-semibold text-slate-800">50%+ Mega Discount</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={minDiscount50}
                      onChange={(e) => setMinDiscount50(e.target.checked)}
                      className="h-4 w-4 rounded accent-slate-900"
                    />
                  </label>
                </div>
              </div>

              {/* Zero Delivery Promise */}
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5 text-xs text-emerald-800">
                <p className="font-bold flex items-center gap-1.5 text-emerald-700">
                  <Truck size={14} /> Zero Delivery Fees & Easy Returns
                </p>
                <p className="mt-1 text-[11px] text-emerald-600">
                  Free nationwide shipping on every order with 7-day doorstep returns.
                </p>
              </div>
            </div>

            {/* Sticky Drawer Footer */}
            <div className="border-t border-slate-100 bg-slate-50/80 p-4 flex items-center gap-3">
              <button
                onClick={handleResetFilters}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="flex-1 rounded-full bg-slate-900 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Show {filteredProducts.length} Product{filteredProducts.length === 1 ? "" : "s"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
