"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero3DFlowers } from "../ui/Hero3DFlowers";
import { InteractiveBouquet } from "../ui/InteractiveBouquet";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Banner 1 - Roses */}
         <div className="relative group overflow-hidden rounded-[2rem] bg-secondary shadow-xl min-h-[350px] flex">
            <img 
              src="https://www.incekcicek.com/uploads/products/thumb_101-adet-pembe-gul-buketi-61-2052.webp"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-1000"
              alt="Güller"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center bg-black/10 group-hover:bg-transparent transition-all">
               <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[8px] mb-3 block">Love Selection</span>
               <h3 className="text-white font-serif text-3xl md:text-5xl font-black mb-6">Gül Bahçesi</h3>
               <Link href="/category/guller" className="px-8 py-3 bg-white text-secondary text-xs font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all transform group-hover:scale-105">Hemen Keşfet</Link>
            </div>
         </div>
         
         {/* Banner 2 - Orchids */}
         <div className="relative group overflow-hidden rounded-[2rem] bg-primary shadow-xl min-h-[350px] flex">
            <img 
              src="https://www.incekcicek.com/uploads/products/thumb_cift-dalli-mor-orkide-166-3125.webp"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-1000"
              alt="Orkideler"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center bg-black/10 group-hover:bg-transparent transition-all">
               <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[8px] mb-3 block">Nature Selection</span>
               <h3 className="text-white font-serif text-3xl md:text-5xl font-black mb-6">Asil Orkideler</h3>
               <Link href="/category/orkide" className="px-8 py-3 bg-white text-primary text-xs font-black uppercase tracking-widest rounded-full hover:bg-secondary hover:text-white transition-all transform group-hover:scale-105">Ürünleri Gör</Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Banner;
