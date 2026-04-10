import React from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const IptalIadeKosullari = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-serif font-black mb-12 text-primary border-b-2 border-primary/10 pb-4">İptal ve İade Koşulları</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sipariş İptali</h2>
            <p>Çiçek siparişleriniz, hazırlık sürecine girmeden önce (planlanan teslimat saatinden en az 3 saat önce) ücretsiz olarak iptal edilebilir. Hazırlanan veya yola çıkan siparişlerde iptal sağlanamamaktadır.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">İade Koşulları</h2>
            <p>Satın alınan ürünlerin iadesi ancak şu durumlarda mümkündür:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ürünün belirtilen görselden bariz şekilde farklı ve hatalı gönderilmesi.</li>
              <li>Ürünün tazeliğini yitirmiş veya hasarlı olarak teslim edilmesi.</li>
            </ul>
            <p>Bu gibi durumlarda teslimat anında kurye ile iletişime geçilmeli veya müşteri hizmetlerimize 1 saat içinde bilgi verilmelidir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Geri Ödeme</h2>
            <p>İptal veya iadesi onaylanan siparişlerin tutarı, ödeme yapılan karta 7-10 iş günü içinde iade edilir. İadenin ekstrenize yansıma süresi bankanızın süreçlerine bağlıdır.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IptalIadeKosullari;
