import { Stars } from "@react-three/drei/core/Stars";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

const Particles = () => {
  const groupRef = useRef<Group>(null);

  // Animate the stars subtly by rotating them on the Y-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Very slow rotation
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={1} // Radius of the inner sphere
        depth={3} // Depth of the stars
        count={1000} // Number of stars
        factor={0.2} // Size factor
        saturation={0} // Color saturation
        fade={true} // Fading of stars at edges
      />
    </group>
  );
};

const ParticlesCanvas = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Particles />
    </Canvas>
  );
};

export default ParticlesCanvas;
