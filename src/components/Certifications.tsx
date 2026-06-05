import { motion } from 'framer-motion';

export function Certifications({
  certifications,
  onCertClick,
}: {
  certifications: { id: string; title: string; issuer: string; image: string }[];
  onCertClick: (cert: { title: string; image: string }) => void;
}) {
  return (
    <section id="certifications" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Certifications</h2>
        </div>
        <p className="max-w-3xl text-slate-300">Verified certificates and training badges. Some of my certifications are:</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            className="glass-card hover-glow overflow-hidden rounded-[2rem] border border-cyan-300/10 shadow-glow cursor-pointer"
            onClick={() => onCertClick({ title: cert.title, image: cert.image })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onCertClick({ title: cert.title, image: cert.image });
            }}
          >
            <div className="relative h-56 w-full bg-slate-900/30">
              <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
              <div className="absolute left-4 bottom-4 right-4 rounded-md bg-gradient-to-r from-black/40 via-black/20 to-transparent p-3">
                <div className="text-sm font-semibold text-white truncate">{cert.title}</div>
                <div className="text-xs text-slate-300 truncate">{cert.issuer}</div>
              </div>
            </div>
            <div className="space-y-2 p-6">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-slate-400">{cert.issuer}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

