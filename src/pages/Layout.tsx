import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

// import * as THREE from 'three'
import { Stars } from '@react-three/drei'; 
import { Canvas, useFrame } from '@react-three/fiber';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

import { Footer } from '../components/index';

const Particles = () => {
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
      factor={0.2}        // Size factor
      saturation={0}    // Color saturation
      fade={true}       // Fading of stars at edges
      />
    </group>
  );
};

// const color = new THREE.Color(2, 10, 10);

// const ShootingStar = () => {
//   const ref = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * 0.5; // speed factor set to 1 is default speed
//     if (ref.current) {
//       ref.current.position.set(
//         Math.sin(t) * 20,  // x-axis: horizontal range
//         Math.atan(t) * Math.cos(t / 2) * 20, // y-axis: vertical range
//         Math.cos(t) * 200  // z-axis: depth movement
//       );
//     }
//   });
//   return (
//     <Trail width={5} length={2} color={color} attenuation={(t) => t * t}>
//       <mesh ref={ref}>
//         <sphereGeometry args={[0.25]} />
//         <meshBasicMaterial color={[3, 10, 5]} toneMapped={false} />
//       </mesh>
//     </Trail>
//   );
// }


export const Layout: React.FC = () => {
  return (
   <>
    {/* canvas -- start */}
      <Canvas 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}>

        {/* <ambientLight intensity={0.5} />

        <ShootingStar />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.2} intensity={0.4} />
        </EffectComposer> */}
    
          <Particles />
      </Canvas>
      {/* canvas -- end */}


      {/* layout */}
      <div className='dark-paper'>

        <div className="App">
          {/* Main section */}
          <Outlet />

          {/* Footer */}
          <Footer />
        </div>
      </div>
   </>
  );
};
