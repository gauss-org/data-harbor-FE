"use client";

import { isValidJSON } from "@/lib/JSON";
import { JsonInput } from "@mantine/core";

interface JSONEditorContainerProps {
  inputSchema: string;
  setInputSchema: (inputSchema: string) => void;
  isValidSchema: boolean;
  setIsValidSchema: (isValidSchema: boolean) => void;
}

export const JSONEditorContainer = ({
  inputSchema,
  setInputSchema,
  isValidSchema,
  setIsValidSchema
}: JSONEditorContainerProps) => {
  const handleOnChange = (val: string) => {
    if (isValidJSON(val)) {
      setIsValidSchema(true);
      setInputSchema(val);
    } else {
      setIsValidSchema(false);
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
        defaultValue={inputSchema}
        onChange={handleOnChange}
      />
    </div>
  );
};
