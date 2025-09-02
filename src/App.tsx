import { Box, Button, Flex } from "@radix-ui/themes"
import { Canvas } from "@react-three/fiber"
import Cube from "./components/Cube"
import { useState } from "react";

const App = () => {
    const [cubeColor, setCubeColor] = useState<string>('cyan');
  

  return (
    <Flex direction="row" gap="4" p="4">

      <Flex direction="column" gap="2" width='20%'>
        <Button variant="soft" color="cyan" onClick={()=>setCubeColor('cyan')}>Click 1</Button>
        <Button variant="soft" color="crimson" onClick={()=>setCubeColor('crimson')}>Click 2</Button>
      </Flex>

      <Box width='80%' className="bg-white rounded-lg" style={{ height: 420 }}>
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />

          <Cube color={cubeColor} />

        </Canvas>
      </Box>

    </Flex>
  )
}

export default App
