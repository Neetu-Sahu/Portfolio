import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { aboutText, aboutPillars, navLinks, certifications, researchHighlights, projectList, skillGroups, socialLinks, education, events } from './data';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { CertificationModal } from './components/CertificationModal';
import { Education } from './components/Education';
import { Events } from './components/Events';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Spotlight } from './components/Spotlight';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Research } from './components/Research';
import { ResearchModal } from './components/ResearchModal';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Skills } from './components/Skills';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<typeof projectList[number] | null>(null);
  const [selectedResearch, setSelectedResearch] = useState<typeof researchHighlights[number] | null>(null);
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const currentSection = sections.reduce((active, section, index) => {
        if (!section) return active;
        const top = section.getBoundingClientRect().top;
        return top < 120 ? navLinks[index].href.slice(1) : active;
      }, activeSection);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // certifications rendered as static gallery (no search / preview)

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 scrollbar-track">
      <ParticlesBackground />
      <Spotlight />
      <ScrollIndicator />
      <AnimatePresence>{loading && <Loading key="loading" />}</AnimatePresence>

      {!loading && (
        <div className="relative z-10 px-4 pb-24 md:px-8 lg:px-14">
          <Navbar navLinks={navLinks} activeSection={activeSection} />
          <main className="mx-auto flex max-w-7xl flex-col gap-20 pt-24">
            <Hero />
            <About aboutText={aboutText} pillars={aboutPillars} />
            <Skills skillGroups={skillGroups} />
            <Projects projects={projectList} onProjectClick={setSelectedProject} />
            <Research highlights={researchHighlights} onPaperClick={setSelectedResearch} />
            <Education education={education} />
            <Events events={events} />
            <Certifications certifications={certifications} onCertClick={setSelectedCert} />
            <Contact socialLinks={socialLinks} />
          </main>
          <Footer />
          <AnimatePresence>
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            {selectedResearch && <ResearchModal research={selectedResearch} onClose={() => setSelectedResearch(null)} />}
            {selectedCert && <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
          </AnimatePresence>
        </div>
      )}

      {/* static certifications — no preview modal */}
      <Analytics />
    </div>
  );
}

export default App;
