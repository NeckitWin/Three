import { Box, Button, Flex } from "@radix-ui/themes"
import { Canvas } from "@react-three/fiber"

const App = () => {
  return (
    <Flex direction="row" gap="4" p="4" >
      
      <Flex direction="column" gap="2" width='20%' >
        <Button variant="soft" color="cyan">Click 1</Button>
        <Button variant="soft" color="crimson">Click 2</Button>
      </Flex>
      <Box width='80%' className="bg-white rounded-lg h-full">
        <Canvas>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </Box>

    </Flex >
  )
}

export default App
