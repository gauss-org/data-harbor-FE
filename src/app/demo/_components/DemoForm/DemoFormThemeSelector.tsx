import { Select } from "@mantine/core";
import { formThemes } from "data/FormThemes";

interface DemoFormThemeSelectorProps {
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
}

export const DemoFormThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
}: DemoFormThemeSelectorProps) => {
  return (
    <Select
      onChange={(value) => (value ? setSelectedTheme(value) : "DefaultLight")}
      className="py-4"
      label="Choose any theme of your choice"
      placeholder="Select Theme"
      data={formThemes}
      defaultValue={selectedTheme}
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
