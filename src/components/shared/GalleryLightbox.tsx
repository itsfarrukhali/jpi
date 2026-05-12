"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex = 0,
  onClose,
}: GalleryLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const total = images.length;

  const goNext = useCallback(
    () => setCurrent((prev) => (prev + 1) % total),
    [total],
  );
  const goPrev = useCallback(
    () => setCurrent((prev) => (prev - 1 + total) % total),
    [total],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        title="Close gallery"
        className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white"
      >
        <X size={28} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 text-white text-sm">
        {current + 1} / {total}
      </div>

      {/* Image */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
        <Image
          src={images[current]}
          alt={`Convocation 2025 - ${current + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 80vw"
          priority={current === initialIndex}
          quality={85}
        />
      </div>

      {/* Navigation arrows */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            title="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white bg-black/30 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            title="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white bg-black/30 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}
    </div>
  );
}
