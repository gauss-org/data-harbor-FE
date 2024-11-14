'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'
import { json } from '../../../../data/demo/basicformJSON';
  
export default function BasicFormComponent() {
  const model = new Model(json);
  return (
    <Survey model={model}/>
  );
}