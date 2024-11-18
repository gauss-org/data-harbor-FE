"use client";

import { JsonInput } from "@mantine/core";
import { useEffect, useState } from "react";

interface JSONEditorContainerProps {
  inputSchema: string;
  setInputSchema: (inputSchema: string) => void;
}

export const JSONEditorContainer = ({
  inputSchema,
  setInputSchema,
}: JSONEditorContainerProps) => {
  // state variable to track changes
  const [schemaKey, setSchemaKey] = useState(0);

  // Update the key when inputSchema changes
  useEffect(() => {
    setSchemaKey(prevKey => prevKey + 1);
  }, [inputSchema]);

  return (
    <div className="h-auto">
      <JsonInput
        key={schemaKey} 
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
