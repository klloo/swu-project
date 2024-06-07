// types.d.ts
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        ref?: React.Ref<THREE.ShaderMaterial>;
        uTexture?: THREE.Texture;
        side?: THREE.Side;
      };
    }
  }
}
