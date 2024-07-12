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

interface DesignerType {
  name: string;
  email: string;
  instagram: string;
  project1: { thumbnail: string; name: string };
  project2?: { thumbnail: string; name: string };
}

interface ProjectType {
  id: number;
  title: string;
  designers: string[];
  category: string;
  description: string;
  filmUrl?: string;
  detailImageName?: string;
  thumbnailImageName: string;
}
