import { motion } from 'framer-motion';

export function Events({ events }: { events: { id: string; title: string; type: string; description: string; tag?: string }[] }) {
  return (
    <section id="events" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Leadership & Events</h2>
        </div>
        <p className="max-w-3xl text-slate-300">Selected roles, memberships and event participation.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {events.map((evt, idx) => (
          <motion.article
            key={evt.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            className="glass-card hover-glow rounded-[2rem] border border-cyan-300/10 p-6 shadow-glow"
          >
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300/80">{evt.type}</p>
            <h3 className="mb-2 text-2xl font-semibold text-white">{evt.title}</h3>
            <p className="mb-4 text-slate-400">{evt.description}</p>
            {evt.tag && <div className="inline-block rounded-full bg-slate-900/60 px-3 py-2 text-sm text-cyan-200">{evt.tag}</div>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
