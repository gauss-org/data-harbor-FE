"use client";

import { JsonInput } from "@mantine/core";

export const JSONEditorContainer = () => {

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
      />
    </div>
  );
};
