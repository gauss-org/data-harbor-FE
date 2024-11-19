import { DH_Button } from "@/lib/ui/button/Button";
import { Text, Title, Center, Code } from "@mantine/core";
import { Braces } from "lucide-react";

export function Welcome() {
  return (
    <main>
      <Center>
        <Title className="flex gap-2">
          <Braces size={48} />
          Data Harbor
        </Title>
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
      <DH_Button>Get Started</DH_Button>
    </main>
  );
}

export default Welcome;
