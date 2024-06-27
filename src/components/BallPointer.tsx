import { useRef, useState, useEffect } from 'react';

function BallPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastAnimationId = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const updatePosition = () => {
      setPosition((prev) => {
        const newVx = (targetX - prev.x) * 0.1;
        const newVy = (targetY - prev.y) * 0.1;

        return {
          x: prev.x + newVx,
          y: prev.y + newVy,
        };
      });

      lastAnimationId = requestAnimationFrame(updatePosition);
    };

    lastAnimationId = requestAnimationFrame(updatePosition);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(lastAnimationId);
    };
  }, []); // 의존성 배열을 비워서 컴포넌트 마운트 시에만 useEffect가 실행되도록 함

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '50px',
        height: '50px',
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        background: 'url(/vite.svg) no-repeat center center',
        backgroundSize: 'cover',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    />
  );
}

export default BallPointer;
