"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { translations } from "@/lib/i18n/translations";

const FlowerScroll = () => {
  const t = translations.tr.home; // Defaulting to TR for now as per rules
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use scroll progress from the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a smooth spring for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map 0-1 progress to frame index 0-47 (matching the reduced frame set)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, 47]);

  // Preloading images into memory
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;
      const step = 4; // Load every 4th frame to reduce 480MB payload by 75%
      const totalFrames = 192;
      const framesToLoad = Math.floor(totalFrames / step);

      for (let i = 1; i <= totalFrames; i += step) {
        const img = new Image();
        img.src = `/Photosanimate/${i.toString().padStart(5, '0')}.png`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === framesToLoad) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
          loadedCount++; 
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Rendering function
  const renderCanvas = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || images.length === 0) return;

    const imgIndex = Math.max(0, Math.min(47, Math.floor(index)));
    const img = images[imgIndex];
    
    if (!img || !img.complete) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Contain logic (keep image inside viewport preserving aspect ratio)
    const canvasWidth = canvas.width / window.devicePixelRatio;
    const canvasHeight = canvas.height / window.devicePixelRatio;
    
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    
    let drawWidth, drawHeight, x, y;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasHeight;
      drawWidth = drawHeight * imgRatio;
      x = (canvasWidth - drawWidth) / 2;
      y = 0;
    } else {
      drawWidth = canvasWidth;
      drawHeight = drawWidth / imgRatio;
      x = 0;
      y = (canvasHeight - drawHeight) / 2;
    }

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  // Listen to frameIndex change and redraw
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderCanvas(latest);
  });

  // Handle Resize & Initial Draw
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.scale(dpr, dpr);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
        }
        
        if (!isLoading) {
          renderCanvas(frameIndex.get());
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, isLoading]);

  // Initial draw when loading finishes
  useEffect(() => {
    if (!isLoading) {
      renderCanvas(frameIndex.get());
    }
  }, [isLoading]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-transparent blur-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {isLoading && (
          <div className="absolute z-50 flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-secondary font-black tracking-[0.2em] uppercase text-[10px]">{t.loadingAnimation}</span>
          </div>
        )}
        
        <canvas 
          ref={canvasRef} 
          className="block w-full h-full object-contain pointer-events-none"
        />

        {/* Text Overlays - Fading in and out */}
        <div className="absolute inset-0 pointer-events-none container mx-auto px-4 overflow-hidden">
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.0, 0.1, 0.2, 0.3], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0.0, 0.3], [50, -50])
            }}
            className="absolute top-1/4 left-8 md:left-20 max-w-sm"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">{t.scrollPurity}</span>
            <h3 className="text-4xl md:text-7xl font-serif font-black text-secondary leading-tight">{t.scrollPurityTitle.split('Saf')[0]}<span className="text-primary italic">Saf</span>{t.scrollPurityTitle.split('Saf')[1]}</h3>
            <div className="w-12 h-[2px] bg-primary mt-6 mb-4" />
            <p className="text-secondary/60 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">{t.scrollPurityDesc}</p>
          </motion.div>

          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0.4, 0.7], [50, -50])
            }}
            className="absolute top-1/2 right-8 md:right-20 -translate-y-1/2 text-right max-w-sm"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">{t.scrollElegance}</span>
            <h3 className="text-4xl md:text-7xl font-serif font-black text-secondary leading-tight">{t.scrollEleganceTitle.split('Sanat')[0]}<span className="text-primary italic">Sanat</span>{t.scrollEleganceTitle.split('Sanat')[1]}</h3>
            <div className="w-12 h-[2px] bg-primary mt-6 mb-4 ml-auto" />
            <p className="text-secondary/60 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">{t.scrollEleganceDesc}</p>
          </motion.div>

          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.8, 0.9, 0.95, 1], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0.8, 1], [50, -50])
            }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center max-w-xl"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">{t.scrollExperience}</span>
            <h3 className="text-4xl md:text-7xl font-serif font-black text-secondary leading-tight">{t.scrollExperienceTitle.split('Özel')[0]}<span className="text-primary italic">Özel</span>{t.scrollExperienceTitle.split('Özel')[1]}</h3>
            <div className="w-12 h-[2px] bg-primary mt-6 mb-4 mx-auto" />
            <p className="text-secondary/60 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold uppercase">{t.scrollExperienceDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowerScroll;
