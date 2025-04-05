import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const CallIconAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(100, 100); // Set size for the animation container
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a Geometry (e.g., rotating sphere for simplicity)
    const geometry = new THREE.SphereGeometry(0.5, 32, 32); // Replace with your own 3D icon geometry if needed
    const material = new THREE.MeshBasicMaterial({ color: 0xffa22a }); // Orange color for the icon
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 3;

    // Animation Function
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotate the sphere
      sphere.rotation.x += 0.01; // Optional: Add x-axis rotation
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-24 h-24"></div>;
};

export default CallIconAnimation;
