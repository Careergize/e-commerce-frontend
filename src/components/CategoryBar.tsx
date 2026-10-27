import { useNavigate, useLocation } from "react-router-dom";
import { CATEGORY_NAV_ITEMS } from "../data/mockProducts";
import { useCart } from "../context/useCart";
import { Compass } from "lucide-react";

export function CategoryBar() {
  const { selectedCategory, setSelectedCategory, setSearchQuery } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToCatalog = () => {
    setTimeout(() => {
      const el =
        document.getElementById("flash-sale-section") ||
        document.getElementById("catalog-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSearchQuery("");
    if (location.pathname !== "/") {
      navigate("/");
    }
    scrollToCatalog();
  };

  return (
    <div className="hidden md:block relative border-b border-[#EAE4DC] bg-white/70 backdrop-blur-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Horizontal Navigation List */}
        <nav className="no-scrollbar flex w-full items-center gap-1.5 overflow-x-auto py-2">
          {/* "All" button */}
          <button
            onClick={() => handleCategoryClick("All")}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === "All"
                ? "bg-[#704F38] text-white shadow-xs"
                : "text-[#5C4C40] hover:text-[#1F1916] hover:bg-[#FAF5F0]"
            }`}
          >
            <Compass
              size={13}
              className={selectedCategory === "All" ? "text-white" : "text-[#8D7B68]"}
            />
            <span>All Categories</span>
          </button>

          {/* Category Items */}
          {CATEGORY_NAV_ITEMS.map((cat) => {
            const isSelected = selectedCategory === cat.name;

            return (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex shrink-0 items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#704F38] text-white font-bold shadow-xs"
                    : "text-[#5C4C40] hover:text-[#1F1916] hover:bg-[#FAF5F0]"
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default CategoryBar;
