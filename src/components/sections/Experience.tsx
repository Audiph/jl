'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { experiences } from '@/data/portfolio-data';
import type { Experience as ExperienceType } from '@/types';
import type { AnimationType } from '@/types';

const revealTypes: AnimationType[] = ['fade-right', 'fade-left', 'fade-right', 'fade-left'];

const ExperienceCard = ({ experience, index }: { experience: ExperienceType; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <ScrollReveal type={revealTypes[index % 4]} delay={index * 0.15}>
      <div ref={cardRef} className="relative pb-10 pl-8 last:pb-0">
        {/* Timeline Line */}
        <div className="bg-border absolute top-0 bottom-0 left-0 w-0.5">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: index * 0.15 }}
            className="from-primary w-full bg-linear-to-b to-transparent"
          />
        </div>

        {/* Timeline Dot */}
        <div className="absolute top-0 left-0 flex h-4 w-0.5 items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            className="glow-effect bg-primary absolute -left-1.25 h-3 w-3 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="glass-card hover:border-primary/30 rounded-xl p-6 transition-colors duration-300 lg:p-8">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="mb-1 text-xl font-bold">{experience.role}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
            <span className="text-mono bg-secondary text-muted-foreground rounded-full px-3 py-1 text-sm">
              {experience.period}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <span
                key={highlight}
                className="text-mono border-border text-muted-foreground rounded-full border px-3 py-1 text-xs"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="bg-card/30 relative py-20 md:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal type="flip">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-mono text-primary text-sm">04</span>
            <h2 className="heading-md">Experience</h2>
            <span className="bg-border h-px flex-1" />
          </div>
        </ScrollReveal>

        {/* Experience Timeline */}
        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Download CV */}
        <ScrollReveal type="scale" delay={0.5}>
          <div className="mt-12 text-center">
            <motion.a
              href="https://1drv.ms/b/c/12a5aecd42f99f92/IQAL34jswWxxTJUF0As_h3orAX9SmEG9PQPs6u3wg81qONM?e=H6CTjh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-3 rounded-full border px-8 py-4 font-semibold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
