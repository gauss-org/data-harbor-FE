"use client";

import dynamic from "next/dynamic";
import { JSONEditorContainer } from "@/app/demo/_components/JSONEditor/JSONEditorContainer";
import { json } from "data/demo/DemoFormJSON";
import { useState } from "react";
const DemoFormContainer = dynamic(
  () => import("@/app/demo/_components/DemoForm/DemoFormContainer"),
);

export default function Survey() {
  const [inputSchema, setInputSchema] = useState(JSON.stringify(json, null, 2));
  const [isValidSchema, setIsValidSchema] = useState(true);

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
          <JSONEditorContainer
            inputSchema={inputSchema}
            setInputSchema={setInputSchema}
            isValidSchema={isValidSchema}
            setIsValidSchema={setIsValidSchema}
          />
        </section>
        <section
          id="FORM UI Section"
          className="w-2/3 rounded-md border-2 border-solid border-black bg-gray-200 p-6 shadow-md"
        >
          <DemoFormContainer
            isValidSchema={isValidSchema}
            inputSchema={inputSchema}
            setInputSchema={setInputSchema}
          />
        </section>
      </section>
    </div>
  );
}
