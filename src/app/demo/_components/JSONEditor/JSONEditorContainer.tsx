import { Button, Textarea } from "@mantine/core";

export const JSONEditorContainer = () => {
  return (
    <div className="h-auto">
      <Textarea
      className="pt-4"
        label="Your Custom Form Schema"
        placeholder="Textarea will autosize to fit the content"
        autosize
        minRows={4}
      />
      <Button variant="filled" className="my-4">Generate Form</Button>
    </div>
  );
};
