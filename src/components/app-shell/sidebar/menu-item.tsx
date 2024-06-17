import { Dispatch, SetStateAction } from "react";
import { Box, Flex, UnstyledButton } from "@mantine/core";
import { useAppAction, useAppSelector } from "src/hooks";
import { sidebarPath } from "src/store";
import { NavbarLink } from "./navbar-link";
import { useNavigate } from "react-router-dom";
import { FcFeedback } from "react-icons/fc";
import { GiBuyCard, GiDeliveryDrone } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { BsDeviceSsd } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

interface Props {
    item: string;
    open?: boolean;
    path: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

type iconsArrayType = {
    [key: string]: any
}

const icons: iconsArrayType = {
    "feedbacks": FcFeedback,
    "orders": GiBuyCard,
    "delivery": GiDeliveryDrone,
    "products": BsDeviceSsd,
    "computers": FaComputer,
}

export const MenuItem = (
    { item, open, path }: Props
) => {
    const active = useAppSelector((state) => state.sidebarStore.active);
    const { setActive } = useAppAction({ setActive: sidebarPath.addActive });
    const Icon = icons[path] || MdOutlineMessage
    const navigate = useNavigate()

    const handleClick = () => {
        setActive(item);
        navigate(`/admin/${path}`)
    };
    return (
        open ?
            <UnstyledButton
                bg={item === active ? "rgba(255,255,255, 0.1)" : "none"}
                style={{ transition: "300ms", borderRadius: "5px" }}
                py={13}
                px={10}
                w="100%"
                onClick={handleClick}>
                <Flex align="center">
                    <Box h={22}>
                        <Icon color="white" size={22} />
                    </Box>
                    <Box maw={190} fz={22} style={{ wordWrap: "break-word" }} c="white" ml="md">
                        {item}
                    </Box>
                </Flex>
            </UnstyledButton>
            :
            <NavbarLink
                onClick={handleClick}
                icon={Icon}
                label={item}
            />
    )
}