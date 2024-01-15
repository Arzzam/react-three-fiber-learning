import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <mesh position-x={-2} rotation-x={Math.PI * 0.5}>
          <torusKnotGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[2, 0, 0]} scale={1.5}>
          <torusKnotGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
