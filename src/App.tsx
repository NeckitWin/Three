import { Box, Button, Flex, Text } from "@radix-ui/themes"

const App = () => {
  return (
    <Flex direction="row" gap="4" p="4" >
      
      <Flex direction="column" gap="2" width='50%' >
        <Button variant="soft" color="cyan">Click 1</Button>
        <Button variant="soft" color="crimson">Click 2</Button>
      </Flex>
      <Box  width='50%'>
        <Text>Box Content</Text>
      </Box>

    </Flex >
  )
}

export default App
