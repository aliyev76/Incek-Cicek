"use client";

import React, { useEffect, useState } from "react";

const Flower = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute pointer-events-none animate-fall"
    style={style}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-sway"
      style={{ 
        color: Math.random() > 0.5 ? '#b04c5a' : '#fce4ec',
        opacity: 0.6 + Math.random() * 0.4
      }}
    >
      <path
        d="M12 21.5C12 21.5 8 18 8 14C8 11.5 10 10.5 12 10.5C14 10.5 16 11.5 16 14C16 18 12 21.5 12 21.5Z"
        fill="currentColor"
      />
      <path
        d="M12 2.5C12 2.5 16 6 16 10C16 12.5 14 13.5 12 13.5C10 13.5 8 12.5 8 10C8 6 12 2.5 12 2.5Z"
        fill="currentColor"
      />
      <path
        d="M21.5 12C21.5 12 18 16 14 16C11.5 16 10.5 14 10.5 12C10.5 10 11.5 8 14 8C18 8 21.5 12 21.5 12Z"
        fill="currentColor"
      />
      <path
        d="M2.5 12C2.5 12 6 8 10 8C12.5 8 13.5 10 13.5 12C13.5 14 12.5 16 10 16C6 16 2.5 12 2.5 12Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export const FallingFlowers = () => {
  const [flowers, setFlowers] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        "--duration": `${10 + Math.random() * 10}s`,
        "--sway-duration": `${2 + Math.random() * 3}s`,
        animationDelay: `${Math.random() * 10}s`,
        transform: `scale(${0.5 + Math.random()})`,
      } as React.CSSProperties,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {flowers.map((flower) => (
        <Flower key={flower.id} style={flower.style} />
      ))}
    </div>
  );
};
