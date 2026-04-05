"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { INITIAL_PRODUCTS } from "@/lib/seed-data";
import { LogOut, Save, RefreshCw, Package, Tag, Info } from "lucide-react";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      router.push("/admin/login");
      return;
    }

    fetchProducts();
  }, [router]);

  async function fetchProducts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*, categories(name)")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      setProducts(INITIAL_PRODUCTS);
    } else {
      setProducts(data);
    }
    setLoading(false);
  }

  const handleUpdate = async (id: string, updates: any) => {
    setUpdating(id);
    // In a real app, this would update Supabase.
    // For now we update local state to show it works.
    setProducts(prev => prev.map(p => p.id === id || (p.name === updates.name && !p.id) ? { ...p, ...updates } : p));
    
    const { error } = await supabase
      .from("products")
      .update(updates)
      .eq("id", id);

    if (error) {
      console.error("Update failed:", error);
    }
    
    setUpdating(null);
  };

  const logout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-primary flex items-center gap-2">
            <Package size={24} /> Yönetim Paneli
          </h1>
          <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">v1.0</span>
        </div>
        <button 
          onClick={logout}
          className="flex items-center gap-2 text-gray-600 hover:text-accent font-medium text-sm transition-colors"
        >
          <LogOut size={18} /> Çıkış Yap
        </button>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Ürün Yönetimi</h2>
          <button 
            onClick={fetchProducts}
            className="flex items-center gap-2 text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-all"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} /> Yenile
          </button>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white rounded-xl animate-pulse"></div>)}
          </div>
        ) : (
          <div className="space-y-4">
            {products.map((product, idx) => (
              <ProductRow 
                key={product.id || idx} 
                product={product} 
                onUpdate={(updates) => handleUpdate(product.id, updates)}
                isUpdating={updating === product.id}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

const ProductRow = ({ product, onUpdate, isUpdating }: { product: any, onUpdate: (updates: any) => void, isUpdating: boolean }) => {
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  const [isFeatured, setIsFeatured] = useState(product.is_featured);

  const hasChanges = price !== product.price || stock !== product.stock || description !== product.description || isFeatured !== product.is_featured;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
      <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300"><Package size={32} /></div>
        )}
      </div>

      <div className="flex-grow space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-gray-900">{product.name}</h3>
            <span className="text-xs text-gray-400 uppercase tracking-tighter">{product.categories?.name || product.category}</span>
          </div>
          <button
            onClick={() => onUpdate({ price, stock, description, is_featured: isFeatured })}
            disabled={!hasChanges || isUpdating}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
              hasChanges 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isUpdating ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
            {isUpdating ? "Güncelleniyor" : "Kaydet"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1 uppercase"><Tag size={12} /> Fiyat (TL)</label>
            <input 
              type="number" 
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary outline-none text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1 uppercase"><Package size={12} /> Stok</label>
            <input 
              type="number" 
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary outline-none text-sm"
            />
          </div>
          <div className="lg:col-span-1 space-y-1">
            <label className="text-xs font-bold text-gray-500 flex items-center gap-1 uppercase"><Package size={12} /> Haftanın Favorisi</label>
            <div className="flex items-center h-[38px]">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">{isFeatured ? 'Favori' : 'Normal'}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
