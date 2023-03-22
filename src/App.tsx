import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[5, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
