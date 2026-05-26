import React, { useEffect, useRef } from "react";

export default function OrbCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 100;
    const radius = Math.min(width, height) * 0.35;
    let rotationX = 0;
    let rotationY = 0;
    
    // Mouse interaction states
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    // Create 3D sphere particles
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      particles.push({
        x3d: radius * Math.sin(theta) * Math.cos(phi),
        y3d: radius * Math.sin(theta) * Math.sin(phi),
        z3d: radius * Math.cos(theta),
        baseSize: Math.random() * 2 + 1,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left - width / 2;
      mouse.targetY = e.clientY - rect.top - height / 2;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const project = (x, y, z, rotX, rotY) => {
      // Rotate Y
      let cosY = Math.cos(rotY);
      let sinY = Math.sin(rotY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // Rotate X
      let cosX = Math.cos(rotX);
      let sinX = Math.sin(rotX);
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      // Perspective projection
      const perspective = 400;
      const scale = perspective / (perspective + z2);
      
      return {
        x: x1 * scale + width / 2,
        y: y2 * scale + height / 2,
        scale: scale,
        depth: z2,
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation tracking
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
        rotationY = mouse.x * 0.003;
        rotationX = -mouse.y * 0.003;
      } else {
        rotationY += 0.005;
        rotationX = Math.sin(rotationY * 0.5) * 0.2;
      }

      // Draw background glow grid
      ctx.strokeStyle = "rgba(0, 240, 255, 0.03)";
      ctx.lineWidth = 0.5;
      
      // Draw minimal radial coordinate circles in the background
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(189, 0, 255, 0.02)";
      ctx.stroke();

      // Sort particles by depth for rendering correctness ( painters algorithm )
      const projectedParticles = particles.map((p) => {
        const proj = project(p.x3d, p.y3d, p.z3d, rotationX, rotationY);
        return { ...p, ...proj };
      });

      projectedParticles.sort((a, b) => b.depth - a.depth);

      // Render lines connecting close particles for a neural network mesh feel
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.12 * p1.scale;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw actual particles
      projectedParticles.forEach((p) => {
        const size = p.baseSize * p.scale;
        if (size <= 0) return;

        // Gradient based on depth
        const glowColor = p.depth < 0 
          ? `rgba(0, 240, 255, ${0.4 + p.scale * 0.4})` // Front
          : `rgba(189, 0, 255, ${0.2 + p.scale * 0.3})`; // Back

        ctx.fillStyle = glowColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Add soft halo glow to close front particles
        if (p.depth < -radius * 0.5) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(0, 240, 255, 0.5)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-auto"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
