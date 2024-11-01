import { Outlet } from 'react-router-dom';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import { ShootingStar, Particles } from '../components/THREEJsComponents/index';
import { Footer } from '../components/index';


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
        }}
      >
        <ambientLight intensity={1} />

        <ShootingStar />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.5} intensity={0.4} />
        </EffectComposer>
    
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
