import { Canvas } from '@react-three/fiber';

import BoxMesh from './BoxMesh';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <BoxMesh />
      </Canvas>
    </div>
  );
}

export default App;
