import { FiDownload } from 'react-icons/fi';
import { Modal } from './Modal';

export interface ResearchDetail {
  title: string;
  description: string;
  file: string;
  status?: string;
  abstract?: string;
  teamMembers?: string[];
  submission?: string;
  focus?: string;
  methodology?: string[];
}

export function ResearchModal({ research, onClose }: { research: ResearchDetail; onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="glass-card overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-slate-950/95 p-8 text-slate-100 shadow-glow">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Research Paper</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{research.title}</h2>
          </div>

          {research.abstract && (
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Abstract</h3>
              <p className="text-slate-300 leading-relaxed">{research.abstract}</p>
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            {research.focus && (
              <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Research Focus</h3>
                <p className="text-slate-300">{research.focus}</p>
              </div>
            )}

            {research.submission && (
              <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">Submission</h3>
                <p className="text-slate-300">{research.submission}</p>
              </div>
            )}
          </div>

          {research.methodology && research.methodology.length > 0 && (
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Methodology</h3>
              <ul className="space-y-2 text-slate-300">
                {research.methodology.map((method) => (
                  <li key={method} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {research.teamMembers && research.teamMembers.length > 0 && (
            <div className="space-y-4 rounded-3xl bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Research Team</h3>
              <div className="grid gap-3">
                {research.teamMembers.map((member) => (
                  <div key={member} className="flex items-center gap-3 text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {research.status === 'coming-soon' ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/50 px-6 py-3 text-sm text-slate-400 cursor-not-allowed">
                <FiDownload className="h-4 w-4" />
                PDF Will Be Available Soon
              </div>
            ) : (
              <a
                href={research.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 text-sm text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-400/15"
              >
                <FiDownload className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
