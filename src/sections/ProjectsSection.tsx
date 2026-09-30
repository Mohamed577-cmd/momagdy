import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';

interface Project {
  number: string;
  title: string;
  description: string;
  images: {
    col1Image1: string;
    col1Image2: string;
    col2Image: string;
  };
  tags?: string[];
}

// Centralized project data - easy to edit
const projects: Project[] = [
  {
    number: '01',
    title: 'Cybersecurity Research',
    description: 'Research and experimentation across web security and modern security techniques.',
    images: {
      col1Image1: '/images/projects/re.webp',
      col1Image2: '/images/projects/re1.webp',
      col2Image: '/images/projects/caido.webp',
    },
    tags: ['Web Security', 'Reverse Engineering', 'Tools'],
  },
  {
    number: '02',
    title: 'CTF & Security',
    description: 'Participation in competitive Capture The Flag challenges and security competitions.',
    images: {
      col1Image1: '/images/projects/ctf1.jpeg',
      col1Image2: '/images/projects/ctf2.jpeg',
      col2Image: '/images/projects/ctf3.jpeg',
    },
    tags: ['CTF', 'Competitions', 'Security'],
  },
  {
    number: '03',
    title: 'AI × Cybersecurity',
    description: 'Exploring the intersection of artificial intelligence and security research.',
    images: {
      col1Image1: '/images/projects/ai-cyber-01.png',
      col1Image2: '/images/projects/ai-cyber-02.png',
      col2Image: '/images/projects/ai-cyber-03.png',
    },
    tags: ['AI', 'Security Research', 'Experiments'],
  },
];

const ProjectCard = ({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -index * 100]);

  return (
    <motion.div
      ref={ref}
      className="relative z-10"
      style={{
        position: 'sticky',
        top: `${24 + index * 28}px`,
        height: '85vh',
        willChange: 'transform, opacity',
      }}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          willChange: 'transform, opacity',
        }}
      >
        <div
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        >
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none shrink-0">
              {project.number}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
              <span className="font-medium uppercase text-[#D7E2EA]/60 text-sm sm:text-base">
                {project.number} — {project.title}
              </span>
              <h3 className="font-black uppercase text-[#D7E2EA] text-[clamp(1.5rem,4vw,3.5rem)] leading-tight whitespace-nowrap sm:whitespace-normal">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#00D9FF]/80 border border-[#00D9FF]/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Row - Image Grid */}
          <div className="grid grid-cols-5 gap-4">
            {/* Left Column - 40% (2/5) */}
            <div className="col-span-2 flex flex-col gap-4">
              <img
                src={project.images.col1Image1}
                alt={`${project.title} - Image 1`}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full object-cover"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
                loading="lazy"
              />
              <img
                src={project.images.col1Image2}
                alt={`${project.title} - Image 2`}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full object-cover"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
                loading="lazy"
              />
            </div>

            {/* Right Column - 60% (3/5) */}
            <div className="col-span-3">
              <img
                src={project.images.col2Image}
                alt={`${project.title} - Main Image`}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full h-full object-cover"
                style={{ height: 'clamp(320px, 42vw, 600px)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const totalCards = projects.length;

  return (
    <section className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pb-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center clamp(3rem, 12vw, 160px) mb-16 sm:mb-20 md:mb-28">
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} totalCards={totalCards} />
          ))}
        </div>
      </div>
    </section>
  );
};