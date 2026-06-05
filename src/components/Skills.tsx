import { motion } from 'framer-motion';

export function Skills({ skillGroups }: { skillGroups: { title: string; skills: string[] }[] }) {
  return (
    <section id="skills" className="glass-section grid gap-8">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Skills</h2>
        </div>
        <p className="max-w-3xl text-slate-300">
          I craft secure digital experiences with a blend of front-end design, machine learning models, security protocols, and evidence-driven research tools.
        </p>
      </div>

      <div className="grid gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-[2rem] border border-cyan-300/10 p-8 shadow-glow"
          >
            <h3 className="mb-5 text-2xl font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-cyan-200/10 bg-slate-950/80 px-5 py-3 text-sm font-medium text-slate-200 shadow-sm transition"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
