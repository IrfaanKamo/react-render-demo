import React, { useRef, useEffect, type ReactNode } from 'react';

export interface RenderVisualizerProps {
  children: ReactNode;
}

export function RenderVisualizer({ children }: RenderVisualizerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Flash red immediately
    node.style.transition = 'none';
    node.style.outline = '2px solid #ef4444';

    // Fade out after 300ms
    timeoutRef.current = setTimeout(() => {
      if (node) {
        node.style.transition = 'outline 0.3s ease-out';
        node.style.outline = '2px solid transparent';
      }
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }); // Intentional: runs every render

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-block',
        width: '100%',
        margin: '3px 0px'
      }}
    >
      {children}
    </div>
  );
}