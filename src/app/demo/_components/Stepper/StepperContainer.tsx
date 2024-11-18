import { useState, useEffect } from "react";
import { Stepper } from "@mantine/core";

export const StepperContainer = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (active < 4) {
      timer = setTimeout(() => {
        setActive((prevActive) => prevActive + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="my-4 w-full px-2">
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="Enter Schema"
          description="Provide Your Form Schema"
          loading={active === 0}
        />
        <Stepper.Step
          label="Select Theme"
          description="Surf through our Form Themes"
          loading={active === 1}
        />
        <Stepper.Step
          label="Finalize Form"
          description="Finalize on the Form which works best for you"
          loading={active === 2}
        />
        <Stepper.Step
          label="Plug-in Infra"
          description="Add your backend to start receiving submissions"
          loading={active === 3}
        />
      </Stepper>
    </div>
  );
};
