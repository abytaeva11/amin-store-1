import { MouseEventHandler } from "react";
import { Group } from "@mantine/core";
import { CustomButton } from ".";
import { createStyles } from "@mantine/styles";

type Props = {
    labelCancel?: string;
    labelSubmit?: string;
    onClickCancel?: MouseEventHandler<HTMLButtonElement>;
    onClickSubmit?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export const ButtonGroup = ({
    labelCancel,
    labelSubmit,
    onClickCancel,
    onClickSubmit,
    type,
    disabled,
}: Props) => {
    const { classes } = useStyles();

    return (
        <Group style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <CustomButton
                label={
                    labelCancel ? labelCancel : "Отмена"
                }
                onClick={onClickCancel}
                className={classes.button}
            />
            <CustomButton
                className={classes.button}
                label={
                    labelSubmit ? labelSubmit : "Подвердить"
                }
                onClick={onClickSubmit}
                disabled={disabled}
                type={type}
            />
        </Group>
    );
};

const useStyles = createStyles((theme) => ({
    button: {
        minWidth: "200px",
        fontWeight: 500,
        fontSize: 14,
        transition: "300ms",
    },
}));
