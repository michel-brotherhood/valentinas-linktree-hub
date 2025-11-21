import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const GoldenParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary animate-float-particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            bottom: '-10px',
            boxShadow: `0 0 ${particle.size * 2}px hsl(38 55% 58% / 0.5)`,
          }}
        />
      ))}
    </div>
  );
};
