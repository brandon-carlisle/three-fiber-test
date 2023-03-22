import { Canvas } from '@react-three/fiber';

import Scene from './Scene';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
