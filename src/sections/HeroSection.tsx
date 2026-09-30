import { motion } from 'framer-motion';
import { Magnet } from '../components/Magnet';
import { FadeIn } from '../components/FadeIn';

export const HeroSection = () => {
  const navLinks = ['About', 'Achievements', 'Projects', 'Priorities'];

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip" id="home">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
          <div className="flex gap-4 md:gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading - Stacked layout for better fit */}
      <FadeIn delay={0.15} y={40}>
        <div className="w-full overflow-hidden px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5">
          <div className="flex flex-col leading-none">
            <h1 className="hero-heading font-black uppercase tracking-tight whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]">
              Hi,
            </h1>
            <h1 className="hero-heading font-black uppercase tracking-tight whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-[-0.1em]">
              i&apos;m mohamed
            </h1>
          </div>
        </div>
      </FadeIn>

      {/* Bottom Bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug clamp(0.75rem, 1.4vw, 1.5rem) max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            student &bull; cybersecurity researcher &bull; ctf player
          </p>
        </div>
      </FadeIn>

      {/* Hero Portrait - Slightly larger, responsive */}
      <FadeIn delay={0.6} y={30}>
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[540px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="relative"
          >
            <img
              src="/jack-portrait.png"
              alt="Mohamed Magdy Portrait"
              className="w-full h-auto rounded-full object-cover"
            />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};