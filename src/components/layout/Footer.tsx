"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white pt-20 pb-10 mt-auto overflow-hidden relative">
      {/* Decorative Floral background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* FAQ Section - Premium Accordion */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Yardım Merkezi</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white">Sıkça Sorulan <span className="text-primary italic">Sorular</span></h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { q: "Çiçeklerim ne kadar sürede teslim edilir?", a: "Ankara genelinde ortalama 90-120 dakika içerisinde güvenle teslim edilmektedir." },
              { q: "Ödeme seçenekleriniz nelerdir?", a: "Kredi kartı, banka kartı ve Shopier güvencesiyle 12 aya varan taksit seçenekleri sunuyoruz." },
              { q: "Görseldekiyle aynı mı gelecek?", a: "%100 görsel sadakat garantisi veriyoruz. Mevsimsel değişimlerde sizinle iletişime geçiyoruz." },
              { q: "İptal ve İade politikası nedir?", a: "Teslimat öncesinde siparişinizi koşulsuz iptal edebilir, tam iade alabilirsiniz." }
            ].map((item, i) => (
              <details key={i} className="group border-b border-white/10 pb-4 h-fit">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-white/90 hover:text-primary transition-colors text-sm uppercase tracking-wide">
                  {item.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-xs text-white/60 leading-relaxed font-medium">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-primary font-serif font-black text-3xl tracking-tighter leading-none">
                İNCEK ÇİÇEK
              </span>
              <span className="text-[10px] text-accent font-bold tracking-[0.3em] uppercase opacity-70 mt-1">
                Premium Florist
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Ankara'nın doğasından ilham alan tasarımlarımızla sevdiklerinizin en özel anlarını ölümsüzleştiriyoruz. Sanatı çiçeklerle buluşturuyoruz.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/incekcicek?igsh=aTVkNXpzc2lkYXFk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/70 hover:text-white">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/70 hover:text-white">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-black text-[11px] mb-8 text-white uppercase tracking-[0.3em]">Hızlı Linkler</h3>
            <ul className="space-y-4 text-[13px] font-medium text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">Hikayemiz</Link></li>
              <li><Link href="/delivery" className="hover:text-white transition-colors">Teslimat Bilgileri</Link></li>
              <li><Link href="/legal/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/legal/mesafeli-satis-sozlesmesi" className="hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</Link></li>
              <li><Link href="/legal/iptal-iade-kosullari" className="hover:text-white transition-colors">İptal ve İade Koşulları</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-[11px] mb-8 text-white uppercase tracking-[0.3em]">Kategoriler</h3>
            <ul className="space-y-4 text-[13px] font-medium text-white/50">
              <li><Link href="/category/guller" className="hover:text-white transition-colors">Premium Güller</Link></li>
              <li><Link href="/category/orkide" className="hover:text-white transition-colors">Asil Orkideler</Link></li>
              <li><Link href="/category/buketler" className="hover:text-white transition-colors">Tasarım Buketler</Link></li>
              <li><Link href="/category/celenkler" className="hover:text-white transition-colors">Özel Gün Çelenkleri</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-[11px] mb-8 text-white uppercase tracking-[0.3em]">Atölyemiz</h3>
            <ul className="space-y-6 text-sm text-white/60">
              <li className="flex items-start gap-4 font-medium">
                <MapPin size={20} className="text-primary shrink-0" />
                <span className="leading-relaxed">Bağlarbaşı mah. Kızlarpınarı cad. 126/A<br />Keçiören, Ankara</span>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-4 font-black text-white text-lg">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>0505 081 51 59</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/40 font-bold ml-9">
                  <span>Alternatif: +90 541 109 09 41</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
             <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
               © 2026 İNCEK ÇİÇEK PREMIUM FLORIST. Tüm Hakları Saklıdır.
             </p>
          </div>

          <div className="flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="h-6 w-10 bg-white/20 rounded"></div>
             <div className="h-6 w-10 bg-white/20 rounded"></div>
             <div className="h-6 w-10 bg-white/20 rounded"></div>
             <div className="h-6 w-10 bg-white/20 rounded"></div>
          </div>

          <div className="flex items-center gap-2 group">
             <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest group-hover:text-white/60 transition-colors">Designed by</span>
             <span className="font-serif font-black text-white text-sm group-hover:text-primary transition-colors uppercase tracking-widest">aliyev</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
