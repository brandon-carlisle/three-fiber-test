import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function BoxMesh() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime();
    meshRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
export default BoxMesh;
