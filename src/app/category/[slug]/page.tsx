"use client";

import React, { useEffect, useState, use } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { supabase } from "@/lib/supabase";
import { INITIAL_PRODUCTS } from "@/lib/seed-data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // 1. Fetch Category by Slug
        const { data: catData, error: catError } = await supabase
          .from("categories")
          .select("*")
          .eq("slug", slug)
          .single();
        
        if (catData) {
          setCategory(catData);
          
          // 2. Fetch Products for this Category
          const { data: prodData, error: prodError } = await supabase
            .from("products")
            .select("*")
            .eq("category_id", catData.id);

          if (!prodError && prodData && prodData.length > 0) {
            setProducts(prodData);
          } else {
            // Fallback to seed data using category name
            const filtered = INITIAL_PRODUCTS.filter(p => 
              p.category.toLowerCase().includes(catData.name.toLowerCase()) || 
              slug.includes(p.category.toLowerCase().replace(/[^a-z]/g, ''))
            );
            setProducts(filtered);
          }
        } else {
          // Category not found in DB - fallback to slug-based filtering in INITIAL_PRODUCTS
          const categoryMap: Record<string, string> = {
            "guller": "Güller",
            "saksi-cicekleri": "Saksı Çiçekleri",
            "papatya-gerbera": "Papatya / Gerbera",
            "buketler": "Buketler",
            "orkide": "Orkide",
            "celenkler": "Çelenkler",
            "yeni-bebek": "Yeni Bebek Çiçekleri",
            "anneye-hediye": "Anneye Hediye Çiçekler",
            "ozur-dileme": "Özür Dileme Çiçekleri",
            "gecmis-olsun": "Geçmiş Olsun Çiçekleri",
            "sevgiliye": "Sevgiliye Çiçekler",
            "yeni-is-terfi": "Yeni İş / Terfi Çiçekleri",
            "tebrik": "Tebrik Çiçekleri",
            "evlilik-yildonumu": "Evlilik Yıldönümü Çiçekleri",
            "dogum-gunu": "Doğum Günü Çiçekleri",
            "erkege-hediye": "Erkeğe Gönderilecek Çiçekler",
            "tum-urunler": "Tüm Ürünler"
          };
          
          const fullName = categoryMap[slug] || slug;
          setCategory({ name: fullName, slug });
          
          if (slug === "tum-urunler") {
            setProducts(INITIAL_PRODUCTS);
            return;
          }

          const filtered = INITIAL_PRODUCTS.filter(p => {
            const pCat = p.category.toLowerCase();
            const pName = p.name.toLowerCase();
            const s = slug.toLowerCase();

            // Match by type
            if (s === "guller" && pCat.includes("gül")) return true;
            if (s === "saksi-cicekleri" && (pCat.includes("saks") || pCat.includes("bitki"))) return true;
            if (s === "papatya-gerbera" && (pCat.includes("papatya") || pCat.includes("gerbera"))) return true;
            if (s === "buketler" && pCat.includes("buket")) return true;
            if (s === "orkide" && pCat.includes("orkid")) return true;
            if (s === "celenkler" && pCat.includes("çelenk")) return true;

            // Match by occasion keywords in name/category
            if (s === "gecmis-olsun" && (pName.includes("vazo") || pName.includes("fanus") || pCat.includes("papatya"))) return true;
            if (s === "sevgiliye" && (pName.includes("gül") || pCat.includes("güller"))) return true;
            if (s === "yeni-bebek" && (pName.includes("orkide") || pName.includes("beyaz") || pName.includes("mavi"))) return true;
            if (s === "dogum-gunu" && (pName.includes("renkli") || pName.includes("buketi") || pName.includes("gerbera"))) return true;
            if (s === "tebrik" && (pName.includes("premium") || pName.includes("buketi") || pCat.includes("çelenk"))) return true;
            if (s === "yeni-is-terfi" && (pName.includes("orkide") || pName.includes("kütük") || pCat.includes("saksı"))) return true;
            
            return pCat.includes(s) || s.includes(pCat) || pName.includes(s.replace(/-/g, ' '));
          });
          setProducts(filtered);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  const categoryName = category?.name || slug;

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-gray-900 capitalize">{categoryName}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-2 border-gray-100 pb-4">
            <h1 className="text-3xl font-bold text-primary capitalize">{categoryName}</h1>
            <p className="text-sm text-gray-400 font-medium">{products.length} ürün listeleniyor</p>
          </div>
          
          {loading ? (
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="aspect-[4/5] bg-gray-100 animate-pulse rounded-lg"></div>
               ))}
             </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.map((product, idx) => (
                <ProductCard key={product.id || idx} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
               <p className="text-gray-500">Bu kategoride henüz ürün bulunmuyor.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
