import { useEffect, useMemo, useState } from 'react';

const count = 20;

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, index) => ({
        id: index,
        size: randomBetween(10, 24),
        top: randomBetween(5, 95),
        left: randomBetween(5, 95),
        delay: randomBetween(0, 8),
        duration: randomBetween(12, 24),
      })),
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.09),transparent_28%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.06),transparent_24%)]" />
      {mounted &&
        particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute block rounded-full bg-cyan-400/20 blur-xl"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            }}
          />
        ))}
      <style>{`@keyframes float { from { transform: translateY(0px) scale(1); } to { transform: translateY(-30px) scale(1.1); } }`}</style>
    </div>
  );
}
