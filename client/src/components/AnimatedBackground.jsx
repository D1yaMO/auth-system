import { useEffect, useRef } from 'react';
import smiley from '../assets/purple_smiley.png';

const AnimatedBackground = () => {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      blob1.current.style.transform = `translate(${clientX - 100}px, ${clientY - 100}px)`;
      blob2.current.style.transform = `translate(${clientX - 200}px, ${clientY - 50}px)`;
      blob3.current.style.transform = `translate(${clientX - 50}px, ${clientY - 200}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const smileyStyle = {
    position: 'absolute',
    width: '180px',
    height: '180px',
    backgroundImage: `url(${smiley})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.4,
    top: 0,
    left: 0,
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: 0,
      background: '#f5f3ff',
    }}>
      <div ref={blob1} style={{ ...smileyStyle, width: '200px', height: '200px', opacity: 0.35, transition: 'transform 0.15s ease-out' }} />
      <div ref={blob2} style={{ ...smileyStyle, width: '150px', height: '150px', opacity: 0.25, transition: 'transform 0.2s ease-out' }} />
      <div ref={blob3} style={{ ...smileyStyle, width: '120px', height: '120px', opacity: 0.2, transition: 'transform 0.25s ease-out' }} />
    </div>
  );
};

export default AnimatedBackground;