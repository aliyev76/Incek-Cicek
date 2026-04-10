import React from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GizlilikPolitikasi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-serif font-black mb-12 text-primary border-b-2 border-primary/10 pb-4">Gizlilik Politikası ve KVKK</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kişisel Verilerin Korunması</h2>
            <p>İncek Beytepe Çiçekçilik olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca verileriniz yalnızca siparişinizin teslimi ve hizmet kalitesinin artırılması amacıyla işlenmektedir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veri İşleme Amacı</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Siparişlerinizin oluşturulması ve teslimatı.</li>
              <li>Ödeme işlemlerinin güvenliğinin sağlanması.</li>
              <li>Kampanya ve duyurular için bilgilendirme (onayınız dahilinde).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Güvenlik</h2>
            <p>Kredi kartı bilgileriniz doğrudan ödeme kuruluşu (PayTR/iyzico) altyapısında işlenir. Sunucularımızda hiçbir banka/kart bilgisi saklanmamaktadır.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GizlilikPolitikasi;
