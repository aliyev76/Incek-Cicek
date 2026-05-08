"use client";

import React from "react";
import { Phone } from "lucide-react";

export const FloatingCallButton = () => {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // General Event tracking
      (window as any).gtag('event', 'click_call_button', {
        'event_category': 'Contact',
        'event_label': 'Floating_Mobile_Call'
      });
      // Google Ads Conversion Tracking
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18076783012/mhFACJL0xakcEKSj16tD',
        'value': 1.0,
        'currency': 'TRY'
      });
    }
  };

  return (
    <a
      href="tel:05050815159"
      onClick={handleCallClick}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full shadow-[0_0_20px_rgba(22,163,74,0.5)] transition-transform hover:scale-110 group"
      aria-label="Hemen Ara"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"></div>
      <Phone size={32} className="relative z-10" fill="currentColor" />

      {/* Mobile Text */}
      <div className="absolute top-full mt-2 text-center w-32 -ml-8 bg-green-600 text-white text-[10px] font-bold py-1 px-2 rounded-full md:hidden">
        TIKLA ARA
      </div>

      <span className="absolute right-full mr-4 bg-white text-green-700 font-black px-5 py-3 rounded-full text-sm shadow-xl opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible transition-all whitespace-nowrap border-2 border-green-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Hemen Ara: 0505 081 51 59
      </span>
    </a>
  );
};
