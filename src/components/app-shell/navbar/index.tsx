import { Box, Flex, Group, Image, TextInput, Title, UnstyledButton } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
    handleSearch?: (value: string) => void
}

export const Navbar = ({ handleSearch }: Props) => {
    const [value, setValue] = useState("")
    const { classes } = useStyles();

    return (
        <Flex bg="#333538" justify="space-between" px={30} align="center" h={60}>
            <Group>
                <Flex gap={10} align="center">
                    <Box mt={5}>
                        <Image w={80} h={80} src="/logo.png" alt="" />
                    </Box>
                    <Title c="white" fz={{ base: 18, md: 24, lg: 28 }}>
                        AMIN STORE
                    </Title>
                </Flex>
            </Group>
            {
                handleSearch && <Group w="40%" align="center">
                    <Flex w="100%" gap={10} align="center">
                        <TextInput className={classes.input} value={value} onChange={(event) => setValue(event.target.value)} />
                        <UnstyledButton onClick={() => handleSearch(value)}>
                            <FaSearch color="white" size={20} />
                        </UnstyledButton>
                    </Flex>
                </Group>
            }
            <Flex align="center" gap={20}>
                <Flex align="center" gap={15}>
                    <Title c="white" fw="normal" order={3}>Администратор</Title>
                    <Image w={40} src="/img/profile-img.svg" />
                </Flex>
            </Flex>
        </Flex>
    );
};


const useStyles = createStyles({
    input: {
        width: "100%",
        "& input": {
            width: "100%",
            fontSize: "18px",
            background: "rgba(255,255,255,0.8)"
        }
    },
});
