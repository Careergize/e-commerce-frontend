import type { ReactNode } from "react";
import { useCart } from "../context/useCart";

interface CategoryItem {
  id: string;
  name: string;
  icon: ReactNode;
}

export function CategoryCircleNav() {
  const { selectedCategory, setSelectedCategory, setSearchQuery } = useCart();

  const categories: CategoryItem[] = [
    {
      id: "T-Shirt",
      name: "T-Shirt",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M6 3L2 7l4 3 2-2v13h8V8l2 2 4-3-4-4-4 2a4 4 0 0 1-4 0L6 3z" />
        </svg>
      ),
    },
    {
      id: "Pant",
      name: "Pant",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M5 3h14v4l-2 14h-4l-1-9-1 9H7L5 7V3z" />
        </svg>
      ),
    },
    {
      id: "Dress",
      name: "Dress",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9 3h6l1 4 4 14H4L8 7l1-4z" />
          <path d="M9 3a3 3 0 0 0 6 0" />
        </svg>
      ),
    },
    {
      id: "Jacket",
      name: "Jacket",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M4 4l4-2 4 3 4-3 4 2v17l-4 1-4-2-4 2-4-1V4z" />
          <path d="M12 5v15" />
          <path d="M8 2l4 6 4-6" />
        </svg>
      ),
    },
    {
      id: "Footwear",
      name: "Footwear",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 17l4-9h10l4 4v5H3z" />
          <path d="M3 17h18v3H3z" />
          <path d="M7 11h4" />
        </svg>
      ),
    },
    {
      id: "Accessories",
      name: "Accessories",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="7" />
          <polyline points="12 9 12 12 13.5 13.5" />
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83" />
          <path d="M7.49 6.65l.35-3.83a2 2 0 0 1 2-1.82h4.34a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
      ),
    },
    {
      id: "Women's Wear",
      name: "Women's",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V11L4 15l2 6h12l2-6-6-4V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z" />
        </svg>
      ),
    },
    {
      id: "Men's Wear",
      name: "Men's",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      ),
    },
    {
      id: "Home & Living",
      name: "Home",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "Beauty & Wellness",
      name: "Beauty",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 18a3 3 0 0 0 3-3" />
        </svg>
      ),
    },
    {
      id: "Tech & Audio",
      name: "Tech",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
  ];

  const handleSelectCategory = (catId: string) => {
    if (selectedCategory === catId) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(catId);
    }
    setSearchQuery("");
    const catalogEl = document.getElementById("flash-sale-section") || document.getElementById("catalog-section");
    catalogEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="block md:hidden mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-[#1F1916]">Category</h2>
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("All");
            setSearchQuery("");
          }}
          className="text-xs font-semibold text-[#8D7B68] hover:text-[#704F38] transition"
        >
          See All
        </button>
      </div>

      {/* Circle items row */}
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className="group flex flex-col items-center gap-1.5 shrink-0 focus:outline-hidden"
            >
              <div
                className={`flex h-15 w-15 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-all duration-200 ${
                  isSelected
                    ? "bg-[#704F38] text-white shadow-md scale-105"
                    : "bg-[#F5ECE5] text-[#704F38] hover:bg-[#EFE3D8] hover:scale-105"
                }`}
              >
                {cat.icon}
              </div>
              <span
                className={`text-xs font-semibold tracking-tight transition ${
                  isSelected
                    ? "text-[#704F38] font-bold"
                    : "text-[#5C4C40] group-hover:text-[#1F1916]"
                }`}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryCircleNav;
