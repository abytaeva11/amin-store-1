import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
    ComboboxData,
    Input,
    MantineProvider,
    NumberInput,
    PasswordInput,
    Popover,
    Select,
    TextInput,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import InputMask from "react-input-mask";
import { PasswordBar } from "./password-bar";
import "dayjs/locale/ky";
import "dayjs/locale/ru";
import { createStyles } from "@mantine/styles";

const useStyles = createStyles(
    (theme, { floating }: { floating: boolean }) => ({
        root: {
            position: "relative",
        },
        label: {
            position: "absolute",
            zIndex: 2,
            top: 7,
            left: theme.spacing.sm,
            pointerEvents: "none",
            color: floating
                ? theme.colorScheme === "light"
                    ? theme.colors.dark[4]
                    : theme.white
                : theme.colorScheme === "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[5],
            transition:
                "transform 150ms ease, color 150ms ease, font-size 150ms ease",
            transform: floating
                ? `translate(-${theme.spacing.sm}px, -28px)`
                : "none",
            fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
            fontWeight: 600,
        },

        required: {
            transition: "opacity 150ms ease",
            opacity: floating ? 1 : 0.5,
        },

        input: {
            "&::placeholder": {
                transition: "color 150ms ease",
                color: !floating ? "transparent" : undefined,
            },
        },
    })
);

type Props = {
    type?: string;
    label?: string | null;
    onChange: (value: string) => void;
    error?: React.ReactNode;
    required?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    formData?: string | number | null;
    min?: number;
    max?: number;
    variant?: "filled" | "unstyled" | "default";
    bar?: boolean;
    rightSection?: React.ReactNode;
    minRows?: number;
    maxRows?: number;
    autosize?: boolean;
    mt?: string | number;
    description?: React.ReactNode;
};

type PropsSelect = {
    data: string[] | ComboboxData;
    placeholder: string;
    required?: boolean;
    onChange?: (value: EventTarget | string | null) => void;
    error?: React.ReactNode;
    formData?: string | number | null;
    value?: string;
};

type PropsInput = {
    formData?: string | number | null;
    onChange: (value: string) => void;
    mask: string | (string | RegExp)[];
    label?: string | null;
    required?: boolean;
    error?: React.ReactNode;
    rightSection?: React.ReactNode;
    disabled?: boolean;
};

export const CustomInputText: FC<Props> = ({
    type,
    label,
    required,
    onChange,
    error,
    disabled,
    max,
    min,
    variant,
    rightSection,
    formData,
}) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState<string | number | undefined>("");
    const { classes } = useStyles({
        floating: formData ? true : focused,
    });

    return (
        <TextInput
            type={type}
            placeholder={label ? label : ""}
            required={required}
            classNames={classes}
            maxLength={max}
            variant={variant}
            minLength={min}
            value={formData || value}
            error={error}
            disabled={disabled}
            rightSection={rightSection}
            onChange={(event) => {
                setValue(event.currentTarget.value);
                onChange(event.currentTarget.value);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete={"nope"}
        />
    );
};

export const CustomInputNumber: FC<Props> = ({
    label,
    required,
    onChange,
    error,
    disabled,
    min,
    max,
    formData,
    description,
    mt = "md",
    rightSection,
}) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState<string | number | undefined>(
        formData ? Number(formData) : undefined
    );
    const { classes } = useStyles({
        floating: formData ? true : focused,
    });

    useEffect(() => {
        formData && setValue(Number(formData));
    }, [formData]);

    return (
        <MantineProvider
            theme={{
                components: {
                    InputWrapper: {
                        defaultProps: {
                            inputWrapperOrder: [
                                "label",
                                "error",
                                "input",
                                "description",
                            ],
                        },
                    },
                },
            }}
        >
            <NumberInput
                placeholder={label || ""}
                required={required}
                classNames={classes}
                value={value}
                error={error}
                description={description}
                minLength={min}
                maxLength={max}
                disabled={disabled}
                rightSection={rightSection}
                hideControls
                onChange={(event) => {
                    setValue(event);
                    onChange(event as unknown as string);
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt={mt}
                autoComplete="nope"
            />
        </MantineProvider>
    );
};

export const CustomInputPassword: FC<Props> = ({
    label,
    required,
    onChange,
    error,
    disabled,
    variant,
    bar,
}) => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);
    const [popoverOpened, setPopoverOpened] = useState(false);
    const { classes } = useStyles({
        floating: value.trim().length !== 0 || focused,
    });

    return (
        <Popover opened={popoverOpened} position="bottom" width="target">
            <Popover.Target>
                <div
                    onFocusCapture={() => setPopoverOpened(true)}
                    onBlurCapture={() => setPopoverOpened(false)}
                >
                    <PasswordInput
                        placeholder={label || ""}
                        required={required}
                        classNames={classes}
                        value={value}
                        error={error}
                        disabled={disabled}
                        variant={variant}
                        onChange={(event) => {
                            setValue(event.currentTarget.value);
                            onChange(event.currentTarget.value);
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        mt="md"
                        autoComplete="nope"
                    />
                </div>
            </Popover.Target>
            {bar && (
                <Popover.Dropdown>
                    <PasswordBar value={value} />
                </Popover.Dropdown>
            )}
        </Popover>
    );
};

export const CustomSelect: FC<PropsSelect> = ({
    data,
    value,
    formData,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const { classes } = useStyles({
        floating: formData ? true : focused,
    });

    return (
        <Select
            {...props}
            value={value}
            data={data}
            classNames={classes}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete="nope"
            w="100%"
        />
    );
};

export const CustomInputPhone: FC<PropsInput> = ({
    formData,
    onChange,
    mask,
    label,
    required,
    rightSection,
    disabled,
    error,
}) => {
    const id = useId();

    const [focused, setFocused] = useState(false);
    const { classes } = useStyles({
        floating: formData ? true : focused,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Ваш код обработки события
        const value = event.target.value; // Получите значение из события
        onChange(value); // Вызовите вашу функцию onChange с полученным значением
    };

    return (
        <Input.Wrapper
            classNames={classes}
            error={error}
            id={id}
            label={label}
            required={required}
        >
            <Input
                component={InputMask}
                mask={mask}
                id={id}
                value={formData || ""}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rightSection={rightSection}
                disabled={disabled}
                mt={"md"}
            />
        </Input.Wrapper>
    );
};
