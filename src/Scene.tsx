import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <>
      <OrbitControls />
      <Lighting />
      <BoxMesh />
    </>
  );
}
export default Scene;

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 0]} />
    </>
  );
}

function BoxMesh() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() / 2;
    meshRef.current.rotation.x = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </mesh>
  );
}
