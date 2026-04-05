"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
  return (
    <nav className="w-full bg-white border-b border-border sticky top-[112px] z-50">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
