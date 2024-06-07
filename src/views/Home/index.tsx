import { Canvas } from '@react-three/fiber';
import Ball from './Ball';
import Background from './Backgroud';

function Home() {
  return (
    <Canvas
      camera={{ fov: 15, position: [0, 0, 5] }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <Background />
      <Ball />
    </Canvas>
  );
}

export default Home;
