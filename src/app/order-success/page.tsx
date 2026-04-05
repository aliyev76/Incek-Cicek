"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ShoppingBag, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import confetti from "canvas-confetti";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle size={40} />
          </div>
          
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Siparişiniz Alındı!</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Tercihiniz için teşekkür ederiz. Çiçekleriniz en taze haliyle hazırlanıp yola çıkmak üzere. 
            Sipariş numaranız: <span className="font-bold text-primary font-mono">{orderId || "---"}</span>
          </p>

          <div className="grid grid-cols-1 gap-4">
             <Link 
               href="/" 
               className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-2 group"
             >
               Alışverişe Devam Et <ShoppingBag size={18} />
             </Link>
             <Link 
               href="/" 
               className="w-full bg-white text-gray-600 font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
             >
               Siparişimi Takip Et <ChevronRight size={18} />
             </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-xs text-gray-400 font-medium uppercase tracking-widest">
            İncek Çiçek Premium Deneyimi
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <OrderSuccessContent />
      </Suspense>
      <Footer />
    </div>
  );
}
