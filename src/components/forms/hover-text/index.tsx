import { ReactNode } from "react";
import { Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import { createStyles } from "@mantine/styles";

type Props = {
    text: ReactNode;
    hoverText: ReactNode;
    scroll?: boolean;
    width?: number | string;
    height?: number | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const HoverText = ({
    width = 430,
    height = "30vh",
    scroll = true,
    text,
    hoverText,
    size = "sm",
}: Props) => {
    const { classes } = useStyles();

    return (
        <Group className={classes.hover}>
            <HoverCard width={width} shadow="md">
                <HoverCard.Target>
                    <Text
                        c="white"
                        size={size}
                        style={{
                            wordWrap: "break-word",
                            wordBreak: "break-word",
                        }}
                    >
                        {text}
                    </Text>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ zIndex: 1000 }}>
                    {scroll ? (
                        <ScrollArea
                            style={{
                                maxHeight: height,
                                overflowY: "auto",
                                whiteSpace: "pre-line",
                                fontSize: 13,
                            }}
                            scrollbarSize={4}
                        >
                            {hoverText}
                        </ScrollArea>
                    ) : (
                        hoverText
                    )}
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    );
};

const useStyles = createStyles({
    hover: {
        padding: 0,
        display: "flex",
        justifyContent: "flex-end",
    },
});
