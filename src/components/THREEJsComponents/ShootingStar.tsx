import { useRef } from 'react';

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei'; 

export const ShootingStar = () => {
    const ref = useRef<THREE.Mesh>(null);
  
    useFrame((state) => {
      const t = state.clock.getElapsedTime() * 0.5; // speed factor set to 1 is default speed
      if (ref.current) {
        ref.current.position.set(
          Math.sin(t) * 20,  // x-axis: horizontal range
          Math.atan(t) * Math.cos(t / 2) * 20, // y-axis: vertical range
          Math.cos(t) * 200  // z-axis: depth movement
        );
      }
    });
    return (
      <Trail width={3} length={2} color={new THREE.Color(2, 10, 10)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[3, 10, 5]} toneMapped={false} />
        </mesh>
      </Trail>
    );
  }