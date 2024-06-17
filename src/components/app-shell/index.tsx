"use client"
import { ReactNode, useState } from "react";
import { AppShell, ScrollArea } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

type Props = {
    children: ReactNode;
    handleSearch?: (value: string) => void
};
const maxWidth = 280
const minWidth = 90

export const CustomAppShell = ({ children, handleSearch }: Props) => {
    const [open, setOpen] = useState<boolean>(true);
    const { classes } = useStyles();

    return (
        <ScrollArea.Autosize mah={"100dvh"}
            style={{ backgroundImage: "url('/img/registr-bg.png')" }}
            mx="auto" scrollbarSize={6}>
            <AppShell
                padding={20}
                className={classes.appShell}
                header={{ height: 60 }}
                navbar={{ width: maxWidth + 20, breakpoint: "sm" }}

            >
                <AppShell.Header>
                    <Navbar handleSearch={handleSearch} />
                </AppShell.Header>
                <AppShell.Navbar bg="#21252B" w={open ? maxWidth : minWidth} style={{ transition: "300ms" }}>
                    <Sidebar open={open} setOpen={setOpen} />
                </AppShell.Navbar>
                <AppShell.Main bg="rgba(33, 41, 54, 0.4)" pt={80} pr={20} pl={open ? maxWidth + 20 : minWidth + 20}>
                    {children}
                </AppShell.Main>
            </AppShell>
        </ScrollArea.Autosize>
    );
};

const useStyles = createStyles({
    appShell: {
        "& main": {
            width: "100%",
            transition: "all 0.3s ease",
        },
    },
});
