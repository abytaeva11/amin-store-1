import { useState } from "react";
import { FloatingPosition, Menu, UnstyledButton, Text } from "@mantine/core";
import { MenuItem } from "./menu-item";
import { createStyles } from "@mantine/styles";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type Props = {
    label?: string | null;
    item: MenuItemType[];
    position?: FloatingPosition;
    className?: string;
};

export const MenuDropDown = ({
    label,
    item,
    position = "bottom",
    className,
}: Props) => {
    const { classes, cx } = useStyles();
    const [open, setOpen] = useState<boolean>();
    const Icon = open ? FaChevronDown : FaChevronRight;

    return (
        <Menu
            shadow="md"
            withArrow
            openDelay={110}
            onChange={(opened) => setOpen(opened)}
            position={position}
        >
            <Menu.Target>
                <UnstyledButton
                    w="100%"
                    className={cx(classes.menuButton, className)}
                >
                    <Text mr={5} c="primaryDark">{label}</Text>
                    <Icon size={15} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown
                w={230}
                py={24}
                px={16}
                bg="primaryDark"
                style={{ border: "none" }}
                className={classes.menuContent}
            >
                {item?.map((item) => <MenuItem key={item?.title} item={item} />)}
            </Menu.Dropdown>
        </Menu>
    );
};

const useStyles = createStyles({
    menuButton: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "& div": {
            fontSize: 14,
        },
    },
    menuContent: {
        "& a": {
            padding: "6px 7px",
        },
    },
});
