// hooks/useSlider.js
import { useState, useEffect } from 'react';

export const useSlider = (items, delay = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const goTo = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, delay);
    return () => clearInterval(interval);
  }, [isPlaying, delay]);

  return { currentIndex, isPlaying, next, prev, goTo, setIsPlaying };
};