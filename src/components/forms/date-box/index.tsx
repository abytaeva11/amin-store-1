import { Flex, Image, Paper, Text } from "@mantine/core";

const options: Intl.DateTimeFormatOptions | undefined = {
    day: "numeric",
    month: "long",
};

interface DateBoxProps {
    date: string | undefined;
    calendar?: boolean;
}

export const DateBox = ({ date, calendar = false }: DateBoxProps) => {
    return (
        <Paper
            variant="bordered"
            p={5}
            style={{
                border: "1px solid rgba(var(--primary-dark), 0.3)",
                borderRadius: "2px",
            }}
            display="flex"
            pos="absolute"
            top="-20px"
            h={40}
            left={calendar ? 40 : 24}
        >
            <Flex p={10} justify="center" align="center" gap={10}>
                <Text
                    variant="sm"
                    fz={calendar ? "sm" : "24px"}
                    fw={500}
                    c="primaryDark"
                >
                    {calendar
                        ? date && new Date(date).toLocaleString("ru", options)
                        : date}
                </Text>
                {calendar && (
                    <Image src="/icons/calendar.svg" />
                )}
            </Flex>
        </Paper>
    );
};
