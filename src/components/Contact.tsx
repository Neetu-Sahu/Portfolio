import { type FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { sendEmail } from '../services/email';

type SocialLink = { label: string; href: string; icon: 'FiGithub' | 'FiLinkedin' | 'FiTwitter' };

const iconMap: Record<SocialLink['icon'], JSX.Element> = {
  FiGithub: <FiGithub className="h-5 w-5" />,
  FiLinkedin: <FiLinkedin className="h-5 w-5" />,
  FiTwitter: <FiTwitter className="h-5 w-5" />,
};

export function Contact({ socialLinks }: { socialLinks: SocialLink[] }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const canSubmit = useMemo(
    () => form.name.trim() !== '' && form.email.trim() !== '' && form.message.trim() !== '',
    [form]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setStatus(null);

    try {
      await sendEmail(form);
      setStatus('Message sent successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Unable to send your message right now.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="glass-section grid gap-10">
      <div className="section-accent" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-cyan-200">
          <span className="block h-1.5 w-12 rounded-full bg-cyan-400/90"></span>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase">Contact</h2>
        </div>
        <p className="max-w-none text-slate-300">
          Let&apos;s connect. Send your message directly or follow me on social channels for collaborations.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card rounded-[2rem] border border-cyan-300/10 p-8 shadow-glow"
        >
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="mt-2 w-full rounded-3xl border border-cyan-300/15 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="mt-2 w-full rounded-3xl border border-cyan-300/15 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                  placeholder="Your email"
                />
              </label>
            </div>
            <label className="block text-sm text-slate-300">
              Message
              <textarea
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                rows={5}
                className="mt-2 w-full rounded-3xl border border-cyan-300/15 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                placeholder="Write a secure message"
              />
            </label>
            {status && <p className="text-sm text-cyan-200">{status}</p>}
            <button
              type="submit"
              disabled={!canSubmit || sending}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Message'}
              <FiSend className="h-5 w-5" />
            </button>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-cyan-300/10 bg-slate-950/70 p-8 shadow-glow"
        >
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-900/90 px-4 py-3 text-cyan-100 shadow-inner">
              <FiMail className="h-5 w-5" />
              <span>neetusahu183@gmail.com</span>
            </div>
            <p className="text-slate-300">
              I&apos;m available for freelance projects, consultancy, secure product builds, and research collaborations.
            </p>
          </div>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-3xl border border-cyan-300/10 bg-slate-900/80 px-5 py-4 text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-900/80"
              >
                <span className="text-sm font-medium text-cyan-100">{link.label}</span>
                <span className="text-cyan-200 transition group-hover:text-white">
                  {iconMap[link.icon]}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
