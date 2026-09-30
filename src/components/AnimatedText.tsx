import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

// Separate component for each animated character to properly use useTransform
const AnimatedChar = ({ 
  char, 
  index, 
  totalChars, 
  scrollYProgress, 
  delay 
}: { 
  char: string; 
  index: number; 
  totalChars: number; 
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  delay: number;
}) => {
  const opacity = useTransform(scrollYProgress, [
    index / Math.max(totalChars, 1),
    (index + 1) / Math.max(totalChars, 1),
  ], [0.2, 1]);

  return (
    <motion.span
      style={{
        display: 'inline-block',
        willChange: 'opacity',
        opacity: opacity, // Pass MotionValue directly to style
      }}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }} // Target value, actual animation driven by scroll
      transition={{
        duration: 0.3,
        delay: delay + index * 0.01,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    setChars(text.split(''));
  }, [text]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p
      ref={ref}
      className={`
        text-[#D7E2EA] font-medium text-center leading-relaxed
        max-w-[560px] mx-auto
        text-[clamp(1rem,2vw,1.35rem)]
        ${className}
      `}
      style={{ opacity: 1 }}
    >
      <span style={{ visibility: 'hidden', position: 'relative', display: 'inline-block' }}>
        {text}
      </span>
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          maxWidth: '560px',
        }}
        aria-hidden="true"
      >
        {chars.map((char, index) => (
          <AnimatedChar
            key={index}
            char={char}
            index={index}
            totalChars={chars.length}
            scrollYProgress={scrollYProgress}
            delay={delay}
          />
        ))}
      </span>
    </p>
  );
};