'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModalContent = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = project.screenshots;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="bg-background/90 fixed inset-0 z-50 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-4 z-50 overflow-hidden md:inset-8 lg:inset-16"
      >
        <div className="border-border bg-card relative flex h-full w-full flex-col overflow-hidden rounded-2xl border lg:flex-row">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="border-border bg-background/50 hover:border-primary hover:bg-background absolute top-4 right-4 z-10 rounded-full border p-2 backdrop-blur-sm transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image Gallery */}
          <div className="bg-secondary relative h-64 w-full lg:h-full lg:w-3/5">
            <Image
              src={allImages[currentImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Image Navigation */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="border-border bg-background/50 hover:border-primary hover:bg-background absolute top-1/2 left-4 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="border-border bg-background/50 hover:border-primary hover:bg-background absolute top-1/2 right-4 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-foreground/30 hover:bg-foreground/50 w-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <div className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-mono text-primary text-sm">{project.year}</span>
              <span className="bg-border h-1 w-1 rounded-full" />
              <span className="text-muted-foreground text-sm">{project.role}</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">{project.title}</h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">{project.longDescription}</p>

            {/* Tags */}
            <div className="mb-8">
              <h4 className="text-muted-foreground mb-3 text-sm font-semibold">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-mono border-border/30 bg-secondary/80 text-muted-foreground rounded-lg border px-3 py-1.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:glow-effect inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </motion.a>
              )}
              {project.codeLink && (
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="h-4 w-4" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && project && <ProjectModalContent project={project} onClose={onClose} />}
    </AnimatePresence>
  );
};

export default ProjectModal;
