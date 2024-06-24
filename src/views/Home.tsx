import { Canvas } from '@react-three/fiber';
import Background from '../components/Backgroud';

function Home() {
  return (
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
  );
}

export default Home;
