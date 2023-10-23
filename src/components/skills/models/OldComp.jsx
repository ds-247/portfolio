import Model from "./OldCompModal";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

function Tree() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={11.8} position={[1, 1, 1]} />
      <Model scale={0.5} />
      <ContactShadows position={[0, -1.7, 0]} blur={2.5} scale={20} far={10} />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default Tree;
