import dynamic from "next/dynamic";
import { DemoFormThemeSelector } from "@/app/_components/demo/DemoFormThemeSelector";
import { Title } from "@mantine/core";
const BasicFormComponent = dynamic(
  () => import("@/app/_components/demo/DemoForm"),
);

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section
        id="FORM-JSON-DEMO"
        className="flex w-full flex-row justify-evenly gap-x-2 p-2"
      >
        <section id="JSON Editor" className="w-1/2">
          <Title order={3} className="p-20 text-center">
            JSON Editor Goes Here
          </Title>
          {/* JSON Editor Goes Here */}
        </section>
        <section id="FORM UI Section" className="w-1/2">
          <DemoFormThemeSelector />
          <BasicFormComponent />
        </section>
      </section>
    </div>
  );
}
