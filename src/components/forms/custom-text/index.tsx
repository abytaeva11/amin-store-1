import { Box, Grid, Text, Title } from "@mantine/core";
import { SystemProp, SpacingValue, createStyles } from "@mantine/styles";

type Props = {
    label: React.ReactNode;
    value?: React.ReactNode;
    display?: boolean;
    my?: SystemProp<SpacingValue>;
    spanFirst?: number;
    spanTwo?: number;
};

export const CustomText = ({
    label,
    value,
    display,
    my = 10,
    spanFirst = 6,
    spanTwo = 6,
}: Props) => {
    const { classes } = useStyles();

    if (display) {
        return (
            <Grid py={10} align="center" my={my} className={classes.box}>
                <Grid.Col span={spanFirst} px={8} py={4}>
                    <Text fw={600}>{label}:</Text>
                </Grid.Col>
                <Grid.Col span={spanTwo} px={8} py={4}>
                    <Title fz={22} c="secondaryDark">
                        {value || "-"}
                    </Title>
                </Grid.Col>
            </Grid>
        );
    }

    return (
        <>
            {
                <Box className={classes.box} py={2}>
                    <Text fw={600}>{label}:</Text>
                    <Box>{value || "-"}</Box>
                </Box>
            }
        </>
    );
};

const useStyles = createStyles({
    box: {
        width: "99%",
        borderBottom: "1px solid #d5d3d3",
        fontSize: "13px",
        "& div": {
            wordWrap: "break-word",
            wordBreak: "break-word",
        },
    },
});
