import { FadeIn } from '../components/FadeIn';

interface WhatIDoItem {
  number: string;
  name: string;
  description: string;
}

const whatIDoItems: WhatIDoItem[] = [
  {
    number: '01',
    name: 'Cybersecurity',
    description: 'Security certifications, cybersecurity study, and practical security research.',
  },
  {
    number: '02',
    name: 'Security Research',
    description: 'Research and experimentation across web security and modern security techniques.',
  },
  {
    number: '03',
    name: 'CTF',
    description: 'Participation in competitive Capture The Flag challenges.',
  },
  {
    number: '04',
    name: 'AI × Cybersecurity',
    description: 'Exploring the intersection of artificial intelligence and security.',
  },
  {
    number: '05',
    name: 'Building Security Tools',
    description: 'Creating practical tools and experiments for cybersecurity workflows.',
  },
];

export const WhatIDoSection = () => {
  return (
    <section className="bg-[#080A0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="what-i-do">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center clamp(3rem, 12vw, 160px) mb-16 sm:mb-20 md:mb-28">
            What I Do
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {whatIDoItems.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={20}>
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 sm:py-10 md:py-12 border-b last:border-0"
                style={{ borderColor: 'rgba(0, 217, 255, 0.15)' }}
              >
                <span className="font-black text-[#00D9FF] shrink-0 text-[clamp(3rem,10vw,140px)] leading-none">
                  {item.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium uppercase text-[#D7E2EA] text-[clamp(1rem,2.2vw,2.1rem)] leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="font-light text-[#D7E2EA]/60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};