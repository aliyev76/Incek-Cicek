"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Truck, Globe } from "lucide-react";
import { translations } from "@/lib/i18n/translations";

const Header = () => {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0));
    };
    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  return (
    <header className="w-full flex flex-col font-sans sticky top-0 z-[60] glass">
      {/* Top Bar - Minimalist Info Ticker */}
      <div className="w-full bg-secondary py-1 overflow-hidden relative h-8 flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 flex items-center gap-2">
             Ankara Merkez Çiçekçi • Güvenilir Online Ödeme • Ortalama 90 Dakika'da Teslim • Ücretsiz Teslimat • 12 Ay Taksit
          </span>
          <span className="mx-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/80">
            • Size En Yakın Çiçekçi • Aynı Gün Hızlı Teslimat • Taze Çiçek Garantisi • %100 Müşteri Memnuniyeti
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8 h-20">
        {/* Logo - Premium Serif */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 block">🌸</span>
            </div>
            <div className="flex flex-col">
              <span className="text-secondary font-serif font-black text-xl md:text-2xl tracking-tighter leading-none group-hover:text-primary-dark transition-colors">
                İNCEK ÇİÇEK
              </span>
              <span className="text-[10px] text-secondary font-bold tracking-[0.3em] uppercase opacity-70">
                Premium Florist
              </span>
            </div>
          </div>
        </Link>

        {/* Search Bar - Modern & Sleek */}
        <div className="flex-grow max-w-xl hidden md:flex relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Hangi duyguyu paylaşmak istersiniz?..."
            className="w-full bg-muted/50 border border-border rounded-full pl-12 pr-6 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-sm placeholder:text-gray-400 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Utility Links - Refined Icons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/track" className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted text-secondary hover:text-primary transition-all group relative">
            <Truck size={20} />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-secondary text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Takip</span>
          </Link>
          
          <Link href="/cart" className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-secondary hover:text-primary transition-all group">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link href="/admin/login" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-secondary hover:text-primary transition-all">
            <User size={20} />
          </Link>
          
          <button className="md:hidden p-2 text-secondary">
             <Search size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
