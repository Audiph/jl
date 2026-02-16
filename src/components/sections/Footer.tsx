'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Gitlab, Linkedin, Mail } from 'lucide-react';
import { socialLinks, personalInfo } from '@/data/portfolio-data';

const iconMap = {
  gitlab: Gitlab,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <footer id="contact" ref={sectionRef} className="section-padding relative">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(24, 196, 168, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-mono text-primary text-sm">05</span>
          <h2 className="heading-md">Contact</h2>
          <span className="bg-border h-[1px] flex-1" />
        </motion.div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Interested in working together?
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="heading-lg mb-8"
          >
            Let&apos;s build something <span className="text-gradient">amazing</span> together
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-primary text-primary-foreground hover:glow-effect inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.icon !== 'mail' ? '_blank' : undefined}
                  rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                  className="border-border text-muted-foreground hover:border-primary hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="border-border mt-24 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        >
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gradient font-semibold">{personalInfo.name}</span> &mdash; All
            rights reserved
          </p>
        </motion.div>

        {/* Big Logo Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ delay: 1 }}
          className="text-foreground pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold whitespace-nowrap select-none"
        >
          JL
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
