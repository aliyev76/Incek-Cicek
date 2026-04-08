"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export const Hero3DFlowers = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { damping: 20 });

  function handleMouse(event: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const [mounted, setMounted] = React.useState(false);
  const [petals, setPetals] = React.useState<any[]>([]);

  React.useEffect(() => {
    setMounted(true);
    const isMobile = window.innerWidth < 1024;
    const count = isMobile ? 6 : 12;
    const newPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: (isMobile ? 15 : 20) + Math.random() * 40,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      rotateZ: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full perspective-1000 overflow-hidden"
    >
      {/* 3D Floating Petals - only on client */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{ 
                x: `${petal.x}%`, 
                y: '-20%', 
                rotateZ: petal.rotateZ,
                opacity: 0 
              }}
              animate={{ 
                y: '120%', 
                rotateZ: petal.rotateZ + 720,
                opacity: [0, 0.6, 0.6, 0] 
              }}
              transition={{ 
                duration: petal.duration, 
                repeat: Infinity, 
                delay: petal.delay,
                ease: "linear"
              }}
              className="absolute"
              style={{ width: petal.size, height: petal.size }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full filter drop-shadow-xl">
                 <path 
                   d="M12 21.5C12 21.5 8 18 8 14C8 11.5 10 10.5 12 10.5C14 10.5 16 11.5 16 14C16 18 12 21.5 12 21.5Z" 
                   fill={petal.id % 2 === 0 ? "#b04c5a" : "#fce4ec"} 
                   className="opacity-40"
                 />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      {/* 3D Content Container - Always render to avoid layout shift */}
      <motion.div
        style={{
          rotateX: mounted ? rotateX : 0,
          rotateY: mounted ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative z-20"
      >
        {children}
      </motion.div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};
