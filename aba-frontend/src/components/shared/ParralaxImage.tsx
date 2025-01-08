"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  scrollSpeed?: number;
  className?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  width,
  height,
  scrollSpeed = 0.2,
  className = "",
}) => {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        imgRef.current.style.transform = `translateY(${
          scrollY * -scrollSpeed
        }px)`; // Adjust scroll speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollSpeed]);

  return (
    <div ref={imgRef} className={`parallax-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default ParallaxImage;
