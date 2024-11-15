"use client";

import { type ITheme, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultLight, DefaultDark, DefaultLightPanelless, DefaultDarkPanelless, SharpLight, SharpDark, SharpLightPanelless, SharpDarkPanelless, BorderlessLight, BorderlessDark, BorderlessLightPanelless, BorderlessDarkPanelless, FlatLight, FlatDark, FlatLightPanelless, FlatDarkPanelless, PlainLight, PlainDark, PlainLightPanelless, PlainDarkPanelless, DoubleBorderLight, DoubleBorderDark, DoubleBorderLightPanelless, DoubleBorderDarkPanelless, LayeredLight, LayeredDark, LayeredLightPanelless, LayeredDarkPanelless, SolidLight, SolidDark, SolidLightPanelless, SolidDarkPanelless, ThreeDimensionalLight, ThreeDimensionalDark, ThreeDimensionalLightPanelless, ThreeDimensionalDarkPanelless, ContrastLight, ContrastDark, ContrastLightPanelless, ContrastDarkPanelless } from "survey-core/themes";
import { json } from "data/demo/DemoFormJSON";
import { DemoFormThemeSelector } from "./DemoFormThemeSelector";
import { useEffect, useMemo, useState } from "react";

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
  ContrastDarkPanelless
};

export default function DemoFormComponent() {
  const [selectedTheme, setSelectedTheme] = useState("DefaultLight");
  
  // initialize the model only once
  const model = useMemo(() => {
    const newModel = new Model(json);
    newModel.applyTheme(themeMap.DefaultLight!);
    return newModel;
  }, []);

  useEffect(()=>{
    model.applyTheme(themeMap.selectedTheme!);
    model.render();
    console.log(selectedTheme);
  }, [model, selectedTheme]);

  return (
    <>
      <DemoFormThemeSelector setSelectedTheme={setSelectedTheme} key={selectedTheme} />
      <Survey model={model} />
    </>
  );
}