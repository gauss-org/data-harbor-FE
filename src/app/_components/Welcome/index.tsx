import { Text, Box, Space, Badge, TextInput, Button, Flex } from "@mantine/core";

export function Welcome() {
  return (
    <main>
      <Flex direction={"column"} align={"center"} gap={"xs"}>
        <Badge c={"#212936"} p={16} bg={"#e5e7eb"}>Coming Soon</Badge>
        <Space h={"xs"}></Space>
        <Flex align={"center"} direction={"column"}>
          <Text fz={"3rem"} fw={700} lh={"3.5rem"}>Data Ingestion,</Text>
          <Text fz={"3rem"} fw={700} lh={"3.5rem"}>Reimagined</Text>
        </Flex>
        <Space h={"xs"}></Space>
        <Text size={"md"} c={"gray"}>Streamline your B2B data collection with our cutting-edge pipeline solution. Built for modern enterprises that demand flexibility and performance.</Text>
        <Space h={"xs"}></Space>
        <Box>
          <form>
            <Flex align={"center"} gap={"md"}>
              <TextInput placeholder={"Enter your email"}/>
              <Button bg={"#000"}>Join Waitlist</Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </main>
  );
}

export default Welcome;
