import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'button' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('button, a, input, select, textarea, [role="button"]');
      const imageHover = target.closest('[data-cursor="image"]');
      const customAction = target.closest('[data-cursor-text]');

      if (customAction) {
        setCursorState('button');
        setCursorText(customAction.getAttribute('data-cursor-text') || 'VIEW');
      } else if (imageHover) {
        setCursorState('hover');
        setCursorText('EXPLORE');
      } else if (clickable) {
        setCursorState('hover');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const onMouseLeaveWindow = () => {
      setCursorState('hidden');
    };

    const onMouseEnterWindow = () => {
      setCursorState('default');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
    };
  }, []);

  if (isTouchDevice || cursorState === 'hidden') {
    return null;
  }

  const variants = {
    default: {
      width: 10,
      height: 10,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
    },
    hover: {
      width: 44,
      height: 44,
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
    button: {
      width: 64,
      height: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: '#000000',
      border: 'none',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center font-tech text-[10px] font-bold tracking-widest uppercase transition-colors duration-200"
      animate={variants[cursorState] || variants.default}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 400,
        mass: 0.2,
      }}
    >
      {cursorText && (
        <span className="text-black leading-none">{cursorText}</span>
      )}
    </motion.div>
  );
}
