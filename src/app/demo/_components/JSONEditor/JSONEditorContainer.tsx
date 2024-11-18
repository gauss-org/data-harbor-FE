"use client";

import { JsonInput } from "@mantine/core";

interface JSONEditorContainerProps {
  inputSchema: string;
  setInputSchema: (inputSchema: string) => void;
}

export const JSONEditorContainer = ({
  inputSchema,
  setInputSchema,
}: JSONEditorContainerProps) => {
  return (
    <div className="h-auto">
      <JsonInput
        className="pt-4"
        label="Your Custom Form Schema"
        description="Schema Editor for Dynamic Form Generation"
        placeholder="Textarea will autosize to fit the content..."
        resize="vertical"
        autosize
        minRows={4}
        formatOnBlur
        validationError="Invalid JSON"
        defaultValue={inputSchema}
        onChange={(val) => setInputSchema(val)}
      />
    </div>
  );
};
