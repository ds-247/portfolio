import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { color, meshStandardMaterial, pointLight } from "three";
// import { Color, meshStandardMaterial } from 'three';
import Atom from "./Atom";

function AtomComp() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Suspense fallback={null}>
        <Atom />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
}
export default AtomComp;
