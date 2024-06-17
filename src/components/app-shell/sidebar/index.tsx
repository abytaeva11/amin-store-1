import { Dispatch, SetStateAction } from "react";
import { Flex, Text, UnstyledButton } from "@mantine/core";
import { MenuItem } from "./menu-item";
import { IoAppsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useAppDispatch, useLocalStorage } from "src/hooks";
import { logOut } from "src/store";
import { useNavigate } from "react-router-dom";
import { menu } from "src/constants";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ open, setOpen }: Props) => {
    const dispatch = useAppDispatch();
    const { removeItem } = useLocalStorage<Profile>("profile");
    const navigate = useNavigate()

    const handleLogout = async () => {
        removeItem();
        dispatch({ type: logOut.type });
        navigate("/")
    };

    return (
        <Flex direction="column" align="center" w="100%" p="md" >
            <Flex style={{ cursor: "pointer" }} mb={20} justify="flex-end" w={open ? "100%" : 30} onClick={() => setOpen(!open)}>
                <IoAppsOutline style={{ transition: "350ms", transform: `rotateZ(${open ? "90deg" : "0deg"})` }} size={30} color="green" />
            </Flex>
            <Flex direction="column" w="100%" gap={10}>
                {
                    menu.map((item) =>
                        <MenuItem
                            path={item.path}
                            key={item.parent}
                            item={item.parent}
                            open={open}
                            setOpen={setOpen}
                        />)
                }
            </Flex>
            <UnstyledButton
                onClick={handleLogout}
                pos="absolute" bottom={20}>
                <Flex align="center" gap={10} >
                    <CiLogout size={25} color="white" />
                    {
                        open && <Text c="white" fz={20}>Выйти</Text>
                    }
                </Flex>
            </UnstyledButton>
        </Flex>
    );
};