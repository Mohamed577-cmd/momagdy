import { FadeIn } from '../components/FadeIn';

interface Achievement {
  number: string;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    number: '01',
    title: 'Cybersecurity',
    description: 'Security certifications, cybersecurity study, and practical security research.',
  },
  {
    number: '02',
    title: 'CTF',
    description: 'Participation in competitive Capture The Flag challenges.',
  },
  {
    number: '03',
    title: 'Security Research',
    description: 'Research and experimentation across web security and modern security techniques.',
  },
  {
    number: '04',
    title: 'Reading & Research',
    description: 'Participation in reading/research activities, including the October 1973-related competition.',
  },
];

export const AchievementsSection = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="achievements">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center clamp(3rem, 12vw, 160px) mb-16 sm:mb-20 md:mb-28">
            Achievements
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {achievements.map((achievement, index) => (
            <FadeIn key={achievement.number} delay={index * 0.1} y={20}>
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 sm:py-10 md:py-12 border-b border-[#D7E2EA]/15 last:border-0"
                style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
              >
                <span className="font-black text-[#00D9FF] shrink-0 text-[clamp(3rem,10vw,140px)] leading-none">
                  {achievement.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium uppercase text-[#D7E2EA] text-[clamp(1rem,2.2vw,2.1rem)] leading-tight mb-2">
                    {achievement.title}
                  </h3>
                  <p className="font-light text-[#D7E2EA]/60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {achievement.description}
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