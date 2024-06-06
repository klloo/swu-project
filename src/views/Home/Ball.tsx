import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Ball() {
  const ref = useRef();
  const { viewport } = useThree();
  const [velocity, setVelocity] = useState(new THREE.Vector3(0.02, 0.02, 0));

  useFrame(({ mouse }) => {
    if (ref.current) {
      // 마우스 위치로 부드럽게 이동
      ref.current.position.lerp(
        new THREE.Vector3(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        ),
        0.1
      );

      if (ref.current) {
        // 마우스 위치로 부드럽게 이동
        ref.current.position.lerp(
          new THREE.Vector3(
            (mouse.x * viewport.width) / 2,
            (mouse.y * viewport.height) / 2,
            0
          ),
          0.1
        );

        // 화면 경계 확인 및 튕기기
        if (Math.abs(ref.current.position.x) > viewport.width / 2) {
          setVelocity(
            (velocity) => new THREE.Vector3(-velocity.x, velocity.y, velocity.z)
          );
          ref.current.position.lerp(
            new THREE.Vector3(
              Math.sign(ref.current.position.x) * (viewport.width * 0.3),
              ref.current.position.y,
              0
            ),
            0.1
          );
        }
        if (Math.abs(ref.current.position.y) > viewport.height / 2) {
          setVelocity(
            (velocity) => new THREE.Vector3(velocity.x, -velocity.y, velocity.z)
          );
          ref.current.position.lerp(
            new THREE.Vector3(
              ref.current.position.x,
              Math.sign(ref.current.position.y) * (viewport.height * 0.3),
              0
            ),
            0.1
          );
        }

        // 속도 적용
        ref.current.position.add(velocity);
      }
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

export default Ball;
