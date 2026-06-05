import { useEffect } from 'react';

export function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;

    function handleMove(e: MouseEvent | TouchEvent) {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      root.style.setProperty('--mx', `${clientX}px`);
      root.style.setProperty('--my', `${clientY}px`);
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove as EventListener);
    };
  }, []);

  return <div className="spotlight-overlay pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

export default Spotlight;
