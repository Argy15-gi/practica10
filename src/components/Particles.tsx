import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(dot);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  return <div id="particles" ref={containerRef} className="particles"></div>;
};

export default Particles;
