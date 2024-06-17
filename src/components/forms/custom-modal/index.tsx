import { MouseEventHandler, ReactNode } from "react";
import { Modal } from "@mantine/core";
import { MantineNumberSize, SpacingValue, SystemProp } from "@mantine/styles";
import { ButtonGroup } from "src/components";

type Props = {
    title?: React.ReactNode;
    labelCancel?: string;
    labelSubmit?: string;
    open: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    handleClose: () => void;
    children?: ReactNode;
    size?: string | number;
    ml?: SystemProp<SpacingValue>;
    withCloseButton?: boolean;
    radius?: MantineNumberSize;
    button?: boolean;
    padding?: MantineNumberSize;
    titleCenter?: boolean;
};

export const CustomModal = ({
    title,
    titleCenter = false,
    labelCancel = "cancel",
    labelSubmit = "submit",
    open,
    onClick,
    children,
    size = "lg",
    ml,
    withCloseButton = false,
    handleClose,
    radius,
    button = true,
    padding,
}: Props) => {
    return (
        <Modal
            ml={ml}
            centered
            size={size}
            opened={open}
            onClose={handleClose}
            title={title}
            withCloseButton={withCloseButton}
            radius={radius}
            padding={padding}
            style={{
                "& .mantineModalTitle": {
                    margin: titleCenter ? "0 auto" : "0",
                },
                transition: "fade",
                transitionDuration: "500",
                transitionTimingFunction: "ease",
            }}
        >
            {children}
            {button && (
                <ButtonGroup
                    labelCancel={labelCancel}
                    labelSubmit={labelSubmit}
                    onClickCancel={handleClose}
                    onClickSubmit={onClick}
                />
            )}
        </Modal>
    );
};
