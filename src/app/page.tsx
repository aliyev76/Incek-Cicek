"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/shop/Banner";
import ProductCard from "@/components/shop/ProductCard";
import { supabase } from "@/lib/supabase";
import { INITIAL_PRODUCTS } from "@/lib/seed-data";
import { RevealObserver } from "@/components/ui/RevealObserver";
import FlowerScroll from "@/components/shop/FlowerScroll";
import { InteractiveBouquet } from "@/components/ui/InteractiveBouquet";
import { Hero3DFlowers } from "@/components/ui/Hero3DFlowers";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Fetch Categories with explicit error handling
        const { data: catData, error: catError } = await supabase
          .from("categories")
          .select("*")
          .order("name");
        
        if (catError || !catData || catData.length === 0) {
          console.warn("Category fetch failed, using fallback:", catError);
          setCategories([
            { id: '1', name: 'Güller', slug: 'guller', icon: '🌹' },
            { id: '2', name: 'Saksı', slug: 'saksi-cicekleri', icon: '🪴' },
            { id: '3', name: 'Papatya', slug: 'papatya-gerbera', icon: '🌼' },
            { id: '4', name: 'Buketler', slug: 'buketler', icon: '💐' },
            { id: '5', name: 'Orkide', slug: 'orkide', icon: '🌸' },
            { id: '6', name: 'Çelenkler', slug: 'celenkler', icon: '🎀' }
          ]);
        } else {
          setCategories(catData);
        }

        // Fetch Products with explicit error handling
        const { data: prodData, error: prodError } = await supabase
          .from("products")
          .select("*, categories(name)")
          .order("created_at", { ascending: false });

        if (prodError || !prodData || prodData.length === 0) {
          console.warn("Product fetch failed, using fallback:", prodError);
          setProducts(INITIAL_PRODUCTS);
        } else {
          setProducts(prodData);
        }
      } catch (err) {
        console.error("Critical fetch error:", err);
        setProducts(INITIAL_PRODUCTS);
        setCategories([
            { id: '1', name: 'Güller', slug: 'guller', icon: '🌹' },
            { id: '2', name: 'Saksı', slug: 'saksi-cicekleri', icon: '🪴' },
            { id: '3', name: 'Papatya', slug: 'papatya-gerbera', icon: '🌼' },
            { id: '4', name: 'Buketler', slug: 'buketler', icon: '💐' },
            { id: '5', name: 'Orkide', slug: 'orkide', icon: '🌸' },
            { id: '6', name: 'Çelenkler', slug: 'celenkler', icon: '🎀' }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const featuredProducts = products.filter(p => p.is_featured).slice(0, 8);

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-grow">
        <RevealObserver />
        
        <FlowerScroll />

        <section className="relative py-20 overflow-hidden reveal">
          <Hero3DFlowers>
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-center lg:text-left z-10">
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Handcrafted with Love</span>
                  <h1 className="text-4xl md:text-7xl font-serif font-black text-secondary mb-8 leading-tight">
                    Duygularınızı <br />
                    <span className="text-primary italic">Sanatla</span> Taçlandırın
                  </h1>
                  <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
                    Ankara'nın en taze çiçekleriyle hazırlanan, her biri birer sanat eseri değerindeki aranjmanlarımızla en özel anlarınıza eşlik ediyoruz.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link href="/category/tum-urunler" className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest rounded-full hover:bg-secondary transition-all shadow-xl hover:shadow-primary/20 scale-110">Hemen Alışverişe Başla</Link>
                  </div>
                </div>
                <div className="lg:w-1/2 relative aspect-square w-full max-w-[600px]">
                  <InteractiveBouquet />
                </div>
              </div>
            </div>
          </Hero3DFlowers>
        </section>

        <div className="reveal">
          <Banner />
        </div>

        {/* Modern Category Quick Links */}
        <section className="py-12 bg-muted/30 reveal">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map((cat) => (
                <Link 
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-sm border border-border group-hover:border-primary group-hover:shadow-xl transition-all flex items-center justify-center text-3xl">
                    {cat.icon || '🌸'}
                  </div>
                  <span className="text-xs md:text-sm font-bold text-secondary group-hover:text-primary uppercase tracking-widest transition-colors">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12 reveal">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Sizin İçin Seçtiklerimiz</span>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-secondary">Haftanın <span className="text-primary italic">Favorileri</span></h2>
              </div>
              <Link href="/category/tum-urunler" className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary border-b-2 border-primary pb-1 transition-all">Tümünü Gör</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 reveal">
              {featuredProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
