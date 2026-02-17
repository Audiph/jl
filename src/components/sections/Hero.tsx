'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { heroCodeSnippet } from '@/data/portfolio-data';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="pointer-events-none absolute top-1/4 -right-1/4 h-200 w-200 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(24, 196, 168, 0.15) 0%, transparent 70%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-150 w-150 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(24, 196, 168, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10 pt-32">
        <div className="max-w-5xl">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="bg-primary h-0.5 w-12" />
            <span className="text-mono text-primary text-sm tracking-wider">Software Engineer</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="heading-xl mb-8">
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                className="block"
              >
                Building
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.55, ease: 'easeOut' }}
                className="text-gradient block"
              >
                digital
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
                className="block"
              >
                experiences
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.85, ease: 'easeOut' }}
                className="text-muted-foreground block"
              >
                that matter.
              </motion.span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: 'easeOut' }}
            className="text-muted-foreground mb-12 max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            Passionate about transforming complex ideas into elegant, performant solutions.
            Specialized in React, NextJS, TypeScript, and modern web architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.4, ease: 'easeOut' }}
            className="mb-4 flex flex-wrap justify-end gap-4 sm:mb-0 sm:justify-start"
          >
            <motion.a
              href="#projects"
              className="group bg-primary text-primary-foreground hover:glow-effect inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="border-border text-foreground hover:bg-secondary inline-flex items-center gap-3 rounded-full border px-8 py-4 font-semibold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
        className="absolute bottom-8 left-8 flex flex-col items-center gap-2"
      >
        <span className="text-mono text-muted-foreground text-xs tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="from-primary h-12 w-px bg-linear-to-b to-transparent"
        />
      </motion.div>

      {/* Floating Code Snippet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="text-mono text-muted-foreground absolute top-1/3 right-12 hidden text-xs lg:block"
      >
        <pre className="leading-relaxed">{heroCodeSnippet}</pre>
      </motion.div>
    </section>
  );
};

export default Hero;
