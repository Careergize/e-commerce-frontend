import type { Product, PriceRangeOption, RatingOption, SupplierInfo } from "../types";

export const CATEGORIES: string[] = [
  "All",
  "T-Shirt",
  "Pant",
  "Dress",
  "Jacket",
  "Women's Wear",
  "Men's Wear",
  "Footwear",
  "Accessories",
  "Home & Living",
  "Beauty & Wellness",
  "Tech & Audio",
];

export interface CategoryNavItem {
  name: string;
  subcategories: string[];
}

export const CATEGORY_NAV_ITEMS: CategoryNavItem[] = [
  {
    name: "T-Shirt",
    subcategories: ["Heavyweight Tees", "Pima Crewnecks", "Vintage Graphic", "Breton Striped"],
  },
  {
    name: "Pant",
    subcategories: ["Pleated Chinos", "Selvedge Denim", "Linen Trousers", "Cargo Pants"],
  },
  {
    name: "Dress",
    subcategories: ["Boho Maxi", "Knit Bodycon", "Linen Shirt Dress", "Evening Slip"],
  },
  {
    name: "Jacket",
    subcategories: ["Tailored Blazers", "Casual Outerwear", "Sherpa Trucker", "Quilted Puffer"],
  },
  {
    name: "Women's Wear",
    subcategories: ["Kurtas & Sets", "Sarees & Ethnic", "Dresses & Jumpsuits", "Tops & Shirts"],
  },
  {
    name: "Men's Wear",
    subcategories: ["Casual Shirts", "Knit Sweaters", "Heavyweight Tees", "Pleated Trousers"],
  },
  {
    name: "Footwear",
    subcategories: ["Court Sneakers", "Penny Loafers", "Chelsea Boots", "Running Trainers"],
  },
  {
    name: "Accessories",
    subcategories: ["Messenger Bags", "Polarized Eyewear", "Slim Wallets", "Minimalist Watches"],
  },
  {
    name: "Home & Living",
    subcategories: ["Pour-Over Sets", "Linen Bedding", "Scented Candles", "Artisan Ceramics"],
  },
  {
    name: "Beauty & Wellness",
    subcategories: ["Facial Oils", "Organic Skincare", "Body Care"],
  },
  {
    name: "Tech & Audio",
    subcategories: ["ANC Headphones", "Wireless Chargers", "Bluetooth Speakers", "Cables & Docks"],
  },
];

export const priceRanges: PriceRangeOption[] = [
  { label: "All Prices", value: "all", min: 0, max: Infinity },
  { label: "Under ₹1,000", value: "under-1000", min: 0, max: 1000 },
  { label: "₹1,000 - ₹2,000", value: "1000-2000", min: 1000, max: 2000 },
  { label: "₹2,000 - ₹3,500", value: "2000-3500", min: 2000, max: 3500 },
  { label: "Above ₹3,500", value: "above-3500", min: 3500, max: Infinity },
];

export const ratingOptions: RatingOption[] = [
  { label: "All Ratings", value: 0 },
  { label: "4.0 ★ & Above", value: 4.0 },
  { label: "4.5 ★ & Above", value: 4.5 },
  { label: "4.8 ★ & Above", value: 4.8 },
];

export const suppliers: Record<string, SupplierInfo> = {
  "T-Shirt": {
    "name": "Loom & Thread Studio",
    "rating": 4.8,
    "followers": "45.1k",
    "productsCount": 120,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  },
  "Pant": {
    "name": "Savile Tailors & Loom",
    "rating": 4.7,
    "followers": "28.4k",
    "productsCount": 82,
    "verified": true,
    "dispatchRate": "98% dispatched within 24h"
  },
  "Dress": {
    "name": "Maison Silk & Chiffon",
    "rating": 4.9,
    "followers": "52.8k",
    "productsCount": 110,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  },
  "Jacket": {
    "name": "Atelier Outerwear Milano",
    "rating": 4.8,
    "followers": "38.2k",
    "productsCount": 94,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  },
  "Women's Wear": {
    "name": "Aura Jaipur Handlooms",
    "rating": 4.9,
    "followers": "56.4k",
    "productsCount": 164,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  },
  "Men's Wear": {
    "name": "Apex Urban Loom",
    "rating": 4.7,
    "followers": "32.5k",
    "productsCount": 128,
    "verified": true,
    "dispatchRate": "98% dispatched within 24h"
  },
  "Footwear": {
    "name": "Stride Craftsman Co.",
    "rating": 4.8,
    "followers": "31.2k",
    "productsCount": 64,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  },
  "Accessories": {
    "name": "Verve Goods Atelier",
    "rating": 4.6,
    "followers": "18.9k",
    "productsCount": 92,
    "verified": true,
    "dispatchRate": "96% dispatched within 24h"
  },
  "Home & Living": {
    "name": "Nordic Living Essentials",
    "rating": 4.8,
    "followers": "14.3k",
    "productsCount": 76,
    "verified": true,
    "dispatchRate": "97% dispatched within 24h"
  },
  "Beauty & Wellness": {
    "name": "Botanica Lab Organics",
    "rating": 4.9,
    "followers": "27.6k",
    "productsCount": 88,
    "verified": true,
    "dispatchRate": "98% dispatched within 24h"
  },
  "Tech & Audio": {
    "name": "Aura Acoustics & Docks",
    "rating": 4.7,
    "followers": "42.1k",
    "productsCount": 154,
    "verified": true,
    "dispatchRate": "99% dispatched within 24h"
  }
};

