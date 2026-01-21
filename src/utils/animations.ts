import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Framer Motion variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// GSAP 애니메이션 함수들
export const gsapFadeIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const gsapSlideIn = (
  element: HTMLElement | null,
  direction: "left" | "right" | "up" | "down" = "left"
) => {
  if (!element) return;
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 },
  };
  gsap.fromTo(
    element,
    { opacity: 0, ...directions[direction] },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }
  );
};

export const gsapScaleIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)",
    }
  );
};

export const gsapScrollReveal = (
  element: HTMLElement | null,
  options?: {
    trigger?: string | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean;
  }
) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: options?.trigger || element,
        start: options?.start || "top 80%",
        end: options?.end || "top 50%",
        scrub: options?.scrub || false,
      },
    }
  );
};

export const gsapParallax = (
  element: HTMLElement | null,
  speed: number = 0.5
) => {
  if (!element) return;
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
