"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function HouseModel() {
  const gltf = useLoader(GLTFLoader, "/models/t12_-_habitacao_sustentavel.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function House3D() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        {/* Iluminação */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Carregar modelo */}
        <Suspense fallback={null}>
          <HouseModel />
        </Suspense>

        {/* Controle de câmera */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
