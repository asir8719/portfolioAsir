import React, { useEffect, useState } from 'react';

export const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorClasses = `pointer-events-none fixed top-0 left-0 rounded-full mix-blend-difference z-50 transition-transform duration-150 ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`;

  return (
    <>
      <div 
        className={`${cursorClasses} w-8 h-8 border-2 border-cyan-400`} 
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: 'transform 0.15s ease-out, width 0.2s, height 0.2s, opacity 0.2s'
        }}
      />
      <div 
        className={`${cursorClasses} w-2 h-2 bg-cyan-400`} 
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s, opacity 0.2s'
        }}
      />
    </>
  );
};