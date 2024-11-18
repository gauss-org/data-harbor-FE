"use client";

import { type ITheme, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  DefaultLight,
  DefaultDark,
  DefaultLightPanelless,
  DefaultDarkPanelless,
  SharpLight,
  SharpDark,
  SharpLightPanelless,
  SharpDarkPanelless,
  BorderlessLight,
  BorderlessDark,
  BorderlessLightPanelless,
  BorderlessDarkPanelless,
  FlatLight,
  FlatDark,
  FlatLightPanelless,
  FlatDarkPanelless,
  PlainLight,
  PlainDark,
  PlainLightPanelless,
  PlainDarkPanelless,
  DoubleBorderLight,
  DoubleBorderDark,
  DoubleBorderLightPanelless,
  DoubleBorderDarkPanelless,
  LayeredLight,
  LayeredDark,
  LayeredLightPanelless,
  LayeredDarkPanelless,
  SolidLight,
  SolidDark,
  SolidLightPanelless,
  SolidDarkPanelless,
  ThreeDimensionalLight,
  ThreeDimensionalDark,
  ThreeDimensionalLightPanelless,
  ThreeDimensionalDarkPanelless,
  ContrastLight,
  ContrastDark,
  ContrastLightPanelless,
  ContrastDarkPanelless,
} from "survey-core/themes";
import { DemoFormThemeSelector } from "./DemoFormThemeSelector";
import { useEffect, useMemo, useState } from "react";
import { Alert, Button } from "@mantine/core";
import { json } from "data/demo/DemoFormJSON";

const themeMap: Record<string, ITheme> = {
  DefaultLight,
  DefaultDark,
  DefaultLightPanelless,
  DefaultDarkPanelless,
  SharpLight,
  SharpDark,
  SharpLightPanelless,
  SharpDarkPanelless,
  BorderlessLight,
  BorderlessDark,
  BorderlessLightPanelless,
  BorderlessDarkPanelless,
  FlatLight,
  FlatDark,
  FlatLightPanelless,
  FlatDarkPanelless,
  PlainLight,
  PlainDark,
  PlainLightPanelless,
  PlainDarkPanelless,
  DoubleBorderLight,
  DoubleBorderDark,
  DoubleBorderLightPanelless,
  DoubleBorderDarkPanelless,
  LayeredLight,
  LayeredDark,
  LayeredLightPanelless,
  LayeredDarkPanelless,
  SolidLight,
  SolidDark,
  SolidLightPanelless,
  SolidDarkPanelless,
  ThreeDimensionalLight,
  ThreeDimensionalDark,
  ThreeDimensionalLightPanelless,
  ThreeDimensionalDarkPanelless,
  ContrastLight,
  ContrastDark,
  ContrastLightPanelless,
  ContrastDarkPanelless,
};

interface DemoFormContainerProps {
  inputSchema: string;
  setInputSchema: (inputSchema: string) => void;
  isValidSchema: boolean;
  setIsValidSchema: (isValidSchema: boolean) => void;
}

export default function DemoFormContainer({
  inputSchema,
  setInputSchema,
  isValidSchema,
  setIsValidSchema,
}: DemoFormContainerProps) {
  const [selectedTheme, setSelectedTheme] = useState("DefaultLight");

  const model = useMemo(() => {
    const newModel = new Model(inputSchema);
    newModel.applyTheme(themeMap[selectedTheme]!);
    return newModel;
  }, [inputSchema, selectedTheme]);

  useEffect(() => {
    model.applyTheme(themeMap[selectedTheme]!);
    if (model.jsonErrors) setIsValidSchema(false);
  }, [model, selectedTheme, setIsValidSchema]);

  return (
    <div className="h-auto">
      <DemoFormThemeSelector
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        key={selectedTheme}
      />

      <div className="flex flex-row gap-x-2 pb-4">
        <Button
          variant="filled"
          onClick={() => {
            setInputSchema(JSON.stringify(json, null, 2));
            setIsValidSchema(true);
          }}
        >
          Reset Form Schema
        </Button>
        <Button variant="filled" color="red" onClick={() => model.clear()}>
          Reset Form State
        </Button>
      </div>

      {!isValidSchema && (
        <Alert className="mb-4" variant="light" color="red" title="Error">
          {model.jsonErrors
            ? `Schema Error: The provided JSON is valid but does not match the
          expected schema.`
            : `Please provide a valid JSON string.`}
        </Alert>
      )}

      <Survey model={model} />
    </div>
  );
}
