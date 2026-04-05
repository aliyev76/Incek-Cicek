"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  old_price?: number;
  image_url: string;
  stock: number;
  category: string;
  is_featured?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  const discount = product.old_price 
    ? Math.round(((product.old_price - product.price) / product.old_price) * 100)
    : null;

  return (
    <div className="bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-3 flex flex-col group relative overflow-hidden">
      <div className="relative aspect-[4/5] bg-muted/50 rounded-2xl overflow-hidden mb-4">
        {/* Modern Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            Bugün Teslimat
          </span>
          {discount && (
            <span className="bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm w-fit">
              %{discount} İndirim
            </span>
          )}
        </div>
        
        {/* Product Image */}
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-xs">
            Fotoğraf
          </div>
        )}

        {/* Premium Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const cart = JSON.parse(localStorage.getItem("cart") || "[]");
                const existing = cart.find((item: any) => item.name === product.name);
                if (existing) {
                  existing.quantity += 1;
                } else {
                  cart.push({ ...product, quantity: 1 });
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                window.dispatchEvent(new Event("cartUpdated"));
              }}
              className="bg-white text-secondary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
            >
               <ShoppingCart size={16} />
               <span>Sepete Ekle</span>
            </button>
        </div>
      </div>

      <div className="px-2 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-1">
           <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
             {/* @ts-ignore */}
             {product.categories?.name || product.category || "Genel"}
           </span>
        </div>
        <h3 className="text-sm font-bold text-secondary mb-3 line-clamp-2 min-h-[44px] group-hover:text-primary transition-colors leading-snug">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between border-t border-border/50 pt-3">
          <div className="flex flex-col">
            {product.old_price && (
               <span className="text-[11px] text-gray-400 line-through mb-0.5">
                 {product.old_price.toLocaleString('tr-TR')} TL
               </span>
            )}
            <span className="text-secondary font-black text-xl tracking-tighter">
              {product.price.toLocaleString('tr-TR')} <span className="text-xs ml-0.5">TL</span>
            </span>
          </div>
          <div className="pb-1">
             <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-xs">✨</span>
             </div>
          </div>
        </div>
      </div>
      
      <Link href={`/product/${product.id || '#'}`} className="absolute inset-0"></Link>
    </div>
  );
};

export default ProductCard;
