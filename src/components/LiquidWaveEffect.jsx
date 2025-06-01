import React, { useState, useEffect, useRef } from "react";
const LiquidWaveEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });
  const pointsA = useRef([]);
  const pointsB = useRef([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const splashParticles = useRef([]);
  const bubbleParticles = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const newMousePos = {
        x: e.clientX - rect.left + 200,
        y: e.clientY - rect.top,
      };
      setMousePos(newMousePos);
      const rawSpeedX = newMousePos.x - lastMousePos.current.x;
      const rawSpeedY = newMousePos.y - lastMousePos.current.y;
      const speedMultiplier = 1.4;
      setMouseSpeed({
        x: rawSpeedX * speedMultiplier,
        y: rawSpeedY * speedMultiplier,
      });
      lastMousePos.current = newMousePos;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    const handleResize = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const minHeight = 120;
  const maxHeight = 280;
  const scrollFactor = 0.2;
  const liquidHeight = Math.min(maxHeight, minHeight + scrollY * scrollFactor);
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const footerElement = document.querySelector("footer");
  const footerHeight = footerElement ? footerElement.offsetHeight : 0;
  const footerStartsAt = documentHeight - windowHeight - footerHeight;
  const scrollUntilFooter = Math.max(0, footerStartsAt);
  const progressToFooter =
    scrollUntilFooter > 0 ? Math.min(1, scrollY / scrollUntilFooter) : 0;
  const maxLiquidOffset = liquidHeight + 50;
  const liquidBottomOffset = progressToFooter * maxLiquidOffset;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
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
        const waveOffset1 = Math.sin((i / numPoints) * Math.PI * 3) * 8;
        const waveOffset2 = Math.sin((i / numPoints) * Math.PI * 5) * 4;
        const waveOffset3 = Math.cos((i / numPoints) * Math.PI * 7) * 2;
        const waveOffset4 = Math.sin((i / numPoints) * Math.PI * 2) * 6;
        const y = baseY + waveOffset1 + waveOffset2 + waveOffset3 + waveOffset4;
        const level1 = 1 + (i % 3) * 0.1;
        const level2 = 1.4 + (i % 4) * 0.1;
        pointsA.current.push(new LiquidPoint(x, y, level1));
        pointsB.current.push(new LiquidPoint(x, y - 8, level2));
      }
    };
    const updatePoints = () => {
      timeRef.current += 0.02;
      const damping = 0.06;
      const mouseDist = 150;
      const viscosity = 25;
      const mouseInfluence = 0.6;
      [pointsA.current, pointsB.current].forEach((points, layerIndex) => {
        points.forEach((point, i) => {
          const waveSpeed1 = layerIndex === 0 ? 0.8 : 1.1;
          const waveSpeed2 = layerIndex === 0 ? 1.2 : 0.9;
          const waveSpeed3 = layerIndex === 0 ? 0.5 : 1.6;
          const horizontalWave1 =
            Math.sin(timeRef.current * waveSpeed1 + i * 0.3) * 3;
          const horizontalWave2 =
            Math.cos(timeRef.current * waveSpeed2 + i * 0.5) * 2;
          const horizontalWave3 =
            Math.sin(timeRef.current * waveSpeed3 + i * 0.2) * 1.5;
          const verticalWave = Math.sin(timeRef.current * 0.7 + i * 0.4) * 1.5;
          const targetX =
            point.ix + horizontalWave1 + horizontalWave2 + horizontalWave3;
          const targetY = point.iy + verticalWave;
          const springStrength = 1 / (viscosity * point.level);
          point.vx += (targetX - point.x) * springStrength;
          point.vy += (targetY - point.y) * springStrength;
          const dx = point.x - mousePos.x;
          const dy = point.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDist) {
            const distanceRatio = 1 - dist / mouseDist;
            const force = distanceRatio * distanceRatio * 0.4;
            point.vx += mouseSpeed.x * force * mouseInfluence;
            point.vy += mouseSpeed.y * force * mouseInfluence;
            const repulsionForce = distanceRatio * 0.2;
            const angle = Math.atan2(dy, dx);
            point.vx += Math.cos(angle) * repulsionForce;
            point.vy += Math.sin(angle) * repulsionForce;
            const swirl = distanceRatio * 0.1;
            point.vx += -Math.sin(angle) * swirl;
            point.vy += Math.cos(angle) * swirl;
            const turbulence = distanceRatio * 0.05;
            const turbulenceAngle = timeRef.current * 2 + i * 0.3;
            point.vx += Math.cos(turbulenceAngle) * turbulence;
            point.vy += Math.sin(turbulenceAngle) * turbulence;
            const speedMagnitude = Math.sqrt(
              mouseSpeed.x * mouseSpeed.x + mouseSpeed.y * mouseSpeed.y
            );
            if (
              speedMagnitude > 12 &&
              Math.random() < 0.25 &&
              distanceRatio > 0.5
            ) {
              createSplashParticle(point.x, point.y, angle, speedMagnitude);
            }
            if (
              speedMagnitude > 5 &&
              Math.random() < 0.1 &&
              distanceRatio > 0.3
            ) {
              createBubbleParticle(point.x, point.y - 10);
            }
          }
          point.vx *= 1 - damping;
          point.vy *= 1 - damping;
          point.x += point.vx;
          point.y += point.vy;
          const driftSpeed1 = layerIndex === 0 ? 0.15 : -0.1;
          const driftSpeed2 = layerIndex === 0 ? -0.08 : 0.12;
          const driftSpeed3 = layerIndex === 0 ? 0.05 : -0.07;
          point.x += Math.sin(timeRef.current * 0.5 + i * 0.25) * driftSpeed1;
          point.x += Math.cos(timeRef.current * 0.3 + i * 0.6) * driftSpeed2;
          point.x += Math.sin(timeRef.current * 0.8 + i * 0.12) * driftSpeed3;
          const wavePropagate1 =
            Math.sin(timeRef.current * 1.8 + i * 0.08) * 0.8;
          const wavePropagate2 =
            Math.cos(timeRef.current * 1.3 + i * 0.15) * 0.6;
          point.x += wavePropagate1 + wavePropagate2;
          if (i > 0 && i < points.length - 1) {
            const leftPoint = points[i - 1];
            const rightPoint = points[i + 1];
            const cohesionForce = 0.03;
            point.vx += (leftPoint.x - point.x) * cohesionForce;
            point.vx += (rightPoint.x - point.x) * cohesionForce;
            point.vy += (leftPoint.y - point.y) * cohesionForce;
            point.vy += (rightPoint.y - point.y) * cohesionForce;
          }
          if (Math.random() < 0.002) {
            const randomAngle = Math.random() * Math.PI * 2;
            createSplashParticle(
              point.x,
              point.y,
              randomAngle,
              6 + Math.random() * 6
            );
          }
          if (Math.random() < 0.001) {
            createBubbleParticle(point.x, point.y - 5);
          }
        });
      });
    };
    const drawLiquidLayer = (ctx, points, color, alpha) => {
      if (points.length < 3) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      const gradient = ctx.createLinearGradient(0, 0, 0, liquidHeight);
      const time = timeRef.current * 0.5;
      const gradientShift = Math.sin(time) * 0.15 + 0.5;
      const colorIntensity = Math.sin(time * 0.3) * 0.1 + 0.9;
      gradient.addColorStop(
        0,
        color + Math.floor(60 * colorIntensity).toString(16)
      );
      gradient.addColorStop(
        gradientShift,
        color + Math.floor(170 * colorIntensity).toString(16)
      );
      gradient.addColorStop(1, color);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        const prev = points[i - 1] || current;
        const afterNext = points[i + 2] || next;
        const tension = 0.5;
        const cp1x = current.x + (next.x - prev.x) * tension * 0.16;
        const cp1y = current.y + (next.y - prev.y) * tension * 0.16;
        const cp2x = next.x - (afterNext.x - current.x) * tension * 0.16;
        const cp2y = next.y - (afterNext.y - current.y) * tension * 0.16;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
      }
      const lastPoint = points[points.length - 1];
      ctx.lineTo(lastPoint.x, liquidHeight);
      ctx.lineTo(points[0].x, liquidHeight);
      ctx.closePath();
      ctx.fill();
      if (alpha > 0.8) {
        ctx.globalAlpha = 0.4;
        const highlightGradient = ctx.createLinearGradient(
          0,
          0,
          0,
          liquidHeight * 0.3
        );
        highlightGradient.addColorStop(0, "#ffffff");
        highlightGradient.addColorStop(1, "transparent");
        ctx.fillStyle = highlightGradient;
        ctx.fill();
        ctx.globalAlpha = 0.2;
        const glowGradient = ctx.createRadialGradient(
          canvas.width * 0.5,
          0,
          0,
          canvas.width * 0.5,
          0,
          canvas.width * 0.8
        );
        glowGradient.addColorStop(0, "#ffffff");
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }
      ctx.restore();
    };
    initPoints();
    const createSplashParticle = (x, y, angle, speed) => {
      const numParticles = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numParticles; i++) {
        const spreadAngle = angle + (Math.random() - 0.5) * Math.PI * 0.8;
        const particle = {
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 5,
          vx: Math.cos(spreadAngle) * (speed * 0.4 + Math.random() * 4),
          vy:
            Math.sin(spreadAngle) * (speed * 0.4 + Math.random() * 4) -
            Math.random() * 8,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.015,
          size: 3 + Math.random() * 5,
          gravity: 0.15 + Math.random() * 0.1,
          originalSize: 3 + Math.random() * 5,
        };
        splashParticles.current.push(particle);
      }
    };
    const updateSplashParticles = () => {
      splashParticles.current = splashParticles.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.life -= particle.decay;
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        if (particle.y > liquidHeight - 20 && particle.vy > 0) {
          particle.vy *= -0.3;
          particle.vx *= 0.7;
        }
        return particle.life > 0;
      });
    };
    const drawSplashParticles = (ctx) => {
      splashParticles.current.forEach((particle) => {
        ctx.save();
        const alpha = particle.life * 0.8;
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = "#ff6b6b";
        ctx.shadowColor = "#dc143c";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.originalSize * 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#dc143c";
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.originalSize * particle.life,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      });
    };
    const createBubbleParticle = (x, y) => {
      const numBubbles = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < numBubbles; i++) {
        const bubble = {
          x: x + (Math.random() - 0.5) * 15,
          y: y + Math.random() * 5,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 3 - 1,
          life: 1.0,
          decay: 0.01 + Math.random() * 0.01,
          size: 2 + Math.random() * 4,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.1 + Math.random() * 0.1,
        };
        bubbleParticles.current.push(bubble);
      }
    };
    const updateBubbleParticles = () => {
      bubbleParticles.current = bubbleParticles.current.filter((bubble) => {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.life -= bubble.decay;
        bubble.wobble += bubble.wobbleSpeed;
        bubble.x += Math.sin(bubble.wobble) * 0.5;
        bubble.vy *= 0.99;
        bubble.vx *= 0.98;
        return bubble.life > 0 && bubble.y > -50;
      });
    };
    const drawBubbleParticles = (ctx) => {
      bubbleParticles.current.forEach((bubble) => {
        ctx.save();
        ctx.globalAlpha = bubble.life * 0.4;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size * bubble.life, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = bubble.life * 0.2;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.size * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      });
    };
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updatePoints();
      updateSplashParticles();
      updateBubbleParticles();
      drawLiquidLayer(ctx, pointsA.current, "#dc143c", 0.95);
      drawLiquidLayer(ctx, pointsB.current, "#8b0000", 0.8);
      drawSplashParticles(ctx);
      drawBubbleParticles(ctx);
      animationRef.current = requestAnimationFrame(render);
    };
    render();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [liquidHeight, mousePos, mouseSpeed]);
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
        bottom: `-${liquidBottomOffset}px`,
        height: `${liquidHeight}px`,
        zIndex: 30,
        transition: "bottom 0.1s ease-out",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 w-full h-full liquid-canvas"
        style={{
          mixBlendMode: "multiply",
          left: "-200px",
          width: "calc(100% + 400px)",
        }}
      />
    </div>
  );
};
export default LiquidWaveEffect;
