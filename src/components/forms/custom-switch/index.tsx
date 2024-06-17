import { ReactNode } from "react";
import { Switch } from "@mantine/core";
import { MantineColor, MantineSize } from "@mantine/styles";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
    string?: boolean;
    label: ReactNode;
    color?: MantineColor;
    size?: MantineSize;
    onChange: (value: string | boolean) => void;
    formData?: boolean;
};

export const CustomSwitch = ({
    string,
    label,
    color = "teal",
    size = "md",
    formData,
    onChange,
}: Props) => {
    return (
        <Switch
            c="white"
            checked={formData}
            onChange={(event) => {
                string
                    ? onChange(`${event.currentTarget.checked}`)
                    : onChange(event.currentTarget.checked);
            }}
            color={color}
            size={size}
            label={label}
            thumbIcon={
                formData ? (
                    <FaCheck size={12} color={"green"} />
                ) : (
                    <IoClose size={12} color={"red"} />
                )
            }
        />
    );
};
