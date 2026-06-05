import { FiGithub } from 'react-icons/fi';
import { Modal } from './Modal';

export interface ProjectDetail {
  title: string;
  description: string;
  problemStatement: string;
  proposedSolution: string;
  features: string[];
  techStack: string[];
  conclusion: string;
  tags: string[];
  github: string;
}

export function ProjectModal({ project, onClose }: { project: ProjectDetail; onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="glass-card overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-slate-950/95 p-8 text-slate-100 shadow-glow">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Project details</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{project.title}</h2>
            </div>
            <div className="flex items-center gap-3 text-cyan-200">
              <a href={project.github} target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-900/80 px-4 py-2 text-sm transition hover:bg-cyan-400/10 hover:text-white">
                <FiGithub className="inline h-4 w-4 align-middle" />
                <span className="ml-2">Source</span>
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Problem Statement</h3>
              <p className="text-slate-300">{project.problemStatement}</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Proposed Solution</h3>
              <p className="text-slate-300">{project.proposedSolution}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Features</h3>
              <ul className="space-y-2 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-300/20 bg-slate-800/80 px-3 py-2 text-sm text-cyan-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Conclusion</h3>
            <p className="text-slate-300">{project.conclusion}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
