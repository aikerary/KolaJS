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
        x: e.clientX - rect.left + 200, // Adjust for canvas offset
        y: e.clientY - rect.top
      };

      setMousePos(newMousePos);
      
      // Enhanced mouse speed calculation with smoothing
      const rawSpeedX = newMousePos.x - lastMousePos.current.x;
      const rawSpeedY = newMousePos.y - lastMousePos.current.y;
      
      // Amplify mouse speed for even stronger liquid response
      const speedMultiplier = 2.2; // Increased from 1.5 to 2.2 for more dramatic effect
      setMouseSpeed({
        x: rawSpeedX * speedMultiplier,
        y: rawSpeedY * speedMultiplier
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
   
    const extraWidth = 200; 
    canvas.width = window.innerWidth + extraWidth * 2;
    canvas.height = liquidHeight;

    const initPoints = () => {
      pointsA.current = [];
      pointsB.current = [];
      
      const width = canvas.width;
      const height = liquidHeight;
      const numPoints = 24; 
      

      for (let i = 0; i <= numPoints; i++) {

        const x = (width / numPoints) * i;
        const baseY = height - 25;
        
        const waveOffset1 = Math.sin((i / numPoints) * Math.PI * 4) * 10;
        const waveOffset2 = Math.sin((i / numPoints) * Math.PI * 6) * 5;
        const waveOffset3 = Math.cos((i / numPoints) * Math.PI * 8) * 3;
        const y = baseY + waveOffset1 + waveOffset2 + waveOffset3;
        
        const level1 = 1 + (i % 3) * 0.1;
        const level2 = 1.4 + (i % 4) * 0.1; 
        
        pointsA.current.push(new LiquidPoint(x, y, level1));
        pointsB.current.push(new LiquidPoint(x, y - 8, level2));
      }
    };

    // Update points based on mouse interaction and horizontal wave motion
    const updatePoints = () => {
      timeRef.current += 0.035; // Increased speed for more dynamic waves
      
      const damping = 0.035; // Further reduced damping for even more fluid motion
      const mouseDist = 150; // Increased interaction distance even more
      const viscosity = 12; // Lower viscosity for ultra-responsive liquid
      const mouseInfluence = 1.2; // Much stronger mouse influence
      
      [pointsA.current, pointsB.current].forEach((points, layerIndex) => {
        points.forEach((point, i) => {
          // Enhanced horizontal wave motion with more complexity
          const waveSpeed1 = layerIndex === 0 ? 1.0 : 1.4;
          const waveSpeed2 = layerIndex === 0 ? 1.8 : 1.1;
          const waveSpeed3 = layerIndex === 0 ? 0.6 : 2.0; // Third wave for more complexity
          
          // Multiple wave frequencies for ultra-natural liquid motion
          const horizontalWave1 = Math.sin(timeRef.current * waveSpeed1 + i * 0.4) * 4;
          const horizontalWave2 = Math.cos(timeRef.current * waveSpeed2 + i * 0.6) * 3;
          const horizontalWave3 = Math.sin(timeRef.current * waveSpeed3 + i * 0.2) * 2;
          const verticalWave = Math.sin(timeRef.current * 0.9 + i * 0.5) * 2;
          
          // Apply complex horizontal liquid motion
          const targetX = point.ix + horizontalWave1 + horizontalWave2 + horizontalWave3;
          const targetY = point.iy + verticalWave;
          
          // Spring back to animated position with variable strength
          const springStrength = 1 / (viscosity * point.level);
          point.vx += (targetX - point.x) * springStrength;
          point.vy += (targetY - point.y) * springStrength;

          // ENHANCED Mouse interaction with ultra-strong force
          const dx = point.x - mousePos.x;
          const dy = point.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseDist) {
            const distanceRatio = 1 - dist / mouseDist;
            const force = distanceRatio * distanceRatio * 0.9; // Increased force multiplier for stronger center force
            
            // Ultra-strong mouse speed influence
            point.vx += mouseSpeed.x * force * mouseInfluence;
            point.vy += mouseSpeed.y * force * mouseInfluence;
            
            // Enhanced repulsion force for even more dramatic liquid displacement
            const repulsionForce = distanceRatio * 0.5; // Increased repulsion
            const angle = Math.atan2(dy, dx);
            point.vx += Math.cos(angle) * repulsionForce;
            point.vy += Math.sin(angle) * repulsionForce;
            
            // Enhanced circular motion around mouse for stronger liquid swirl effect
            const swirl = distanceRatio * 0.25; // Increased swirl effect
            point.vx += -Math.sin(angle) * swirl;
            point.vy += Math.cos(angle) * swirl;
            
            // Add turbulence effect for more realistic liquid behavior
            const turbulence = distanceRatio * 0.15;
            const turbulenceAngle = timeRef.current * 3 + i * 0.5;
            point.vx += Math.cos(turbulenceAngle) * turbulence;
            point.vy += Math.sin(turbulenceAngle) * turbulence;
          }

          // Apply damping
          point.vx *= (1 - damping);
          point.vy *= (1 - damping);

          // Update position
          point.x += point.vx;
          point.y += point.vy;
          
          // Enhanced horizontal drift with more complex variation
          const driftSpeed1 = layerIndex === 0 ? 0.25 : -0.15; // Increased drift speeds
          const driftSpeed2 = layerIndex === 0 ? -0.12 : 0.18;
          const driftSpeed3 = layerIndex === 0 ? 0.08 : -0.10; // Additional drift layer
          
          point.x += Math.sin(timeRef.current * 0.7 + i * 0.3) * driftSpeed1;
          point.x += Math.cos(timeRef.current * 0.4 + i * 0.8) * driftSpeed2;
          point.x += Math.sin(timeRef.current * 1.2 + i * 0.15) * driftSpeed3;
          
          // Enhanced horizontal wave propagation effect
          const wavePropagate1 = Math.sin(timeRef.current * 2.5 + i * 0.1) * 1.2; // Stronger propagation
          const wavePropagate2 = Math.cos(timeRef.current * 1.8 + i * 0.2) * 0.8;
          point.x += wavePropagate1 + wavePropagate2;
          
          // Add liquid cohesion effect (points influence nearby points)
          if (i > 0 && i < points.length - 1) {
            const leftPoint = points[i - 1];
            const rightPoint = points[i + 1];
            const cohesionForce = 0.02;
            
            point.vx += (leftPoint.x - point.x) * cohesionForce;
            point.vx += (rightPoint.x - point.x) * cohesionForce;
            point.vy += (leftPoint.y - point.y) * cohesionForce;
            point.vy += (rightPoint.y - point.y) * cohesionForce;
          }
        });
      });
    };

    // Draw liquid layer with enhanced smoothness and realistic effects
    const drawLiquidLayer = (ctx, points, color, alpha) => {
      if (points.length < 3) return;

      ctx.save();
      ctx.globalAlpha = alpha;
      
      // Create more dynamic gradient with time-based color shifts
      const gradient = ctx.createLinearGradient(0, 0, 0, liquidHeight);
      const time = timeRef.current * 0.5;
      const gradientShift = Math.sin(time) * 0.15 + 0.5; // More dynamic shift
      const colorIntensity = Math.sin(time * 0.3) * 0.1 + 0.9; // Subtle color pulsing
      
      gradient.addColorStop(0, color + Math.floor(60 * colorIntensity).toString(16));
      gradient.addColorStop(gradientShift, color + Math.floor(170 * colorIntensity).toString(16));
      gradient.addColorStop(1, color);
      
      ctx.fillStyle = gradient;
      
      // Draw liquid shape with ultra-smooth curves and surface tension effect
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Use enhanced Catmull-Rom spline for ultra-smooth liquid curves
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        
        // Enhanced control points calculation for more realistic liquid behavior
        const tension = 0.4; // Higher tension for more liquid-like curves
        const cp1x = current.x + (next.x - current.x) * tension;
        const cp1y = current.y + (next.y - current.y) * tension;
        const cp2x = next.x - (next.x - current.x) * tension;
        const cp2y = next.y - (next.y - current.y) * tension;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
      }
      
      // Close the liquid shape smoothly
      const lastPoint = points[points.length - 1];
      ctx.lineTo(lastPoint.x, liquidHeight);
      ctx.lineTo(points[0].x, liquidHeight);
      ctx.closePath();
      
      ctx.fill();
      
      // Enhanced highlight with multiple layers for more liquid appearance
      if (alpha > 0.8) {
        // Primary highlight
        ctx.globalAlpha = 0.4;
        const highlightGradient = ctx.createLinearGradient(0, 0, 0, liquidHeight * 0.3);
        highlightGradient.addColorStop(0, '#ffffff');
        highlightGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = highlightGradient;
        ctx.fill();
        
        // Secondary subtle glow
        ctx.globalAlpha = 0.2;
        const glowGradient = ctx.createRadialGradient(
          canvas.width * 0.5, 0, 0,
          canvas.width * 0.5, 0, canvas.width * 0.8
        );
        glowGradient.addColorStop(0, '#ffffff');
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
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
        className="absolute bottom-0 w-full h-full liquid-canvas"
        style={{
          mixBlendMode: 'multiply',
          left: '-200px', // Offset to center the extended canvas
          width: 'calc(100% + 400px)', // Extend beyond screen width
        }}
      />
    </div>
  );
};

export default LiquidWaveEffect;
