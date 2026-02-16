'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { techCategories, recentTech, marqueeLogos } from '@/data/portfolio-data';
import type { AnimationType } from '@/types';

const TechBadge = ({
  name,
  experience,
  delay,
}: {
  name: string;
  experience: string;
  delay: number;
}) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(badgeRef, { once: true });

  return (
    <motion.div
      ref={badgeRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="border-border/50 bg-secondary/50 hover:border-primary/30 flex items-center justify-between rounded-xl border p-3 transition-colors"
    >
      <span className="font-medium">{name}</span>
      <span className="text-mono text-primary text-xs">{experience}</span>
    </motion.div>
  );
};

const categoryRevealTypes: AnimationType[] = ['rotate', 'scale', 'flip'];

const Technologies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="technologies" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="container-custom">
        {/* Tech Marquee */}
        <ScrollReveal type="blur" delay={0.1}>
          <div className="relative mb-12 overflow-hidden py-6">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...marqueeLogos, ...marqueeLogos].map((tech, i) => (
                <span
                  key={i}
                  className="text-muted/30 hover:text-primary mx-8 text-4xl font-bold transition-colors duration-300 md:text-5xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal type="slide-up">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-mono text-primary text-sm">03</span>
            <h2 className="heading-md">Technologies</h2>
            <span className="bg-border h-[1px] flex-1" />
          </div>
        </ScrollReveal>

        {/* Tech Categories */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              type={categoryRevealTypes[categoryIndex]}
              delay={categoryIndex * 0.15}
            >
              <div className="glass-card h-full rounded-2xl p-6 lg:p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
                  <span className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="text-primary text-sm">{category.emoji}</span>
                  </span>
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <TechBadge
                      key={tech.name}
                      name={tech.name}
                      experience={tech.experience}
                      delay={categoryIndex * 0.1 + techIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Recent Technologies */}
        <ScrollReveal type="fade-up" delay={0.3}>
          <div className="mt-16">
            <h3 className="mb-6 text-center text-lg font-semibold">
              <span className="text-gradient">Recent</span> technologies I&apos;m using
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {recentTech.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 cursor-default rounded-full border px-4 py-2 text-sm transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Info */}
        <ScrollReveal type="fade-up" delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Always exploring new technologies and methodologies. Currently diving into{' '}
              <span className="text-primary">AI/ML</span>,{' '}
              <span className="text-primary">Animations</span>,{' '}
              <span className="text-primary">Edge Computing</span>, and{' '}
              <span className="text-primary">Web Performance Optimization</span>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Technologies;
