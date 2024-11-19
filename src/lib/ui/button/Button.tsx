import { Button, type ButtonProps } from "@mantine/core"
import classes from "./Button.module.css";

export const DH_Button = (props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) => {
    return <Button {...props} radius="xs" classNames={classes} autoContrast />
}