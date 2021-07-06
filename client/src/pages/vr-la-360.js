import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import "./vr.css";
import closeBtn from "../assets/close.svg";
import globe from "../assets/globe.svg";
import { Link } from "react-router-dom";

const store = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/360_LA_PACIFIC.jpg', link: 1 },
]

function Dome({ texture }) {
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

function VR_LA_360() {

  return (

    <div>

      {/* threeJS canvas */}
      <Canvas className="canvas" frameloop="demand" camera={{ position: [0, 0, 0.1] }}>

        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.1} autoRotate={true} rotateSpeed={-0.5} />

        <Suspense
          fallback={
            <Html>

            </Html>
          }>
          <Portals />
        </Suspense>

      </Canvas>

      {/* navigation */}
      <div className="close-button">

        <Link to="/vr-la">
          <img alt="close" src={closeBtn} />
        </Link>

      </div>

      <img alt="360" src={globe} className="globe" />

    </div>

  )
};

export default VR_LA_360;
