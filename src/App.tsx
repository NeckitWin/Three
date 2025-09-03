import { Box, Button, Flex } from "@radix-ui/themes"
import { Accordion } from "radix-ui";
import { Canvas } from "@react-three/fiber"
import Cube from "./components/Cube"
import { useState } from "react";

const App = () => {
  const [cubeColor, setCubeColor] = useState<string>('cyan');


  return (
    <Flex direction="row" gap="4" p="4">
      <Accordion.Root type="multiple" className="w-[20%] flex flex-col gap-2">
        <Accordion.Item value="colors">
          <Accordion.Header className="flex flex-col">
            <Accordion.Trigger asChild>
              <Button variant="soft" color="gray" size='3'>Colors</Button>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="flex flex-col gap-1 py-1">
            <Button variant="soft" color="cyan" onClick={() => setCubeColor('cyan')}>Cyan</Button>
            <Button variant="soft" color="crimson" onClick={() => setCubeColor('crimson')}>Crimson</Button>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="figures">
          <Accordion.Header className="flex flex-col">
            <Accordion.Trigger asChild>
              <Button variant="soft" color="gray" size='3'>Figures</Button>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="flex flex-col gap-1 py-1">
            <Button variant="soft" color="gray">Triangle</Button>
            <Button variant="soft" color="gray">Square</Button>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <Box width='80%' className="bg-white rounded-lg h-96">
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
