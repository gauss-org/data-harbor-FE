"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { ContrastLight } from "survey-core/themes";
import { json } from "../../../../data/demo/DemoFormJSON";

export default function DemoFormComponent() {
  const model = new Model(json);
  model.applyTheme(ContrastLight);
  return <Survey model={model} />;
}
