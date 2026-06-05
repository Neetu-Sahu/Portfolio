import { motion } from 'framer-motion';

export function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/20 shadow-glow">
          <div className="absolute h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="h-16 w-16 animate-spin rounded-full border-t-2 border-cyan-300/80 border-slate-700" />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/90">Loading portfolio...</p>
      </div>
    </motion.div>
  );
}
