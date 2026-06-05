import { motion } from 'framer-motion';

export function Education({ education }: { education: { id: string; degree: string; institution: string; years: string; note?: string; }[] }) {
  return (
    <section id="background" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Education</h2>
        </div>
        <p className="max-w-3xl text-slate-300">Academic history and milestones.</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 timeline-line" />

        <div className="flex flex-col gap-12">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06 }}
                className="relative flex items-center"
              >
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-4 w-4 rounded-full bg-cyan-400/90 ring-4 ring-slate-900/60" />
                </div>

                <div className={`w-full md:w-1/2 ${isLeft ? 'pr-8 md:pl-0 md:pr-12 text-right md:mr-auto' : 'pl-8 md:pr-0 md:pl-12 text-left md:ml-auto'}`}>
                  <article className="hover-glow glass-card inline-block rounded-2xl border border-cyan-300/10 p-6 shadow-glow max-w-full">
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-cyan-300/80">{edu.years}</p>
                    <h3 className="mb-1 text-2xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.institution}</p>
                    {edu.note && <div className="mt-3 inline-block rounded-full bg-slate-900/60 px-3 py-2 text-sm text-cyan-200">{edu.note}</div>}
                  </article>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
