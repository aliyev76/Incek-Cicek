"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { translations } from "@/lib/i18n/translations";

const categories = [
  { name: "Tüm Ürünler", href: "/", hasSub: true },
  { name: "Güller", href: "/category/guller", hasSub: false },
  { name: "Saksı Çiçekleri", href: "/category/saksi-cicekleri", hasSub: false },
  { name: "Papatya / Gerbera", href: "/category/papatya-gerbera", hasSub: false },
  { name: "Buketler", href: "/category/buketler", hasSub: false },
  { name: "Orkide", href: "/category/orkide", hasSub: false },
  { name: "Çelenkler", href: "/category/celenkler", hasSub: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const t = translations.tr.nav;

  return (
    <nav className="w-full bg-white border-b border-border sticky top-0 md:top-[112px] z-50">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center justify-between py-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
            {isOpen ? t.close : t.menu}
          </button>
          
          <Link href="/cart" className="text-secondary hover:text-primary transition-colors">
            <span className="text-[10px] font-black tracking-widest uppercase">{t.cart}</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-2">
          {categories.map((category) => (
            <li key={category.name} className="group relative">
              <Link
                href={category.href}
                className="flex items-center gap-1.5 px-5 py-4 text-[13px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors whitespace-nowrap relative after:content-[''] after:absolute after:bottom-3 after:left-5 after:right-5 after:h-0.5 after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {category.name}
                {category.hasSub && <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {category.hasSub && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[70] rounded-b-xl border-t-2 border-primary py-2">
                  <div className="grid grid-cols-1">
                    <Link href="/category/yeni-bebek" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Yeni Bebek Çiçekleri</Link>
                    <Link href="/category/anneye-hediye" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Anneye Hediye Çiçekler</Link>
                    <Link href="/category/ozur-dileme" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Özür Dileme Çiçekleri</Link>
                    <Link href="/category/gecmis-olsun" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Geçmiş Olsun Çiçekleri</Link>
                    <Link href="/category/sevgiliye" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Sevgiliye Çiçekler</Link>
                    <Link href="/category/yeni-is-terfi" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Yeni İş / Terfi Çiçekleri</Link>
                    <Link href="/category/tebrik" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Tebrik Çiçekleri</Link>
                    <Link href="/category/evlilik-yildonumu" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Evlilik Yıldönümü Çiçekleri</Link>
                    <Link href="/category/dogum-gunu" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Doğum Günü Çiçekleri</Link>
                    <Link href="/category/erkege-hediye" className="px-6 py-3 hover:bg-muted text-xs font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wider">Erkeğe Gönderilecek Çiçekler</Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border py-4 max-h-[70vh] overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {categories.map((category) => (
                <li key={category.name} className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-3">
                    <Link
                      href={category.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary"
                    >
                      {category.name}
                    </Link>
                    {category.hasSub && (
                      <button 
                        onClick={() => setActiveSub(activeSub === category.name ? null : category.name)}
                        className="p-2 text-secondary"
                      >
                        <ChevronDown size={18} className={`${activeSub === category.name ? 'rotate-180' : ''} transition-transform`} />
                      </button>
                    )}
                  </div>
                  
                  {category.hasSub && activeSub === category.name && (
                    <div className="bg-muted/30 py-2 border-y border-border/50">
                      <Link href="/category/yeni-bebek" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-xs font-bold text-secondary/70 uppercase tracking-wider">Yeni Bebek</Link>
                      <Link href="/category/anneye-hediye" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-xs font-bold text-secondary/70 uppercase tracking-wider">Anneye Hediye</Link>
                      <Link href="/category/sevgiliye" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-xs font-bold text-secondary/70 uppercase tracking-wider">Sevgiliye</Link>
                      <Link href="/category/dogum-gunu" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-xs font-bold text-secondary/70 uppercase tracking-wider">Doğum Günü</Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
