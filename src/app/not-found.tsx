'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const easeOut: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  const animate = (
    props: { opacity: number; y?: number; scale?: number },
    delay: number,
    duration: number,
  ) =>
    prefersReducedMotion
      ? { initial: props, animate: props, transition: {} }
      : {
          initial: { opacity: 0, y: props.y ?? 0, scale: props.scale ?? 1 },
          animate: props,
          transition: { delay, duration, ease: easeOut },
        };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <motion.div
        initial={{ opacity: prefersReducedMotion ? 0.3 : 0 }}
        animate={{ opacity: 0.3 }}
        transition={prefersReducedMotion ? {} : { duration: 1.5 }}
        className="pointer-events-none absolute top-1/4 -right-1/4 h-200 w-200 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(24, 196, 168, 0.15) 0%, transparent 70%)',
        }}
      />
      <motion.div
        initial={{ opacity: prefersReducedMotion ? 0.2 : 0 }}
        animate={{ opacity: 0.2 }}
        transition={prefersReducedMotion ? {} : { duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-150 w-150 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(24, 196, 168, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* 404 Text */}
        <motion.div
          {...animate({ opacity: 1, scale: 1 }, 0.1, 0.5)}
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        >
          <motion.p
            animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
            transition={
              prefersReducedMotion ? {} : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
            className="text-gradient text-[8rem] leading-none font-bold tracking-tighter md:text-[12rem] lg:text-[16rem]"
          >
            404
          </motion.p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...animate({ opacity: 1, y: 0 }, 0.3, 0.4)}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="heading-lg mb-4"
        >
          Page not found
        </motion.h1>

        {/* Description */}
        <motion.p
          {...animate({ opacity: 1, y: 0 }, 0.45, 0.4)}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-muted-foreground mb-10 text-lg"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          {...animate({ opacity: 1, y: 0 }, 0.6, 0.4)}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/"
              className="group bg-primary text-primary-foreground hover:glow-effect inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
