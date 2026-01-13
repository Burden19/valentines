"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls, Html } from "@react-three/drei"
import * as THREE from "three"

// Coordinates for our cities
const LOCATIONS = [
    { name: "Sfax", lat: 34.7406, lon: 10.7603, color: "#3b82f6" }, // blue-500
    { name: "Leeuwarden", lat: 53.2012, lon: 5.7999, color: "#ec4899" }, // pink-500
]

const GLOBE_RADIUS = 0.44
const ROTATION_OFFSET = -170

// Helper to calculate 3D position
function latLonToVector3(lat: number, lon: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180 + ROTATION_OFFSET) * (Math.PI / 180)

    const x = -(radius) * Math.sin(phi) * Math.cos(theta)
    const z = (radius) * Math.sin(phi) * Math.sin(theta)
    const y = (radius) * Math.cos(phi)

    return new THREE.Vector3(x, y, z)
}

function Pin({ lat, lon, name }: { lat: number; lon: number; name: string; color: string }) {
    const { scene } = useGLTF("/map_pin.glb")

    // Cone scene, no coloring needed (original asset colors)
    const pinScene = useMemo(() => scene.clone(), [scene])

    const position = useMemo(() => {
        return latLonToVector3(lat, lon, GLOBE_RADIUS + 0.01)
    }, [lat, lon])

    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.lookAt(0, 0, 0)
        }
    })

    return (
        <group position={position} ref={groupRef}>
            <primitive
                object={pinScene}
                scale={[0.16, 0.16, 0.16]}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <Html distanceFactor={GLOBE_RADIUS * 2.5} position={[0, 0, 0]}>
                <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap border border-white/20 select-none pointer-events-none shadow-lg transform translate-x-6">
                    {name}
                </div>
            </Html>
        </group>
    )
}

function FlightPath() {
    const sfax = LOCATIONS.find(l => l.name === "Sfax")!
    const leeuwarden = LOCATIONS.find(l => l.name === "Leeuwarden")!

    const start = useMemo(() => latLonToVector3(sfax.lat, sfax.lon, GLOBE_RADIUS), [sfax])
    const end = useMemo(() => latLonToVector3(leeuwarden.lat, leeuwarden.lon, GLOBE_RADIUS), [leeuwarden])

    const curve = useMemo(() => {
        // Calculate control point with lower altitude (1.15x radius)
        const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(GLOBE_RADIUS * 1.15)
        return new THREE.QuadraticBezierCurve3(start, mid, end)
    }, [start, end])

    const points = useMemo(() => curve.getPoints(50), [curve])

    // Animate the dash
    const lineRef = useRef<any>(null)
    useFrame((state, delta) => {
        if (lineRef.current) {
            lineRef.current.material.dashOffset -= delta * 1
        }
    })

    return (
        <line ref={lineRef}>
            <bufferGeometry />
            <bufferAttribute
                attach="geometry-attributes-position"
                count={points.length}
                array={new Float32Array(points.flatMap(v => [v.x, v.y, v.z]))}
                itemSize={3}
            />
            <lineDashedMaterial
                color="white"
                dashSize={0.05}
                gapSize={0.05}
                opacity={0.5}
                transparent
                linewidth={1}
            />
        </line>
    )
}

function EarthAndPins() {
    const { scene } = useGLTF("/globe.glb")
    const globeRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.002
        }
    })

    return (
        <group ref={globeRef}>
            <primitive object={scene} />
            {LOCATIONS.map((loc) => (
                <Pin key={loc.name} {...loc} />
            ))}
            <FlightPath />
        </group>
    )
}


export default function Globe() {
    // Preload both models
    useGLTF.preload("/globe.glb")
    useGLTF.preload("/map_pin.glb")

    return (
        <div className="w-full h-[500px] relative cursor-move">
            <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} />

                <EarthAndPins />

                <OrbitControls enableZoom={false} enablePan={false} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
