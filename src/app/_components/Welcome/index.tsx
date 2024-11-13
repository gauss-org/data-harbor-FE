import { Text, Title, Center, Code } from "@mantine/core";

export function Welcome() {
  return (
    <main>
      <Center>
        <Title>Data Harbor</Title>
      </Center>

      <Center>
        <Text>
          Build your custom event schema and get started with our ingestion app
        </Text>
      </Center>

      <Center>
        <Text>
          Edit <Code>src/app/page.tsx</Code> to get started
        </Text>
      </Center>
    </main>
  );
}

export default Welcome;
