import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"

type FigureType = 'cube' | 'triangle' | 'sphere'

const Cube = ({ color, type }: { color: string; type: FigureType }) => {
    const ref = useRef<Mesh | null>(null)
    useFrame((_, delta) => {
        if (!ref.current) return
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta * 0.7
    })

    const renderFigure = () => {
        switch (type) {
            case 'cube':
                return <boxGeometry args={[1, 1, 1]} />;
            case 'triangle':
                return <coneGeometry args={[1, 1.5, 3]} />
            case 'sphere':
                return <sphereGeometry args={[1, 32, 32]} />
            default:
                return <boxGeometry args={[1, 1, 1]} />;
        }
    }

    return (
        <mesh ref={ref}>
            {renderFigure()}
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default Cube;