import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden" id="about">
      {/* Decorative Images - KEEP EXISTING 3D IMAGES */}
      {/* Top-left: Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego"
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center clamp(3rem, 12vw, 160px)">
            About Me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <AnimatedText
            text="I&apos;m Mohamed Magdy, a student interested in cybersecurity, security research, and competitive CTF challenges. I enjoy understanding how systems work, finding weaknesses, and building practical tools and experiments around cybersecurity and AI. Outside cybersecurity, I also participate in activities that develop research, reading, teamwork, and communication."
          />
        </div>
      </div>
    </section>
  );
};