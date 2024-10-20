import { useEffect, useRef } from 'react';

export function useInteractiveMouseEffect() {
  const mouseRef = useRef<HTMLDivElement | null>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      tgX.current = e.clientX;
      tgY.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      curX.current += (tgX.current - curX.current) * 0.1;
      curY.current += (tgY.current - curY.current) * 0.1;

      if (mouseRef.current) {
        mouseRef.current.style.transform = `translate3d(${curX.current}px, ${curY.current}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouseRef;
}
