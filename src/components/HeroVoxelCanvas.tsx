"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroVoxelCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Point Lighting harmonized with logo (Cyan & Violet)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 5, 50);
    cyanLight.position.set(-8, 8, 10);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x7c3aed, 6, 50);
    violetLight.position.set(12, -6, 8);
    scene.add(violetLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2, 40);
    emeraldLight.position.set(0, -10, 5);
    scene.add(emeraldLight);

    // Instanced Voxel Cubes (dissolving cluster mimicking the SJ logo's upper-right voxels)
    const cubeCount = 65;
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    
    // Translucent glass-like material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00e5ff,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.9,
      ior: 1.5,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, cubeCount);
    const dummy = new THREE.Object3D();

    // Color palette sampled from the SJ 3D Logo
    const colors = [
      new THREE.Color(0x00e5ff), // Electric Cyan
      new THREE.Color(0x2563eb), // Cobalt Azure
      new THREE.Color(0x7c3aed), // Prism Violet
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0x10b981), // Ynadan Emerald
    ];

    // Store custom initial positions and drift offsets
    const voxelData: Array<{
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      rotationSpeedX: number;
      rotationSpeedY: number;
      phase: number;
    }> = [];

    for (let i = 0; i < cubeCount; i++) {
      // Cluster focused around upper right quadrant (resembling dissolving SJ cubes)
      const t = i / cubeCount;
      const spreadX = (Math.random() - 0.2) * 16 + 2;
      const spreadY = (Math.random() - 0.2) * 14 + 1;
      const spreadZ = (Math.random() - 0.5) * 8;

      dummy.position.set(spreadX, spreadY, spreadZ);
      const scale = 0.3 + Math.random() * 0.7;
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(i, dummy.matrix);
      instancedMesh.setColorAt(i, colors[i % colors.length]);

      voxelData.push({
        baseX: spreadX,
        baseY: spreadY,
        baseZ: spreadZ,
        speed: 0.5 + Math.random() * 1.5,
        rotationSpeedX: (Math.random() - 0.5) * 0.02,
        rotationSpeedY: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
      });
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
    scene.add(instancedMesh);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 3;
      targetY = -y * 3;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(0, 0, 0);

      // Animate individual instanced voxels
      for (let i = 0; i < cubeCount; i++) {
        const data = voxelData[i];
        const floatOffset = Math.sin(elapsedTime * data.speed + data.phase) * 0.6;
        const driftX = Math.cos(elapsedTime * 0.5 + data.phase) * 0.3;

        dummy.position.set(
          data.baseX + driftX,
          data.baseY + floatOffset,
          data.baseZ
        );

        dummy.rotation.x += data.rotationSpeedX;
        dummy.rotation.y += data.rotationSpeedY;
        dummy.updateMatrix();

        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    />
  );
}
