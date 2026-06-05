import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCpu, FiZap } from 'react-icons/fi';

type Pillar = {
  title: string;
  description: string;
};

const pillarIcons: Record<string, typeof FiServer> = {
  'Backend Development': FiServer,
  'Tech Enthusiast': FiCpu,
  'Intelligent AI Solutions': FiZap,
};


function TechMindmap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const coords: Record<string, { x: number; y: number }> = isMobile ? {
    center: { x: 50, y: 14 },
    backend: { x: 25, y: 40 },
    ai: { x: 75, y: 40 },
    python: { x: 14, y: 64 },
    fastapi: { x: 30, y: 78 },
    mysql: { x: 14, y: 90 },
    pandas: { x: 86, y: 64 },
    gemini: { x: 70, y: 78 },
    numpy: { x: 86, y: 90 }
  } : {
    center: { x: 50, y: 50 },
    backend: { x: 30, y: 50 },
    ai: { x: 70, y: 50 },
    python: { x: 14, y: 28 },
    fastapi: { x: 10, y: 50 },
    mysql: { x: 14, y: 72 },
    pandas: { x: 86, y: 28 },
    gemini: { x: 90, y: 50 },
    numpy: { x: 86, y: 72 }
  };

  const connections = [
    { from: 'center', to: 'backend' },
    { from: 'center', to: 'ai' },
    { from: 'backend', to: 'python' },
    { from: 'backend', to: 'fastapi' },
    { from: 'backend', to: 'mysql' },
    { from: 'ai', to: 'pandas' },
    { from: 'ai', to: 'gemini' },
    { from: 'ai', to: 'numpy' }
  ];

  const nodes = [
    { id: 'center', label: 'Neetu', desc: 'Backend Developer & AI Explorer', type: 'center', icon: FiZap },
    { id: 'backend', label: 'Backend', desc: 'System design, APIs & databases', type: 'hub', icon: FiServer },
    { id: 'ai', label: 'AI & Data', desc: 'AI integration & analytics processing', type: 'hub', icon: FiCpu },
    { id: 'python', label: 'Python', desc: 'Core development & data scripts', type: 'leaf' },
    { id: 'fastapi', label: 'FastAPI', desc: 'High-performance API endpoints', type: 'leaf' },
    { id: 'mysql', label: 'MySQL', desc: 'Relational databases & storage', type: 'leaf' },
    { id: 'pandas', label: 'Pandas', desc: 'Data manipulation & analysis library', type: 'leaf' },
    { id: 'gemini', label: 'Gemini API', desc: 'LLM integration & prompt engineering', type: 'leaf' },
    { id: 'numpy', label: 'NumPy', desc: 'Numerical & multi-dimensional computing', type: 'leaf' }
  ];

  const getPathD = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    if (isMobile) {
      const cpY1 = from.y + (to.y - from.y) * 0.5;
      const cpY2 = from.y + (to.y - from.y) * 0.5;
      return `M ${from.x} ${from.y} C ${from.x} ${cpY1}, ${to.x} ${cpY2}, ${to.x} ${to.y}`;
    } else {
      const cpX1 = from.x + (to.x - from.x) * 0.5;
      const cpX2 = from.x + (to.x - from.x) * 0.5;
      return `M ${from.x} ${from.y} C ${cpX1} ${from.y}, ${cpX2} ${to.y}, ${to.x} ${to.y}`;
    }
  };

  return (
    <div className="w-full h-[360px] md:h-80 lg:h-96 mt-8 overflow-hidden select-none rounded-2xl glass-card border border-cyan-500/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
      {/* Background SVG for Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {connections.map((conn, idx) => {
          const fromPt = coords[conn.from];
          const toPt = coords[conn.to];
          if (!fromPt || !toPt) return null;
          const pathD = getPathD(fromPt, toPt);
          return (
            <g key={idx}>
              {/* Glow Path Line */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="0.3"
                className="opacity-80"
              />
              {/* Pulsing Traveling Dot */}
              <circle r="0.5" fill="url(#pulseGradient)">
                <animateMotion
                  dur={`${2.2 + (idx % 3) * 0.6}s`}
                  repeatCount="indefinite"
                  path={pathD}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* HTML Interactive Nodes overlay */}
      {nodes.map((node) => {
        const coord = coords[node.id];
        if (!coord) return null;
        const Icon = node.icon;

        return (
          <div
            key={node.id}
            style={{
              left: `${coord.x}%`,
              top: `${coord.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute group z-10"
          >
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 scale-0 group-hover:scale-100 transition-all origin-bottom bg-slate-950/95 border border-cyan-500/30 text-slate-300 text-[10px] p-2 rounded-lg shadow-xl pointer-events-none text-center leading-normal">
              <p className="font-bold text-cyan-400 font-mono text-xs">{node.label}</p>
              <p className="mt-1 text-slate-400 font-sans">{node.desc}</p>
            </div>

            {node.type === 'center' ? (
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer hover:scale-110 transition duration-300">
                <FiZap className="h-5 w-5 animate-pulse" />
                <span className="absolute top-full text-[9px] uppercase tracking-widest text-cyan-300 font-mono mt-1 font-bold">Identity</span>
              </div>
            ) : node.type === 'hub' ? (
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/90 text-cyan-300 shadow-md cursor-pointer hover:border-cyan-400/80 hover:scale-110 transition duration-300">
                {Icon && <Icon className="h-4.5 w-4.5" />}
                <span className="absolute top-full text-[8px] uppercase tracking-wider text-slate-400 font-mono mt-1 font-bold whitespace-nowrap">{node.label}</span>
              </div>
            ) : (
              <div className="rounded-full border border-cyan-300/10 bg-slate-950/80 px-2.5 py-1 text-[10px] text-slate-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-105 transition duration-300 font-mono whitespace-nowrap">
                {node.label}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}




export function About({
  aboutText,
  pillars,
}: {
  aboutText: string[];
  pillars: Pillar[];
}) {
  return (
    <section id="about" className="glass-section grid gap-10">
      <div className="section-accent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="glass-card rounded-[2rem] border border-cyan-300/10 p-10 shadow-glow"
      >
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-cyan-200">
              <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
              <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">About Me</h2>
            </div>
            <div className="space-y-5 text-slate-300">
              {/* scattered chips for skills / interests */}
              {aboutText.map((paragraph) => (
                <p key={paragraph} className="leading-8">
                  {paragraph}
                </p>
              ))}

              {/* Interactive Developer DNA Grid */}
              <TechMindmap />

            </div>
          </div>

          <div className="hover-glow rounded-[2rem] border border-cyan-300/10 bg-slate-950/70 p-6 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.08)]">
            <div className="mb-6 text-cyan-200">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">My Pillars of Focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">What powers my work</h3>
            </div>
            <div className="grid gap-4">
              {pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.title] || FiCpu;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-[1.75rem] border border-cyan-300/10 bg-slate-950/80 p-6 transition hover:border-cyan-400/20 hover:bg-slate-900/85 lg:min-h-[170px]"
                  >
                    <div className="flex items-center gap-3 text-cyan-200">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <Icon className="h-5 w-5 text-cyan-300" />
                      <h4 className="text-base font-semibold text-white">{pillar.title}</h4>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
