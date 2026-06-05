import { Modal } from './Modal';

export function CertificationModal({ cert, onClose }: { cert: { title: string; image: string }; onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="relative max-w-[960px] rounded-2xl">
        <div className="glass-card overflow-hidden rounded-2xl border border-cyan-300/10 bg-slate-950/95 p-4 pr-20 text-slate-100 shadow-glow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-300">Certificate</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">{cert.title}</h3>
            </div>
          </div>

          <div className="mt-4 w-full overflow-hidden rounded-lg bg-slate-900/60 p-2">
            <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CertificationModal;
