"use client";

import { Component, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sceneFrame, scrollFraction } from "@/lib/scene-timeline.mjs";

type Point = [number, number];

function letterShape(points: Point[]) {
  const shape = new THREE.Shape();
  points.forEach(([x, y], index) => {
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();
  return shape;
}

const N_SHAPE = letterShape([
  [0, 0], [0, 2.9], [0.48, 2.9], [1.36, 1.02],
  [1.36, 2.9], [1.82, 2.9], [1.82, 0], [1.34, 0],
  [0.47, 1.9], [0.47, 0],
]);
const H_SHAPE = letterShape([
  [0, 0], [0, 2.9], [0.48, 2.9], [0.48, 1.72],
  [1.34, 1.72], [1.34, 2.9], [1.82, 2.9], [1.82, 0],
  [1.34, 0], [1.34, 1.25], [0.48, 1.25], [0.48, 0],
]);

function Letter({ shape, accent }: { shape: THREE.Shape; accent: string }) {
  const geometry = useMemo(() => {
    const result = new THREE.ExtrudeGeometry(shape, {
      depth: 0.52,
      steps: 1,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.065,
      bevelSegments: 3,
      curveSegments: 3,
    });
    result.computeVertexNormals();
    return result;
  }, [shape]);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 24), [geometry]);

  useEffect(() => () => {
    edges.dispose();
    geometry.dispose();
  }, [edges, geometry]);

  return (
    <group>
      <mesh geometry={geometry} castShadow>
        <meshPhysicalMaterial
          color="#a9b7be"
          metalness={0.66}
          roughness={0.28}
          clearcoat={0.85}
          clearcoatRoughness={0.12}
          flatShading
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={accent} transparent opacity={0.8} />
      </lineSegments>
      <mesh geometry={geometry} position={[0, 0, -0.14]}>
        <meshBasicMaterial color={accent} transparent opacity={0.1} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Architecture() {
  const fins = useMemo(() => Array.from({ length: 13 }, (_, i) => i - 6), []);
  return (
    <group>
      <mesh position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[140, 140]} />
        <meshStandardMaterial color="#0b1419" metalness={0.32} roughness={0.76} />
      </mesh>
      <mesh position={[0, -2.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.35, 3.38, 96]} />
        <meshBasicMaterial color="#8de9e4" transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, -2.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.15, 5.16, 96]} />
        <meshBasicMaterial color="#96c5d0" transparent opacity={0.22} />
      </mesh>
      {fins.map((index) => (
        <mesh key={index} position={[index * 3, -0.6, -7.5 - Math.abs(index) * 0.35]}>
          <boxGeometry args={[0.12, 6.3 + (index % 3) * 1.1, 0.7]} />
          <meshStandardMaterial color="#1a2a30" metalness={0.35} roughness={0.78} />
        </mesh>
      ))}
      <mesh position={[0, 3.7, -9.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[110, 20]} />
        <meshStandardMaterial color="#142027" roughness={1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function InnerStructure() {
  return (
    <group>
      {[-0.54, 0, 0.54].map((depth, index) => (
        <group key={depth} position={[0, 0.15, depth]}>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[1.45 - index * 0.14, 1.45 - index * 0.14, 0.055]} />
            <meshPhysicalMaterial color="#779e9e" transparent opacity={0.2 + index * 0.05} metalness={0.45} roughness={0.18} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <torusGeometry args={[0.82 - index * 0.08, 0.008, 3, 4]} />
            <meshBasicMaterial color="#c9f7ee" transparent opacity={0.7 - index * 0.12} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.15, 0]}>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#d5eee9" emissive="#6bbdb3" emissiveIntensity={0.6} metalness={0.3} roughness={0.18} flatShading />
      </mesh>
      <pointLight position={[0, 0.15, 0]} color="#9cebe0" intensity={8} distance={4} />
    </group>
  );
}

function World({ reduced, narrow }: { reduced: boolean; narrow: boolean }) {
  const { camera, invalidate } = useThree();
  const progress = useRef(0);
  const pointer = useRef(0);
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const monogram = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const lookAt = useMemo(() => new THREE.Vector3(), []);
  const desiredPosition = useMemo(() => new THREE.Vector3(), []);
  const target = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    const update = () => {
      progress.current = scrollFraction(
        window.scrollY,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      invalidate();
    };
    const onPointer = (event: PointerEvent) => {
      if (reduced || narrow || event.pointerType !== "mouse") return;
      pointer.current = (event.clientX / window.innerWidth - 0.5) * 0.24;
      invalidate();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [invalidate, narrow, reduced]);

  useFrame((_, delta) => {
    const frame = sceneFrame(progress.current, { narrow, reduced });
    desiredPosition.set(
      frame.camera.position[0] + pointer.current,
      frame.camera.position[1],
      frame.camera.position[2],
    );
    target.set(frame.camera.target[0], frame.camera.target[1], frame.camera.target[2]);
    const ease = reduced ? 1 : 1 - Math.exp(-Math.min(delta, 0.08) * 3.6);
    camera.position.lerp(desiredPosition, ease);
    lookAt.lerp(target, ease);
    camera.lookAt(lookAt);

    if (left.current && right.current) {
      left.current.position.x = THREE.MathUtils.damp(
        left.current.position.x, -1.88 - frame.unfold * 1.1, 4.5, delta,
      );
      right.current.position.x = THREE.MathUtils.damp(
        right.current.position.x, 0.18 + frame.unfold * 1.1, 4.5, delta,
      );
      left.current.rotation.y = THREE.MathUtils.damp(left.current.rotation.y, -frame.unfold * 0.46, 4.5, delta);
      right.current.rotation.y = THREE.MathUtils.damp(right.current.rotation.y, frame.unfold * 0.46, 4.5, delta);
    }
    if (monogram.current) {
      monogram.current.rotation.y = THREE.MathUtils.damp(
        monogram.current.rotation.y, -0.12 + progress.current * 0.18, 2.2, delta,
      );
    }
    if (inner.current) {
      inner.current.scale.setScalar(0.25 + frame.unfold * 0.75);
      inner.current.rotation.y = THREE.MathUtils.damp(inner.current.rotation.y, progress.current * Math.PI, 1.8, delta);
    }

    if (
      camera.position.distanceToSquared(desiredPosition) > 0.0002 ||
      lookAt.distanceToSquared(target) > 0.0002 ||
      (left.current && Math.abs(left.current.position.x - (-1.88 - frame.unfold * 1.1)) > 0.002)
    ) invalidate();
  });

  return (
    <>
      <color attach="background" args={["#0a1318"]} />
      <fog attach="fog" args={["#101c22", 11, 27]} />
      <ambientLight intensity={1.7} color="#b2d7dd" />
      <directionalLight position={[-5, 8, 6]} intensity={3.1} color="#e8f6f4" />
      <pointLight position={[4, 1, 2]} intensity={44} color="#4ed6d5" distance={13} decay={2} />
      <pointLight position={[-5, -1, -1]} intensity={30} color="#477a9d" distance={14} decay={2} />
      <Architecture />
      <group ref={monogram} position={[narrow ? 0.6 : 1.05, -1.03, 0]}>
        <group ref={inner} position={[0, 1.33, -0.4]}><InnerStructure /></group>
        <group ref={left} position={[-1.88, 0, 0]}><Letter shape={N_SHAPE} accent="#a4e8e4" /></group>
        <group ref={right} position={[0.18, 0, 0]}><Letter shape={H_SHAPE} accent="#b3e8e5" /></group>
        <mesh position={[0, -0.42, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.7, 2.85, 0.15, 64]} />
          <meshStandardMaterial color="#18282d" metalness={0.7} roughness={0.36} />
        </mesh>
      </group>
    </>
  );
}

class SceneErrorBoundary extends Component<
  { children: React.ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function PortfolioScene() {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const size = window.matchMedia("(max-width: 700px)");
    const update = () => {
      setReduced(motion.matches);
      setNarrow(size.matches);
    };
    update();
    motion.addEventListener("change", update);
    size.addEventListener("change", update);
    const frame = requestAnimationFrame(() => {
      try {
        setEnabled(Boolean(document.createElement("canvas").getContext("webgl2")));
      } catch {
        setEnabled(false);
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", update);
      size.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="scene-backdrop" aria-hidden="true">
      <div className="scene-fallback"><span>NH</span></div>
      {enabled && !reduced && !failed && (
        <SceneErrorBoundary onError={() => setFailed(true)}>
          <Canvas
            className="scene-canvas"
            dpr={[1, 1.5]}
            frameloop="demand"
            camera={{ position: [0.2, 1.1, 10.5], fov: narrow ? 48 : 41, near: 0.1, far: 80 }}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            onCreated={({ gl }) => {
              gl.domElement.addEventListener("webglcontextlost", () => setFailed(true), { once: true });
            }}
          >
            <World reduced={reduced} narrow={narrow} />
          </Canvas>
        </SceneErrorBoundary>
      )}
      <div className="scene-vignette" />
      <div className="scene-grain" />
    </div>
  );
}
