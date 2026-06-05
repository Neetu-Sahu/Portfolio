import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

export function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 rounded-full bg-slate-900/80 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            aria-label="Close modal"
          >
            <FiX className="h-5 w-5" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
