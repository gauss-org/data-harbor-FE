import dynamic from "next/dynamic";
import { JSONEditorContainer } from "@/app/demo/_components/JSONEditor/JSONEditorContainer";
const DemoFormContainer = dynamic(
  () => import("@/app/demo/_components/DemoForm/DemoFormContainer"),
);

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section
        id="FORM-JSON-DEMO"
        className="flex w-full flex-row justify-evenly gap-x-2 p-2"
      >
        <section
          id="JSON Editor"
          className="w-1/3 rounded-md border-2 border-solid border-black bg-gray-200 p-6 shadow-md"
        >
          <JSONEditorContainer />
        </section>
        <section
          id="FORM UI Section"
          className="w-2/3 rounded-md border-2 border-solid border-black bg-gray-200 p-6 shadow-md"
        >
          <DemoFormContainer />
        </section>
      </section>
    </div>
  );
}
