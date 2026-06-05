import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export function Research({
  highlights,
  onPaperClick,
}: {
  highlights: { title: string; description: string; file: string; status?: string }[];
  onPaperClick: (paper: any) => void;
}) {
  return (
    <section id="research" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Research</h2>
        </div>
        <p className="max-w-3xl text-slate-300">
          Published investigations and research papers focusing on secure machine learning and privacy-aware systems.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 max-w-4xl">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2, delay: 0 } }}
            className="glass-card hover-glow cursor-pointer rounded-[2rem] border border-cyan-300/10 p-8 shadow-glow transition"
            onClick={() => onPaperClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                onPaperClick(item);
              }
            }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white flex-1">{item.title}</h3>
              {item.status === 'coming-soon' && (
                <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 uppercase tracking-wider whitespace-nowrap">
                  Coming Soon
                </div>
              )}
            </div>
            <p className="mb-6 text-slate-300">{item.description}</p>
            {item.status === 'coming-soon' ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/50 px-5 py-3 text-sm text-slate-400 cursor-not-allowed">
                <FiDownload className="h-4 w-4" />
                PDF Will Be Available Soon
              </div>
            ) : (
              <a
                href={item.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-400/15"
                onClick={(e) => e.stopPropagation()}
              >
                <FiDownload className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
