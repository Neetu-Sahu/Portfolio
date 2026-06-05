import { motion } from 'framer-motion';

export function Projects({
  projects,
  onProjectClick,
}: {
  projects: {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
  }[];
  onProjectClick: (project: any) => void;
}) {
  return (
    <section id="projects" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Projects</h2>
        </div>
        <p className="max-w-3xl text-slate-300">
          Standout work built with modern stacks, secure patterns, and immersive user experiences.
        </p>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            className="glass-card hover-glow group cursor-pointer rounded-[2rem] border border-cyan-300/10 p-7 shadow-glow transition"
            onClick={() => onProjectClick(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                onProjectClick(project);
              }
            }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300/80">{project.tags[0]}</p>
            <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mb-6 text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(1).map((tag) => (
                <span key={tag} className="rounded-2xl bg-slate-900/80 px-3 py-1 text-xs text-cyan-200/90">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-block text-cyan-400 hover:text-cyan-300 transition text-sm font-medium" onClick={(e) => e.stopPropagation()}>
              View GitHub Repo →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
