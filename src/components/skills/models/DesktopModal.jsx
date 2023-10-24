import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/desktop/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.937}>
          <group name="777569816eb7415eb28f24ddd30b3a42fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Circle" position={[-112.847, -83.787, 0]} scale={15.39}>
                  <mesh name="Circle_Material002_0" geometry={nodes.Circle_Material002_0.geometry} material={materials['Material.002']} />
                </group>
                <group name="Circle001" position={[126.7, -94.005, 0]} scale={28.331}>
                  <mesh name="Circle001_Material002_0" geometry={nodes.Circle001_Material002_0.geometry} material={materials['Material.002']} />
                </group>
                <group name="Circle002" position={[157.131, -80.207, -4.551]} scale={19.782}>
                  <mesh name="Circle002_Material002_0" geometry={nodes.Circle002_Material002_0.geometry} material={materials['Material.002']} />
                </group>
                <group name="Circle004" position={[126.878, -67.996, -2.736]} rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
                  <group name="Circle003" position={[0.519, 0.043, 67.728]} rotation={[Math.PI / 2, 0, 0]} scale={26.655}>
                    <mesh name="Circle003_BMD_AbstractGlass001_0" geometry={nodes.Circle003_BMD_AbstractGlass001_0.geometry} material={materials['BMD_AbstractGlass.001']} />
                  </group>
                  <mesh name="Circle004_Material009_0" geometry={nodes.Circle004_Material009_0.geometry} material={materials['Material.009']} />
                </group>
                <group name="Circle005" position={[156.851, -63.603, -7.009]} rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
                  <group name="Circle006" position={[0.243, 0.251, 48.465]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[19.003, 19.003, 11.226]}>
                    <mesh name="Circle006_BMD_AbstractGlass001_0" geometry={nodes.Circle006_BMD_AbstractGlass001_0.geometry} material={materials['BMD_AbstractGlass.001']} />
                  </group>
                  <mesh name="Circle005_Material009_0" geometry={nodes.Circle005_Material009_0.geometry} material={materials['Material.009']} />
                </group>
                <group name="Circle008" position={[-113.27, -70.961, -2.902]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.81}>
                  <group name="Circle007" position={[0.519, -5.279, 67.728]} rotation={[Math.PI / 2, 0, 0]} scale={26.655}>
                    <mesh name="Circle007_BMD_AbstractGlass001_0" geometry={nodes.Circle007_BMD_AbstractGlass001_0.geometry} material={materials['BMD_AbstractGlass.001']} />
                  </group>
                  <mesh name="Circle008_Material009_0" geometry={nodes.Circle008_Material009_0.geometry} material={materials['Material.009']} />
                </group>
                <group name="Circle009" position={[-143.243, -66.569, -3.078]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.81}>
                  <group name="Circle010" position={[0.243, -2.186, 48.465]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[19.003, 19.003, 11.226]}>
                    <mesh name="Circle010_BMD_AbstractGlass001_0" geometry={nodes.Circle010_BMD_AbstractGlass001_0.geometry} material={materials['BMD_AbstractGlass.001']} />
                  </group>
                  <mesh name="Circle009_Material009_0" geometry={nodes.Circle009_Material009_0.geometry} material={materials['Material.009']} />
                </group>
                <group name="Circle011" position={[-44.462, -5.394, 23.392]} rotation={[-2.076, -0.681, -0.308]} scale={7.528}>
                  <mesh name="Circle011_Material007_0" geometry={nodes.Circle011_Material007_0.geometry} material={materials['Material.007']} />
                </group>
                <group name="��������������" position={[-81.6, -80.747, 58.289]} rotation={[-Math.PI / 2, 0, 0.48]} scale={[10.789, 18.919, 18.919]}>
                  <group name="��������������001">
                    <mesh name="��������������001_Material_0" geometry={nodes['��������������001_Material_0'].geometry} material={materials.Material} />
                  </group>
                  <mesh name="��������������_Material011_0" geometry={nodes['��������������_Material011_0'].geometry} material={materials['Material.011']} />
                </group>
                <group name="����������" position={[80.59, -82.884, 24.432]} rotation={[-Math.PI / 2, 0, -0.369]} scale={[21.043, 12.362, 12.362]}>
                  <group name="Plane007" position={[0, -0.149, 0.018]} scale={[0.755, 0.127, 0.598]}>
                    <mesh name="Plane007_Material014_0" geometry={nodes.Plane007_Material014_0.geometry} material={materials['Material.014']} />
                  </group>
                  <group name="Plane006" position={[-0.612, 0.506, 0.018]} scale={[0.141, 0.222, 1.041]}>
                    <mesh name="Plane006_Material014_0" geometry={nodes.Plane006_Material014_0.geometry} material={materials['Material.014']} />
                  </group>
                  <mesh name="����������_Material013_0" geometry={nodes['����������_Material013_0'].geometry} material={materials['Material.013']} />
                </group>
                <group name="Plane009" position={[0, 18.284, 5.364]} scale={[74.275, 5.672, 100]}>
                  <mesh name="Plane009_Material003_0" geometry={nodes.Plane009_Material003_0.geometry} material={materials['Material.003']} />
                </group>
                <group name="Plane013" position={[42.183, -8.56, 3.409]} scale={[35.962, 19.895, 9.86]}>
                  <group name="Plane014" position={[0, -0.11, 0.055]} scale={[0.947, 0.831, 0.313]}>
                    <group name="User" position={[0.184, 0.041, 1.066]} scale={[0.319, 0.656, 3.523]}>
                      <mesh name="User_Material008_0" geometry={nodes.User_Material008_0.geometry} material={materials['Material.008']} />
                    </group>
                    <mesh name="Plane014_BMD_AbstractGlass_0" geometry={nodes.Plane014_BMD_AbstractGlass_0.geometry} material={materials.BMD_AbstractGlass} />
                  </group>
                  <group name="Sphere003" position={[0.881, 0.859, -0.002]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.052, 0.188, 0.093]}>
                    <mesh name="Sphere003_Material005_0" geometry={nodes.Sphere003_Material005_0.geometry} material={materials['Material.005']} />
                  </group>
                  <mesh name="Plane013_Material003_0" geometry={nodes.Plane013_Material003_0.geometry} material={materials['Material.003']} />
                </group>
                <group name="Plane015" position={[-46.228, -8.336, 2.241]} scale={[29.316, 14.239, 8.123]}>
                  <group name="Plane016" position={[-0.023, -0.338, 0.163]}>
                    <mesh name="Plane016_Material005_0" geometry={nodes.Plane016_Material005_0.geometry} material={materials['Material.005']} />
                    <mesh name="Plane016_Material012_0" geometry={nodes.Plane016_Material012_0.geometry} material={materials['Material.012']} />
                  </group>
                  <mesh name="Plane015_Material012_0" geometry={nodes.Plane015_Material012_0.geometry} material={materials['Material.012']} />
                  <mesh name="Plane015_BMD_AbstractGlass_0" geometry={nodes.Plane015_BMD_AbstractGlass_0.geometry} material={materials.BMD_AbstractGlass} />
                  <mesh name="Plane015_Material005_0" geometry={nodes.Plane015_Material005_0.geometry} material={materials['Material.005']} />
                </group>
                <group name="Circle014" position={[-78.168, 36.087, 13.427]} rotation={[0, 0, -0.12]} scale={2.716}>
                  <mesh name="Circle014_Material019_0" geometry={nodes.Circle014_Material019_0.geometry} material={materials['Material.019']} />
                </group>
                <group name="Circle015" position={[-78.168, 36.087, 12.484]} rotation={[0, 0, 2.273]} scale={2.716}>
                  <mesh name="Circle015_Material019_0" geometry={nodes.Circle015_Material019_0.geometry} material={materials['Material.019']} />
                </group>
                <group name="Plane" scale={[90.38, 50, 24.78]}>
                  <mesh name="Plane_Material003_0" geometry={nodes.Plane_Material003_0.geometry} material={materials['Material.003']} />
                </group>
                <group name="Plane001" position={[0, -5.506, 1.366]} scale={[85.557, 41.556, 7.744]}>
                  <mesh name="Plane001_Material004_0" geometry={nodes.Plane001_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Sphere" position={[76.154, 42.111, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3.29}>
                  <mesh name="Sphere_Material005_0" geometry={nodes.Sphere_Material005_0.geometry} material={materials['Material.005']} />
                </group>
                <group name="Sphere001" position={[65.647, 42.111, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.833}>
                  <mesh name="Sphere001_Material005_0" geometry={nodes.Sphere001_Material005_0.geometry} material={materials['Material.005']} />
                </group>
                <group name="Sphere002" position={[55.84, 42.111, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.379}>
                  <mesh name="Sphere002_Material005_0" geometry={nodes.Sphere002_Material005_0.geometry} material={materials['Material.005']} />
                </group>
                <group name="Plane002" position={[0, -60.57, -14.765]} scale={[24.085, 21.337, 100]}>
                  <mesh name="Plane002_Material003_0" geometry={nodes.Plane002_Material003_0.geometry} material={materials['Material.003']} />
                </group>
                <group name="Plane004" position={[-1.139, -77.561, 53.04]} rotation={[-1.388, 0, 0]} scale={[58.237, 22.258, 58.237]}>
                  <mesh name="Plane004_Material002_0" geometry={nodes.Plane004_Material002_0.geometry} material={materials['Material.002']} />
                  <mesh name="Plane004_Material002_0_1" geometry={nodes.Plane004_Material002_0_1.geometry} material={materials['Material.002']} />
                </group>
                <group name="Plane010" position={[-58, 18.284, 5.872]} scale={[8.723, 1.445, 25.441]}>
                  <mesh name="Plane010_Material_0" geometry={nodes.Plane010_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="Plane011" position={[-28.317, 18.284, 5.872]} scale={[18.479, 1.445, 25.441]}>
                  <mesh name="Plane011_Material_0" geometry={nodes.Plane011_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="Plane012" position={[3.105, 18.284, 5.872]} scale={[6.221, 1.445, 25.441]}>
                  <mesh name="Plane012_Material_0" geometry={nodes.Plane012_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="Circle012" position={[-78.168, 36.087, 11.505]} scale={20.532}>
                  <mesh name="Circle012_Material007_0" geometry={nodes.Circle012_Material007_0.geometry} material={materials['Material.007']} />
                  <mesh name="Circle012_Material018_0" geometry={nodes.Circle012_Material018_0.geometry} material={materials['Material.018']} />
                </group>
                <group name="Circle013" position={[-78.168, 36.087, 11.505]} scale={20.532}>
                  <mesh name="Circle013_������������_eevee_0" geometry={nodes['Circle013_������������_eevee_0'].geometry} material={materials.eevee} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/desktop/scene.gltf')
