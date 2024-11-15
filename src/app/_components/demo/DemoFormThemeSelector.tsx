import { Select } from "@mantine/core";
import { formThemes } from "data/FormThemes";

export const DemoFormThemeSelector = () => {
  return (
    <Select
      className="py-4"
      label="Choose any theme of your choice"
      placeholder="Select Theme"
      data={formThemes}
      defaultValue="DefaultLight"
      allowDeselect={true}
      nothingFoundMessage="Theme not found..."
      checkIconPosition="right"
      comboboxProps={{
        transitionProps: { transition: "pop", duration: 200 },
        shadow: "md",
      }}
      searchable
      clearable
    />
  );
};
