"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { DefaultLight } from "survey-core/themes";
import { json } from "data/demo/DemoFormJSON";
import { DemoFormThemeSelector } from "./DemoFormThemeSelector";
import { useState } from "react";

export default function DemoFormComponent() {
  const [selectedTheme, setSelectedTheme] = useState("DefaultLight");
  const model = new Model(json);
  model.applyTheme(DefaultLight);

  console.log(selectedTheme);

  return (
    <>
      <DemoFormThemeSelector setSelectedTheme={setSelectedTheme} />
      <Survey model={model} />
    </>
  );
}
