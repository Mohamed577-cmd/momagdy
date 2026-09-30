import { motion } from 'framer-motion';

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className = '' }: ContactButtonProps) => {
  return (
    <motion.button
      className={`
        rounded-full
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-white font-medium uppercase tracking-widest
        text-xs sm:text-sm md:text-base
        ${className}
      `}
      style={{
        background: 'linear-gradient(123deg, #080A0C 0%, #00D9FF 50%, #C9A227 100%)',
        boxShadow: '0px 4px 4px rgba(0, 217, 255, 0.25), 4px 4px 12px rgba(201, 162, 39, 0.3) inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Contact Me
    </motion.button>
  );
};