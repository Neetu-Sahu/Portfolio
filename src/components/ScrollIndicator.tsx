import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-slate-900/80">
      <div className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}
