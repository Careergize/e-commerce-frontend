import {
  useState,
  useEffect,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { mockProducts } from "../data/mockProducts";
import { useCart } from "../context/useCart";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";
import {
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Check,
  Truck,
  RotateCcw,
  ShieldCheck,
  Share2,
  Store,
  CheckCircle2,
  ThumbsUp,
  FileText,
} from "lucide-react";

const AVAILABLE_COLORS = [
  { name: "Brown", hex: "#704F38" },
  { name: "Beige", hex: "#D8C7B5" },
  { name: "Camel", hex: "#B88E6D" },
  { name: "Charcoal", hex: "#2B2826" },
];

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    pincode,
    checkPincode,
    showToast,
  } = useCart();

  const product = mockProducts.find((p) => p.id === Number(id)) || mockProducts[0];

  // State hooks
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("S");
  const [selectedColor, setSelectedColor] = useState<string>("Brown");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const [isAddedAnim, setIsAddedAnim] = useState<boolean>(false);
  const [inputPincode, setInputPincode] = useState<string>(pincode || "682001");
  const [pincodeSuccessMsg, setPincodeSuccessMsg] = useState<string>("");

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    setSelectedImageIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, product]);

  const isFavorite = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    setIsAddedAnim(true);
    showToast(`Added "${product.title}" (${selectedSize}) to Cart!`);
    setTimeout(() => setIsAddedAnim(false), 1500);
  };

  const handleCheckPincode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPincode.trim().length === 6) {
      checkPincode(inputPincode);
      setPincodeSuccessMsg(`Eligible for Free Doorstep Delivery to ${inputPincode}`);
    } else {
      setPincodeSuccessMsg("Please enter a valid 6-digit Pincode");
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("Product link copied to clipboard!");
  };

  // Price formatting in Indian Rupee
  const displayPrice = `₹${Math.round(product.price).toLocaleString("en-IN")}`;
  const displayOriginalPrice = `₹${Math.round(product.originalPrice).toLocaleString("en-IN")}`;

  const similarProducts: Product[] = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isApparelProduct =
    product.category === "Women's Wear" ||
    product.category === "Men's Wear" ||
    product.category === "Footwear" ||
    product.category === "Accessories";

  // Fallback thumbnails
  const thumbnails =
    product.images && product.images.length > 0
      ? product.images
      : [
          "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-32 sm:pb-24">
      {/* =========================================================================
          MOBILE TOP BAR (< 768px) - MATCHES SCREENSHOT EXACTLY
         ========================================================================= */}
      <div className="block md:hidden sticky top-0 z-20 border-b border-[#EAE4DC] bg-[#FAF8F5]/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE4DC] bg-white text-[#1F1916] shadow-2xs hover:bg-[#FAF5F0] transition"
            aria-label="Back"
          >
            <ChevronLeft size={18} />
          </button>

          <h1 className="text-sm font-bold text-[#1F1916] tracking-tight">
            Product Details
          </h1>

          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE4DC] bg-white text-[#1F1916] shadow-2xs hover:bg-[#FAF5F0] transition"
            aria-label="Wishlist"
          >
            <Heart
              size={16}
              className={isFavorite ? "fill-[#704F38] text-[#704F38]" : "text-[#1F1916]"}
            />
          </button>
        </div>
      </div>

      {/* Desktop Breadcrumbs (>= 768px) */}
      <div className="hidden md:block border-b border-[#EAE4DC] bg-white/50">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs text-[#8D7B68]">
          <Link to="/" className="hover:text-[#1F1916] transition">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/" className="hover:text-[#1F1916] transition">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="font-semibold text-[#1F1916] truncate max-w-md">
            {product.title}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* =====================================================================
              LEFT: PRODUCT GALLERY & THUMBNAILS (MATCHES SCREENSHOT)
             ===================================================================== */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Showcase Image */}
            <div className="relative aspect-4/5 sm:aspect-square w-full overflow-hidden rounded-3xl border border-[#EAE4DC] bg-[#F5ECE5]/30 shadow-xs">
              <img
                src={thumbnails[selectedImageIndex] || thumbnails[0]}
                alt={product.title}
                className="h-full w-full object-cover object-top transition-all duration-300"
              />

              {/* Desktop Wishlist Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="hidden md:flex absolute right-4 top-4 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs transition hover:scale-110 active:scale-95"
                aria-label="Wishlist"
              >
                <Heart
                  size={18}
                  className={
                    isFavorite
                      ? "fill-[#704F38] text-[#704F38]"
                      : "text-[#8D7B68] hover:text-[#1F1916]"
                  }
                />
              </button>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleShare}
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1F1916] shadow-sm backdrop-blur-xs transition hover:scale-110 active:scale-95"
                title="Share product"
              >
                <Share2 size={15} />
              </button>
            </div>

            {/* Thumbnail Strip with +10 Badge (Exact match to screenshot) */}
            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${
                    selectedImageIndex === idx
                      ? "border-[#704F38] scale-105 shadow-xs"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}

              {/* +10 Extra Images Badge Pill */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-[#1F1916]/80 text-white font-bold text-xs backdrop-blur-xs shadow-xs cursor-pointer hover:bg-[#1F1916] transition">
                +10
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT: DETAILS, SIZES, COLORS & ACTIONS (MATCHES SCREENSHOT)
             ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Category Subtitle & Rating Row */}
              <div className="flex items-center justify-between text-xs text-[#8D7B68] font-semibold">
                <span>{product.subcategory || "Female's Style"}</span>

                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span className="text-[#1F1916]">{product.rating}</span>
                  <span className="text-stone-400 font-normal">
                    ({product.reviewsCount})
                  </span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-[#1F1916]">
                {product.title}
              </h1>

              {/* Desktop Price Display */}
              <div className="mt-2.5 hidden sm:flex items-baseline gap-2.5">
                <span className="text-2xl font-black text-[#1F1916]">
                  {displayPrice}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-stone-400 line-through">
                      {displayOriginalPrice}
                    </span>
                    <span className="text-xs font-bold text-[#704F38] bg-[#F5ECE5] px-2 py-0.5 rounded-full">
                      {product.discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Product Details Description (Collapsible with "Read more") */}
            <div className="border-t border-[#EAE4DC] pt-4">
              <h2 className="text-sm font-bold text-[#1F1916] mb-1.5">
                Product Details
              </h2>
              <p
                className={`text-xs text-[#5C4C40] leading-relaxed transition-all ${
                  !isDescriptionExpanded ? "line-clamp-2" : ""
                }`}
              >
                {product.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
              <button
                type="button"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-1 text-xs font-bold text-[#704F38] hover:underline"
              >
                {isDescriptionExpanded ? "Read less" : "Read more"}
              </button>
            </div>

            {/* Select Size Section */}
            <div className="border-t border-[#EAE4DC] pt-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-bold text-[#1F1916]">Select Size</h2>
                <span className="text-[11px] font-semibold text-[#8D7B68]">
                  Selected: <strong className="text-[#1F1916]">{selectedSize}</strong>
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(product.sizes || ["S", "M", "L", "XL", "XXL", "XXXL"]).map(
                  (size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[42px] rounded-xl px-3 py-2 text-xs font-bold transition-all duration-150 ${
                          isSelected
                            ? "bg-[#704F38] text-white shadow-xs scale-105"
                            : "border border-[#E0D7CE] bg-white text-[#5C4C40] hover:border-[#704F38]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Select Color Section (Shown only for wearable / apparel categories) */}
            {isApparelProduct && (
              <div className="border-t border-[#EAE4DC] pt-4">
                <h2 className="text-sm font-bold text-[#1F1916] mb-2">
                  Select Color : <span className="font-semibold text-[#704F38]">{selectedColor}</span>
                </h2>

                <div className="flex items-center gap-3">
                  {AVAILABLE_COLORS.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                          isSelected
                            ? "ring-2 ring-offset-2 ring-[#704F38] scale-110"
                            : "hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {isSelected && (
                          <Check size={14} className="text-white drop-shadow-md" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pincode & Delivery Check */}
            <div className="rounded-2xl border border-[#EAE4DC] bg-white p-4">
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={inputPincode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInputPincode(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 rounded-xl border border-[#E0D7CE] bg-[#FAF8F5] px-3 py-2 text-xs text-[#1F1916] focus:border-[#704F38] focus:bg-white focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#704F38] px-4 py-2 text-xs font-bold text-white hover:bg-[#5B3F2C] transition"
                >
                  Check
                </button>
              </form>
              {pincodeSuccessMsg && (
                <p className="mt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
                  <Check size={12} /> {pincodeSuccessMsg}
                </p>
              )}
            </div>

            {/* Value Guarantees */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-[#5C4C40] pt-2">
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-2.5 border border-[#EAE4DC]">
                <Truck size={16} className="text-[#704F38]" />
                <span className="font-bold">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-2.5 border border-[#EAE4DC]">
                <RotateCcw size={16} className="text-[#704F38]" />
                <span className="font-bold">7-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-2.5 border border-[#EAE4DC]">
                <ShieldCheck size={16} className="text-[#704F38]" />
                <span className="font-bold">100% Genuine</span>
              </div>
            </div>

            {/* Desktop Add to Cart & Buy Now Buttons */}
            <div className="hidden sm:flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold transition-all shadow-xs active:scale-95 ${
                  isAddedAnim
                    ? "bg-[#1F1916] text-white"
                    : "bg-[#704F38] text-white hover:bg-[#5B3F2C]"
                }`}
              >
                {isAddedAnim ? (
                  <>
                    <Check size={16} /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, selectedSize, 1);
                  navigate("/checkout");
                }}
                className="flex-1 rounded-full border-2 border-[#704F38] bg-white py-3.5 text-xs font-bold text-[#704F38] hover:bg-[#F5ECE5] transition active:scale-95"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED SPECIFICATIONS TABLE & VERIFIED SELLER
           ========================================================================= */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#EAE4DC] pt-10">
          {/* Specifications Table (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={18} className="text-[#704F38]" />
              <h2 className="text-base sm:text-lg font-bold text-[#1F1916]">
                Product Specifications
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#EAE4DC] bg-white shadow-2xs">
              <table className="w-full text-xs">
                <tbody>
                  {product.details &&
                    Object.entries(product.details).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? "bg-[#FAF8F5]/60" : "bg-white"}
                      >
                        <td className="w-1/3 px-4 py-3 font-bold text-[#704F38] border-b border-[#EAE4DC]/60">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        <td className="px-4 py-3 text-[#1F1916] font-medium border-b border-[#EAE4DC]/60">
                          {val}
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-[#704F38] border-b border-[#EAE4DC]/60">Category</td>
                    <td className="px-4 py-3 text-[#1F1916] font-medium border-b border-[#EAE4DC]/60">
                      {product.category} {product.subcategory ? `(${product.subcategory})` : ""}
                    </td>
                  </tr>
                  <tr className="bg-[#FAF8F5]/60">
                    <td className="px-4 py-3 font-bold text-[#704F38] border-b border-[#EAE4DC]/60">Stock Status</td>
                    <td className="px-4 py-3 text-emerald-700 font-bold border-b border-[#EAE4DC]/60 flex items-center gap-1">
                      <CheckCircle2 size={13} /> In Stock (Dispatched within 24 Hours)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-[#704F38]">Payment Options</td>
                    <td className="px-4 py-3 text-[#1F1916] font-medium">
                      Cash on Delivery (COD), UPI, Credit/Debit Cards & Net Banking
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Seller / Supplier Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Store size={18} className="text-[#704F38]" />
              <h2 className="text-base sm:text-lg font-bold text-[#1F1916]">
                Verified Merchant
              </h2>
            </div>

            <div className="rounded-2xl border border-[#EAE4DC] bg-white p-5 shadow-2xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-[#1F1916]">
                      {product.supplier?.name || "Direct Artisan Studio"}
                    </h3>
                    <CheckCircle2 size={14} className="text-emerald-600 fill-emerald-100" />
                  </div>
                  <p className="text-[11px] text-[#8D7B68] font-medium mt-0.5">
                    Verified Brand Partner • {product.supplier?.followers || "35.4k"} Followers
                  </p>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-[#FAF5F0] px-2.5 py-1 text-xs font-bold text-[#704F38] border border-[#EAE4DC]">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span>{product.supplier?.rating || 4.8}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center border-y border-[#EAE4DC] py-3 text-xs">
                <div>
                  <p className="font-bold text-[#1F1916] text-sm">
                    {product.supplier?.productsCount || 80}+
                  </p>
                  <p className="text-[10px] text-[#8D7B68]">Products Listed</p>
                </div>
                <div className="border-l border-[#EAE4DC]">
                  <p className="font-bold text-emerald-700 text-sm">99%</p>
                  <p className="text-[10px] text-[#8D7B68]">On-Time Dispatch</p>
                </div>
              </div>

              <div className="text-[11px] text-[#5C4C40] leading-relaxed">
                <span className="font-semibold text-[#1F1916]">Dispatch Promise: </span>
                {product.supplier?.dispatchRate || "99% orders shipped within 24 hours via express surface."}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 border-t border-[#EAE4DC] pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#1F1916]">
                Customer Ratings & Reviews
              </h2>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-black text-[#1F1916]">
                  {product.rating} out of 5
                </span>
                <span className="text-xs text-stone-500">
                  Based on {product.reviewsCount} verified reviews
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => showToast("Review submitted for moderation! Thank you.")}
              className="w-fit rounded-full border border-[#704F38] bg-white px-4 py-2 text-xs font-bold text-[#704F38] hover:bg-[#FAF5F0] transition"
            >
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(product.reviews && product.reviews.length > 0
              ? product.reviews
              : [
                  {
                    id: "rev-default-1",
                    userName: "Ananya Sharma",
                    rating: 5,
                    date: "14 Oct 2026",
                    comment:
                      "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
                    verifiedPurchase: true,
                    helpfulCount: 22,
                  },
                  {
                    id: "rev-default-2",
                    userName: "Aditya Verma",
                    rating: 5,
                    date: "02 Oct 2026",
                    comment:
                      "Fabric feels luxurious and premium. The sizing matches the chart accurately. Highly pleased!",
                    verifiedPurchase: true,
                    helpfulCount: 16,
                  },
                ]
            ).map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-[#EAE4DC] bg-white p-4.5 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#704F38] text-white font-bold text-xs">
                      {rev.userName[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F1916]">
                        {rev.userName}
                      </p>
                      {rev.verifiedPurchase && (
                        <p className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                          <CheckCircle2 size={10} /> Verified Buyer
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-stone-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < rev.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-xs text-[#5C4C40] leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1 border-t border-[#EAE4DC]/60">
                  <span>Helpful review?</span>
                  <button
                    type="button"
                    onClick={() => showToast("Thank you for your feedback!")}
                    className="flex items-center gap-1 hover:text-[#704F38] transition font-medium"
                  >
                    <ThumbsUp size={11} /> ({rev.helpfulCount})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Styles Grid */}
        {similarProducts.length > 0 && (
          <div className="mt-16 border-t border-[#EAE4DC] pt-10">
            <h2 className="text-lg font-bold text-[#1F1916] mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          STICKY BOTTOM PURCHASE BAR (MATCHES SCREENSHOT RIGHT PHONE)
         ========================================================================= */}
      <div className="fixed bottom-0 inset-x-0 z-30 border-t border-[#EAE4DC] bg-white/95 px-5 py-3.5 backdrop-blur-md shadow-lg sm:hidden">
        <div className="flex items-center justify-between gap-4">
          {/* Total Price */}
          <div>
            <p className="text-[10px] font-semibold text-[#8D7B68] uppercase tracking-wider">
              Total Price
            </p>
            <p className="text-lg font-black text-[#1F1916] leading-none mt-0.5">
              {displayPrice}
            </p>
          </div>

          {/* Large Mocha Pill Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 rounded-full py-3 px-6 text-xs font-bold text-white transition-all shadow-md active:scale-95 ${
              isAddedAnim
                ? "bg-[#1F1916]"
                : "bg-[#704F38] hover:bg-[#5B3F2C]"
            }`}
          >
            {isAddedAnim ? (
              <>
                <Check size={16} /> Added!
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
