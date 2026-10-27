import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import {
  User,
  Package,
  Heart,
  MapPin,
  ShieldCheck,
  Bell,
  Check,
  ChevronRight,
  Edit2,
  Plus,
  Trash2,
  CreditCard,
  LogOut,
  Mail,
  Phone,
  Calendar,
  Award,
} from "lucide-react";
import type { ShippingAddress } from "../types";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}

interface SavedAddressItem extends ShippingAddress {
  id: string;
  tag: "Home" | "Work" | "Other";
  isDefault: boolean;
}

const STORAGE_KEY_PROFILE = "eshop_user_profile";
const STORAGE_KEY_ADDRESSES = "eshop_user_addresses";

const DEFAULT_PROFILE: UserProfile = {
  fullName: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "9000000000",
  gender: "Female",
  dateOfBirth: "1996-08-14",
};

const DEFAULT_ADDRESSES: SavedAddressItem[] = [
  {
    id: "addr-1",
    tag: "Home",
    fullName: "Priya Sharma",
    phone: "9000000000",
    pincode: "682001",
    street: "Villa 12, Marine Drive",
    city: "Kochi",
    state: "Kerala",
    landmark: "Near High Court Junction",
    isDefault: true,
  },
  {
    id: "addr-2",
    tag: "Work",
    fullName: "Priya Sharma",
    phone: "9000000000",
    pincode: "682030",
    street: "Tower B, 4th Floor, Infopark Phase 1, Kakkanad",
    city: "Kochi",
    state: "Kerala",
    landmark: "Opposite Rajagiri Valley",
    isDefault: false,
  },
];

