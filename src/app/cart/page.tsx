"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Trash2, Plus, Minus, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // In a real app, load from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // Mock cart for demo if empty
      setCart([
        { id: "1", name: "Aşkın Büyüsü 21 Kırmızı Gül", price: 1500, quantity: 1, image_url: "https://images.unsplash.com/photo-1548610762-7c6afe24c261?q=80&w=200" }
      ]);
    }
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const customerData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
    };

    try {
      const res = await fetch("/.netlify/functions/payment", {
        method: "POST",
        body: JSON.stringify({ cart, customer: customerData }),
      });
      const data = await res.json();
      
      if (data.fields) {
        // Create a temporary form and submit it via POST
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://www.shopier.com/ShowProduct/api_pay.php';
        
        Object.entries(data.fields).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value as string;
          form.appendChild(input);
        });
        
        document.body.appendChild(form);
        form.submit();
      }
    } catch (err) {
      console.error("Payment failed", err);
      alert("Ödeme başlatılamadı!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-gray-900">Sepetiniz</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Cart Items */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                  <h2 className="text-xl font-bold text-gray-800">Sepetim ({cart.length} Ürün)</h2>
                </div>
                
                {cart.length === 0 ? (
                  <div className="p-12 text-center">
                    <p className="text-gray-500 mb-6">Sepetiniz henüz boş.</p>
                    <Link href="/" className="bg-primary text-white px-8 py-3 rounded-lg font-bold">Alışverişe Başla</Link>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-50">
                    {cart.map((item) => (
                      <div key={item.id} className="p-6 flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                          <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h3>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:text-primary"><Minus size={16} /></button>
                              <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:text-primary"><Plus size={16} /></button>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-primary">{(item.price * item.quantity).toLocaleString('tr-TR')} TL</span>
                              <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-accent"><Trash2 size={18} /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Summary & Checkout */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Sipariş Bilgileri</h3>
                
                <form onSubmit={handleCheckout} className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ad Soyad</label>
                    <input 
                      name="name"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary outline-none transition-all"
                      value={customer.name}
                      onChange={e => setCustomer({...customer, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">E-posta</label>
                      <input 
                        name="email"
                        required
                        type="email"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary outline-none transition-all"
                        value={customer.email}
                        onChange={e => setCustomer({...customer, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Telefon</label>
                      <input 
                        name="phone"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary outline-none transition-all"
                        value={customer.phone}
                        onChange={e => setCustomer({...customer, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Teslimat Adresi</label>
                    <textarea 
                      name="address"
                      required
                      rows={3}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary outline-none transition-all resize-none"
                      value={customer.address}
                      onChange={e => setCustomer({...customer, address: e.target.value})}
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-gray-500">Ara Toplam</span>
                       <span className="font-semibold">{total.toLocaleString('tr-TR')} TL</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-gray-500">Teslimat</span>
                       <span className="text-primary font-bold">Ücretsiz</span>
                    </div>
                    <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-100">
                       <span className="font-bold text-gray-800">Toplam</span>
                       <span className="text-2xl font-bold text-primary">{total.toLocaleString('tr-TR')} TL</span>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading || cart.length === 0}
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {loading ? "İşleniyor..." : (
                        <>
                          Ödemeye Geç <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                       <CreditCard size={14} /> Shopier ile Güvenli Ödeme
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
