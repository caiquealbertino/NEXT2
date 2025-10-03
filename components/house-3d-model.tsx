"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Força o Canvas a rodar só no client (evita erro SSR na Vercel)
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

function HouseModel() {
  // Carrega o seu modelo GLB dentro de public/models/
  const gltf = useLoader(
    GLTFLoader,
    "/models/t12_-_habitacao_sustentavel.glb"
  );
  return <primitive object={gltf.scene} scale={1.2} />;
}

export default function House3DModel() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [8, 6, 10], fov: 45 }}>
        {/* Luzes */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Modelo */}
        <Suspense fallback={null}>
          <HouseModel />
        </Suspense>

        {/* Controle de câmera */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
