"use client";

import { isValidJSON } from "@/lib/JSON";
import { JsonInput } from "@mantine/core";
import { useEffect, useState } from "react";

interface JSONEditorContainerProps {
  inputSchema: string;
  setInputSchema: (inputSchema: string) => void;
  isValidSchema: { isValid: boolean; message: string };
  setIsValidSchema: (schema: { isValid: boolean; message: string }) => void;
}

export const JSONEditorContainer = ({
  inputSchema,
  setInputSchema,
  isValidSchema,
  setIsValidSchema,
}: JSONEditorContainerProps) => {
  const [localValue, setLocalValue] = useState(inputSchema);

  useEffect(() => {
    // update JSON Editor when inputSchema changes
    setLocalValue(inputSchema);
  }, [inputSchema]);

  const handleOnChange = (val: string) => {
    setLocalValue(val);
    if (isValidJSON(val)) {
      setIsValidSchema({ isValid: true, message: "" });
      setInputSchema(val);
    } else {
      setIsValidSchema({
        isValid: false,
        message: "Please provide a valid JSON string.",
      });
    }
  };

  return (
    <div className="h-auto">
      <JsonInput
        error={!isValidSchema}
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
        value={localValue}
        onChange={handleOnChange}
      />
    </div>
  );
};
