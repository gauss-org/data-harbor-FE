"use client";

import { isValidJSON } from "@/lib/JSON";
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
  // state variable to track changes done via Reset Schema Button
  const [schemaKey, setSchemaKey] = useState(0);

  // update the key when Reset Schema Button is clicked
  useEffect(() => {
    setSchemaKey((prevKey) => prevKey + 1);
  }, [inputSchema]);

  const handleOnChange = (val: string) => {
    if (isValidJSON(val)) {
      setInputSchema(val);
    }
  };

  return (
    <div className="h-auto">
      <JsonInput
        key={schemaKey}
        withAsterisk
        variant="filled"
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
        onChange={handleOnChange}
      />
    </div>
  );
};
