'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import ProjectModal from '@/components/ui/ProjectModal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/data/portfolio-data';
import type { Project } from '@/types';
import type { AnimationType } from '@/types';
import Link from 'next/link';

const revealTypes: AnimationType[] = ['fade-up', 'scale', 'fade-left', 'fade-right'];

const ProjectCard = ({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}) => {
  return (
    <ScrollReveal type={revealTypes[index % 4]} delay={index * 0.1}>
      <div className="group relative">
        <div className="border-border/50 from-card to-card/50 hover:border-primary/40 hover:shadow-primary/10 relative overflow-hidden rounded-2xl border bg-linear-to-br transition-all duration-500 hover:shadow-2xl">
          {/* Gradient Overlay */}
          <div className="from-primary/5 to-accent/5 absolute inset-0 bg-linear-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Image Container */}
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="from-card absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60" />

            {/* Featured Badge */}
            {project.featured && (
              <div className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                Featured
              </div>
            )}

            {/* Year Badge */}
            <div className="bg-background/50 text-foreground absolute top-4 right-4 rounded-full px-3 py-1 font-mono text-xs backdrop-blur-sm">
              {project.year}
            </div>

            {/* Hover Overlay */}
            <motion.div className="bg-background/90 absolute inset-0 flex items-center justify-center gap-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <motion.button
                onClick={() => onOpenModal(project)}
                className="bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-secondary hover:border-primary rounded-full border p-3 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
              {project.codeLink && (
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-secondary hover:border-primary rounded-full border p-3 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative p-6 lg:p-8">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <span className="text-muted-foreground mb-1 block text-xs">{project.role}</span>
                <h3 className="group-hover:text-primary text-xl font-bold transition-colors duration-300 lg:text-2xl">
                  {project.title}
                </h3>
              </div>
              <motion.button
                onClick={() => onOpenModal(project)}
                className="border-border/50 bg-secondary/50 hover:border-primary hover:bg-primary/10 hover:text-primary rounded-xl border p-2.5 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -45 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.button>
            </div>

            <p className="text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-mono border-border/30 bg-secondary/80 text-muted-foreground hover:border-primary/50 hover:text-primary rounded-lg border px-3 py-1.5 text-xs transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-mono bg-secondary/80 text-muted-foreground rounded-lg px-3 py-1.5 text-xs">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" ref={sectionRef} className="bg-card/30 relative py-20 md:py-28">
        <div className="noise-overlay pointer-events-none absolute inset-0" />

        <div className="container-custom relative">
          {/* Section Header */}
          <ScrollReveal type="blur">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-mono text-primary text-sm">02</span>
              <h2 className="heading-md">Projects</h2>
              <span className="bg-border h-px flex-1" />
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal type="fade-up" delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-2">
              <span className="group inline-flex items-center gap-2 font-medium">
                View all projects on
                <Link
                  href="https://github.com/Audiph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium"
                >
                  GitHub
                </Link>
                /
                <Link
                  href="https://gitlab.com/jlagarde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium"
                >
                  Gitlab
                </Link>
                <svg
                  className="text-primary transition-transform duration-300 group-hover:translate-x-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;
