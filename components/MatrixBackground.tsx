import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Configuration
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    // Characters: Mix of standard matrix chars, numbers, and coding symbols
    const chars = '0123456789ABCDEF<>/\\|{}[]!@#$%^&*()_+=-?:;';
    
    const draw = () => {
      // Fade effect: Fill with very transparent dark color to create trails
      // Matches Tailwind 'darker' (#020617)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomly pick a character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Color logic: Randomly switch between primary (Sky Blue) and accent colors
        const isGlitch = Math.random() > 0.98;
        
        if (isGlitch) {
             ctx.fillStyle = '#f0f9ff'; // Very bright white/blue
        } else {
             // Primary with varying opacity
             const opacity = Math.random() * 0.5 + 0.5;
             ctx.fillStyle = `rgba(14, 165, 233, ${opacity})`; 
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it crosses screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 33); // ~30 FPS

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-25"
      style={{ background: '#020617' }}
    />
  );
};

export default MatrixBackground;