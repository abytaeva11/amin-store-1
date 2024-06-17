import { ReactNode } from "react";
import { Chip } from "@mantine/core";
import { MantineNumberSize, MantineSize, createStyles } from "@mantine/styles";

type Props = {
    label: ReactNode;
    color?: string;
    styleColor?: string;
    size?: MantineSize;
    radius?: MantineNumberSize;
    variant?: "outline" | "filled";
    type?: "radio" | "checkbox";
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?(checked: boolean): void;
    wrapperProps?: Record<string, any>;
};

export const CustomChip = ({
    label,
    color = "cyan",
    styleColor,
    variant = "filled",
    radius,
    type,
    checked = true,
    defaultChecked,
    onChange,
    wrapperProps,
}: Props) => {
    const { classes } = useStyles({ color: styleColor });

    return (
        <Chip
            color={color}
            variant={variant}
            radius={radius}
            type={type}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            wrapperProps={wrapperProps}
            className={classes.chip}
        >
            {label || "-"}
        </Chip>
    );
};

const useStyles = createStyles((_theme, { color }: { color?: string }) => ({
    chip: {
        wordWrap: "break-word",
        wordBreak: "break-word",
        "& span": {
            display: "none",
        },
        "& label": {
            color: color && "#000",
            backgroundColor: `${color}!important`,
        },
        "& svg": {
            marginTop: 2,
        },
    },
}));
