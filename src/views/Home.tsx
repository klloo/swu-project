import { Canvas } from '@react-three/fiber';
import Background from '../components/Backgroud';
import MagnifyText from '../components/MagnifyText';
import Particle from '../components/Particle';

function Home() {
  return (
    <>
      <div className="h-full w-full absolute top-0 z-10 left-[50%] -translate-x-1/2">
        <MagnifyText />
      </div>
      <div className="h-full w-full absolute top-0 z-5 left-[50%] -translate-x-1/2">
        <Particle />
      </div>
      <div className="z-0">
        <Canvas
          camera={{ fov: 15, position: [0, 0, 5] }}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
          }}
        >
          <Background />
        </Canvas>
      </div>
    </>
  );
}

export default Home;
