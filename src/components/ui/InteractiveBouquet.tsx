"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SingleFlower = ({ delay, angle, distance, image, scale }: { delay: number, angle: number, distance: number, image: string, scale: number }) => {
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
      animate={{ 
        x, 
        y, 
        scale: [0, scale * 1.5, scale], 
        opacity: [0, 1, 0.9],
        rotate: angle * (180 / Math.PI) + (Math.random() * 45)
      }}
      exit={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className="absolute pointer-events-none"
    >
      <img 
        src={image} 
        alt="Flower" 
        className="w-20 h-20 object-contain mix-blend-screen drop-shadow-2xl filter brightness-110 contrast-125"
      />
    </motion.div>
  );
};

export const InteractiveBouquet = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [flowers, setFlowers] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    const flowerCount = 16;
    const flowerImages = [
      "/flower-red.png",
      "/flower-white.png",
      "/flower-pink.png",
      "/flower-foliage.png"
    ];

    const newFlowers = Array.from({ length: flowerCount }).map((_, i) => ({
      angle: (i * 2 * Math.PI) / flowerCount,
      delay: i * 0.03,
      distance: 160 + Math.random() * 80,
      scale: 0.6 + Math.random() * 0.8,
      image: flowerImages[Math.floor(Math.random() * flowerImages.length)]
    }));
    setFlowers(newFlowers);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src="/exploding-bouquet.png" 
          alt="Interactive Bouquet"
          className="w-full max-w-[500px] aspect-square object-contain opacity-100"
        />
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center cursor-pointer group/bouquet"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.3 : 0.1
        }}
        className="absolute w-64 h-64 bg-primary rounded-full blur-[100px] pointer-events-none"
      />

      {/* Main Bouquet Image */}
      <motion.div
        animate={{ 
          scale: isHovered ? 0.9 : 1,
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -10 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 w-full max-w-[500px] aspect-square"
      >
        <img 
          src="/exploding-bouquet.png" 
          alt="Interactive Bouquet"
          className="w-full h-full object-contain filter drop-shadow-2xl"
        />
      </motion.div>

      {/* Bursting Flowers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <AnimatePresence>
          {isHovered && flowers.map((f, i) => (
            <SingleFlower 
              key={i} 
              angle={f.angle} 
              delay={f.delay} 
              distance={f.distance}
              image={f.image}
              scale={f.scale}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
