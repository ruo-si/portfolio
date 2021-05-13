import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useThree, useLoader } from '@react-three/fiber'
import { Html, OrbitControls, Loader } from '@react-three/drei'

const store = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/360_DC_777.jpg', link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/360_DC_777.jpg', link: 0 }
  // ...
]

function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

function Portals() {
  const [which, set] = useState(0)
  const { link, ...props } = store[which]
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}

function Preload() {
  // This component pre-loads textures in order to lessen loading impact when clicking portals
  const { gl } = useThree()
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  useEffect(() => maps.forEach(gl.initTexture), [maps])
  return null
}

function Vr2() {

  return (

    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }>
        <Preload />
        <Portals />
      </Suspense>
    </Canvas>

  )
}

export default Vr2
