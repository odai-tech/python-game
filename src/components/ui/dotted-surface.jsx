import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ── Adapted from the shadcn DottedSurface component ───────────────────────────
// Changes from original:
//   - Plain JSX (no TypeScript)
//   - No next-themes — reads theme from CSS variable / data-theme attribute
//   - No @/lib/utils — cn inlined
//   - No 'use client' directive (not Next.js)

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Detect dark mode by checking if the page background is dark
function isDarkMode() {
  // Our app uses a dark bg-primary CSS variable — just always use light dots
  // (the app is dark-theme only, so white/light dots look best)
  return true;
}

export function DottedSurface({ className, ...props }) {
  const containerRef = useRef(null);
  const sceneRef     = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const SEPARATION = 150;
    const AMOUNTX    = 40;
    const AMOUNTY    = 60;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    // Fog is no longer needed since our custom shader performs highly precise,
    // true-transparency distance fading, which completely eliminates static dots.

    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      10000,
    );
    camera.position.set(0, 355, 1220);
    camera.lookAt(0, -50, 0); // Tilt camera slightly down to focus on active foreground waves

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap for perf
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0); // transparent background

    containerRef.current.appendChild(renderer.domElement);

    // ── Geometry ───────────────────────────────────────────────────────────
    const positions = [];
    const colors    = [];

    // Bright white dots with a very slight cool tint — visible through glass panels
    const dotR = 0.78;
    const dotG = 0.80;
    const dotB = 0.95;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
        );
        colors.push(dotR, dotG, dotB);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.Float32BufferAttribute(colors,    3));

    // Custom ShaderMaterial to render perfect round circles and fade out far-away points
    // to complete opacity (alpha = 0) so they do not show up as static dots under glass panels.
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(dotR, dotG, dotB) },
        opacity: { value: 0.65 },
        size: { value: 6.5 }
      },
      vertexShader: `
        uniform float size;
        varying float vDistance;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Distance from camera (negative z coordinate in view space)
          vDistance = -mvPosition.z;
          
          // Size attenuation with distance
          gl_PointSize = size * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying float vDistance;
        void main() {
          // Render perfect round circles instead of generic squares
          vec2 coord = gl_PointCoord - vec2(0.5);
          if (length(coord) > 0.5) discard;
          
          // Calculate opacity fade based on distance
          // Start fading at 600, completely transparent at 1800
          float alpha = opacity;
          if (vDistance > 600.0) {
            alpha *= clamp(1.0 - (vDistance - 600.0) / 1200.0, 0.0, 1.0);
          }
          // Also fade out very close points to prevent sudden clipping at near plane
          if (vDistance < 250.0) {
            alpha *= clamp((vDistance - 80.0) / 170.0, 0.0, 1.0);
          }
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ── Animation ──────────────────────────────────────────────────────────
    let count       = 0;
    let animationId = null;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.07; // slightly slower = less CPU burn
    };

    // ── Resize ─────────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    sceneRef.current = { scene, camera, renderer, points, animationId };

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        geometry.dispose();
        material.dispose();
        sceneRef.current.renderer.dispose();
        if (
          containerRef.current &&
          sceneRef.current.renderer.domElement.parentNode === containerRef.current
        ) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []); // run once — no theme dependency needed

  return (
    <div
      ref={containerRef}
      className={cn('dotted-surface', className)}
      {...props}
    />
  );
}
