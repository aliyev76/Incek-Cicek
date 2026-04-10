import React from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MesafeliSatisSozlesmesi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-serif font-black mb-12 text-primary border-b-2 border-primary/10 pb-4">Mesafeli Satış Sözleşmesi</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Taraflar</h2>
            <p>İşbu Sözleşme, aşağıda belirtilen şartlar dahilinde "Satıcı" ve "Alıcı" arasında akdedilmiştir.</p>
            <p><strong>Satıcı:</strong> İncek Beytepe Çiçekçilik<br />
            <strong>Adres:</strong> İncek, Ankara<br />
            <strong>E-posta:</strong> info@incekbeytepecicek.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Konu</h2>
            <p>İşbu Sözleşme’nin konusu, Alıcı’nın Satıcı’ya ait web sitesi üzerinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cayma Hakkı</h2>
            <p>Çiçekler, doğası gereği çabuk bozulabilen ve tazeliğini yitirebilen ürünler kategorisinde olduğundan (6502 Sayılı Kanun Madde 15/1-c gereği), bu ürünlerde cayma hakkı kullanılamaz. Ancak diğer kalıcı ürünler için Alıcı, ürünü teslim aldığı tarihten itibaren 14 gün içinde cayma hakkını kullanabilir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Genel Hükümler</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alıcı, web sitesinde ürünlerin temel nitelikleri, satış fiyatı ve teslimat bilgilerini okuyup bilgi sahibi olduğunu beyan eder.</li>
              <li>Sipariş edilen ürün, Alıcı’nın belirttiği adrese ve kişiye teslim edilir.</li>
              <li>Teslimat sırasında ürünün tazeliği ve formu kontrol edilmelidir.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MesafeliSatisSozlesmesi;
