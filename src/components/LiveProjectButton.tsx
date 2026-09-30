import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  className?: string;
}

export const LiveProjectButton = ({ className = '' }: LiveProjectButtonProps) => {
  return (
    <motion.button
      className={`
        rounded-full border-2 border-[#00D9FF]
        text-[#00D9FF] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#00D9FF]/10
        transition-colors duration-200
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      View Project
    </motion.button>
  );
};