export const mockProducts: Product[] = [
  {
    "id": 1,
    "title": "Heavyweight Boxy Cotton Tee",
    "category": "T-Shirt",
    "subcategory": "Heavyweight Tees",
    "price": 799,
    "originalPrice": 1599,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 324,
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Combed Heavy Cotton (260 GSM)",
      "Fit": "Relaxed Boxy Drop-Shoulder",
      "Collar": "Double-needle 1.25\" Ribbed Crewneck",
      "Care": "Machine wash cold inside out, tumble dry low",
      "Origin": "Knit & dyed in Tirupur, India"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Built from dense 260 GSM combed cotton that holds its structure wash after wash. Features a relaxed drop shoulder, clean blind-hem stitch, and pre-shrunk finish.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Loom & Thread Studio",
      "rating": 4.8,
      "followers": "45.1k",
      "productsCount": 120,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-1-1",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      },
      {
        "id": "rev-1-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  },
  {
    "id": 2,
    "title": "Vintage Washed Indigo Pocket Tee",
    "category": "T-Shirt",
    "subcategory": "Vintage Graphic",
    "price": 899,
    "originalPrice": 1799,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 218,
    "images": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Ring-Spun Cotton (210 GSM)",
      "Finish": "Enzyme garment-dyed for broken-in feel",
      "Pocket": "Reinforced single chest pocket",
      "Care": "Machine wash cold with like colors",
      "Origin": "Crafted in Tirupur, India"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Garment-dyed and enzyme washed for an authentic broken-in vintage patina. Soft to the touch yet sturdy enough for everyday wear.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Loom & Thread Studio",
      "rating": 4.8,
      "followers": "45.1k",
      "productsCount": 120,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-2-1",
        "userName": "Rahul V.",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      },
      {
        "id": "rev-2-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 3,
    "title": "Breton Striped Nautical Cotton Tee",
    "category": "T-Shirt",
    "subcategory": "Breton Striped",
    "price": 1099,
    "originalPrice": 2199,
    "discountPercent": 50,
    "rating": 4.6,
    "reviewsCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Interlock Cotton Yarn (240 GSM)",
      "Pattern": "Yarn-dyed French maritime stripes",
      "Fit": "Standard classic fit",
      "Care": "Gentle wash cold, line dry",
      "Origin": "Mumbai Handloom Collective"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An authentic coastal staple woven from interlock yarn with crisp navy and ecru stripes. Styled with a tailored crew collar and side hem slits.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Loom & Thread Studio",
      "rating": 4.8,
      "followers": "45.1k",
      "productsCount": 120,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-3-1",
        "userName": "Priya Patel",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 20
      },
      {
        "id": "rev-3-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 4,
    "title": "Peruvian Pima Cotton Crewneck",
    "category": "T-Shirt",
    "subcategory": "Pima Crewnecks",
    "price": 999,
    "originalPrice": 1999,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 412,
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Extra-Long Staple Pima Cotton",
      "Weave": "Silky jersey knit with natural luster",
      "Collar": "Reinforced non-sag bound neckline",
      "Care": "Machine wash cold, do not bleach",
      "Origin": "Loomed in Coimbatore, India"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Spun from ultra-fine extra-long staple cotton offering unmatched silkiness and breathability. Resists pilling and retains deep color vibrancy.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Staff Pick",
    "codAvailable": true,
    "supplier": {
      "name": "Loom & Thread Studio",
      "rating": 4.8,
      "followers": "45.1k",
      "productsCount": 120,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-4-1",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      },
      {
        "id": "rev-4-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 5,
    "title": "Minimalist Sandstone Oversized Tee",
    "category": "T-Shirt",
    "subcategory": "Heavyweight Tees",
    "price": 849,
    "originalPrice": 1699,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 156,
    "images": [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Sustainable Organic Cotton (220 GSM)",
      "Fit": "Oversized silhouette with elbow-length sleeves",
      "Dye": "Low-impact mineral wash pigment",
      "Care": "Machine wash cold, iron low",
      "Origin": "Crafted in Tirupur, India"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "An understated streetwear silhouette cut in an earthy desert sand tone. Clean drop shoulders with a soft brushed cotton touch.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Loom & Thread Studio",
      "rating": 4.8,
      "followers": "45.1k",
      "productsCount": 120,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-5-1",
        "userName": "Sneha Rao",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      },
      {
        "id": "rev-5-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 6,
    "title": "Pleated Relaxed Cotton Chinos",
    "category": "Pant",
    "subcategory": "Pleated Chinos",
    "price": 1799,
    "originalPrice": 3599,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 230,
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "98% Cotton Twill, 2% Elastane (290 GSM)",
      "Fit": "Double forward pleats, tapered ankle",
      "Closure": "Extended tab with horn button and YKK zip",
      "Pockets": "Dual slash side pockets & buttoned welt rear",
      "Care": "Machine wash 30°C, hang to dry"
    },
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "description": "Tailored double forward pleats bring generous room through the thigh before tapering cleanly to the hem. Ideal for both loafers and minimal trainers.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Savile Tailors & Loom",
      "rating": 4.7,
      "followers": "28.4k",
      "productsCount": 82,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-6-1",
        "userName": "Vikram Sen",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      },
      {
        "id": "rev-6-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 7,
    "title": "14oz Raw Selvedge Denim Jeans",
    "category": "Pant",
    "subcategory": "Selvedge Denim",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Shuttle-Loomed Selvedge Denim (14 oz)",
      "Fit": "Classic straight leg with medium rise",
      "ID": "Red-line selvedge ticker along outer seam",
      "Hardware": "Solid antique brass donut buttons & rivets",
      "Origin": "Woven in Surat Mills, India"
    },
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "Woven on vintage shuttle looms from deep indigo rope-dyed yarns. Unwashed rigid denim that gradually molds to your lifestyle and develops bespoke fades.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Savile Tailors & Loom",
      "rating": 4.7,
      "followers": "28.4k",
      "productsCount": 82,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-7-1",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 32
      },
      {
        "id": "rev-7-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 8,
    "title": "Pure Belgian Linen Drawstring Trousers",
    "category": "Pant",
    "subcategory": "Linen Trousers",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercent": 50,
    "rating": 4.6,
    "reviewsCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Breathable European Flax Linen",
      "Waist": "Elasticated waistband with braided rope drawstring",
      "Cut": "Relaxed resort drape",
      "Care": "Gentle cold cycle or hand wash",
      "Origin": "Jaipur Loom Studio"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Ultra-airy pure linen trousers tailored for warm climates and coastal getaways. Finished with an internal drawstring and clean slanted side pockets.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Savile Tailors & Loom",
      "rating": 4.7,
      "followers": "28.4k",
      "productsCount": 82,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-8-1",
        "userName": "Arjun Das",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      },
      {
        "id": "rev-8-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 9,
    "title": "Tactical Utility Ripstop Cargo Pants",
    "category": "Pant",
    "subcategory": "Cargo Pants",
    "price": 2199,
    "originalPrice": 4299,
    "discountPercent": 49,
    "rating": 4.7,
    "reviewsCount": 194,
    "images": [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Cotton Cross-Hatch Ripstop",
      "Pockets": "6 functional utility pockets with snap flaps",
      "Ankle": "Adjustable bungee cord cinch cuffs",
      "Care": "Machine wash warm, tumble dry normal"
    },
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "Engineered from hard-wearing tear-resistant ripstop cloth. Features ergonomic knee articulation and deep bellows pockets for modern utility.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Popular",
    "codAvailable": true,
    "supplier": {
      "name": "Savile Tailors & Loom",
      "rating": 4.7,
      "followers": "28.4k",
      "productsCount": 82,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-9-1",
        "userName": "Ananya Sharma",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      },
      {
        "id": "rev-9-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 10,
    "title": "Tailored Wool-Blend Smart Trousers",
    "category": "Pant",
    "subcategory": "Pleated Chinos",
    "price": 2299,
    "originalPrice": 4499,
    "discountPercent": 49,
    "rating": 4.8,
    "reviewsCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "65% Fine Wool, 33% Poly, 2% Spandex",
      "Cut": "Mid-rise, flat front, tailored slim profile",
      "Interior": "Cotton curtain waistband prevents shirt untuck",
      "Care": "Dry clean recommended"
    },
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "description": "A refined dress trouser crafted with wrinkle-recovery fabric. Features pressed front creases and concealed button tab closure for a sharp look.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Savile Tailors & Loom",
      "rating": 4.7,
      "followers": "28.4k",
      "productsCount": 82,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-10-1",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 16
      },
      {
        "id": "rev-10-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  },
  {
    "id": 11,
    "title": "Tiered Floral Bohemian Maxi Dress",
    "category": "Dress",
    "subcategory": "Boho Maxi",
    "price": 2299,
    "originalPrice": 4599,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 388,
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Breathable Viscose Georgette",
      "Lining": "Soft 100% Cotton Voile",
      "Length": "Floor-length maxi with flounced ruffle hem",
      "Closure": "Concealed side zipper & tassel neck ties",
      "Care": "Hand wash cold or gentle machine cycle"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "A romantic floor-sweeping silhouette tailored in fluid georgette with artisan floral prints. Features a smocked bodice and breezy tiered skirt.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Maison Silk & Chiffon",
      "rating": 4.9,
      "followers": "52.8k",
      "productsCount": 110,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-11-1",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 19
      },
      {
        "id": "rev-11-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 12,
    "title": "Ribbed Knit Oatmeal Midi Dress",
    "category": "Dress",
    "subcategory": "Knit Bodycon",
    "price": 1799,
    "originalPrice": 3599,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 204,
    "images": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "70% Viscose, 30% Stretch Spun Yarn",
      "Knit": "All-over variegated rib structure",
      "Neckline": "Elegant mock turtleneck with side slit",
      "Care": "Dry flat, cool hand wash"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Flattering body-skimming knit midi crafted with high-recovery stretch yarn. Features a cozy funnel neckline and side leg slit for easy movement.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Maison Silk & Chiffon",
      "rating": 4.9,
      "followers": "52.8k",
      "productsCount": 110,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-12-1",
        "userName": "Aditya K.",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 22
      },
      {
        "id": "rev-12-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 13,
    "title": "Pure Linen Belted Safari Shirt Dress",
    "category": "Dress",
    "subcategory": "Linen Shirt Dress",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 265,
    "images": [
      "/products/safari-shirt-dress-1.jpg",
      "/products/safari-shirt-dress-detail.jpg"
    ],
    "details": {
      "Material": "100% Normandy Washed Linen",
      "Belt": "Detachable self-fabric waist tie with D-rings",
      "Buttons": "Natural Mother-of-Pearl buttons",
      "Pockets": "Dual buttoned utility chest pockets",
      "Care": "Machine wash gentle cold, steam iron"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Effortlessly polished safari shirt dress loomed from natural washed linen. Cinch with the matching belt or wear open over separates as a lightweight duster.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Maison Silk & Chiffon",
      "rating": 4.9,
      "followers": "52.8k",
      "productsCount": 110,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-13-1",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      },
      {
        "id": "rev-13-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 14,
    "title": "Silk Charmeuse Bias Cut Evening Slip",
    "category": "Dress",
    "subcategory": "Evening Slip",
    "price": 2799,
    "originalPrice": 5499,
    "discountPercent": 49,
    "rating": 4.9,
    "reviewsCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Pure Mulberry Silk Charmeuse",
      "Cut": "Diagonal bias cut contours natural curves",
      "Straps": "Adjustable delicate rouleau straps",
      "Care": "Professional dry clean or hand wash delicate"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "description": "Cut on the bias to drape like liquid gold across the silhouette. Designed with a gentle cowl neckline and low-cut back for evening allure.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Premium",
    "codAvailable": true,
    "supplier": {
      "name": "Maison Silk & Chiffon",
      "rating": 4.9,
      "followers": "52.8k",
      "productsCount": 110,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-14-1",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 28
      },
      {
        "id": "rev-14-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 15,
    "title": "Smocked Cotton Cottagecore Sundress",
    "category": "Dress",
    "subcategory": "Boho Maxi",
    "price": 1599,
    "originalPrice": 3199,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 172,
    "images": [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Textured Cotton Poplin",
      "Bodice": "Shirred elasticated smocking",
      "Sleeves": "Elasticated puff sleeves with ruffle trim",
      "Care": "Machine wash cold, line dry"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Sun-drenched pastoral sundress with delicate puff sleeves and a flexible smocked bodice that adapts comfortably to your shape.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Maison Silk & Chiffon",
      "rating": 4.9,
      "followers": "52.8k",
      "productsCount": 110,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-15-1",
        "userName": "Ritu Nair",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 31
      },
      {
        "id": "rev-15-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 16,
    "title": "Light Brown Tailored Jacket",
    "category": "Jacket",
    "subcategory": "Female's Style",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercent": 50,
    "rating": 4.5,
    "reviewsCount": 248,
    "images": [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Premium Cotton & Wool Blend (340 GSM)",
      "Cut": "Relaxed tailored fit with notch lapels",
      "Closure": "Tortoiseshell horn buttons",
      "Lining": "100% Breathable Viscose Silk",
      "Care": "Dry Clean Only",
      "Origin": "Crafted in Jaipur Atelier"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "description": "A tailored outerwear piece built with lightweight wool blend, horn buttons, and functional pockets. Designed for transitional weather and versatile styling.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Atelier Outerwear Milano",
      "rating": 4.8,
      "followers": "38.2k",
      "productsCount": 94,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-16-1",
        "userName": "Arjun Das",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 34
      },
      {
        "id": "rev-16-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 17,
    "title": "Classic Tailored Wool Blazer",
    "category": "Jacket",
    "subcategory": "Tailored Blazers",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Italian Wool Loom Blend (380 GSM)",
      "Style": "Peak Lapel Single Breasted",
      "Pockets": "Two flap waist pockets & interior ticket pocket",
      "Care": "Specialist Dry Clean",
      "Origin": "Tailored in Delhi"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Precision cut tailored blazer made from structured wool-blend cloth. Designed with peak lapels, felt undercollar, and horn button closure for elevated smart styling.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Atelier Outerwear Milano",
      "rating": 4.8,
      "followers": "38.2k",
      "productsCount": 94,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-17-1",
        "userName": "Ananya Sharma",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 37
      },
      {
        "id": "rev-17-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 18,
    "title": "Suede Sherpa Lined Trucker Jacket",
    "category": "Jacket",
    "subcategory": "Sherpa Trucker",
    "price": 2799,
    "originalPrice": 5499,
    "discountPercent": 49,
    "rating": 4.8,
    "reviewsCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Soft Faux Suede Shell",
      "Insulation": "Plush High-Pile Sherpa Fleece Lining",
      "Hardware": "Heavy-duty antique brass buttons",
      "Care": "Wipe with damp cloth or gentle dry clean"
    },
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "A rugged winter essential featuring plush sherpa fleece lining inside a velvety soft suede body. Features twin chest flap pockets and adjustable waist tabs.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Atelier Outerwear Milano",
      "rating": 4.8,
      "followers": "38.2k",
      "productsCount": 94,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-18-1",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 15
      },
      {
        "id": "rev-18-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 19,
    "title": "Quilted Oversized Puffer Jacket",
    "category": "Jacket",
    "subcategory": "Quilted Puffer",
    "price": 2199,
    "originalPrice": 4299,
    "discountPercent": 48,
    "rating": 4.6,
    "reviewsCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Water-Repellent Matte Ripstop Shell",
      "Filling": "Thermore Thermal Eco-Down Insulation",
      "Hood": "Detachable padded storm hood",
      "Cuffs": "Storm-proof internal ribbed cuffs",
      "Care": "Machine wash cold gentle, tumble dry low with tennis balls"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Cloud-like warmth packaged in an oversized modern silhouette. Packed with recycled thermal insulation to keep you insulated in frigid weather.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Atelier Outerwear Milano",
      "rating": 4.8,
      "followers": "38.2k",
      "productsCount": 94,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-19-1",
        "userName": "Priya Patel",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 18
      },
      {
        "id": "rev-19-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  },
  {
    "id": 20,
    "title": "Heavyweight Vintage Denim Rider Jacket",
    "category": "Jacket",
    "subcategory": "Casual Outerwear",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Heavy Cotton Denim (13.5 oz)",
      "Hardware": "Antiqued copper shank buttons",
      "Finish": "Stone enzyme washed with subtle whiskering",
      "Care": "Machine wash cold inside out"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "An iconic rider cut built from 13.5 oz denim cloth. Features twin chest pockets, zig-zag placket stitching, and custom copper hardware.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Atelier Outerwear Milano",
      "rating": 4.8,
      "followers": "38.2k",
      "productsCount": 94,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-20-1",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      },
      {
        "id": "rev-20-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 21,
    "title": "Hand Block Printed Cotton Anarkali Set",
    "category": "Women's Wear",
    "subcategory": "Kurtas & Sets",
    "price": 2899,
    "originalPrice": 5799,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 340,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Fabric": "100% Mulmul Cotton with Natural Dyes",
      "SetIncludes": "Anarkali Kurta, Churidar & Chiffon Dupatta with Gota Patti",
      "Print": "Authentic Bagru Hand Block Print",
      "Care": "First wash dry clean, subsequently hand wash cold",
      "Origin": "Artisans of Bagru, Rajasthan"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Masterfully hand-block printed by generational artisans using carved wooden blocks. Includes flared Anarkali, matching bottoms, and border-finished dupatta.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Handcrafted",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Jaipur Handlooms",
      "rating": 4.9,
      "followers": "56.4k",
      "productsCount": 164,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-21-1",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 24
      },
      {
        "id": "rev-21-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 22,
    "title": "Pure Chanderi Silk Saree with Blouse",
    "category": "Women's Wear",
    "subcategory": "Sarees & Ethnic",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Fabric": "Pure Chanderi Cotton Silk (Zari Woven)",
      "Pallu": "Intricate gold zari meenakari border",
      "BlousePiece": "Includes unstitched 80cm matching blouse fabric",
      "Length": "5.5 meters + 0.8 meter blouse",
      "Care": "Dry Clean Only"
    },
    "sizes": [
      "Free Size"
    ],
    "description": "Featherlight Chanderi silk adorned with shimmering zari floral motifs along the pallu and border. A timeless heirloom piece for festive celebrations.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Jaipur Handlooms",
      "rating": 4.9,
      "followers": "56.4k",
      "productsCount": 164,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-22-1",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 27
      },
      {
        "id": "rev-22-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 23,
    "title": "Embroidered Chikankari Georgette Kurta",
    "category": "Women's Wear",
    "subcategory": "Kurtas & Sets",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 285,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Fabric": "Fluid Faux Georgette with Cotton Inner Slip",
      "Embroidery": "Bakhiya & Phanda Hand Chikankari with Mukaish Highlights",
      "Length": "Calf Length Straight Cut with Side Slits",
      "Care": "Gentle hand wash inside out",
      "Origin": "Lucknow Crafts Guild"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Intricately hand-embroidered by Lucknow craftswomen with traditional Bakhiya needlework and shimmering mukaish accents. Includes an ultra-soft inner slip.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Jaipur Handlooms",
      "rating": 4.9,
      "followers": "56.4k",
      "productsCount": 164,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-23-1",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 30
      },
      {
        "id": "rev-23-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 24,
    "title": "Printed Modal Silk Co-ord Set",
    "category": "Women's Wear",
    "subcategory": "Dresses & Jumpsuits",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 168,
    "images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Fabric": "100% Plant-Derived Modal Silk",
      "SetIncludes": "Notch collar buttoned tunic & wide-leg relaxed trousers",
      "Pockets": "Dual deep pockets on pants",
      "Care": "Machine wash cold gentle"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern elegance meets relaxed lounge luxury. Crafted from breathable modal silk that flows effortlessly from brunch to evening dinner parties.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Jaipur Handlooms",
      "rating": 4.9,
      "followers": "56.4k",
      "productsCount": 164,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-24-1",
        "userName": "Arjun Das",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 33
      },
      {
        "id": "rev-24-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 25,
    "title": "Handspun Khadi Asymmetric Tunic Top",
    "category": "Women's Wear",
    "subcategory": "Tops & Shirts",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercent": 50,
    "rating": 4.6,
    "reviewsCount": 140,
    "images": [
      "/products/khadi-tunic-brown-1.jpg",
      "/products/khadi-tunic-brown-detail.jpg"
    ],
    "details": {
      "Fabric": "100% Hand-Spun & Hand-Woven Khadi Cotton",
      "Cut": "High-low asymmetric handkerchief hemline",
      "Buttons": "Handmade coconut shell buttons",
      "Care": "Hand wash with mild eco-detergent"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Breathable handspun khadi tunic with artisanal coconut buttons and an architectural high-low hemline. Softens beautifully with each wash.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Sustainable",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Jaipur Handlooms",
      "rating": 4.9,
      "followers": "56.4k",
      "productsCount": 164,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-25-1",
        "userName": "Ananya Sharma",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 36
      },
      {
        "id": "rev-25-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 26,
    "title": "Classic Oxford Cotton Button-Down Shirt",
    "category": "Men's Wear",
    "subcategory": "Casual Shirts",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 360,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Heavy Oxford Cotton Basketweave (190 GSM)",
      "Collar": "Classic 3-finger button-down collar with roll",
      "Buttons": "Genuine trocas shell buttons",
      "Care": "Machine wash warm, iron while damp",
      "Origin": "Tailored in Bengaluru, India"
    },
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "description": "A perennial menswear staple loomed from heavy basketweave Oxford cloth. Designed with a perfect collar roll, box pleat, and locker loop.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Apex Urban Loom",
      "rating": 4.7,
      "followers": "32.5k",
      "productsCount": 128,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-26-1",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      },
      {
        "id": "rev-26-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 27,
    "title": "Pure Linen Mandarin Collar Kurta Shirt",
    "category": "Men's Wear",
    "subcategory": "Casual Shirts",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 290,
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% European Flax Linen (60s count)",
      "Collar": "Structured bandhgala mandarin band",
      "Placket": "Concealed 4-button french placket",
      "Care": "Hand wash or gentle machine cold"
    },
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "description": "Crisp yet breathable linen tailored with a modern mandarin collar and clean concealed placket. Perfect for festive celebrations or smart-casual evenings.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Apex Urban Loom",
      "rating": 4.7,
      "followers": "32.5k",
      "productsCount": 128,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-27-1",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 17
      },
      {
        "id": "rev-27-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 28,
    "title": "Merino Wool Cable Knit Jumper",
    "category": "Men's Wear",
    "subcategory": "Knit Sweaters",
    "price": 2799,
    "originalPrice": 5499,
    "discountPercent": 49,
    "rating": 4.8,
    "reviewsCount": 175,
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Extra-Fine Australian Merino Wool",
      "Knit": "Heritage fisherman honeycomb and rope cables",
      "Trim": "Chunky 2x2 ribbed collar, cuffs and hem",
      "Care": "Hand wash cold with wool wash, dry flat"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Dense, supremely soft merino wool knit featuring traditional Aran cable patterns. Delivers rich warmth without bulk or itchiness.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Premium",
    "codAvailable": true,
    "supplier": {
      "name": "Apex Urban Loom",
      "rating": 4.7,
      "followers": "32.5k",
      "productsCount": 128,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-28-1",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      },
      {
        "id": "rev-28-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  },
  {
    "id": 29,
    "title": "Cuban Camp Collar Vacation Shirt",
    "category": "Men's Wear",
    "subcategory": "Casual Shirts",
    "price": 1299,
    "originalPrice": 2599,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Silky Tencel Lyocell",
      "Collar": "Vintage revere camp collar",
      "Hem": "Straight square hem with side notches",
      "Care": "Machine wash cold, line dry in shade"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Relaxed vacation shirt spun from silky draped Tencel. Styled with a retro notched camp collar and side hem vents for an effortless drape.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Apex Urban Loom",
      "rating": 4.7,
      "followers": "32.5k",
      "productsCount": 128,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-29-1",
        "userName": "Sneha Rao",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      },
      {
        "id": "rev-29-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 30,
    "title": "Heavyweight French Terry Zip Hoodie",
    "category": "Men's Wear",
    "subcategory": "Heavyweight Tees",
    "price": 2299,
    "originalPrice": 4599,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 280,
    "images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Combed Cotton Loopback French Terry (420 GSM)",
      "Hardware": "Heavy-gauge two-way YKK matte silver zipper",
      "Hood": "Double-layered structured hood with braided cords",
      "Care": "Machine wash cold, lay flat to dry"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "A fortress of comfort built with heavyweight 420 GSM loopback cotton. Features two-way YKK hardware, rib side panels, and seamless cuffs.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Popular",
    "codAvailable": true,
    "supplier": {
      "name": "Apex Urban Loom",
      "rating": 4.7,
      "followers": "32.5k",
      "productsCount": 128,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-30-1",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      },
      {
        "id": "rev-30-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 31,
    "title": "Minimalist Italian Leather Court Sneakers",
    "category": "Footwear",
    "subcategory": "Court Sneakers",
    "price": 2699,
    "originalPrice": 5399,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 276,
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Upper": "Full-Grain Italian Calfskin Leather",
      "Sole": "Margom-style vulcanized rubber cupsole",
      "Footbed": "Ergonomic memory foam lined with calfskin",
      "Care": "Wipe clean with damp cloth, condition leather",
      "Origin": "Handcrafted in Agra, India"
    },
    "sizes": [
      "EU 40",
      "EU 41",
      "EU 42",
      "EU 43",
      "EU 44",
      "EU 45"
    ],
    "description": "A stripped-back luxury essential crafted from buttery calfskin leather. Stitched to a durable rubber cupsole with cushioned memory foam arch support.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Stride Craftsman Co.",
      "rating": 4.8,
      "followers": "31.2k",
      "productsCount": 64,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-31-1",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 29
      },
      {
        "id": "rev-31-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 32,
    "title": "Handcrafted Suede Penny Loafers",
    "category": "Footwear",
    "subcategory": "Penny Loafers",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Upper": "Hand-Burnished Reverse Calf Suede",
      "Construction": "Blake stitched flexible leather sole",
      "Strap": "Classic penny keeper strap detail",
      "Care": "Brush with brass suede brush, apply protector spray"
    },
    "sizes": [
      "EU 40",
      "EU 41",
      "EU 42",
      "EU 43",
      "EU 44"
    ],
    "description": "Sleek slip-on loafers handcrafted from supple reverse suede. Finished with genuine Blake stitch sole construction for maximum flex and durability.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Stride Craftsman Co.",
      "rating": 4.8,
      "followers": "31.2k",
      "productsCount": 64,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-32-1",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      },
      {
        "id": "rev-32-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 33,
    "title": "Classic Chelsea Boots with Crepe Sole",
    "category": "Footwear",
    "subcategory": "Chelsea Boots",
    "price": 3999,
    "originalPrice": 7999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 182,
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Upper": "Water-Resistant Oiled Nubuck Leather",
      "Sole": "100% Natural plantation crepe rubber",
      "Gores": "Heavy elastic side panels & woven pull tabs",
      "Care": "Treat with waterproof nubuck balm"
    },
    "sizes": [
      "EU 40",
      "EU 41",
      "EU 42",
      "EU 43",
      "EU 44"
    ],
    "description": "Timeless Chelsea silhouette constructed with rugged oiled nubuck and springy natural plantation crepe soles that cushion every step.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Stride Craftsman Co.",
      "rating": 4.8,
      "followers": "31.2k",
      "productsCount": 64,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-33-1",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      },
      {
        "id": "rev-33-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 34,
    "title": "Lightweight Engineered Running Trainers",
    "category": "Footwear",
    "subcategory": "Running Trainers",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Upper": "Seamless jacquard knit engineered mesh",
      "Midsole": "High-rebound nitrogen-infused EVA foam",
      "Drop": "8mm heel-to-toe offset for natural gait",
      "Weight": "220 grams (featherlight)"
    },
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "description": "Engineered for 10k road runs and high-tempo treadmill workouts. Features breathable woven mesh and energy-returning responsive cushioning.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Stride Craftsman Co.",
      "rating": 4.8,
      "followers": "31.2k",
      "productsCount": 64,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-34-1",
        "userName": "Rahul V.",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      },
      {
        "id": "rev-34-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 35,
    "title": "Vintage Low-Top Canvas Skate Shoes",
    "category": "Footwear",
    "subcategory": "Court Sneakers",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercent": 50,
    "rating": 4.6,
    "reviewsCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Upper": "Heavy 12oz washed cotton canvas",
      "Sole": "Waffle-pattern gum rubber outsole with foxing tape",
      "Collar": "Padded ankle collar for support",
      "Care": "Spot clean with gentle sneaker cleanser"
    },
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "description": "Old-school court canvas sneaker with thick vulcanized foxing and grippy gum waffle tread. Effortless pairing with chinos, shorts, or raw denim.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Popular",
    "codAvailable": true,
    "supplier": {
      "name": "Stride Craftsman Co.",
      "rating": 4.8,
      "followers": "31.2k",
      "productsCount": 64,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-35-1",
        "userName": "Priya Patel",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 16
      },
      {
        "id": "rev-35-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 36,
    "title": "Full-Grain Leather Commuter Messenger Bag",
    "category": "Accessories",
    "subcategory": "Messenger Bags",
    "price": 3299,
    "originalPrice": 6599,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Leather": "Full-grain vegetable tanned buffalo hide",
      "LaptopCompartment": "Padded sleeve fits up to 16\" MacBook Pro",
      "Hardware": "Solid cast antique brass buckles & YKK zippers",
      "Strap": "Adjustable 2\" leather strap with padded shoulder rest",
      "Origin": "Handmade in Kanpur, India"
    },
    "sizes": [
      "One Size"
    ],
    "description": "Built for daily urban commutes and cross-country flights. Features structured compartments, dedicated tablet slot, and thick vegetable-tanned leather that patinas richly over time.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Staff Pick",
    "codAvailable": true,
    "supplier": {
      "name": "Verve Goods Atelier",
      "rating": 4.6,
      "followers": "18.9k",
      "productsCount": 92,
      "verified": true,
      "dispatchRate": "96% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-36-1",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      },
      {
        "id": "rev-36-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 37,
    "title": "Polarized Hand-Polished Acetate Sunglasses",
    "category": "Accessories",
    "subcategory": "Polarized Eyewear",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Frame": "Handmade cellulose acetate with wire core temples",
      "Lenses": "TAC polarized lenses with UV400 full protection",
      "Hinges": "5-barrel riveted steel hinges",
      "Case": "Includes protective hard shell & microfiber cloth"
    },
    "sizes": [
      "One Size"
    ],
    "description": "Sculpted from hypoallergenic Italian acetate in a classic tortoiseshell colorway. Fitted with glare-cutting polarized UV400 lenses for crystal-clear optics.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Verve Goods Atelier",
      "rating": 4.6,
      "followers": "18.9k",
      "productsCount": 92,
      "verified": true,
      "dispatchRate": "96% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-37-1",
        "userName": "Sneha Rao",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 22
      },
      {
        "id": "rev-37-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  },
  {
    "id": 38,
    "title": "Minimalist RFID Slim Bi-Fold Wallet",
    "category": "Accessories",
    "subcategory": "Slim Wallets",
    "price": 999,
    "originalPrice": 1999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 420,
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Top-grain cowhide leather",
      "Capacity": "Holds 8-10 cards plus full-length cash slot",
      "Security": "Certified RFID blocking lining prevents scanning",
      "Dimensions": "Slim 0.35\" profile fits comfortably in front pocket"
    },
    "sizes": [
      "Standard"
    ],
    "description": "An ultra-thin everyday carry wallet engineered with RFID shielding to safeguard your payment cards. Features bevelled card slots for quick thumb access.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Verve Goods Atelier",
      "rating": 4.6,
      "followers": "18.9k",
      "productsCount": 92,
      "verified": true,
      "dispatchRate": "96% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-38-1",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      },
      {
        "id": "rev-38-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 39,
    "title": "Sapphire Crystal Bauhaus Minimalist Watch",
    "category": "Accessories",
    "subcategory": "Minimalist Watches",
    "price": 4299,
    "originalPrice": 8599,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 154,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Case": "38mm 316L Surgical Grade Stainless Steel",
      "Crystal": "Anti-reflective scratch-proof Sapphire crystal",
      "Movement": "Miyota Japanese quartz 3-hand with date display",
      "WaterResistance": "5 ATM (50 meters swim-safe)",
      "Strap": "Italian quick-release vegetable tanned leather"
    },
    "sizes": [
      "38mm Dial"
    ],
    "description": "Inspired by modernist Bauhaus design philosophy. Boasts a surgical stainless steel case, ultra-scratch-resistant sapphire glass, and a clean white dial.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Verve Goods Atelier",
      "rating": 4.6,
      "followers": "18.9k",
      "productsCount": 92,
      "verified": true,
      "dispatchRate": "96% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-39-1",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 28
      },
      {
        "id": "rev-39-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 40,
    "title": "Heavy Waxed Canvas Weekend Duffle",
    "category": "Accessories",
    "subcategory": "Messenger Bags",
    "price": 2799,
    "originalPrice": 5599,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 190,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "18oz Martexin Original Waxed Cotton Duck",
      "LeatherTrim": "Thick saddle leather handles and luggage tag",
      "Volume": "42 Liters (airline carry-on compliant)",
      "Base": "Reinforced waterproof bottom with brass studs"
    },
    "sizes": [
      "42L"
    ],
    "description": "Rugged 42-liter overnight travel companion made from weatherproof waxed canvas. Designed with interior shoe compartments and robust brass zippers.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Verve Goods Atelier",
      "rating": 4.6,
      "followers": "18.9k",
      "productsCount": 92,
      "verified": true,
      "dispatchRate": "96% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-40-1",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 31
      },
      {
        "id": "rev-40-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 41,
    "title": "Artisan Ceramic Pour-Over Coffee Set",
    "category": "Home & Living",
    "subcategory": "Pour-Over Sets",
    "price": 1599,
    "originalPrice": 3199,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "High-fire stoneware ceramic with reactive glaze",
      "Capacity": "600ml server jug (yields 2-3 cups)",
      "FilterCompatibility": "Fits standard cone size 02 filters",
      "Care": "Microwave and dishwasher safe",
      "Origin": "Khurja Pottery Cluster, India"
    },
    "sizes": [
      "600ml Set"
    ],
    "description": "Wheel-thrown ceramic dripper and matching glass pitcher set with internal spiral extraction ribs for a sweet, clean coffee brew every morning.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Handcrafted",
    "codAvailable": true,
    "supplier": {
      "name": "Nordic Living Essentials",
      "rating": 4.8,
      "followers": "14.3k",
      "productsCount": 76,
      "verified": true,
      "dispatchRate": "97% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-41-1",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 34
      },
      {
        "id": "rev-41-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 42,
    "title": "100% Belgian Washed Linen Duvet Cover Set",
    "category": "Home & Living",
    "subcategory": "Linen Bedding",
    "price": 3899,
    "originalPrice": 7799,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 245,
    "images": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% Certified European Flax Linen (170 GSM)",
      "Includes": "1 Duvet Cover with button closure + 2 Pillow Shams",
      "Feel": "Pre-washed for extraordinary softness from day one",
      "Care": "Machine wash warm, tumble dry gentle low"
    },
    "sizes": [
      "Queen (90x90\")",
      "King (104x90\")"
    ],
    "description": "Naturally temperature-regulating linen that stays cool in summer and cozy in winter. Gets softer and more sumptuous with every cycle through the wash.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Nordic Living Essentials",
      "rating": 4.8,
      "followers": "14.3k",
      "productsCount": 76,
      "verified": true,
      "dispatchRate": "97% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-42-1",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 37
      },
      {
        "id": "rev-42-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 43,
    "title": "Hand-Poured Amber & Oud Wood Soy Candle",
    "category": "Home & Living",
    "subcategory": "Scented Candles",
    "price": 899,
    "originalPrice": 1799,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 312,
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Wax": "100% Natural Soy & Coconut Wax Blend (No Paraffin)",
      "Wick": "Crackling FSC-certified natural wooden wick",
      "BurnTime": "55+ hours clean burn",
      "FragranceNotes": "Smoked oud, warm amber resin, Madagascar vanilla",
      "Vessel": "Reusable matte amber glass jar with cork lid"
    },
    "sizes": [
      "280g / 10oz"
    ],
    "description": "Hand-poured in small batches using clean-burning botanical soy wax and crackling wood wicks. Fills your home with notes of smoky resin and warm vanilla.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Nordic Living Essentials",
      "rating": 4.8,
      "followers": "14.3k",
      "productsCount": 76,
      "verified": true,
      "dispatchRate": "97% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-43-1",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 15
      },
      {
        "id": "rev-43-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 44,
    "title": "Artisan Stoneware Dinner Plates (Set of 4)",
    "category": "Home & Living",
    "subcategory": "Artisan Ceramics",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 162,
    "images": [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "Kiln-fired durable stoneware with raw clay edge",
      "Glaze": "Food-safe satin matte oatmeal glaze",
      "Dimensions": "10.5\" Diameter per dinner plate",
      "Durability": "Chip-resistant, oven safe up to 220°C"
    },
    "sizes": [
      "Set of 4 Plates"
    ],
    "description": "Organic lip rims with an earthy speckled matte glaze. Handcrafted by ceramic masters to elevate everyday weeknight dinners into dining events.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Nordic Living Essentials",
      "rating": 4.8,
      "followers": "14.3k",
      "productsCount": 76,
      "verified": true,
      "dispatchRate": "97% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-44-1",
        "userName": "Aditya K.",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 18
      },
      {
        "id": "rev-44-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 45,
    "title": "Chunky Waffle Knit Organic Throw Blanket",
    "category": "Home & Living",
    "subcategory": "Linen Bedding",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Material": "100% GOTS-Certified Organic Long-Staple Cotton",
      "Weave": "Three-dimensional dimensional deep honeycomb waffle",
      "Dimensions": "50\" x 70\" (Large lounge wrap)",
      "Care": "Machine wash cold delicate, air fluff"
    },
    "sizes": [
      "50x70 Inches"
    ],
    "description": "Deep dimensional waffle weave that traps pockets of warmth while feeling light and breathable on sofas, beds, or reading nooks.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Nordic Living Essentials",
      "rating": 4.8,
      "followers": "14.3k",
      "productsCount": 76,
      "verified": true,
      "dispatchRate": "97% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-45-1",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      },
      {
        "id": "rev-45-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 46,
    "title": "Act+Acre Cold-Processed Restorative Hair Mask",
    "category": "Beauty & Wellness",
    "subcategory": "Hair Care & Masks",
    "price": 1299,
    "originalPrice": 2599,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 380,
    "images": [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Packaging": "133ml (4.5 FL. oz) Aluminum Squeeze Tube & Box",
      "HairType": "All hair types — dry, damaged, colored or heat-stressed hair",
      "KeyIngredients": "Castor Oil, Biomimetic Plant Peptides & Shea Butter",
      "Benefits": "Rebuilds keratin bonds, restores deep hydration & silky softness",
      "Usage": "Apply weekly to clean damp hair from mid-lengths to ends, leave 10-15 mins, rinse",
      "CleanFormula": "Cold-processed, vegan, silicone-free & sulfate-free"
    },
    "sizes": [
      "133ml Tube (4.5 fl. oz)",
      "Travel Size 60ml",
      "Salon Tub 250ml"
    ],
    "description": "Clean, cold-processed deeply restorative hair mask formulated to hydrate, repair, and revitalize dry, damaged hair from root to tip. Enriched with botanical oils and plant proteins without silicones or synthetic fragrances.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Clean Beauty",
    "codAvailable": true,
    "supplier": {
      "name": "Act+Acre Botanical Lab",
      "rating": 4.9,
      "followers": "42.8k",
      "productsCount": 36,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-46-1",
        "userName": "Rhea Kapoor",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "This restorative hair mask brought my bleach-damaged ends back to life! Leaves hair incredibly soft and smooth without feeling greasy or weighed down.",
        "verifiedPurchase": true,
        "helpfulCount": 42
      },
      {
        "id": "rev-46-2",
        "userName": "Meera Nambiar",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Authentic cold-processed formulation with no silicones. The 133ml tube lasts months and makes hair feel like a salon treatment at home.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": 47,
    "title": "10% Niacinamide & Zinc Clarifying Serum",
    "category": "Beauty & Wellness",
    "subcategory": "Organic Skincare",
    "price": 799,
    "originalPrice": 1599,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 420,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Formula": "10% Pure Vitamin B3 (Niacinamide) + 1% Zinc PCA",
      "Benefits": "Minimizes enlarged pores, regulates sebum, reduces redness",
      "FreeOf": "Fragrance-free, paraben-free, non-comedogenic",
      "Volume": "50ml"
    },
    "sizes": [
      "50ml"
    ],
    "description": "A high-strength vitamin and mineral blemish formula. Combines 10% niacinamide with zinc PCA to balance visible sebum activity and refine skin texture.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Botanica Lab Organics",
      "rating": 4.9,
      "followers": "27.6k",
      "productsCount": 88,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-47-1",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 27
      },
      {
        "id": "rev-47-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": 48,
    "title": "Cold-Pressed Sweet Almond Body Soufflé",
    "category": "Beauty & Wellness",
    "subcategory": "Body Care",
    "price": 699,
    "originalPrice": 1399,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "KeyIngredients": "Raw Shea Butter, Cold-Pressed Sweet Almond Oil & Vitamin E",
      "Texture": "Whipped cloud-like soufflé absorbs instantly",
      "Scent": "Subtle natural vanilla almond blossom",
      "NetWeight": "200 grams tub"
    },
    "sizes": [
      "200g"
    ],
    "description": "Whipped to an airy mousse texture that melts effortlessly into dry skin. Delivers 48-hour deep barrier hydration without any greasy residue.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Botanica Lab Organics",
      "rating": 4.9,
      "followers": "27.6k",
      "productsCount": 88,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-48-1",
        "userName": "Arjun Das",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 30
      },
      {
        "id": "rev-48-2",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 13
      }
    ]
  },
  {
    "id": 49,
    "title": "Broad Spectrum Mineral Zinc Sunscreen SPF 50",
    "category": "Beauty & Wellness",
    "subcategory": "Organic Skincare",
    "price": 849,
    "originalPrice": 1699,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 260,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Protection": "SPF 50+ PA++++ Broad Spectrum UVA/UVB",
      "Filters": "100% Non-Nano Zinc Oxide (Physical Sunblock)",
      "Finish": "Matte invisible dry-touch with zero white cast",
      "WaterResistance": "80 minutes sweat and water resistant"
    },
    "sizes": [
      "75ml Tube"
    ],
    "description": "Ultralight daily physical sun cream formulated with non-nano zinc oxide. Blends into an invisible matte shield that protects without clogging pores.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Botanica Lab Organics",
      "rating": 4.9,
      "followers": "27.6k",
      "productsCount": 88,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-49-1",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 33
      },
      {
        "id": "rev-49-2",
        "userName": "Aditya K.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 15
      }
    ]
  },
  {
    "id": 50,
    "title": "Steam-Distilled Pure Kannauj Rose Water Mist",
    "category": "Beauty & Wellness",
    "subcategory": "Facial Oils",
    "price": 549,
    "originalPrice": 1099,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Source": "100% Pure Hydro-Distilled Rose Petals (Rosa Damascena)",
      "Process": "Traditional copper deg-bhapka distillation in Kannauj",
      "Benefits": "Restores pH balance, tightens pores, calms irritation",
      "Packaging": "Fine micro-mist glass spray bottle"
    },
    "sizes": [
      "120ml Mist"
    ],
    "description": "Distilled from fresh desi damask roses picked at daybreak in the perfume capital of Kannauj. A refreshing spritz that restores moisture and tones the skin.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Botanica Lab Organics",
      "rating": 4.9,
      "followers": "27.6k",
      "productsCount": 88,
      "verified": true,
      "dispatchRate": "98% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-50-1",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 36
      },
      {
        "id": "rev-50-2",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": 51,
    "title": "Hybrid Active Noise-Cancelling Headphones",
    "category": "Tech & Audio",
    "subcategory": "ANC Headphones",
    "price": 3999,
    "originalPrice": 7999,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 340,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "ANC": "40dB Hybrid Active Noise Cancellation with Transparency Mode",
      "Battery": "60 hours playback (45 hours with ANC engaged)",
      "Drivers": "Custom 40mm silk-diaphragm neodymium dynamic drivers",
      "Connectivity": "Bluetooth 5.3 + Multipoint connection to 2 devices",
      "Charging": "Fast USB-C charge (5 mins = 4 hours audio)"
    },
    "sizes": [
      "Matte Black",
      "Warm Cream"
    ],
    "description": "Immerse yourself in hi-res studio sound without office chatter or aircraft roar. Features memory foam earcups and 60 hours of continuous wireless stamina.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Acoustics & Docks",
      "rating": 4.7,
      "followers": "42.1k",
      "productsCount": 154,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-51-1",
        "userName": "Priya Patel",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 14
      },
      {
        "id": "rev-51-2",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": 52,
    "title": "3-in-1 Fast Magnetic Wireless Charging Station",
    "category": "Tech & Audio",
    "subcategory": "Wireless Chargers",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 228,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Outputs": "15W MagSafe Phone stand + 5W Smartwatch puck + 5W Earbuds pad",
      "Material": "Aerospace aluminum alloy body with weighted anti-slip base",
      "Safety": "FOD foreign object detection, surge & over-temp protection",
      "Included": "Includes 30W USB-C GaN power adapter & braided cable"
    },
    "sizes": [
      "Space Grey"
    ],
    "description": "Declutter your nightstand with a sculptured aluminum dock that fast-charges your smartphone, smartwatch, and wireless earbuds concurrently.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Bestseller",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Acoustics & Docks",
      "rating": 4.7,
      "followers": "42.1k",
      "productsCount": 154,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-52-1",
        "userName": "Aditya K.",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      },
      {
        "id": "rev-52-2",
        "userName": "Ritu Nair",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": 53,
    "title": "360° Waterproof Rugged Outdoor Bluetooth Speaker",
    "category": "Tech & Audio",
    "subcategory": "Bluetooth Speakers",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercent": 50,
    "rating": 4.8,
    "reviewsCount": 295,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "WaterproofRating": "IP67 Submersible waterproof & dustproof (floats in pool)",
      "OutputPower": "24W RMS stereo with dual passive bass radiators",
      "BatteryLife": "20 hours uninterrupted battery on single charge",
      "Range": "Bluetooth 5.2 up to 100 feet wireless range"
    },
    "sizes": [
      "Midnight Black",
      "Forest Moss"
    ],
    "description": "Room-filling 360-degree acoustic bass punch in a virtually indestructible IP67 floating chassis. Ready for beach trips, pool parties, or campsite bonfires.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Flash Sale",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Acoustics & Docks",
      "rating": 4.7,
      "followers": "42.1k",
      "productsCount": 154,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-53-1",
        "userName": "Sneha Rao",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      },
      {
        "id": "rev-53-2",
        "userName": "Arjun Das",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": 54,
    "title": "Retro 75% Compact Wireless Mechanical Keyboard",
    "category": "Tech & Audio",
    "subcategory": "Cables & Docks",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercent": 50,
    "rating": 4.9,
    "reviewsCount": 185,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "Switches": "Hot-swappable factory lubed Gateron Yellow Linear switches",
      "Keycaps": "Dye-sublimated PBT keycaps with MDA profile",
      "Connectivity": "Tri-mode: Bluetooth 5.0, 2.4GHz wireless dongle, USB-C wired",
      "Battery": "4000mAh rechargeable lithium cell (up to 200 hours)"
    },
    "sizes": [
      "Warm Cream / Mocha Keycaps"
    ],
    "description": "Thocky, satisfying mechanical key feel equipped with sound-dampening silicone gaskets and hot-swappable switches for seamless Mac and Windows typing.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Trending",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Acoustics & Docks",
      "rating": 4.7,
      "followers": "42.1k",
      "productsCount": 154,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-54-1",
        "userName": "Vikram Sen",
        "rating": 5,
        "date": "14 Oct 2026",
        "comment": "Super comfortable, perfect sizing, and looks exactly like the photos. 10/10 recommendation.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      },
      {
        "id": "rev-54-2",
        "userName": "Ananya Sharma",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Great attention to detail! Fits like a bespoke garment. Highly pleased with this purchase.",
        "verifiedPurchase": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": 55,
    "title": "Ultra-Durable Braided USB-C 100W Fast Cable Kit",
    "category": "Tech & Audio",
    "subcategory": "Cables & Docks",
    "price": 799,
    "originalPrice": 1599,
    "discountPercent": 50,
    "rating": 4.7,
    "reviewsCount": 410,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "details": {
      "PowerDelivery": "100W (20V/5A) Power Delivery 3.0 E-Marker certified",
      "Durability": "40,000+ bend tested with ballistic nylon jacket",
      "DataTransfer": "High speed 480 Mbps sync",
      "KitIncludes": "2 Cables: 1x 1.2m daily carry + 1x 2.0m bedside length"
    },
    "sizes": [
      "2-Pack (1.2m + 2.0m)"
    ],
    "description": "Reinforced with bulletproof aramid fiber and heavy double-braided nylon. Delivers blazing fast 100W charging for laptops, tablets, and smartphones.",
    "inStock": true,
    "fastDelivery": true,
    "badge": "Essential",
    "codAvailable": true,
    "supplier": {
      "name": "Aura Acoustics & Docks",
      "rating": 4.7,
      "followers": "42.1k",
      "productsCount": 154,
      "verified": true,
      "dispatchRate": "99% dispatched within 24h"
    },
    "reviews": [
      {
        "id": "rev-55-1",
        "userName": "Ritu Nair",
        "rating": 4,
        "date": "14 Oct 2026",
        "comment": "Fabric feels luxurious and premium. The packaging was eco-friendly and neat. Will order again!",
        "verifiedPurchase": true,
        "helpfulCount": 26
      },
      {
        "id": "rev-55-2",
        "userName": "Rahul V.",
        "rating": 5,
        "date": "02 Oct 2026",
        "comment": "Exceptional craftsmanship and the material quality exceeded my expectations! Delivered in 2 days.",
        "verifiedPurchase": true,
        "helpfulCount": 9
      }
    ]
  }
];
