import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Ball() {
  const ref = useRef();
  const { viewport } = useThree();
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3());

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setTargetPosition(
        new THREE.Vector3(
          (x * viewport.width) / 2,
          (y * viewport.height) / 2,
          0
        )
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [viewport]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp(targetPosition, 0.08);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

export default Ball;
