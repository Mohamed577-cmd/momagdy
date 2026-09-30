import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { WhatIDoSection } from './sections/WhatIDoSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { PrioritiesSection } from './sections/PrioritiesSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <WhatIDoSection />
      <ProjectsSection />
      <PrioritiesSection />
      <Footer />
    </div>
  );
}

export default App;