import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  X,
  ChevronDown,
  Package,
  MapPin,
  Bell,
  SlidersHorizontal,
} from "lucide-react";
import { useCart } from "../context/useCart";
import { LocationModal } from "./LocationModal";

export function Navbar() {
  const { cartCount, wishlist, searchQuery, setSearchQuery, showToast } = useCart();
  const [localSearch, setLocalSearch] = useState<string>(searchQuery);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [locationName, setLocationName] = useState<string>(() => {
    const saved = localStorage.getItem("eshop_location");
    if (!saved || saved === "New York, USA" || saved === "Mumbai, India") {
      try {
        localStorage.setItem("eshop_location", "Kerala, India");
      } catch {
        // ignore
      }
      return "Kerala, India";
    }
    return saved;
  });
  const [hasUnreadNotification, setHasUnreadNotification] = useState<boolean>(true);

  const profileRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync local search input with context query
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Debounced search update
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 200);

    return () => clearTimeout(timer);
  }, [localSearch, setSearchQuery]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationChange = (loc: string) => {
    setLocationName(loc);
    localStorage.setItem("eshop_location", loc);
    showToast(`Delivery zone updated to ${loc}`);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    if (location.pathname !== "/") {
      navigate("/");
    }
    const catalogEl =
      document.getElementById("flash-sale-section") ||
      document.getElementById("catalog-section");
    catalogEl?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenFilterDrawer = () => {
    window.dispatchEvent(new CustomEvent("open-filter-drawer"));
  };

  const handleNotificationClick = () => {
    setHasUnreadNotification(false);
    showToast("Flash Sale: 50% discount live on tailored outerwear!");
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#EAE4DC] bg-[#FAF8F5]/90 backdrop-blur-md">
      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        currentLocation={locationName}
        onSelectLocation={handleLocationChange}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* =========================================================================
            MOBILE HEADER VIEW (< 768px) - MATCHES SCREENSHOT EXACTLY
           ========================================================================= */}
        <div className="block md:hidden pt-3 pb-2.5">
          {/* Top row: Location + Notification Bell */}
          <div className="flex items-center justify-between pb-2.5">
            <div>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-[#8D7B68]">
                Location
              </p>
              <button
                type="button"
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-1 text-xs font-bold text-[#1F1916] hover:text-[#704F38] transition"
              >
                <MapPin size={13} className="text-[#704F38] fill-[#704F38]" />
                <span>{locationName}</span>
                <ChevronDown size={13} className="text-[#8D7B68]" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleNotificationClick}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE4DC] bg-white text-[#1F1916] shadow-2xs hover:bg-[#FAF5F0] transition"
              aria-label="Notifications"
            >
              <Bell size={16} />
              {hasUnreadNotification && (
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#704F38] ring-2 ring-white" />
              )}
            </button>
          </div>

          {/* Search Row + Mocha Filter Button */}
          <div className="flex items-center gap-2">
            <form onSubmit={handleSearchSubmit} className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8D7B68]">
                <Search size={15} />
              </div>
              <input
                type="text"
                value={localSearch}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLocalSearch(e.target.value)
                }
                placeholder="Search"
                className="w-full rounded-2xl border border-[#EAE4DC] bg-white py-2.5 pl-10 pr-9 text-xs text-[#1F1916] placeholder:text-stone-400 focus:border-[#704F38] focus:outline-hidden shadow-2xs"
              />
              {localSearch && (
                <button
                  type="button"
                  onClick={() => {
                    setLocalSearch("");
                    setSearchQuery("");
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-700"
                >
                  <X size={13} />
                </button>
              )}
            </form>

            {/* Mocha Square Filter Button from screenshot */}
            <button
              type="button"
              onClick={handleOpenFilterDrawer}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#704F38] text-white shadow-xs hover:bg-[#5B3F2C] transition active:scale-95"
              aria-label="Open Filters"
            >
              <SlidersHorizontal size={17} />
            </button>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP / LAPTOP HEADER VIEW (>= 768px) - MATCHES WARM THEME FULL-WIDTH
           ========================================================================= */}
        <div className="hidden md:flex h-16 items-center justify-between gap-6">
          {/* Left: Brand + Location Pill */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-extrabold tracking-tight text-2xl text-[#1F1916] font-sans">
                e<span className="text-[#704F38]">.</span>shop
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-[#EAE4DC] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F1916] hover:border-[#704F38] transition shadow-2xs"
            >
              <MapPin size={13} className="text-[#704F38] fill-[#704F38]" />
              <span>{locationName}</span>
              <ChevronDown size={12} className="text-[#8D7B68]" />
            </button>
          </div>

          {/* Center: Search Bar with Mocha Filter Button */}
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#8D7B68]">
                  <Search size={16} />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={localSearch}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLocalSearch(e.target.value)
                  }
                  placeholder="Search products, styles, collections..."
                  className="w-full rounded-full border border-[#EAE4DC] bg-white py-2 pl-10 pr-9 text-xs text-[#1F1916] placeholder:text-stone-400 focus:border-[#704F38] focus:outline-hidden shadow-2xs"
                />
                {localSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setLocalSearch("");
                      setSearchQuery("");
                    }}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-700"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={handleOpenFilterDrawer}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#704F38] text-white shadow-xs hover:bg-[#5B3F2C] transition active:scale-95"
                title="Filters"
              >
                <SlidersHorizontal size={15} />
              </button>
            </form>
          </div>

          {/* Right: Notifications, Wishlist, Account, Cart */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleNotificationClick}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE4DC] bg-white text-[#1F1916] shadow-2xs hover:bg-[#FAF5F0] transition"
              aria-label="Notifications"
            >
              <Bell size={16} />
              {hasUnreadNotification && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#704F38] ring-2 ring-white" />
              )}
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE4DC] bg-white text-[#1F1916] shadow-2xs hover:bg-[#FAF5F0] transition"
              aria-label="Saved Wishlist"
            >
              <Heart size={16} className={wishlist.length > 0 ? "fill-[#704F38] text-[#704F38]" : ""} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#704F38] px-1 text-[9px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-full border border-[#EAE4DC] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F1916] hover:border-[#704F38] transition shadow-2xs"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5ECE5] text-[#704F38]">
                  <User size={13} />
                </div>
                <span>Account</span>
                <ChevronDown size={12} className="text-[#8D7B68]" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[#EAE4DC] bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="block rounded-xl bg-[#FAF8F5] p-2.5 mb-1 hover:bg-[#F5ECE5] transition"
                  >
                    <p className="text-[10px] font-semibold uppercase text-[#8D7B68]">
                      Welcome to e-shop
                    </p>
                    <p className="text-xs font-bold text-[#1F1916]">Valued Member</p>
                  </Link>
                  <div className="space-y-0.5 text-xs font-medium text-[#1F1916]">
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#FAF8F5]"
                    >
                      <User size={14} />
                      <span>My Profile</span>
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#FAF8F5]"
                    >
                      <Package size={14} />
                      <span>My Orders</span>
                    </Link>
                    <Link
                      to="/wishlist"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#FAF8F5]"
                    >
                      <div className="flex items-center gap-2">
                        <Heart size={14} />
                        <span>Saved Wishlist</span>
                      </div>
                      {wishlist.length > 0 && (
                        <span className="rounded-full bg-[#F5ECE5] px-2 py-0.5 text-[10px] font-bold text-[#704F38]">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Pill */}
            <Link
              to="/cart"
              className="flex items-center gap-2 rounded-full bg-[#704F38] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#5B3F2C] transition active:scale-95"
            >
              <div className="relative">
                <ShoppingBag size={15} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-black text-[#704F38]">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
