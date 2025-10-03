"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

// Força o Canvas a rodar só no client
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

function HouseModel() {
  const gltf = useLoader(GLTFLoader, "/models/t12_-_habitacao_sustentavel.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function House3D() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <HouseModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
