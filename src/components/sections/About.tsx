'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { personalInfo, stats } from '@/data/portfolio-data';

gsap.registerPlugin(ScrollTrigger);

const photos = [{ src: '/images/avatar.png', alt: 'Jeff Lagarde', caption: 'Full Stack Engineer' }];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stat', {
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="text-mono text-primary text-sm">01</span>
          <h2 className="heading-md">About Me</h2>
          <span className="bg-border h-[1px] flex-1" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhoto}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={photos[currentPhoto].src}
                    alt={photos[currentPhoto].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Photo Caption */}
              <motion.div
                key={`caption-${currentPhoto}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="from-background/90 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6"
              >
                <p className="text-lg font-medium">{photos[currentPhoto].caption}</p>
              </motion.div>

              {/* Navigation Arrows */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="border-border bg-background/80 hover:border-primary hover:bg-primary absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="border-border bg-background/80 hover:border-primary hover:bg-primary absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Decorative Elements */}
              <div className="border-primary/30 pointer-events-none absolute -top-4 -right-4 h-24 w-24 rounded-full border" />
              <div className="bg-primary/10 pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full" />
            </div>

            {/* Photo Indicators */}
            {photos.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentPhoto
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-bold">
              Hey, I&apos;m <span className="text-gradient">{personalInfo.firstName}</span>!
            </h3>

            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-5 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="about-stats mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="about-stat border-border/50 bg-card/50 rounded-xl border p-4 text-center"
                >
                  <div className="text-gradient mb-1 text-3xl font-bold">{stat.number}</div>
                  <div className="text-mono text-muted-foreground text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
