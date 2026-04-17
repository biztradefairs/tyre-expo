// components/ui/carousel.tsx
"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type CarouselContextType = {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollTo: (index: number) => void;
  selectedIndex: number;
  totalItems: number;
};

const CarouselContext = createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
};

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  opts?: {
    loop?: boolean;
    align?: "start" | "center" | "end";
  };
}

export const Carousel: React.FC<CarouselProps> = ({ children, className = "", opts = {} }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  // Default to false if loop is undefined
  const isLoop = opts.loop ?? false;

  const scrollPrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (isLoop && totalItems > 0) {
      setSelectedIndex(totalItems - 1);
    }
  };

  const scrollNext = () => {
    if (selectedIndex < totalItems - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (isLoop && totalItems > 0) {
      setSelectedIndex(0);
    }
  };

  const scrollTo = (index: number) => {
    if (index >= 0 && index < totalItems) {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    // Fix: Use boolean values explicitly, not undefined
    const prev = selectedIndex > 0 || (isLoop && totalItems > 0);
    const next = selectedIndex < totalItems - 1 || (isLoop && totalItems > 0);
    
    setCanScrollPrev(prev);
    setCanScrollNext(next);
  }, [selectedIndex, totalItems, isLoop]);

  return (
    <CarouselContext.Provider
      value={{
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        scrollTo,
        selectedIndex,
        totalItems,
      }}
    >
      <div className={`relative ${className}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === CarouselContent) {
            return React.cloneElement(child as React.ReactElement<any>, {
              setTotalItems,
              selectedIndex,
            });
          }
          return child;
        })}
      </div>
    </CarouselContext.Provider>
  );
};

interface CarouselContentProps {
  children: React.ReactNode;
  className?: string;
  setTotalItems?: (count: number) => void;
  selectedIndex?: number;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  className = "",
  setTotalItems,
  selectedIndex = 0,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (setTotalItems) {
      setTotalItems(childrenArray.length);
    }
  }, [childrenArray.length, setTotalItems]);

  useEffect(() => {
    if (contentRef.current && itemWidth > 0) {
      contentRef.current.scrollTo({
        left: selectedIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [selectedIndex, itemWidth]);

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        const firstChild = contentRef.current.children[0] as HTMLElement;
        if (firstChild) {
          const style = window.getComputedStyle(firstChild);
          const marginLeft = parseFloat(style.marginLeft) || 0;
          const marginRight = parseFloat(style.marginRight) || 0;
          setItemWidth(firstChild.offsetWidth + marginLeft + marginRight);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [children]);

  return (
    <div
      ref={contentRef}
      className={`overflow-hidden ${className}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex">{children}</div>
    </div>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, className = "" }) => {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
};

interface CarouselPreviousProps {
  className?: string;
}

export const CarouselPrevious: React.FC<CarouselPreviousProps> = ({ className = "" }) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md disabled:opacity-50 ${className}`}
      aria-label="Previous slide"
    >
      ←
    </button>
  );
};

interface CarouselNextProps {
  className?: string;
}

export const CarouselNext: React.FC<CarouselNextProps> = ({ className = "" }) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md disabled:opacity-50 ${className}`}
      aria-label="Next slide"
    >
      →
    </button>
  );
};