export function ProfilePage() {
  const { orders, wishlist, showToast, addToCart, cancelOrder } = useCart();
  const navigate = useNavigate();

  // Active Tab
  const [activeTab, setActiveTab] = useState<"profile" | "addresses" | "orders" | "settings">("profile");

  // User Profile State with automatic migration from old demo number
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.phone === "9876543210") {
          parsed.phone = "9000000000";
          localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(parsed));
        }
        return parsed;
      }
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [editForm, setEditForm] = useState<UserProfile>(profile);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);

  // Saved Addresses State with automatic migration from old demo number
  const [addresses, setAddresses] = useState<SavedAddressItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ADDRESSES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const updated = parsed.map((a: SavedAddressItem) =>
            a.phone === "9876543210" ? { ...a, phone: "9000000000" } : a
          );
          localStorage.setItem(STORAGE_KEY_ADDRESSES, JSON.stringify(updated));
          return updated;
        }
      }
      return DEFAULT_ADDRESSES;
    } catch {
      return DEFAULT_ADDRESSES;
    }
  });

  const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<Omit<SavedAddressItem, "id">>({
    tag: "Home",
    fullName: profile.fullName,
    phone: profile.phone,
    pincode: "",
    street: "",
    city: "",
    state: "",
    landmark: "",
    isDefault: false,
  });

  // Notification Preferences
  const [notifications, setNotifications] = useState({
    whatsappUpdates: true,
    smsAlerts: true,
    promoEmails: false,
  });

  // Calculate total savings across all orders
  const totalSavings = orders.reduce((acc, order) => acc + (order.discountSavings || 0), 0);

  // Save profile edits
  const handleSaveProfile = (e: FormEvent) => {
    e.preventDefault();
    setProfile(editForm);
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(editForm));
    setIsEditingProfile(false);
    showToast("Profile details updated successfully!");
  };

  // Add new address
  const handleAddAddress = (e: FormEvent) => {
    e.preventDefault();
    if (!newAddress.fullName || !newAddress.phone || !newAddress.pincode || !newAddress.street) {
      showToast("Please fill all required address fields.");
      return;
    }

    const created: SavedAddressItem = {
      ...newAddress,
      id: `addr-${Date.now()}`,
    };

    let updated = [...addresses];
    if (created.isDefault || updated.length === 0) {
      updated = updated.map((a) => ({ ...a, isDefault: false }));
      created.isDefault = true;
    }
    updated.push(created);

    setAddresses(updated);
    localStorage.setItem(STORAGE_KEY_ADDRESSES, JSON.stringify(updated));
    setIsAddingAddress(false);
    setNewAddress({
      tag: "Home",
      fullName: profile.fullName,
      phone: profile.phone,
      pincode: "",
      street: "",
      city: "",
      state: "",
      landmark: "",
      isDefault: false,
    });
    showToast("New address added successfully!");
  };

  // Set default address
  const handleSetDefaultAddress = (id: string) => {
    const updated = addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    setAddresses(updated);
    localStorage.setItem(STORAGE_KEY_ADDRESSES, JSON.stringify(updated));
    showToast("Default address updated!");
  };

  // Delete address
  const handleDeleteAddress = (id: string) => {
    if (addresses.length <= 1) {
      showToast("You must keep at least one delivery address.");
      return;
    }
    const updated = addresses.filter((a) => a.id !== id);
    if (!updated.some((a) => a.isDefault) && updated.length > 0) {
      updated[0].isDefault = true;
    }
    setAddresses(updated);
    localStorage.setItem(STORAGE_KEY_ADDRESSES, JSON.stringify(updated));
    showToast("Address deleted.");
  };

  // User initials
  const initials = profile.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24 pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-slate-900 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">My Profile</span>
        </div>

        {/* Profile Hero Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-slate-900/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left: Avatar & Identity */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-xl sm:text-2xl font-black text-white shadow-md">
                {initials}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    {profile.fullName}
                  </h1>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    <ShieldCheck size={12} className="text-emerald-600" />
                    Valued Member
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Mail size={12} className="text-slate-400" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={12} className="text-slate-400" />
                    +91 {profile.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-100 pt-4 md:border-t-0 md:pt-0">
              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-slate-200 hover:bg-slate-100/70"
              >
                <span className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-600 transition">
                  {orders.length}
                </span>
                <span className="text-[11px] font-medium text-slate-500">Orders</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/wishlist")}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-slate-200 hover:bg-slate-100/70"
              >
                <span className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-600 transition">
                  {wishlist.length}
                </span>
                <span className="text-[11px] font-medium text-slate-500">Wishlist</span>
              </button>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-emerald-50/50 p-3">
                <span className="text-lg sm:text-xl font-black text-emerald-700">
                  ₹{totalSavings.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] font-medium text-emerald-800">Saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="mt-8 flex items-center gap-2 border-b border-slate-200/80 pb-2 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
              activeTab === "profile"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <User size={15} />
            <span>Personal Details</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("addresses")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
              activeTab === "addresses"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <MapPin size={15} />
            <span>Saved Addresses ({addresses.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
              activeTab === "orders"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Package size={15} />
            <span>Recent Orders ({orders.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
              activeTab === "settings"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Bell size={15} />
            <span>Preferences</span>
          </button>
        </div>

        {/* TAB 1: PERSONAL DETAILS */}
        {activeTab === "profile" && (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
                  <p className="text-xs text-slate-500">Manage your name, contact details and personal profile</p>
                </div>
                {!isEditingProfile && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditForm(profile);
                      setIsEditingProfile(true);
                    }}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition"
                  >
                    <Edit2 size={13} />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {isEditingProfile ? (
                <form onSubmit={handleSaveProfile} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={editForm.fullName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setEditForm({ ...editForm, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={editForm.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-xs font-bold text-slate-400">
                          +91
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          maxLength={10}
                          required
                          value={editForm.phone}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEditForm({ ...editForm, phone: e.target.value.replace(/\D/g, "") })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-12 pr-3.5 py-2 text-xs text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-xs font-bold text-slate-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={editForm.gender}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          setEditForm({ ...editForm, gender: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-hidden"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dob" className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        type="date"
                        value={editForm.dateOfBirth}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setEditForm({ ...editForm, dateOfBirth: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="rounded-full px-5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-slate-900 px-6 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <User size={13} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Full Name</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{profile.fullName}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Mail size={13} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Email Address</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{profile.email}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Phone size={13} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Phone Number</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">+91 {profile.phone}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Calendar size={13} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Date of Birth & Gender</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {profile.dateOfBirth} • {profile.gender}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Perks & Membership Summary */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">e-shop Elite Member</h3>
                    <p className="text-[11px] text-slate-500">Tier 1 Exclusive Benefits</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>Free Nationwide Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>Priority 24/7 Concierge Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>Instant Doorstep Exchanges & Refunds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>Early Access to Seasonal Sales</span>
                  </div>
                </div>
              </div>

              {/* Wallet / Credits Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-slate-900 p-6 text-white shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Store Credits & Coins
                  </span>
                  <CreditCard size={18} className="text-emerald-400" />
                </div>
                <div className="mt-3">
                  <p className="text-2xl font-black text-white">₹450.00</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Applicable automatically on your next checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SAVED ADDRESSES */}
        {activeTab === "addresses" && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Delivery Addresses</h2>
                <p className="text-xs text-slate-500">Manage saved locations for one-click checkout</p>
              </div>
              {!isAddingAddress && (
                <button
                  type="button"
                  onClick={() => setIsAddingAddress(true)}
                  className="flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
                >
                  <Plus size={14} />
                  <span>Add New Address</span>
                </button>
              )}
            </div>

            {/* Add Address Form Modal / Box */}
            {isAddingAddress && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">Add Delivery Location</h3>
                  <button
                    type="button"
                    onClick={() => setIsAddingAddress(false)}
                    className="text-xs text-slate-400 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleAddAddress} className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newAddress.fullName}
                        onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        required
                        value={newAddress.phone}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, phone: e.target.value.replace(/\D/g, "") })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Street Address & Flat / House / Building *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Flat 304, Greenview Residency, 5th Cross"
                        value={newAddress.street}
                        onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        required
                        placeholder="e.g. 560001"
                        value={newAddress.pincode}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, pincode: e.target.value.replace(/\D/g, "") })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bengaluru"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karnataka"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Near Metro Station"
                        value={newAddress.landmark || ""}
                        onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                      <span className="text-xs font-bold text-slate-700">Address Type:</span>
                      {(["Home", "Work", "Other"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setNewAddress({ ...newAddress, tag: type })}
                          className={`rounded-full px-4 py-1 text-xs font-bold transition ${
                            newAddress.tag === type
                              ? "bg-slate-900 text-white shadow-2xs"
                              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}

                      <label className="flex items-center gap-2 cursor-pointer ml-auto">
                        <input
                          type="checkbox"
                          checked={newAddress.isDefault}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, isDefault: e.target.checked })
                          }
                          className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                        />
                        <span className="text-xs font-medium text-slate-700">
                          Set as default delivery address
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="rounded-full px-5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-slate-900 px-6 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`relative rounded-3xl border p-5 transition-all ${
                    addr.isDefault
                      ? "border-emerald-300 bg-emerald-50/20 shadow-xs ring-1 ring-emerald-500/10"
                      : "border-slate-200/80 bg-white hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        {addr.tag}
                      </span>
                      {addr.isDefault && (
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                          Default
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteAddress(addr.id)}
                      className="text-slate-400 hover:text-rose-600 transition"
                      title="Delete address"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">{addr.fullName}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {addr.street}
                    {addr.landmark ? `, ${addr.landmark}` : ""}, {addr.city}, {addr.state} - {addr.pincode}
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    Phone: +91 {addr.phone}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    {!addr.isDefault ? (
                      <button
                        type="button"
                        onClick={() => handleSetDefaultAddress(addr.id)}
                        className="text-xs font-bold text-emerald-600 hover:underline"
                      >
                        Set as Default
                      </button>
                    ) : (
                      <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                        <Check size={13} /> Active default for orders
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: RECENT ORDERS & WISHLIST */}
        {activeTab === "orders" && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Your Recent Activity</h2>
                <p className="text-xs text-slate-500">Track current shipments and view purchase archives</p>
              </div>
              <Link
                to="/orders"
                className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>Full Orders History</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {orders.length === 0 ? (
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 text-center">
                <Package size={36} className="mx-auto text-slate-300" />
                <h3 className="mt-3 text-sm font-bold text-slate-900">No Orders Yet</h3>
                <p className="mt-1 text-xs text-slate-500">When you buy items, they will appear here</p>
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {orders.slice(0, 3).map((order) => (
                  <div
                    key={order.orderId}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          Order #{order.orderId}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Placed on {order.createdAt} • {order.items.length} item(s)
                      </p>
                      <p className="text-xs font-bold text-slate-900">
                        Total: ₹{order.totalAmount.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {order.status !== "Cancelled" && order.status !== "Delivered" && (
                        <button
                          type="button"
                          onClick={() => cancelOrder(order.orderId, "Cancelled from Profile")}
                          className="rounded-full border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition active:scale-95"
                        >
                          Cancel Order
                        </button>
                      )}
                      <Link
                        to="/orders"
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                      >
                        Track Status
                      </Link>
                      {order.items[0]?.product && (
                        <button
                          type="button"
                          onClick={() => {
                            addToCart(order.items[0].product, order.items[0].size, 1);
                            navigate("/cart");
                          }}
                          className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition"
                        >
                          Buy Again
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wishlist summary strip */}
            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <Heart size={18} className="text-rose-500 fill-rose-50" />
                  <h3 className="text-sm font-bold text-slate-900">Saved Wishlist ({wishlist.length})</h3>
                </div>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>View All</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              {wishlist.length === 0 ? (
                <p className="text-xs text-slate-500">Your wishlist is currently empty.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {wishlist.slice(0, 4).map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5 hover:border-slate-200 transition"
                    >
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="h-28 w-full rounded-xl object-cover"
                      />
                      <p className="mt-2 text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition">
                        {p.title}
                      </p>
                      <p className="text-xs font-black text-slate-900">
                        ₹{p.price.toLocaleString("en-IN")}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: SETTINGS & PREFERENCES */}
        {activeTab === "settings" && (
          <div className="mt-6 max-w-2xl space-y-6">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">Notifications & Alerts</h2>
              <p className="text-xs text-slate-500">Choose how and when we communicate order status and offers</p>

              <div className="mt-6 space-y-4">
                <label className="flex items-center justify-between cursor-pointer rounded-2xl border border-slate-100 p-4 hover:bg-slate-50/50 transition">
                  <div>
                    <p className="text-xs font-bold text-slate-900">WhatsApp Dispatch & Tracking Updates</p>
                    <p className="text-[11px] text-slate-500">Receive live delivery tracking directly on WhatsApp</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.whatsappUpdates}
                    onChange={(e) =>
                      setNotifications({ ...notifications, whatsappUpdates: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer rounded-2xl border border-slate-100 p-4 hover:bg-slate-50/50 transition">
                  <div>
                    <p className="text-xs font-bold text-slate-900">SMS Out-For-Delivery PIN Alerts</p>
                    <p className="text-[11px] text-slate-500">Receive delivery OTP and courier driver contact via SMS</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.smsAlerts}
                    onChange={(e) =>
                      setNotifications({ ...notifications, smsAlerts: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer rounded-2xl border border-slate-100 p-4 hover:bg-slate-50/50 transition">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Weekly Curated Newsletter & Offers</p>
                    <p className="text-[11px] text-slate-500">Exclusive member-only discounts and restock announcements</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications.promoEmails}
                    onChange={(e) =>
                      setNotifications({ ...notifications, promoEmails: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                </label>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => showToast("Preferences updated successfully!")}
                  className="rounded-full bg-slate-900 px-6 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
                >
                  Save Preferences
                </button>
              </div>
            </div>

            {/* Account Security & Sign Out Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">Account Session</h2>
              <p className="text-xs text-slate-500">Manage login credentials and secure active device sessions</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">Logged in as {profile.email}</p>
                  <p className="text-[11px] text-slate-400">Device active in Bengaluru, India</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    showToast("Signed out of your session.");
                    navigate("/");
                  }}
                  className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
                >
                  <LogOut size={13} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
