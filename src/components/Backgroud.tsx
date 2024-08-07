import { shaderMaterial } from '@react-three/drei';
import { extend, useLoader, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uMouse: new THREE.Vector2(0.5, 0.5),
    uTexture: new THREE.Texture(),
    uTime: 0,
  },
  // Vertex Shader
  `
    precision mediump float;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    precision mediump float;
    uniform vec2 uMouse;
    uniform sampler2D uTexture;
    uniform float uTime;
    varying vec2 vUv;

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x * 34.0) + 1.0) * x);
    }

    vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    float snoise3(vec3 v) { 
        const vec2  C = vec2(1.0/6.0, 1.0/3.0);
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod289(i); 
        vec4 p = permute(permute(permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0 / 7.0;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
    }

    void main() {
      vec2 uv = vUv;
      
      // 테두리 효과를 위한 가중치 계산
      float edgeWeight = smoothstep(0.0, 0.3, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
      
      // 노이즈 계산 (시간 요소 추가 및 속도 감소)
      float noise = snoise3(vec3(vUv * uMouse * 0.6, sin(uTime * 0.5) * 0.5));
      
      // 테두리에 가까울수록 노이즈 효과 감소 (왜곡 강도 감소)
      vec2 distortion = vec2(noise, noise) * 0.06 * edgeWeight;
      
      // 왜곡된 UV 좌표 계산
      vec2 distortedUV = uv + distortion;
      
      // 텍스처 샘플링
      vec4 textureColor = texture2D(uTexture, distortedUV);
      
      // 감마 보정
      textureColor.rgb = pow(textureColor.rgb, vec3(1.0/2.2));
      
      gl_FragColor = textureColor;
    }
  `
);

extend({ WaveShaderMaterial });
function Background() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  // const [mouse, setMouse] = useState(new THREE.Vector2(0.5, 0.5));

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     setMouse(
  //       new THREE.Vector2(
  //         (event.clientX / window.innerWidth) * 2 - 1,
  //         -(event.clientY / window.innerHeight) * 2 + 1
  //       )
  //     );
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // useFrame((state) => {
  //   if (meshRef.current) {
  //     const material = meshRef.current.material as THREE.ShaderMaterial;
  //     material.uniforms.uMouse.value.lerp(mouse, 0.05);
  //     material.uniforms.uTime.value = state.clock.elapsedTime;
  //   }
  // });

  const [image] = useLoader(THREE.TextureLoader, ['/images/main-graphic.png']);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height, 50, 50]} />
      <waveShaderMaterial side={THREE.DoubleSide} uTexture={image} />
    </mesh>
  );
}
export default Background;
