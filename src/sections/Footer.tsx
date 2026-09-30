import { FadeIn } from '../components/FadeIn';

export const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 border-t border-[#D7E2EA]/10">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={20}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-black uppercase text-[#D7E2EA] text-[clamp(1.5rem,4vw,3rem)] leading-tight tracking-tight">
                Mohamed Magdy
              </p>
              <p className="mt-2 font-light text-[#D7E2EA]/60 uppercase tracking-wide text-[clamp(0.75rem,1.4vw,1rem)]">
                Cybersecurity &bull; Research &bull; Technology
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 sm:gap-6">
              <a
                href="https://github.com/0xvandex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA]/60 hover:text-[#00D9FF] transition-colors duration-200 font-medium uppercase tracking-wider text-sm sm:text-base"
              >
                GitHub
              </a>
              <a
                href="https://medium.com/@0xvandex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA]/60 hover:text-[#00D9FF] transition-colors duration-200 font-medium uppercase tracking-wider text-sm sm:text-base"
              >
                Medium
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};