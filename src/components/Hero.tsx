import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { heroPhrases } from '../data';

const typingSpeed = 120;
const pauseDelay = 1200;

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(() => heroPhrases[phraseIndex % heroPhrases.length], [phraseIndex]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting]);

  return (
    <section id="home" className="glass-section grid gap-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="section-accent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.5fr_1fr]"
      >
        <div className="glass-card rounded-[2rem] border border-cyan-300/10 p-10 shadow-glow">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.5em] text-cyan-300/70">Developer Portfolio</p>
            <p className="text-xs uppercase tracking-widest text-cyan-300/80 text-left">BACKEND DEVELOPER | DATABASE | CSE STUDENT | IEEE MEMBER | ML ENTHUSIAST</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Neetu Sahu
            </h1>
            <p className="text-lg text-cyan-200/80 italic max-w-2xl">
              Building Projects and Learning Backend.
            </p>
            <div className="inline-flex items-center gap-4 rounded-3xl border border-cyan-300/15 bg-slate-900/70 px-4 py-3 text-cyan-100 shadow-glow">
              <span className="text-lg text-cyan-200">{displayText}</span>
              <span className="h-6 w-1 bg-cyan-200/70 animate-pulse"></span>
            </div>
            <p className="max-w-2xl text-slate-300">
              Exploring backend systems, web apps, and practical engineering through real projects and clean delivery.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400/10 px-6 py-4 text-sm font-medium tracking-wide text-cyan-100 transition hover:bg-cyan-400/20"
              >
                Explore projects
                <FiArrowRight className="h-5 w-5 text-cyan-300" />
              </a>
              <a
                href="mailto:neetusahu183@gmail.com?subject=Portfolio%20Inquiry"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/15 bg-slate-900/80 px-6 py-4 text-sm font-medium tracking-wide text-cyan-100 transition hover:border-cyan-400/30 hover:bg-slate-900/95"
              >
                Email me
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-cyan-300/10 p-8 shadow-glow lg:self-start lg:justify-self-end">
          <div className="mb-6 rounded-3xl border border-cyan-300/10 bg-slate-900/80 px-4 py-4 text-sm text-cyan-100 shadow-inner">
            <div className="inline-flex items-center gap-3 whitespace-nowrap">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Available for internships and collaborative builds
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-slate-950/50 p-5 shadow-[inset_0_0_0_1px_rgba(51,65,85,0.4)] transition hover:border-cyan-400/30">
              <p className="text-2xl font-semibold text-cyan-300">Projects</p>
              <p className="mt-3 text-sm text-slate-300">3+</p>
            </div>
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-slate-950/50 p-5 shadow-[inset_0_0_0_1px_rgba(51,65,85,0.4)] transition hover:border-cyan-400/30">
              <p className="text-2xl font-semibold text-cyan-300">Web Dev</p>
              <p className="mt-3 text-sm text-slate-300">Backend</p>
            </div>
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-slate-950/50 p-5 shadow-[inset_0_0_0_1px_rgba(51,65,85,0.4)] transition hover:border-cyan-400/30">
              <p className="text-2xl font-semibold text-cyan-300">Database</p>
              <p className="mt-3 text-sm text-slate-300">MYSQL</p>
            </div>
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-slate-950/50 p-5 shadow-[inset_0_0_0_1px_rgba(51,65,85,0.4)] transition hover:border-cyan-400/30">
              <p className="text-2xl font-semibold text-cyan-300">DSA</p>
              <p className="mt-3 text-sm text-slate-300">LeetCode</p>
            </div>
            <div className="rounded-[1.8rem] border border-cyan-300/10 bg-slate-950/50 p-5 shadow-[inset_0_0_0_1px_rgba(51,65,85,0.4)] transition hover:border-cyan-400/30 sm:col-span-2">
              <p className="text-2xl font-semibold text-cyan-300">Android Dev</p>
              <p className="mt-3 text-sm text-slate-300">Android Studio</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
