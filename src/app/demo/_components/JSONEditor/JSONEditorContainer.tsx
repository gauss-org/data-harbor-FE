"use client";

import { JsonInput } from "@mantine/core";
import { json } from "data/demo/DemoFormJSON";
import { useState } from "react";

export const JSONEditorContainer = () => {
  const [value, setValue] = useState(JSON.stringify(json, null, 2));

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
        defaultValue={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
};
