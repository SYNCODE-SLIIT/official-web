"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

// Bubble config — deterministic so no hydration mismatch
const BUBBLES = [
  { w: 320, h: 320, left: "8%",  top: "10%",  dur: 7,  delay: 0,    opacity: 0.06 },
  { w: 180, h: 180, left: "75%", top: "5%",   dur: 9,  delay: 1.5,  opacity: 0.07 },
  { w: 240, h: 240, left: "60%", top: "55%",  dur: 11, delay: 0.8,  opacity: 0.05 },
  { w: 120, h: 120, left: "20%", top: "65%",  dur: 8,  delay: 2.2,  opacity: 0.09 },
  { w: 200, h: 200, left: "40%", top: "75%",  dur: 10, delay: 0.3,  opacity: 0.04 },
  { w: 90,  h: 90,  left: "88%", top: "70%",  dur: 6,  delay: 3,    opacity: 0.1  },
  { w: 150, h: 150, left: "50%", top: "15%",  dur: 12, delay: 1,    opacity: 0.05 },
  { w: 70,  h: 70,  left: "5%",  top: "85%",  dur: 7,  delay: 2.5,  opacity: 0.08 },
];

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const imageVariants = {
    enter: (dir: "left" | "right") => ({
      y: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      y: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden bg-[#0a0a0a] text-white p-8 md:p-12",
        className
      )}
    >
      {/* ── Animated bubbles ── */}
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.w,
            height: b.h,
            left: b.left,
            top: b.top,
            opacity: b.opacity,
            background:
              "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.25), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(1px)",
          }}
          animate={{
            y: [0, -22, 0, 14, 0],
            x: [0, 10, -8, 4, 0],
            scale: [1, 1.04, 0.97, 1.02, 1],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Subtle radial glow in centre ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* Left Column */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            <span className="text-sm text-white/50 font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
              Reviews
            </h2>
          </div>

          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex((r) => r.id === review.id);
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-lg w-16 h-20 md:w-20 md:h-24 opacity-50 hover:opacity-100 transition-opacity duration-300 ring-1 ring-white/10 hover:ring-white/30 focus:outline-none"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: Main Image */}
        <div className="md:col-span-4 relative h-80 min-h-[400px] md:min-h-[500px] order-1 md:order-2">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.imageSrc}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Right Column: Text and Navigation */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-sm font-medium text-white/45">
                  {activeReview.affiliation}
                </p>
                <h3 className="text-xl font-semibold mt-1 text-white">
                  {activeReview.name}
                </h3>
                <blockquote className="mt-6 text-2xl md:text-3xl font-medium leading-snug text-white">
                  "{activeReview.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center space-x-2 mt-8 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-12 h-12 bg-white text-black hover:bg-white/90"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
