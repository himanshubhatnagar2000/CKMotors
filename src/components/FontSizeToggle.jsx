import React, { useState, useEffect } from 'react';
import { Type, Plus, Minus, RotateCcw } from 'lucide-react';

export default function FontSizeToggle() {
  const [fontSizeScale, setFontSizeScale] = useState(() => {
    const saved = localStorage.getItem('ckmotors_fontsizescale');
    return saved ? parseInt(saved, 10) : 100;
  });

  useEffect(() => {
    localStorage.setItem('ckmotors_fontsizescale', fontSizeScale);
    document.documentElement.style.fontSize = `${fontSizeScale}%`;
  }, [fontSizeScale]);

  const handleIncrease = () => {
    setFontSizeScale((prev) => Math.min(140, prev + 5)); // Increment by +5% per click
  };

  const handleDecrease = () => {
    setFontSizeScale((prev) => Math.max(75, prev - 5)); // Decrement by -5% per click
  };

  const handleReset = () => {
    setFontSizeScale(100);
  };

  return (
    <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full text-xs font-semibold text-white shadow-sm">
      <Type size={14} className="ml-1.5 text-blue-200 shrink-0" />

      {/* Decrease Button (-) */}
      <button
        type="button"
        onClick={handleDecrease}
        disabled={fontSizeScale <= 75}
        className="px-2 py-1 rounded-full text-[11px] font-bold text-white/90 hover:text-white hover:bg-white/20 disabled:opacity-40 transition-all cursor-pointer flex items-center justify-center"
        title="Decrease Text Size"
      >
        <Minus size={13} />
      </button>

      {/* Current Scale Percentage / Reset Button */}
      <button
        type="button"
        onClick={handleReset}
        className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all cursor-pointer ${
          fontSizeScale !== 100
            ? 'bg-white text-tata-blue shadow-sm scale-105'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        title="Reset Text Size to 100%"
      >
        {fontSizeScale}%
      </button>

      {/* Increase Button (+) */}
      <button
        type="button"
        onClick={handleIncrease}
        disabled={fontSizeScale >= 140}
        className="px-2 py-1 rounded-full text-[11px] font-bold text-white/90 hover:text-white hover:bg-white/20 disabled:opacity-40 transition-all cursor-pointer flex items-center justify-center"
        title="Increase Text Size"
      >
        <Plus size={13} />
      </button>
    </div>
  );
}
