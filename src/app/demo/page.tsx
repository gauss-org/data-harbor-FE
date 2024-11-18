"use client";

import dynamic from "next/dynamic";
import { JSONEditorContainer } from "@/app/demo/_components/JSONEditor/JSONEditorContainer";
import { json } from "data/demo/DemoFormJSON";
import { useState } from "react";
import { Button, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { cn } from "@/lib";
import { StepperContainer } from "@/app/demo/_components/Stepper/StepperContainer";

const DemoFormContainer = dynamic(
  () => import("@/app/demo/_components/DemoForm/DemoFormContainer"),
);

export default function Survey() {
  const [inputSchema, setInputSchema] = useState(JSON.stringify(json, null, 2));
  const [isValidSchema, setIsValidSchema] = useState({
    isValid: true,
    message: "",
  });
  const [openedJSONEditor, handlersJSONEditor] = useDisclosure(true);
  const [openedFormUI, handlersFormUI] = useDisclosure(true);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <StepperContainer />
      <section
        id="FORM-JSON-DEMO"
        className="flex w-full flex-row justify-evenly gap-x-2 p-2"
      >
        <section
          id="JSON Editor"
          className={cn(
            openedJSONEditor || !openedFormUI ? "w-full p-6" : "w-auto p-2",
            "rounded-md border-2 border-solid border-black bg-gray-200 shadow-md",
          )}
        >
          <Button
            onClick={handlersJSONEditor.toggle}
            className={cn(!openedJSONEditor && "mt-6")}
          >
            {openedJSONEditor ? "<" : ">"}
          </Button>
          <Collapse in={openedJSONEditor}>
            <JSONEditorContainer
              inputSchema={inputSchema}
              setInputSchema={setInputSchema}
              isValidSchema={isValidSchema}
              setIsValidSchema={setIsValidSchema}
            />
          </Collapse>
        </section>
        <section
          id="FORM UI"
          className={cn(
            openedFormUI || !openedJSONEditor ? "w-full p-6" : "w-auto p-2",
            "rounded-md border-2 border-solid border-black bg-gray-200 shadow-md",
          )}
        >
          <Button
            onClick={handlersFormUI.toggle}
            className={cn(!openedFormUI && "mt-6")}
          >
            {openedFormUI ? ">" : "<"}
          </Button>
          <Collapse in={openedFormUI}>
            <DemoFormContainer
              isValidSchema={isValidSchema}
              setIsValidSchema={setIsValidSchema}
              inputSchema={inputSchema}
              setInputSchema={setInputSchema}
            />
          </Collapse>
        </section>
      </section>
    </div>
  );
}
