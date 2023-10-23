import Model from "./DesktopModal";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";

function Desktop() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={11.8} position={[1, 1, 1]} />

      <Model scale={2} />

      <ContactShadows position={[0, -1.7, 0]} blur={2.5} scale={20} far={10} />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default Desktop;
