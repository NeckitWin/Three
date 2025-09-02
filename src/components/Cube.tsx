import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"

const Cube = ({ color }: { color: string }) => {
    const ref = useRef<Mesh | null>(null)
    useFrame((_, delta) => {
        if (!ref.current) return
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta * 0.7
    })

    return (
        <mesh ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default Cube;