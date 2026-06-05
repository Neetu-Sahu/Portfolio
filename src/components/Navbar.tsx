import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

export function Navbar({ navLinks, activeSection }: { navLinks: NavLink[]; activeSection: string }) {
  const [open, setOpen] = useState(false);

  return (
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-4 z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-300/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl shadow-glow"
      >
        <a href="#home" className="text-xl font-semibold tracking-[0.2em] text-cyan-200">
          Neetu Sahu
        </a>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm transition ${activeSection === link.href.slice(1) ? 'text-cyan-200' : 'text-slate-400 hover:text-cyan-200'}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-900/80 text-cyan-200 transition hover:border-cyan-200/40 md:hidden"
      >
        <FiMenu className="h-6 w-6" />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-4 top-20 z-30 w-52 rounded-3xl border border-cyan-300/15 bg-slate-950/95 p-4 shadow-glow md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition ${activeSection === link.href.slice(1) ? 'text-cyan-200' : 'text-slate-300 hover:text-cyan-200'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
