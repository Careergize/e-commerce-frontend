import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../context/useCart";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : "Free Size"
  );
  const [showSizePicker, setShowSizePicker] = useState<boolean>(false);
  const [isAddedAnim, setIsAddedAnim] = useState<boolean>(false);

  const isFavorite = isWishlisted(product.id);

  const handleQuickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.sizes && product.sizes.length > 1 && !showSizePicker) {
      setShowSizePicker(true);
      return;
    }

    addToCart(product, selectedSize, 1);
    setIsAddedAnim(true);
    setShowSizePicker(false);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleSizeSelectAndAdd = (
    e: MouseEvent<HTMLButtonElement>,
    size: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSize(size);
    addToCart(product, size, 1);
    setIsAddedAnim(true);
    setShowSizePicker(false);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  // Format currency in Indian Rupee
  const displayPrice = `₹${Math.round(product.price).toLocaleString("en-IN")}`;
  const displayOriginalPrice = `₹${Math.round(product.originalPrice).toLocaleString("en-IN")}`;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-[#EAE4DC] bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#704F38]/5 hover:-translate-y-0.5">
      <Link to={`/product/${product.id}`} className="block flex-1">
        {/* Product Image Container */}
        <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F5ECE5]/40">
          <img
            src={product.images && product.images[0]}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Floating Minimal Wishlist Button from screenshot */}
          <button
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs transition hover:bg-white hover:scale-110 active:scale-95"
            aria-label="Add to wishlist"
          >
            <Heart
              size={15}
              className={
                isFavorite
                  ? "fill-[#704F38] text-[#704F38]"
                  : "text-[#8D7B68] hover:text-[#1F1916]"
              }
            />
          </button>

          {/* Category Tag & Rating Badge */}
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#1F1916] shadow-xs backdrop-blur-xs">
              <Star size={10} className="fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400 font-normal text-[9px]">
                ({product.reviewsCount})
              </span>
            </div>
            {product.badge && (
              <span className="rounded-full bg-[#704F38]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-4">
          {/* Category & Subcategory */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#8D7B68]">
            <span className="uppercase tracking-wider">
              {product.category}
            </span>
            {product.subcategory && (
              <span className="text-[10px] text-[#A89887] font-medium truncate max-w-[110px]">
                {product.subcategory}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            title={product.title}
            className="mt-1 line-clamp-1 text-xs sm:text-sm font-bold text-[#1F1916] leading-snug group-hover:text-[#704F38] transition-colors"
          >
            {product.title}
          </h3>

          {/* Primary Specification Chip (Material / Fabric / Leather) */}
          {(product.details?.Material ||
            product.details?.Fabric ||
            product.details?.Upper ||
            product.details?.Leather ||
            product.details?.Formula ||
            product.details?.KeyIngredients) && (
            <div className="mt-1.5 flex items-center gap-1 text-[10px] text-[#704F38] bg-[#F5ECE5]/60 px-2 py-0.5 rounded-md w-fit max-w-full truncate font-medium">
              <span className="truncate">
                {product.details?.Material ||
                  product.details?.Fabric ||
                  product.details?.Upper ||
                  product.details?.Leather ||
                  product.details?.Formula ||
                  product.details?.KeyIngredients}
              </span>
            </div>
          )}

          {/* Pricing Row with Discount Tag */}
          <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm sm:text-base font-black text-[#1F1916] tracking-tight">
              {displayPrice}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-[11px] text-stone-400 line-through">
                  {displayOriginalPrice}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                  {product.discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {/* Delivery & Trust Line */}
          <div className="mt-1.5 flex items-center gap-2 text-[10px] text-stone-500 font-medium">
            <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
              ✓ Free Delivery
            </span>
            <span>•</span>
            <span>COD Available</span>
          </div>
        </div>
      </Link>

      {/* Quick Add Button */}
      <div className="p-3 sm:p-4 pt-0">
        {/* Interactive Size Selector Popup */}
        {showSizePicker && (
          <div
            className="mb-2 rounded-xl border border-[#EAE4DC] bg-[#FAF8F5] p-2 text-xs animate-in fade-in zoom-in-95 duration-150"
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <p className="mb-1 text-[10px] font-bold text-[#1F1916]">
              Select Size:
            </p>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={(e) => handleSizeSelectAndAdd(e, sz)}
                  className={`rounded-lg border px-2 py-0.5 text-[10px] font-bold transition ${
                    selectedSize === sz
                      ? "border-[#704F38] bg-[#704F38] text-white"
                      : "border-[#E0D7CE] bg-white text-[#5C4C40] hover:border-[#704F38]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className={`flex w-full items-center justify-center gap-1.5 rounded-full py-1.5 sm:py-2 text-xs font-bold tracking-wide transition-all duration-200 ${
            isAddedAnim
              ? "bg-[#704F38] text-white shadow-xs"
              : "border border-[#E0D7CE] bg-[#FAF8F5] text-[#1F1916] hover:bg-[#704F38] hover:text-white hover:border-[#704F38] active:scale-[0.98]"
          }`}
        >
          {isAddedAnim ? (
            <>
              <Check size={13} /> Added
            </>
          ) : (
            <>
              <ShoppingBag size={13} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
