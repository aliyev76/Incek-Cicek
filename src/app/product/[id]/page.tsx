"use client";

import React, { useEffect, useState, use } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import { INITIAL_PRODUCTS } from "@/lib/seed-data";
import { ChevronRight, ShoppingCart, Truck, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*, categories(name, slug)")
          .eq("id", id)
          .single();

        if (error || !data) {
          const found = INITIAL_PRODUCTS.find(p => p.id === id);
          setProduct(found);
        } else {
          // Normalize Supabase data to match INITIAL_PRODUCTS structure for the UI
          setProduct({
            ...data,
            category: data.categories?.name || "Genel"
          });
        }
      } catch (err) {
        setProduct(INITIAL_PRODUCTS.find(p => p.id === id));
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Ürün sepete eklendi!");
  };

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center">Yükleniyor...</div>;
  if (!product) return <div className="min-h-screen bg-white flex items-center justify-center">Ürün bulunamadı.</div>;

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link 
              href={`/category/${(product.categories?.slug || product.category || 'tum-urunler').toLowerCase().replace(/ \/ /g, '-')}`} 
              className="hover:text-primary"
            >
              {product.categories?.name || product.category || "Kategori"}
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-gray-900">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Image */}
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
               <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex flex-col">
                  {product.old_price && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.old_price.toLocaleString('tr-TR')} TL
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString('tr-TR')} TL
                  </span>
                </div>
                {product.old_price && (
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    %{Math.round(((product.old_price - product.price) / product.old_price) * 100)} İNDİRİM
                  </span>
                )}
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <Truck size={24} className="text-primary" />
                      <div>
                         <p className="text-xs font-bold text-gray-800">Ücretsiz Teslimat</p>
                         <p className="text-[10px] text-gray-500 uppercase">Tüm Ankara'ya</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <Clock size={24} className="text-primary" />
                      <div>
                         <p className="text-xs font-bold text-gray-800">90 Dakikada Teslimat</p>
                         <p className="text-[10px] text-gray-500 uppercase">Hızlı Gönderim</p>
                      </div>
                   </div>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-white font-bold py-6 rounded-2xl shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-3 text-lg group"
              >
                <ShoppingCart size={24} /> SEPETE EKLE
              </button>

              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-6 justify-center">
                 <div className="flex flex-col items-center gap-1">
                    <ShieldCheck size={20} className="text-green-500" />
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Güvenli Ödeme</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <Clock size={20} className="text-primary" />
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Taze Çiçek Garantisi</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
