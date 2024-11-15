import dynamic from "next/dynamic";
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
        <section id="JSON Editor" className="w-1/4">
          <Title order={3} className="p-20 text-center">
            JSON Editor Goes Here
          </Title>
        </section>
        <section
          id="FORM UI Section"
          className="w-2/4 rounded-md border-2 border-solid border-black bg-gray-200 p-6 shadow-md"
        >
          <BasicFormComponent />
        </section>
      </section>
    </div>
  );
}
