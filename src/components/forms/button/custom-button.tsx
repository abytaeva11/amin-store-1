import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { createStyles } from "@mantine/styles";

type Props = {
    label: string;
    fullWidth?: boolean;
    uppercase?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    style?: CSSProperties;
    mb?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    type?: "submit" | "button" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    to?: string;
    className?: string;
};

export const CustomButton: FC<Props> = ({
    label,
    leftIcon,
    rightIcon,
    fullWidth,
    size,
    style,
    className,
    mb,
    disabled,
    loading,
    type,
    onClick,
    to,
}) => {
    const { classes } = useStyles();

    if (to) {
        return (
            <Button
                bg="#212936"
                component={Link}
                leftSection={leftIcon}
                rightSection={rightIcon}
                fullWidth={fullWidth}
                size={size}
                style={style}
                disabled={disabled}
                loading={loading}
                type={type}
                to={to}
                mb={mb}
                className={className ? className : classes.button}
            >
                {label}
            </Button>
        );
    }

    return (
        <Button
            bg="#212936"
            leftSection={leftIcon}
            rightSection={rightIcon}
            fullWidth={fullWidth}
            size={size}
            style={style}
            disabled={disabled}
            loading={loading}
            type={type}
            mb={mb}
            onClick={onClick}
            className={className ? className : classes.button}
        >
            {label}
        </Button>
    );
};

const useStyles = createStyles((theme) => ({
    button: {
        minWidth: 140,
        fontWeight: 500,
        fontSize: 14,
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        "&:hover": {
            color: "white",
            backgroundColor: "white",
        },
    },
}));
