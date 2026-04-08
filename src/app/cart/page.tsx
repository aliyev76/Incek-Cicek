"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Trash2, Plus, Minus, CreditCard, ChevronRight, Copy, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { translations } from "@/lib/i18n/translations";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const [showIBAN, setShowIBAN] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = translations.tr.cart;
  const tp = translations.tr.payment;

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
    
    // Simulate order placement
    setTimeout(() => {
      setShowIBAN(true);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const copyIBAN = () => {
    navigator.clipboard.writeText(tp.iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`${tp.waMessage} ${customer.name}\n\nSipariş Detayı:\n${cart.map(item => `- ${item.name} (${item.quantity} adet)`).join('\n')}\n\nToplam: ${total.toLocaleString('tr-TR')} TL`);
    window.open(`https://wa.me/905441334406?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">{translations.tr.nav.home}</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-gray-900">{t.title}</span>
          </div>

          {showIBAN ? (
            <div className="bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden animate-bloom">
              <div className="bg-primary p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{tp.ibanTitle}</h2>
                <p className="text-white/80 text-sm max-w-md mx-auto">{tp.ibanSubtitle}</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{tp.accountHolder}</label>
                      <p className="text-lg font-bold text-secondary">{tp.accountHolder}</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{tp.bankName}</label>
                      <p className="text-lg font-bold text-secondary">{tp.bankName}</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-xl relative group">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">IBAN</label>
                    <p className="text-sm font-mono font-bold text-secondary break-all tracking-tighter">
                      {tp.iban}
                    </p>
                    <button 
                      onClick={copyIBAN}
                      className="mt-4 flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                      {copied ? <><CheckCircle2 size={14} /> Kopyalandı</> : <><Copy size={14} /> IBAN Kopyala</>}
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
                  <p className="text-sm font-bold text-secondary">Ödenecek Tutar: <span className="text-primary text-xl">{total.toLocaleString('tr-TR')} TL</span></p>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full md:w-auto bg-[#25D366] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {tp.confirmWhatsApp}
                  </button>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Ödeme onayı manuel olarak kontrol edilmektedir.</p>
                </div>
              </div>
            </div>
          ) : (
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
                <h3 className="text-lg font-bold text-gray-800 mb-6">{t.summary}</h3>
                
                <form onSubmit={handleCheckout} className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.name}</label>
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
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.email}</label>
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
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.phone}</label>
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
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.address}</label>
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
                       <span className="text-gray-500">{t.subtotal}</span>
                       <span className="font-semibold">{total.toLocaleString('tr-TR')} TL</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-gray-500">{t.delivery}</span>
                       <span className="text-primary font-bold">{t.free}</span>
                    </div>
                    <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-100">
                       <span className="font-bold text-gray-800">{t.total}</span>
                       <span className="text-2xl font-bold text-primary">{total.toLocaleString('tr-TR')} TL</span>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading || cart.length === 0}
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {loading ? translations.tr.common.loading : (
                        <>
                          {t.checkout} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                       <CreditCard size={14} /> {t.securePayment}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
