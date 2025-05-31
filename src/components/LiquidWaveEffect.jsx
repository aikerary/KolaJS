import React, { useState, useEffect, useRef } from 'react';

const LiquidWaveEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });
  const pointsA = useRef([]);
  const pointsB = useRef([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0); // For horizontal wave animation

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const newMousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      setMousePos(newMousePos);
      
      // Calculate mouse speed
      setMouseSpeed({
        x: newMousePos.x - lastMousePos.current.x,
        y: newMousePos.y - lastMousePos.current.y
      });
      
      lastMousePos.current = newMousePos;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    // También escuchar resize para recalcular dimensiones
    const handleResize = () => {
      // Force re-render when window resizes
      setScrollY(window.scrollY);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate liquid height based on scroll
  const minHeight = 120;
  const maxHeight = 280;
  const scrollFactor = 0.2;
  const liquidHeight = Math.min(maxHeight, minHeight + scrollY * scrollFactor);

  // Calculate how much the liquid should move down based on footer visibility
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const footerElement = document.querySelector('footer');
  const footerHeight = footerElement ? footerElement.offsetHeight : 0;
  
  // Calculate when footer starts to be visible
  const footerStartsAt = documentHeight - windowHeight - footerHeight;
  const scrollUntilFooter = Math.max(0, footerStartsAt);
  
  // Progress from 0 to 1: 0 = top of page, 1 = footer is visible
  const progressToFooter = scrollUntilFooter > 0 ? Math.min(1, scrollY / scrollUntilFooter) : 0;
  
  // The liquid should disappear completely when footer becomes visible
  const maxLiquidOffset = liquidHeight + 50; // Extra offset to fully hide
  const liquidBottomOffset = progressToFooter * maxLiquidOffset;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = liquidHeight;

    // Initialize points for liquid shape
    const initPoints = () => {
      pointsA.current = [];
      pointsB.current = [];
      
      const width = canvas.width;
      const height = liquidHeight;
      const numPoints = 16; // Increased for smoother waves
      
      // Create liquid boundary points with horizontal wave motion
      for (let i = 0; i <= numPoints; i++) {
        const x = (width / numPoints) * i;
        const baseY = height - 25;
        
        // Add multiple wave frequencies for more natural liquid motion
        const waveOffset1 = Math.sin((i / numPoints) * Math.PI * 3) * 8;
        const waveOffset2 = Math.sin((i / numPoints) * Math.PI * 5) * 4;
        const y = baseY + waveOffset1 + waveOffset2;
        
        pointsA.current.push(new LiquidPoint(x, y, 1));
        pointsB.current.push(new LiquidPoint(x, y - 6, 1.3));
      }
    };

    // Update points based on mouse interaction and horizontal wave motion
    const updatePoints = () => {
      timeRef.current += 0.02; // Animation time for horizontal waves
      
      const damping = 0.06; // Slightly reduced for more fluid motion
      const mouseDist = 70; // Increased interaction distance
      const viscosity = 20; // Reduced for more responsive liquid
      
      [pointsA.current, pointsB.current].forEach((points, layerIndex) => {
        points.forEach((point, i) => {
          // Horizontal wave motion - different speeds for each layer
          const waveSpeed1 = layerIndex === 0 ? 0.8 : 1.2;
          const waveSpeed2 = layerIndex === 0 ? 1.5 : 0.9;
          
          // Multiple wave frequencies for natural liquid motion
          const horizontalWave1 = Math.sin(timeRef.current * waveSpeed1 + i * 0.3) * 3;
          const horizontalWave2 = Math.cos(timeRef.current * waveSpeed2 + i * 0.5) * 2;
          const verticalWave = Math.sin(timeRef.current * 0.7 + i * 0.4) * 1.5;
          
          // Apply horizontal liquid motion to original position
          const targetX = point.ix + horizontalWave1 + horizontalWave2;
          const targetY = point.iy + verticalWave;
          
          // Spring back to animated position (not static position)
          point.vx += (targetX - point.x) / (viscosity * point.level);
          point.vy += (targetY - point.y) / (viscosity * point.level);

          // Mouse interaction with enhanced responsiveness
          const dx = point.x - mousePos.x;
          const dy = point.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseDist) {
            const force = (1 - dist / mouseDist) * 0.2; // Increased force
            point.vx += mouseSpeed.x * force * 0.4;
            point.vy += mouseSpeed.y * force * 0.4;
          }

          // Apply damping
          point.vx *= (1 - damping);
          point.vy *= (1 - damping);

          // Update position
          point.x += point.vx;
          point.y += point.vy;
          
          // Add slight horizontal drift for continuous liquid motion
          const driftSpeed = layerIndex === 0 ? 0.1 : -0.05;
          point.x += Math.sin(timeRef.current * 0.5 + i * 0.2) * driftSpeed;
        });
      });
    };

    // Draw liquid layer with enhanced smoothness
    const drawLiquidLayer = (ctx, points, color, alpha) => {
      if (points.length < 3) return;

      ctx.save();
      ctx.globalAlpha = alpha;
      
      // Create more dynamic gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, liquidHeight);
      const time = timeRef.current * 0.5;
      const gradientShift = Math.sin(time) * 0.1 + 0.5;
      
      gradient.addColorStop(0, color + '60');
      gradient.addColorStop(gradientShift, color + 'aa');
      gradient.addColorStop(1, color);
      
      ctx.fillStyle = gradient;
      
      // Draw liquid shape with ultra-smooth curves
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Use Catmull-Rom spline for ultra-smooth liquid curves
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        
        // Calculate control points for smoother curves
        const cp1x = current.x + (next.x - current.x) * 0.3;
        const cp1y = current.y + (next.y - current.y) * 0.3;
        const cp2x = next.x - (next.x - current.x) * 0.3;
        const cp2y = next.y - (next.y - current.y) * 0.3;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
      }
      
      // Close the liquid shape smoothly
      const lastPoint = points[points.length - 1];
      ctx.lineTo(lastPoint.x, liquidHeight);
      ctx.lineTo(points[0].x, liquidHeight);
      ctx.closePath();
      
      ctx.fill();
      
      // Add subtle highlight for more liquid appearance
      if (alpha > 0.8) {
        ctx.globalAlpha = 0.3;
        const highlightGradient = ctx.createLinearGradient(0, 0, 0, liquidHeight * 0.4);
        highlightGradient.addColorStop(0, '#ffffff');
        highlightGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = highlightGradient;
        ctx.fill();
      }
      
      ctx.restore();
    };

    initPoints();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points based on mouse interaction
      updatePoints();
      
      // Draw liquid layers with enhanced liquid appearance
      drawLiquidLayer(ctx, pointsA.current, '#dc143c', 0.95);
      drawLiquidLayer(ctx, pointsB.current, '#8b0000', 0.8);
      
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [liquidHeight, mousePos, mouseSpeed]);

  // Liquid Point class
  function LiquidPoint(x, y, level) {
    this.x = this.ix = x;
    this.y = this.iy = y;
    this.vx = 0;
    this.vy = 0;
    this.level = level;
  }

  return (
    <div 
      className={`fixed left-0 w-full pointer-events-none`}
      style={{
        bottom: `-${liquidBottomOffset}px`, // Moves down as user scrolls
        height: `${liquidHeight}px`,
        zIndex: 30,
        transition: 'bottom 0.1s ease-out', // Smooth but responsive transition
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 left-0 w-full h-full liquid-canvas"
        style={{
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default LiquidWaveEffect;
