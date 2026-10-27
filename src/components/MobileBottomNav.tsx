import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Heart, Package, User } from "lucide-react";
import { useCart } from "../context/useCart";

export function MobileBottomNav() {
  const location = useLocation();
  const { cartCount, wishlist } = useCart();

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: Home,
      isActive: location.pathname === "/",
    },
    {
      to: "/cart",
      label: "Cart",
      icon: ShoppingBag,
      badge: cartCount > 0 ? cartCount : undefined,
      isActive: location.pathname === "/cart",
    },
    {
      to: "/wishlist",
      label: "Wishlist",
      icon: Heart,
      badge: wishlist.length > 0 ? wishlist.length : undefined,
      isActive: location.pathname === "/wishlist",
    },
    {
      to: "/orders",
      label: "Orders",
      icon: Package,
      isActive: location.pathname === "/orders",
    },
    {
      to: "/profile",
      label: "Profile",
      icon: User,
      isActive: location.pathname === "/profile",
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-4 inset-x-4 max-w-sm mx-auto z-40 flex items-center justify-between rounded-full bg-[#1F1916] px-3.5 py-2 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = item.isActive;

        return (
          <Link
            key={item.to}
            to={item.to}
            aria-label={item.label}
            className={`relative flex items-center justify-center transition-all duration-200 ${
              active
                ? "h-11 w-11 rounded-full bg-white text-[#1F1916] shadow-md scale-105"
                : "h-10 w-10 text-stone-400 hover:text-white"
            }`}
          >
            <Icon size={19} className={active ? "stroke-[2.2]" : "stroke-[1.8]"} />

            {/* Badge Counter */}
            {typeof item.badge === "number" && (
              <span
                className={`absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[9px] font-bold ${
                  active
                    ? "bg-[#704F38] text-white"
                    : "bg-[#704F38] text-white ring-1 ring-[#1F1916]"
                }`}
              >
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default MobileBottomNav;
