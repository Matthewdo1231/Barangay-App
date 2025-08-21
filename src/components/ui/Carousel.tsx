"use client"

import { ReactElement, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type Transition,
} from "motion/react";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import type { PanInfo } from "framer-motion";

type CarouselItem = {
  title: string;
  description: string;
  id: number;
  icon: ReactElement;
};

type CarouselProps = {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
};

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
  },
];

const GAP = 16;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;

const SPRING_OPTIONS: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const NO_TRANSITION: Transition = {
  duration: 0,
};

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1 && loop) return prev + 1;
        if (prev >= carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    pauseOnHover,
    loop,
    items.length,
    carouselItems.length,
  ]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;

    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === items.length - 1
          ? prev + 1
          : Math.min(prev + 1, carouselItems.length - 1)
      );
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === 0 ? items.length - 1 : Math.max(prev - 1, 0)
      );
    }
  };

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const effectiveTransition: Transition = isResetting
    ? NO_TRANSITION
    : SPRING_OPTIONS;

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
    <div
      ref={containerRef}
        className={`relative overflow-hidden p-4 ${
       round ? "rounded-full" : "rounded-[24px]"
        }`}

      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onDragEnd={handleDragEnd}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const rotateY = useTransform(
            x,
            [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ],
            [90, 0, -90],
            { clamp: false }
          );

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={round ? "p-0 m-0" : "mb-4 p-5"}>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
                  {item.icon}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-white">{item.title}</div>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Dots */}
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => {
            const isActive = currentIndex % items.length === index;
            return (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                  isActive
                    ? round
                      ? "bg-white"
                      : "bg-[#333333]"
                    : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
                }`}
                animate={{ scale: isActive ? 1.2 : 1 }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </section> 
  );
}
