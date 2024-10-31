import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const Particles = () => {
    const groupRef = useRef<any>();
  
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
        radius={1}      // Radius of the inner sphere
        depth={3}        // Depth of the stars
        count={1000}      // Number of stars
        factor={0.3}        // Size factor
        saturation={0}    // Color saturation
        fade={true}       // Fading of stars at edges
        />
      </group>
    );
  };