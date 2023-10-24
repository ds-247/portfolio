import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
const resourcePath = import.meta.env.BASE_URL + "old_computer/scene.gltf";


export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(resourcePath);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group name="computerfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Disk_Tray"
                  position={[-135, 80, 394]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Disk_Tray_White_0"
                    geometry={nodes.Disk_Tray_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Disk_Tray_Black_0"
                    geometry={nodes.Disk_Tray_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Monitor"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Monitor_White_0"
                    geometry={nodes.Monitor_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Monitor_Dark_Green_0"
                    geometry={nodes.Monitor_Dark_Green_0.geometry}
                    material={materials.Dark_Green}
                  />
                  <mesh
                    name="Monitor_Black_0"
                    geometry={nodes.Monitor_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Monitor_Lime_Green_0"
                    geometry={nodes.Monitor_Lime_Green_0.geometry}
                    material={materials.Lime_Green}
                  />
                  <mesh
                    name="Monitor_Cable_0"
                    geometry={nodes.Monitor_Cable_0.geometry}
                    material={materials.Cable}
                  />
                </group>
                <group
                  name="CPU"
                  position={[0, 80, 394]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="CPU_White_0"
                    geometry={nodes.CPU_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="CPU_Black_0"
                    geometry={nodes.CPU_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Keyboard"
                  position={[-253.881, -11.355, -2.605]}
                  rotation={[-Math.PI / 2, 1.571, 0]}
                  scale={100}
                >
                  <mesh
                    name="Keyboard_Cable_0"
                    geometry={nodes.Keyboard_Cable_0.geometry}
                    material={materials.Cable}
                  />
                  <mesh
                    name="Keyboard_White_0"
                    geometry={nodes.Keyboard_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Keyboard_Lime_Green_0"
                    geometry={nodes.Keyboard_Lime_Green_0.geometry}
                    material={materials.Lime_Green}
                  />
                  <mesh
                    name="Keyboard_Black_0"
                    geometry={nodes.Keyboard_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Floppy_Disk"
                  position={[-252.778, -22.232, 432.976]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Floppy_Disk_Black_0"
                    geometry={nodes.Floppy_Disk_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Floppy_Disk_White_0"
                    geometry={nodes.Floppy_Disk_White_0.geometry}
                    material={materials.White}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(resourcePath);
